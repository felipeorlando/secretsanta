import passport from 'passport';
import { Strategy } from 'passport-local';
import User from '../models/user';

class Passport {
  init() {
    passport.use(new Strategy({
      usernameField: 'user[email]',
      passwordField: 'user[password]',
    }, (email, password, callback) => {
      User.findByIdAndRemove({ email }).then((user) => {
        if (!user || !user.validatePassword(password)) {
          return callback(null, false);
        }

        return callback(null, user);
      }).catch(callback);
    }));
  }
}

export default Passport;
