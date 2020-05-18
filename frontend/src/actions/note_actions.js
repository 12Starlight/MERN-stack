import { getNotes, getUserNotes, writeNote, deleteNote, updateColor } from '../util/note_api_util';

// Constants
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_USER_NOTES = 'RECEIVE_USER_NOTES';
export const RECEIVE_NEW_NOTE = 'RECEIVE_NEW_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE'; 
export const COLOR_NOTE = 'COLOR_NOTE';


// Regular Action Creator
export const receiveNotes = (notes) => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveUserNotes = (notes) => ({
  type: RECEIVE_USER_NOTES,
  notes
});

export const receiveNewNote = (note) => ({
  type: RECEIVE_NEW_NOTE,
  note
});

export const removedNote = (note) => {
  // debugger; 
  return {
    type: DELETE_NOTE,
    note,
    noteId: note.data.message._id
  } 
}

export const colorNote = (note) => {
  return {
    type: COLOR_NOTE,
    note 
  }
}


// Thunk Action Creator
export const fetchNotes = () => (dispatch) => (
  getNotes()
    .then(notes => dispatch(receiveNotes(notes)))
    .catch(err => console.log(err))
);

export const fetchUserNotes = (id) => (dispatch) => (
  getUserNotes(id)
    .then(notes => dispatch(receiveUserNotes(notes)))
    .catch(err => console.log(err))
);

export const composeNote = (data) => (dispatch) => (
  writeNote(data)
    .then(note => dispatch(receiveNewNote(note)))
    .catch(err => console.log(err))
);

export const deletedNote = (noteId) => (dispatch) => (
  deleteNote(noteId)
    .then(removed => dispatch(removedNote(removed)))
    .catch(err => console.log(err))
);

export const coloredNote = (note) => (dispatch) => (
  updateColor(note)
    .then(colored => dispatch(colorNote(colored)))
    .catch(err => console.log(err))
);
