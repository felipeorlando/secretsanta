import mongoose from 'mongoose';
import PersonSchema from './schemas/person';

class Person extends mongoose.Model {
  static async matchAll() {
    const persons = await Person.getAll();
    const resetedPersons = await Person.resetAll(persons);
    const matcheds = await Person.match(resetedPersons);

    matcheds.map((person) => {
      // console.log(`${person._id} - ${person.matchedPerson}`);
    });
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
      const candidates = persons;
      const candidatesSize = candidates.length;

      persons.map((person) => {
        for (let i = 0; i < candidatesSize; i++) {
          if (candidates[i]._id !== person._id && candidates[i].matchedPerson !== person._id && candidates[i].isMatched === false) {
            candidates[i].isMatched = true;
            person.matchedPerson = candidates[i]._id;
            console.log(`${person.name} - ${candidates[i].name}`);
            break;
          }
        }
      });

      resolve(persons);
    });
  }

  static findFriend(person) {
    //
  }
}

export default mongoose.model(Person, PersonSchema.init(), 'persons');
