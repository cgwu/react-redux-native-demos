import constants from './constants.js';
import { combineReducers } from 'redux';
import update from 'react-addons-update';

const initialState = {
  initialBalance : 0,
  initialUI : {
    showInfo : true
  }
}
/*
const balanceReducer = (state = initialState, action) => {
  // console.log(action);  // Temporarily logging all actions
  if(action.amount==='') return state;
  switch (action.type) {
    // case constants.CREATE_ACCOUNT:
    //   return initialState;
    case constants.DEPOSIT_INTO_ACCOUNT:
      return {balance: state.balance + parseFloat(action.amount)};
    case constants.WITHDRAW_FROM_ACCOUNT:
        return {balance: state.balance - parseFloat(action.amount)};
    default:
      return state;
  }
}
*/

const balanceReducer = (state = initialState.initialBalance, action) => {
   console.log('balanceReducer->',state, action);  // Temporarily logging all actions
  if(action.amount==='') return state;
  switch (action.type) {
    case constants.DEPOSIT_INTO_ACCOUNT:
      return state + parseFloat(action.amount);
    case constants.WITHDRAW_FROM_ACCOUNT:
        return state - parseFloat(action.amount);
    case constants.TOGGLE_INFO:  // just for test
      return state + 1;
    default:
      return state;
  }
}
const uiReducer = (state = initialState.initialUI, action) => {
  console.log('uiReducer->',state, action)
  switch (action.type) {
    case constants.TOGGLE_INFO:
      return update(state, { showInfo: { $apply: currentState => !currentState } });
    default:
      return state;
  }
}
const bankReducer = combineReducers({balance: balanceReducer, ui: uiReducer});
export default bankReducer;
