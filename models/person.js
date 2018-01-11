import mongoose from 'mongoose';
import PersonSchema from './schemas/person';

class Person extends mongoose.Model {
  static getFriend(person) {
    const query = {
      isMatched: false,
      _id: { $nin: [person._id, person.matchedPerson] },
    };

    return new Promise((resolve) => {
      Person.findOneRandom(query, {}, {}, (error, friend) => {
        resolve(friend);
      });
    });
  }

  static turnsMatched(friend) {
    const query = { _id: friend._id };
    const change = { $set: { isMatched: true } };

    return new Promise((resolve) => {
      Person.findOneAndUpdate(query, change, (error, friendUpdated) => {
        resolve(friendUpdated);
      });
    });
  }

  static createRelation(person, friend) {
    const query = { _id: person._id };
    const change = { $set: { matchedPerson: friend } };

    // console.log(`3 person: ${person.name} - friend: ${friend.name}`);

    return Person.findOneAndUpdate(query, change).exec();
  }

  static dismatchAll() {
    const change = {
      isMatched: false,
      matchedPerson: null,
    };

    return Person.update({}, change, { multi: true }).exec();
  }

  static match(persons, callback) {
    const personsMap = persons.map(async (person) => {
      let friend = await Person.getFriend(person);

      // console.log(`1 person: ${person.name} - friend: ${friend.name}`);
      friend = await Person.turnsMatched(friend);
      console.log(`2 person: ${person.name}(${person.isMatched}) - friend: ${friend.name}(${friend.isMatched})`);
      // console.log(`2 person: ${person.name} - friend: ${friend.name}`);

      // console.log(friend.isMatched);

      await Person.createRelation(person, friend);
    });

    return Promise.all(personsMap).then(callback);
  }
}

export default mongoose.model(Person, PersonSchema.init(), 'persons');
