import { getNotes, getUserNotes, writeNote } from '../util/note_api_util';

// Constants
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_USER_NOTES = 'RECEIVE_USER_NOTES';
export const RECEIVE_NEW_NOTE = 'RECEIVE_NEW_NOTE';

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

