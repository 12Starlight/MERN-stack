import { combineReducers } from 'redux';
import session from './session_reducer';
import sessionApi from './session_api_reducer'
import errors from './errors_reducer';
import notes from './notes_reducer'; 


const RootReducer = combineReducers({
  notes,
  session,
  sessionApi,
  errors 
});


export default RootReducer; 