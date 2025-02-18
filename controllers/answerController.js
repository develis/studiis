const answerService = require('../services/answerService');

class AnswerController {
  async createAnswer(req, res) {
    try {
      const answer = await answerService.createAnswer(req.body);
      res.status(201).json(answer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAnswerById(req, res) {
    try {
      const answer = await answerService.getAnswerById(req.params.id);
      if (!answer) return res.status(404).json({ error: 'Answer not found' });
      res.json(answer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateAnswer(req, res) {
    try {
      const answer = await answerService.updateAnswer(req.params.id, req.body);
      if (!answer) return res.status(404).json({ error: 'Answer not found' });
      res.json(answer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteAnswer(req, res) {
    try {
      const answer = await answerService.deleteAnswer(req.params.id);
      if (!answer) return res.status(404).json({ error: 'Answer not found' });
      res.json({ message: 'Answer deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllAnswers(req, res) {
    try {
      const answers = await answerService.getAllAnswers();
      res.json(answers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AnswerController();