const mongoose = require('mongoose');
const Answer = require('./Answer');

const questionSchema = new mongoose.Schema({
  statement: { type: String, required: true },
  answers: { type: [Answer.schema], required: true },
  subjects: { type: [String], required: true },
});

module.exports = mongoose.model('Question', questionSchema);