import mongoose from 'mongoose';
import fs from 'fs';
import Handlebars from 'handlebars';
import PersonSchema from './schemas/person';
import Shuffle from '../lib/shuffle';
import Mailer from '../lib/mailer';

class Person extends mongoose.Model {
  static async matchAll() {
    const persons = await Person.getAll();
    const resetedPersons = await Person.resetAll(persons);
    const matcheds = await Person.match(resetedPersons);

    const updates = matcheds.map((person) => {
      const query = {
        _id: person._id,
      };

      const update = {
        isMatched: true,
        friend: person.friend,
      };

      return Person.update(query, update);
    });

    return Promise.all(updates);
  }

  static getAll() {
    return Person.find().exec();
  }

  static resetAll(persons) {
    return new Promise((resolve) => {
      persons.map((person) => {
        person.isMatched = false;
        person.friend = null;
      });

      resolve(persons);
    });
  }

  static match(persons) {
    return new Promise((resolve) => {
      const candidates = Shuffle.now(persons);
      const candidatesSize = candidates.length;

      persons.map((person) => {
        for (let i = 0; i < candidatesSize; i++) {
          const candidate = candidates[i];

          if (Person.checkConditionals(person, candidate)) {
            const friend = candidates[i];

            candidates[i].isMatched = true;
            person.friend = friend._id;

            Person.sendMail(person, friend);

            break;
          }
        }
      });

      resolve(persons);
    });
  }

  static sendMail(person, friend) {
    const appDir = fs.realpathSync('.');
    const templateFile = `${appDir}/public/templates/matcher.html`;

    const source = fs.readFileSync(templateFile, 'utf8');
    const template = Handlebars.compile(source);

    const result = template({
      name: person.name,
      friend: friend.name,
    });

    Mailer.send({
      to: person.email,
      subject: 'Seu amigo secreto é...',
      html: result,
    });
  }

  static checkConditionals(person, candidate) {
    return Person.differentIDs(person, candidate) &&
      Person.friendNotMatched(person, candidate) &&
      Person.noPanelinha(person, candidate);
  }

  static differentIDs(person, candidate) {
    return candidate._id !== person._id;
  }

  static friendNotMatched(person, candidate) {
    return candidate.isMatched === false;
  }

  static noPanelinha(person, candidate) {
    return candidate.friend !== person._id;
  }
}

export default mongoose.model(Person, PersonSchema.init(), 'persons');
