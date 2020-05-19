const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: true
  },
  colorTop: {
    type: String,
    required: false
  },
  colorBody: {
    type: String,
    required: false 
  },
  colorCorner: {
    type: String,
    required: false 
  },
  date: {
    type: Date,
    default: Date.now
  }
});


const Note = mongoose.model('notes', NoteSchema);
module.exports = Note; 