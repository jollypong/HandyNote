//req'd dependencies
const apiRoutes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retrieving notes: 
apiRoutes.get('/', (req, res) => {
    console.info(`${req.method} request received to retrieve notes`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for writing new notes
apiRoutes.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add new notes`);
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title, 
            text, 
            note_id: uuid() 
        };
        readAndAppend(newNote, '../db/db.json');
        res.json(`Note added succesfully`);
    } else {
        res.json(`Error in adding note`);
    }
});

// Bonus (delete)
apiRoutes.delete('/notes/:id', function (req, res) {
    dataHandler
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = apiRoutes; 