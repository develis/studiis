const express = require('express');
const quizzController = require('../controllers/quizzController');

const router = express.Router();

router.post('/', quizzController.createQuizz);
router.get('/', quizzController.getAllQuizzes);
router.get('/:id', quizzController.getQuizzById);
router.put('/:id', quizzController.updateQuizz);
router.delete('/:id', quizzController.deleteQuizz);

module.exports = router;