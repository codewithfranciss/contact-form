const express = require('express');
const connectDB = require('./config/db.js')
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/posts', require('./api/posts.js'));

app.listen(3001, () => {
    console.log('Server started on port 3000');
});
