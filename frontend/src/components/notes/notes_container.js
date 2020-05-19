import { connect } from 'react-redux';
import { fetchNotes, deletedNote, coloredNote } from '../../actions/note_actions';
import Notes from './notes';


const mapStateToProps = (state) => {
  // debugger; 
  return {
    notes: Object.values(state.notes.all)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    deletedNote: (noteId) => dispatch(deletedNote(noteId)),
    coloredNote: (note) => dispatch(coloredNote(note))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Notes); 