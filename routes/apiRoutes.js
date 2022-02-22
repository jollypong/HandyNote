//req'd dependencies
const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retrieving notes: 
router.get('/notes', (req, res) => {
    console.log(`${req.method} request received to retrieve notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for writing new notes
router.post('/notes', (req, res) => {
    console.log(`${req.method} request received to add new notes`);
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            note_id: uuid(),
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
router.delete('/notes/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile(`../db/db.json`)
        .then((data) => JSON.parse(data))
        .then((json) => {
            //Make a new array of all notes except the one with ID in url
            const result = json.filter((note) => note.note_id !== noteId);
            //Overwrite db.json without the note_id specified in url  
            writeToFile('./db/db.json', result)
            res.json(`item ${noteId} has been deleted`);
        });
});
// Bonus (need get to verify if id still there after deletion)
router.get('notes/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id === noteId);
            return result.length > 0
                ? res.json(result)
                : res.json('No note with that ID');
        });
});

module.exports = router; 