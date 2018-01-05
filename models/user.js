import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

class User {
  static encryptPassword(password, next) {
    if (this.isNew || this.isModified('password')) {
      bcrypt.genSalt(10, (error, salt) => {
        if (error) return next(error);

        bcrypt.hash(user.password, salt, (error, hash) => {
          if (error) return next(error);

          this.password = hash;
          next();
        });
      });
    }
  }

  static comparePassword(password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) return callback(err);

      callback(null, isMatch);
    });
  }

  static validateEmail(email) {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailFormat.test(email);
  }
}

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
    validate: [User.validateEmail, 'Please fill a valid email address'],
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

schema.loadClass(User);

export default mongoose.model('User', schema);
