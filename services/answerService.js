const Answer = require('../models/Answer');

class AnswerService {
  async createAnswer(data) {
    const answer = new Answer(data);
    return await answer.save();
  }

  async getAnswerById(id) {
    return await Answer.findById(id);
  }

  async updateAnswer(id, data) {
    return await Answer.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteAnswer(id) {
    return await Answer.findByIdAndDelete(id);
  }

  async getAllAnswers() {
    return await Answer.find();
  }
}

module.exports = new AnswerService();