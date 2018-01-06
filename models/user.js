import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import UserSchema from './schemas/user';

class User {
  static encryptPassword(password, next) {
    if (this.isNew || this.isModified('password')) {
      bcrypt.genSalt(10, (saltError, salt) => {
        if (saltError) return next(saltError);

        bcrypt.hash(this.password, salt, (hashError, hash) => {
          if (hashError) return next(hashError);

          this.password = hash;
          next();
        });
      });
    }
  }

  static comparePassword(passwordParam, callback) {
    bcrypt.compare(passwordParam, this.password, (error, isMatch) => {
      if (error) return callback(error);

      callback(null, isMatch);
    });
  }
}

const schema = UserSchema.init();

schema.loadClass(User);

export default mongoose.model('User', schema);
