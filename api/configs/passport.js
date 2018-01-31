import passport from 'passport';
import Strategy from 'passport-local';
import User from '../models/user';

class Passport {
  static init() {
    passport.use(new Strategy({
      usernameField: 'user[email]',
      passwordField: 'user[password]',
    }, (email, password, callback) => {
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return callback(true, false, 'User param not found');
          }

          if (!User.validatePassword(password, user.password)) {
            return callback(true, false, 'Wrong password');
          }

          return callback(null, user);
        })
        .catch(callback);
    }));
  }
}

export default Passport;
