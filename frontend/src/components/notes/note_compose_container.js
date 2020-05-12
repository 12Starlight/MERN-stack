import { connect } from 'react-redux';
import { composeNote } from '../../actions/note_actions';
import NoteCompose from './note_compose';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newNote: state.notes.new 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    composeNote: data => dispatch(composeNote(data))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NoteCompose); 