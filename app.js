const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const answerRoutes = require('./routes/answerRoutes');
const questionRoutes = require('./routes/questionRoutes');
const quizzRoutes = require('./routes/quizzRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');

const app = express();

connectDB();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/quizzes', quizzRoutes);
app.use('/api/flashcards', flashcardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});