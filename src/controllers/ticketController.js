const db = require('../config/db');

// Get all tickets
const getAllTickets = (req, res) => {
    const { role, id } = req.user;

    let query = 'SELECT * FROM Tickets';
    if (role === 'customer') {
        query += ' WHERE customer_id = ?';
    }

    db.query(query, [role === 'customer' ? id : null], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Create a new ticket 
const createTicket = (req, res) => {
    console.log(req.body)
    const { subject, description } = req.body;
    const customerId = req.user.id;

    db.query(
        'INSERT INTO Tickets (subject, description, customer_id) VALUES (?, ?, ?)',
        [subject, description, customerId],
        (err, results) => {
            if (err) throw err;
            res.json({ message: 'Ticket created successfully', ticketId: results.insertId });
        }
    );
};

// Update ticket status
const updateTicketStatus = (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    db.query(
        'UPDATE Tickets SET status = ? WHERE id = ?',
        [status, id],
        (err, results) => {
            if (err) throw err;
            res.json({ results, message: 'Ticket status updated successfully' });
        }
    );
};

// Delete a ticket 
const deleteTicket = (req, res) => {
    const { id } = req.params;
    const customerId = req.user.id;

    const isAdmin = req.user.role === 'admin';

    const query = isAdmin
        ? 'DELETE FROM Tickets WHERE id = ?'
        : 'DELETE FROM Tickets WHERE id = ? AND customer_id = ?';

    const params = isAdmin ? [id] : [id, customerId];

    db.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting ticket', error: err });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Ticket not found or not authorized to delete this ticket' });
        }

        res.json({ results, message: 'Ticket deleted successfully' });
    });
};


module.exports = { getAllTickets, createTicket, updateTicketStatus, deleteTicket };