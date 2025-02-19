const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const ErrorWrapper = require('../errors/ErrorWrapper');

class AuthService {
  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ErrorWrapper(400, 'Invalid email or password.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ErrorWrapper(400, 'Invalid email or password.');
    }

    return this.generateToken(user._id);
  }

  async register(userData) {
    const user = new User(userData);
    return await user.save();
  }

  generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }
}

module.exports = new AuthService();