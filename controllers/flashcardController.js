const flashcardService = require('../services/flashcardService');
const ErrorWrapper = require('../errors/ErrorWrapper');

class FlashcardController {
  async createFlashcard(req, res) {
    try {
      const flashcard = await flashcardService.createFlashcard(req.body);
      res.status(201).json(flashcard);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async getFlashcardById(req, res) {
    try {
      const flashcard = await flashcardService.getFlashcardById(req.params.id);
      if (!flashcard) return res.status(404).json(new ErrorWrapper(404, 'Flashcard not found'));
      res.json(flashcard);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async updateFlashcard(req, res) {
    try {
      const flashcard = await flashcardService.updateFlashcard(req.params.id, req.body);
      if (!flashcard) return res.status(404).json(new ErrorWrapper(404, 'Flashcard not found'));
      res.json(flashcard);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async deleteFlashcard(req, res) {
    try {
      const flashcard = await flashcardService.deleteFlashcard(req.params.id);
      if (!flashcard) return res.status(404).json(new ErrorWrapper(404, 'Flashcard not found'));
      res.json({ message: 'Flashcard deleted successfully' });
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }

  async getAllFlashcards(req, res) {
    try {
      const flashcards = await flashcardService.getAllFlashcards();
      res.json(flashcards);
    } catch (error) {
      res.status(400).json(new ErrorWrapper(400, error.message));
    }
  }
}

module.exports = new FlashcardController();