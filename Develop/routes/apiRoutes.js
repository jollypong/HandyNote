//req'd dependencies
const notes = require('express').Router(); 
const dataHandler = require('./dataHandler'); 

// GET/api/notes -> read db.json
notes.get('/notes', function (req, res){
    dataHandler
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});
// POST/api/notes -> read and append to json 
notes.post('/notes', (req, res) => {
    dataHandler 
    .addNote(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

// Bonus (delete)
notes.delete('/notes/:id', function (req, res) {
    dataHandler
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = notes; 