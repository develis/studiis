const express = require('express');
const quizzController = require('../controllers/quizzController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', quizzController.createQuizz);
router.get('/', quizzController.getAllQuizzes);
router.get('/:id', quizzController.getQuizzById);
router.put('/:id', quizzController.updateQuizz);
router.delete('/:id', quizzController.deleteQuizz);

module.exports = router;