const Question = require('../models/Question');

class QuestionService {
  async createQuestion(data) {
    const question = new Question(data);
    return await question.save();
  }

  async getQuestionById(id) {
    return await Question.findById(id);
  }

  async updateQuestion(id, data) {
    return await Question.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteQuestion(id) {
    return await Question.findByIdAndDelete(id);
  }

  async getAllQuestions() {
    return await Question.find();
  }
}

module.exports = new QuestionService();