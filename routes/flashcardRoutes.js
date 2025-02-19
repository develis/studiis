const express = require('express');
const flashcardController = require('../controllers/flashcardController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', flashcardController.createFlashcard);
router.get('/', flashcardController.getAllFlashcards);
router.get('/:id', flashcardController.getFlashcardById);
router.put('/:id', flashcardController.updateFlashcard);
router.delete('/:id', flashcardController.deleteFlashcard);

module.exports = router;