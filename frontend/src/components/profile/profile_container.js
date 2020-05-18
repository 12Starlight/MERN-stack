import { connect } from 'react-redux';
import { fetchUserNotes, deletedNote } from '../../actions/note_actions';
import Profile from './profile';


const mapStateToProps = (state) => {
  return {
    notes: Object.values(state.notes.user),
    currentUser: state.session.user 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserNotes: id => dispatch(fetchUserNotes(id)),
    deletedNote: (noteId) => dispatch(deletedNote(noteId))
  };  
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile); 