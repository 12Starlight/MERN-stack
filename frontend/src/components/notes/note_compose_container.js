import { connect } from 'react-redux';
import { composeNote, deletedNote } from '../../actions/note_actions';
import NoteCompose from './note_compose';


const mapStateToProps = (state) => {
  // debugger;  
  return {
    currentUser: state.session.user,
    newNote: state.notes.new,
    notes: state.notes.all
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    composeNote: data => dispatch(composeNote(data)),
    deletedNote: (noteId) => dispatch(deletedNote(noteId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NoteCompose); 