// Load the Express framework to create web server
const express = require('express');
// Load the path module to work with file paths
const path = require('path');

// Create the Express application instance
const app = express();

// Set port number - uses environment variable if available, otherwise sets it to default, which is to 3000
// This allows the app to work on cloud platforms for example something like Render
const PORT = process.env.PORT || 3000;

// Tell Express we're using EJS for our pages
app.set('view engine', 'ejs');
// Tell Express where to find our page templates
app.set('views', path.join(__dirname, 'views'));


// Let Express serve our CSS, images and other static files
app.use(express.static(path.join(__dirname, 'public')));


// Let the app read form data when someone submits a form
app.use(express.urlencoded({ extended: true }));
// Let the app read JSON data
app.use(express.json());


// Bring in our routes file that has all the page links
const indexRouter = require('./routes/index');


// Actually use those routes we just imported
app.use('/', indexRouter);


// Show a 404 error if someone tries to visit a page that doesnt exist
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});


// Start the server and make it listen for visitors
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


// Export this app in case we need it somewhere else
module.exports = app;