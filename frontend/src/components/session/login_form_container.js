import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { fetchNotes } from '../../actions/note_actions';
import LoginForm from './login_form';


const mapStateToProps = (state) => {
  // debugger; 
  return {
    signedInAfter: state.sessionApi.isAuthenticated,
    signedInBefore: state.session.isAuthenticated,
    errors: state.errors.session,
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    fetchNotes: () => dispatch(fetchNotes())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);