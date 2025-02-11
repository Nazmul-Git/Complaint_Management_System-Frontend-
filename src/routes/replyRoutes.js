const express = require('express');
const router = express.Router();
const { addReply, getReplies } = require('../controllers/replyController');
const authMiddleware = require('../moddleware/authMiddleware');

// Add a reply to a ticket
router.post('/', authMiddleware, addReply);

// Get all replies for a ticket
router.get('/:ticket_id', authMiddleware, getReplies);

module.exports = router;