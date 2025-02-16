const db = require('../config/db');

// Add a reply to a ticket
const addReply = (req, res) => {
    console.log(req.body)
    const { ticket_id, message } = req.body;
    const userId = req.user.id;

    db.query(
        'INSERT INTO Replies (ticket_id, user_id, message) VALUES (?, ?, ?)',
        [ticket_id, userId, message],
        (err, results) => {
            if (err) throw err;
            res.json({ message: 'Reply added successfully', replyId: results.insertId });
        }
    );
};

// Get all replies for a ticket
const getReplies = (req, res) => {
    const { ticket_id } = req.params;

    db.query(
        'SELECT * FROM Replies WHERE ticket_id = ?',
        [ticket_id],
        (err, results) => {
            if (err) throw err;
            res.json(results);
        }
    );
};

module.exports = { addReply, getReplies };