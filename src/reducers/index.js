import counterReducer from './counter';
import loggedReducer from './isLogged';
import listReducer from './listReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  dataList: listReducer
});

export default allReducers;