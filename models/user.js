import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'express-jwt';
import UserSchema from './schemas/user';
import configs from '../configs';

class User extends mongoose.Model {
  encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }

  static validatePassword(passwordParam) {
    const encryptedPassword = this.encryptPassword(passwordParam);

    bcrypt.compare(encryptedPassword, this.password, (error, isMatch) => {
      if (error) return false;

      return isMatch;
    });
  }

  static generateJWT() {
    const expire = this.expireToken();

    return jwt.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(expire.getTime() / 1000),
    }, configs.app.jwtSecret);
  }

  static expireToken() {
    let expireDate = new Date();
    const oneWeekFromNow = expireDate.getDate() + 7;

    expireDate.setDate(oneWeekFromNow);

    return expireDate;
  }

  static toAuthJSON(user) {
    return {
      email: user.email,
      token: user.generateJWT(),
    };
  }

  save(params, next) {
    this.password = this.encryptPassword(this.password);

    super.save(params, next);
  }
}

export default mongoose.model(User, UserSchema.init());
