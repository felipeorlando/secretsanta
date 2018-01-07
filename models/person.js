import mongoose from 'mongoose';
import PersonSchema from './schemas/person';

class Person extends mongoose.Model {}

export default mongoose.model(Person, PersonSchema.init());
