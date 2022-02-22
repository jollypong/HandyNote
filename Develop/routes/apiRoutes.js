//req'd dependencies
const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retrieving notes: 
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received to retrieve notes`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for writing new notes
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add new notes`);
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            note_id: uuid(),
            title, 
            text 
        };
        readAndAppend(newNote, '../db/db.json');
        res.json(`Note added succesfully`);
    } else {
        res.json(`Error in adding note`);
    }
});

// Bonus (delete)
// router.delete('/notes/:id', (req, res) => {
//     readFromFile(`../db/db.json`).then((data) => res.json(JSON.parse(data)));
//     console.log(req.body); 
//     if (req.body){

//     }
// });

module.exports = router; 