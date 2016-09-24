import { createStore } from 'redux';

var reducer = function(state, action) {
  if(action.type === "INC"){
    return state + 1;
  }
  else if(action.type === "DEC"){
    return state - 1;
  }
  return state;
}

var store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('@state changed:' + store.getState());
});

store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "INC", payload: 1});
