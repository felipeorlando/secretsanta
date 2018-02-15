import passport from 'passport';
import jwt from 'jsonwebtoken';
import configs from '../configs/index';
import User from '../models/user';

class AuthController {
  login(req, res, next) {
    passport.authenticate('local', { session: false }, (error, user, message) => {
      if (error) return res.status(422).json({ error: message });

      user.token = User.generateJWT(user);

      return res.status(200).json({ user: User.toAuthJSON(user) });
    })(req, res, next);
  }

  check(req, res, next) {
    const { token } = req.body.user;

    try {
      const jwtVerify = jwt.verify(token, configs.app.jwtSecret);
    } catch (error) {
      return res.status(200).json({ user: false });
    }

    return res
      .status(200)
      .json({ user: true });
  }
}

export default AuthController;
