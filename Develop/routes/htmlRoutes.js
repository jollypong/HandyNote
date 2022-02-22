// Req'd dependencies
const htmlRoutes = require('express').Router(); 
const path = require('path');

// get notes -> notes.html
htmlRoutes.get('/notes', (req, res)=> {
    console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET homepage? -> index.html
htmlRoutes.get('/', (req, res) => {
    console.info(`${req.method} request received for homepage`);
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});

// export so can be used in server.js
module.exports = htmlRoutes; 