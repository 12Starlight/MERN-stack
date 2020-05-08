const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../../config/passport')(passport);

const validateNoteInput = require('../../validation/notes');
const Note = require('../../models/Note');


// router.get('/test', (req, res) => res.json({ msg: 'This is the notes route'}));

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