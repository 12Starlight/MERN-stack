import { connect } from 'react-redux';
import NoteBox from './note_box';


const mapStateToProps = (state) => {
  debugger; 
  return {
    notes: Object.values(state.notes.all),
    newest: state.notes.new 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NoteBox); 