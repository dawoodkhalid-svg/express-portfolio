// Load Express framework
const express = require('express');
// Create a new router to handle routes
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index', {
        title: "Dawood's Portfolio - Home",
        page: 'home'
    });
});

// About page route - shows information about me
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me - Dawood\'s Portfolio',
        page: 'about'
    });
});

// Projects page route - displays my project portfolio
router.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects - Dawood\'s Portfolio',
        page: 'projects'
    });
});

// Contact page route
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Me - Dawood\'s Portfolio',
        page: 'contact'
    });
});

// Handle contact form submission - processes the form data
router.post('/contact', (req, res) => {
    console.log('Form submitted:', req.body);
    res.redirect('/contact?success=true');
});
// Export the router so it can be used in server.js
module.exports = router;