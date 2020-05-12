import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import Notes from './notes';


const mapStateToProps = (state) => {
  return {
    notes: Object.values(state.notes.all)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Notes); 