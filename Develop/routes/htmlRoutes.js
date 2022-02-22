// Req'd dependencies
const router = require('express').Router(); 
const path = require('path');

// get notes -> notes.html
router.get('/notes', (req, res)=> {
    console.log(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET homepage? -> index.html
router.get('/', (req, res) => {
    console.log(`${req.method} request received for homepage`);
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});

// export so can be used in server.js
module.exports = router; 