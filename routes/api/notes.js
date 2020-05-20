const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../../config/passport')(passport);

const validateNoteInput = require('../../validation/notes');
const Note = require('../../models/Note');


// router.get('/test', (req, res) => res.json({ msg: 'This is the notes route'}));

// Express Controller
// Index
router.get('/', (req, res) => {
  Note
    .find() // Find by filtering by the parameter, no parameter, so get everything back
    .sort({ date: -1})
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
});

// User Index
router.get('/user/:user_id', (req, res) => {
  Note 
    .find({ user: req.params.user_id })
    .then(notes => res.json(notes))
    .catch(error => res.status(404).json(error))
});

// Show 
router.get('/:id', (req, res) => {
  Note
    .findById(req.params.id)
    .then(note => res.json(note))
    .catch(error => res.status(404).json(error)) 
})

// Create
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
      text: req.body.text,
      colorTop: req.body.colorTop,
      colorBody: req.body.colorBody,
      colorCorner: req.body.colorCorner 
    });

    newNote.save().then(note => res.json(note));
  }
)

// Update
router.patch('/:id', async (req, res) => {
  const { isValid, errors } = validateNoteInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const color = await Note 
    .findById(req.params.id)
    .update({ colorTop: req.param.colorTop, colorBody: req.params.colorBody })
    .then(color => res.json(color)); 
  res.json({color})
})

// Delete
router.delete('/:id', async (req, res) => {
  const message = await Note
    .findByIdAndRemove(req.params.id)
    .then(() => { return { _id: req.params.id, deleted: 'Note deleted' }});
  res.json({ message });
});


module.exports = router; 