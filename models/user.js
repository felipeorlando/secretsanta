import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import UserSchema from './schemas/user';

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
}

const schema = UserSchema.init();

schema.loadClass(User);

export default mongoose.model('User', schema);
