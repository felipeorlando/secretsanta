import mongoose from 'mongoose';
import EmailValidator from '../validators/email';

class Schema {
  static init() {
    return new mongoose.Schema({
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
      password: {
        type: String,
        required: true,
      },
      admin: {
        type: Boolean,
        default: false,
      },
      created: {
        type: Date,
        default: Date.now,
      },
    });
  }
}

export default Schema;
