const router = require("express").Router();
const {
    notes
} = require('../develop/db/db');
const {
    createNewNote,
    deleteNote
} = require('../develop/lib/note');

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();
    let note = creatNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req,res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;