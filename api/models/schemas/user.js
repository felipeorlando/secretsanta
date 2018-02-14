import mongoose from 'mongoose';
import User from '../user';
import EmailValidator from '../validators/email';

class Schema {
  static init() {
    const schema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: [EmailValidator.format, 'Please fill a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
    }, { timestamps: true });

    schema.pre('findOneAndUpdate', function (next) {
      const { password } = this.getUpdate().$set;

      if (password && password !== null) {
        const newPassword = User.setPassword(password);

        this.getUpdate().$set.password = newPassword;
      } else {
        delete this.getUpdate().$set.password;
      }

      next();
    });

    return schema;
  }
}

export default Schema;
