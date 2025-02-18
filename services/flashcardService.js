const Flashcard = require('../models/Flashcard');

class FlashcardService {
  async createFlashcard(data) {
    const flashcard = new Flashcard(data);
    return await flashcard.save();
  }

  async getFlashcardById(id) {
    return await Flashcard.findById(id);
  }

  async updateFlashcard(id, data) {
    return await Flashcard.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteFlashcard(id) {
    return await Flashcard.findByIdAndDelete(id);
  }

  async getAllFlashcards() {
    return await Flashcard.find();
  }
}

module.exports = new FlashcardService();