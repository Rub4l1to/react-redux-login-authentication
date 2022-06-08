//* Redux
import { combineReducers } from 'redux';

//* Reducers
import { auth, user } from './slices';

export default combineReducers({
  auth,
  user,
});
