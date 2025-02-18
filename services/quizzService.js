const Quizz = require('../models/Quizz');

class QuizzService {
  async createQuizz(data) {
    const quizz = new Quizz(data);
    return await quizz.save();
  }

  async getQuizzById(id) {
    return await Quizz.findById(id);
  }

  async updateQuizz(id, data) {
    return await Quizz.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteQuizz(id) {
    return await Quizz.findByIdAndDelete(id);
  }

  async getAllQuizzes() {
    return await Quizz.find();
  }
}

module.exports = new QuizzService();