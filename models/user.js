import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import UserSchema from './schemas/user';
import configs from '../configs';

class User extends mongoose.Model {
  encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }

  static validatePassword(passwordParam, userPassword) {
    return bcrypt.compareSync(passwordParam, userPassword);
  }

  static generateJWT(user) {
    const expire = this.expireToken();

    return jwt.sign({
      id: user._id,
      username: user.username,
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
      token: User.generateJWT(user),
    };
  }

  save(params, next) {
    this.password = this.encryptPassword(this.password);

    super.save(params, next);
  }
}

export default mongoose.model(User, UserSchema.init());
