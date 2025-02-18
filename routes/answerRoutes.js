const express = require('express');
const answerController = require('../controllers/answerController');

const router = express.Router();

router.post('/', answerController.createAnswer);
router.get('/', answerController.getAllAnswers);
router.get('/:id', answerController.getAnswerById);
router.put('/:id', answerController.updateAnswer);
router.delete('/:id', answerController.deleteAnswer);

module.exports = router;