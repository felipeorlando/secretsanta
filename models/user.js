import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import UserSchema from './schemas/user';

class User extends mongoose.Model {
  encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }

  static comparePassword(passwordParam, callback) {
    bcrypt.compare(passwordParam, this.password, (error, isMatch) => {
      if (error) return callback(error);

      callback(null, isMatch);
    });
  }

  static generateJWT() {
    let expireDate = new Date();
    const oneWeekFromNow = expireDate.getDate() + 7;

    expireDate.setDate(oneWeekFromNow);

    return expireDate;
  }

  save(params, next) {
    this.password = this.encryptPassword(this.password);

    super.save(params, next);
  }
}

export default mongoose.model(User, UserSchema.init());
