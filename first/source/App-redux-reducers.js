import { applyMiddleware, combineReducers, createStore } from 'redux';

const userReducer = function(state={}, action){
  switch (action.type) {
    case 'CHANGE_NAME':
      state = {...state, name: action.payload};
      break;
    case 'CHANGE_AGE':
      state = {...state, age: action.payload};
      break;
  }
  return state;
}


const tweetsReducer = function(state=[], action){
  switch (action.type) {
    case 'CHANGE_NAME':
      state = state.concat('name changed: '+action.payload);
      break;
    case 'CHANGE_AGE':
      state = state.concat('age changed: '+action.payload);
      break;
  }
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const logger = (store) => (next) => (action) =>{
  console.log('action fired:', action);
  next(action);
}
const error = (store) => (next) => (action) =>{
  try{
    next(action);
  }catch(e){
    console.log("Error happen:", e);
  }
}
const middleware = applyMiddleware(logger, error);  //相当于拦截器
const store = createStore(reducers, {}, middleware);
store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload: 'will'});
store.dispatch({type:"CHANGE_NAME", payload: 'zhangsan'});
store.dispatch({type:"CHANGE_AGE", payload: 30});
