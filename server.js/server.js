const express = require('express');
const path = require('path');

// Create Express application
const app = express();

// Set port (use environment variable for cloud deployment)
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware (for form submissions)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const indexRouter = require('./routes/index');

// Use routes
app.use('/', indexRouter);

// 404 Error handler
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Export app
module.exports = app;