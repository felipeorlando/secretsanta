import mongoose from 'mongoose';
import random from 'mongoose-simple-random';
import EmailValidator from '../validators/email';

class Schema {
  static init() {
    const schema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: [EmailValidator.format, 'Please fill a valid email address'],
      },
      matchedPerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        default: null,
      },
      isMatched: {
        type: Boolean,
        default: false,
      },
    }, { timestamps: true });

    schema.plugin(random);

    return schema;
  }
}

export default Schema;
