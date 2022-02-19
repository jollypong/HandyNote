const router = require('express').Router(); 
const saveData = require('../../db/db.json'); 
const uuid = require('../helpers/uuid')
// GET/api/notes -> read db.json
router.get('/notes', function (req, res){
    saveData
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});
// POST/api/notes -> read and append to json 
router.post('/notes', (req, res) => {
    saveData 
    .addNote(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

// Bonus (delete)
rous
// README suggests using uuid to create unique id to save to json