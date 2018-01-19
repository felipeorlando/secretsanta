import mongoose from 'mongoose';
import async from 'async';
import _ from 'underscore';
import PersonSchema from './schemas/person';

let allPersons = [];

class Person extends mongoose.Model {
  static async matchAll() {
    const persons = await Person.getAll();
    const resetedPersons = await Person.resetAll(persons);
    const matcheds = await Person.match(resetedPersons);


    console.log('________________________________________________ done!');
    // async.waterfall([
    //   (done) => Person.getAll(done),
    //   (persons, done) => Person.resetAll(persons, done),
    //   (persons, done) => {
    //     console.log(persons);
    //   },
    // ], (done) => {
    //   console.log('done!');
    // });
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
      const newPersons = persons;

      persons.map((person, index) => {
        const friend = newPersons.filter((candidate) => {
          return candidate.isMatched === false && candidate._id !== person._id;
        })[0];

        console.log(friend);

        // console.log(friend);
        console.log('-----------------');

        // newPersons[index].matchedPerson = friend._id;
      });
  
      resolve(newPersons);
    });
  }
}

export default mongoose.model(Person, PersonSchema.init(), 'persons');
