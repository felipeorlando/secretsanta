import User from '../models/user';

class UserController {
  index(req, res) {
    User.find({}, (error, users) => {
      if (error) res.status(404).json({ error });

      res.status(200).json({ users });
    });
  }

  create(req, res) {
    const params = req.body.user;

    User.create(params, (error, user) => {
      if (error) return res.status(200).json({ error });

      res.status(200).json({ user });
    });
  }

  show(req, res) {
    User.findById(req.params.id, (error, user) => {
      if (error) res.status(404).json({ error });

      res.status(200).json({ user });
    });
  }

  update(req, res) {
    const params = req.body.user;
    const userId = req.params.id;

    if (typeof params.password !== 'undefined') {
      const password = User.setPassword(params.password);
      req.body.user.password = password;
    }

    User.findByIdAndUpdate(userId, { $set: params }, { new: true }, (error, user) => {
      if (error) return res.status(200).json({ error });

      res.status(200).json({ user });
    });
  }

  delete(req, res) {
    User.findOneAndRemove(req.params.id, (error, user) => {
      if (error) res.status(404).json({ error });

      res.status(200).json({
        message: 'User was deleted',
        userId: user._id,
      });
    });
  }
}

export default UserController;
