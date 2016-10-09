import { combineReducers } from 'redux';
import airports from './airports';
import route from './route';

const rootReducer = combineReducers({
  airports,
  route
});
export default rootReducer;

/*
var name = 'zhangsan'
let age = 33
var obj = {name, age}
console.log(obj)
*/
