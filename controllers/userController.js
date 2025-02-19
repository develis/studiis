const userService = require('../services/userService');
const ErrorWrapper = require('../errors/ErrorWrapper');

class UserController {
  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) return res.status(404).json(new ErrorWrapper(404, 'User not found'));
      res.json(user);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user) return res.status(404).json(new ErrorWrapper(404, 'User not found'));
      res.json(user);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userService.deleteUser(req.params.id);
      if (!user) return res.status(404).json(new ErrorWrapper(404, 'User not found'));
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }
}

module.exports = new UserController();