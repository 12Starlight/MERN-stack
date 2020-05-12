import { RECEIVE_NOTES, RECEIVE_USER_NOTES, RECEIVE_NEW_NOTE } from '../actions/note_actions';


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
    default:
      return state;
  }
};


export default NotesReducer; 