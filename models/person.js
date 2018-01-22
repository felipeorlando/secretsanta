import mongoose from 'mongoose';
import async from 'async';
import PersonSchema from './schemas/person';
import Shuffle from '../lib/shuffle';

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
        matchedPerson: person.matchedPerson,
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
        person.matchedPerson = null;
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
            candidates[i].isMatched = true;
            person.matchedPerson = candidates[i]._id;
            break;
          }
        }
      });

      resolve(persons);
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
    return candidate.matchedPerson !== person._id;
  }
}

export default mongoose.model(Person, PersonSchema.init(), 'persons');
