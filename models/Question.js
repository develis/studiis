const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  statement: { type: String, required: true },
  answers: { type: [String], required: true },
  indexOfRightAnswer: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);