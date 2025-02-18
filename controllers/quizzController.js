const quizzService = require('../services/quizzService');
const ErrorWrapper = require('../errors/ErrorWrapper');

class QuizzController {
  async createQuizz(req, res) {
    try {
      const quizz = await quizzService.createQuizz(req.body);
      res.status(201).json(quizz);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async getQuizzById(req, res) {
    try {
      const quizz = await quizzService.getQuizzById(req.params.id);
      if (!quizz) return res.status(404).json(new ErrorWrapper(404, 'Quizz not found'));
      res.json(quizz);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async updateQuizz(req, res) {
    try {
      const quizz = await quizzService.updateQuizz(req.params.id, req.body);
      if (!quizz) return res.status(404).json(new ErrorWrapper(404, 'Quizz not found'));
      res.json(quizz);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async deleteQuizz(req, res) {
    try {
      const quizz = await quizzService.deleteQuizz(req.params.id);
      if (!quizz) return res.status(404).json(new ErrorWrapper(404, 'Quizz not found'));
      res.json({ message: 'Quizz deleted successfully' });
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async getAllQuizzes(req, res) {
    try {
      const quizzes = await quizzService.getAllQuizzes();
      res.json(quizzes);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }
}

module.exports = new QuizzController();