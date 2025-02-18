const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  statement: { type: String, required: true },
  correctAnswer: { type: Boolean, required: true },
});

module.exports = mongoose.model('Answer', answerSchema);