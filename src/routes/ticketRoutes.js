const express = require('express');
const router = express.Router();
const { getAllTickets, createTicket, updateTicketStatus, deleteTicket } = require('../controllers/ticketController');
const authMiddleware = require('../moddleware/authMiddleware');

// Get all tickets 
router.get('/', authMiddleware, getAllTickets);

// Create a new ticket 
router.post('/', authMiddleware, createTicket);

// Update ticket status 
router.put('/:id', authMiddleware, updateTicketStatus);

// Delete a ticket 
router.delete('/:id', authMiddleware, deleteTicket);

module.exports = router;