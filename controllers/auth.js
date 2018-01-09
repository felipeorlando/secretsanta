import passport from 'passport';
import User from '../models/user';

class AuthController {
  login(req, res, next) {
    passport.authenticate('local', { session: false }, (error, user, message) => {
      if (error) return res.status(422).json({ error: message });

      user.token = User.generateJWT(user);

      return res.status(200).json({ user: User.toAuthJSON(user) });
    })(req, res, next);
  }
}

export default AuthController;
