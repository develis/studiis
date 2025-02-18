const questionService = require('../services/questionService');
const ErrorWrapper = require('../errors/ErrorWrapper');

class QuestionController {
  async createQuestion(req, res) {
    try {
      const question = await questionService.createQuestion(req.body);
      res.status(201).json(question);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async getQuestionById(req, res) {
    try {
      const question = await questionService.getQuestionById(req.params.id);
      if (!question) return res.status(404).json(new ErrorWrapper(404, 'Question not found'));
      res.json(question);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async updateQuestion(req, res) {
    try {
      const question = await questionService.updateQuestion(req.params.id, req.body);
      if (!question) return res.status(404).json(new ErrorWrapper(404, 'Question not found'));
      res.json(question);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async deleteQuestion(req, res) {
    try {
      const question = await questionService.deleteQuestion(req.params.id);
      if (!question) return res.status(404).json(new ErrorWrapper(404, 'Question not found'));
      res.json({ message: 'Question deleted successfully' });
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async getAllQuestions(req, res) {
    try {
      const questions = await questionService.getAllQuestions();
      res.json(questions);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }
}

module.exports = new QuestionController();