const mongoose = require('mongoose');
const Question = require('./Question');

const quizzSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: { type: [Question.schema], required: true },
  subjects: { type: [String], required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Quizz', quizzSchema);