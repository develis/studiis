const authService = require('../services/authService');
const ErrorWrapper = require('../errors/ErrorWrapper');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async register(req, res) {
    try {
      const { email, password, username, firstName, surname } = req.body;
      const user = await authService.register({ email, password, username, firstName, surname });
      const token = authService.generateToken(user._id);
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }
}

module.exports = new AuthController();