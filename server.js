const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./src/routes/authRoutes');
const ticketRoutes = require('./src/routes/ticketRoutes');
const replyRoutes = require('./src/routes/replyRoutes');


// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/replies', replyRoutes);

app.get('/', (req, res) => {
    res.send('Complaint Management System Backend');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});