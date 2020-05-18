import { RECEIVE_NOTES, RECEIVE_USER_NOTES, RECEIVE_NEW_NOTE, DELETE_NOTE } from '../actions/note_actions';


const NotesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);


  switch(action.type) {
    case RECEIVE_NOTES:
      newState.all = action.notes.data;
      return newState;
    case RECEIVE_USER_NOTES:
      newState.user = action.notes.data;
      return newState;
    case RECEIVE_NEW_NOTE:
      newState.new = action.note.data;
      return newState;
    case DELETE_NOTE:
      // debugger; 
      const userNotes = newState.user.filter(x => x._id !== action.noteId);
      const updatedNotes = newState.all.filter(x => x._id !== action.noteId);
      const newNotes = delete newState.new; 
      return {...newState, all: updatedNotes, user: userNotes, new: newNotes }
    default:
      return state;
  }
};


export default NotesReducer; 