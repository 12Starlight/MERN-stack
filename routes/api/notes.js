const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../../config/passport')(passport);

const validateNoteInput = require('../../validation/notes');
const Note = require('../../models/Note');


// router.get('/test', (req, res) => res.json({ msg: 'This is the notes route'}));

// Express Controller
router.get('/', (req, res) => {
  Note
    .find() // Find by filtering by the parameter, no parameter, so get everything back
    .sort({ date: -1})
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
});

router.get('/user/:user_id', (req, res) => {
  Note 
    .find({ user: req.params.user_id })
    .then(notes => res.json(notes))
    .catch(error => res.status(404).json(error))
});

router.get('/:id', (req, res) => {
  Note
    .findById(req.params.id)
    .then(note => res.json(note))
    .catch(error => res.status(404).json(error)) 
})


router.post('/', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => { 
    const { isValid, errors } = validateNoteInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newNote = new Note({
      user: req.user.id,
      title: req.body.title,
      text: req.body.text
    });

    newNote.save().then(note => res.json(note));
  }
)



module.exports = router; 