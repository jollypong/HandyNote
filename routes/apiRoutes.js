//req'd dependencies
const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retrieving notes: 
router.get('/notes', (req, res) => {
    console.log(`${req.method} request received to retrieve saved notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for writing new notes
router.post('/notes', (req, res) => {
    console.log(`${req.method} request received to add new notes`);
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            id: uuid(),
            title,
            text
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added succesfully`);
    } else {
        res.json(`Error in adding note`);
    }
});

// Bonus (delete specific note)
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            //Make a new array of all notes except the one with ID in url
            const result = json.filter((note) => note.id !== noteId);
            //Overwrite db.json without the id specified in url  
            writeToFile('./db/db.json', result)
            res.json(`item ${noteId} has been deleted`);
        });
});

module.exports = router; 