import mongoose from 'mongoose';
import PersonSchema from './schemas/person';

class Person extends mongoose.Model {
  static turnsMatched(person) {
    const query = {
      isMatched: false,
      _id: { $nin: [person._id, person.matchedPerson] },
    };

    const change = { $set: { isMatched: true } };

    return Person.findOneAndUpdate(query, change).exec();
  }

  static createRelation(person, friend) {
    const query = { _id: person._id };
    const change = { $set: { matchedPerson: friend } };

    return Person.findOneAndUpdate(query, change).exec();
  }

  static dismatchAll() {
    const change = {
      isMatched: false,
      matchedPerson: null,
    };
    
    return Person.findOneAndUpdate({}, change).exec();
  }

  static match(persons, callback) {
    const personsMap = persons.map(async (person) => {
      await Promise.all([
        Person.turnsMatched(person),
      ]).then(async (results) => {
        const friend = results[0];

        await Person.createRelation(person, friend);
      });
    });

    return Promise.all(personsMap).then(callback);
  }
}

export default mongoose.model(Person, PersonSchema.init(), 'persons');
