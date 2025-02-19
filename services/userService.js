const User = require('../models/User');

class UserService {
  async getUserById(id) {
    const user = await User.findById(id);
    return this._omitPassword(user);
  }

  async updateUser(id, data) {
    const user = await User.findByIdAndUpdate(id, data, { new: true });
    return this._omitPassword(user);
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }

  async getAllUsers() {
    const users = await User.find();
    return users.map(user => this._omitPassword(user));
  }

  _omitPassword(user) {
    if (!user) return null;
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  }
}

module.exports = new UserService();