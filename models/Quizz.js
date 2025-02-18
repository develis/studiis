const mongoose = require('mongoose');
const Question = require('./Question');

const quizzSchema = new mongoose.Schema({
  questionsCount: { type: Number, required: true },
  questions: { type: [Question.schema], required: true },
  subjects: { type: [String], required: true },
});

module.exports = mongoose.model('Quizz', quizzSchema);