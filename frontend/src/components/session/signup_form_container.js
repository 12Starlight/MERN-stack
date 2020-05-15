import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { fetchNotes } from '../../actions/note_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isAuthenticated,
    errors: state.errors.session 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    loginDemo: user => dispatch(login(user)),
    fetchNotes: () => dispatch(fetchNotes())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);