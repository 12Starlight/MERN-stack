import { connect } from 'react-redux';
import NoteBox from './note_box';
import { fetchNotes } from '../../actions/note_actions';


const mapStateToProps = (state) => {
  // debugger; 
  return {
    notes: Object.values(state.notes.all),
    newest: state.notes.new 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NoteBox); 