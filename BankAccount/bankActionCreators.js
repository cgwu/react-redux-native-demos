import constants from './constants';

const bankActionCreators = {
  depositIntoAccount (amount) {
    return {
      type: constants.DEPOSIT_INTO_ACCOUNT,
      amount: amount
    }
  },
  withdrawFromAccount(amount){
    return {
      type: constants.WITHDRAW_FROM_ACCOUNT,
      amount: amount
    }
  }
}
export default bankActionCreators;

/*
const act = {
  func1(){
    console.log('func1')
  },
  func2(){
    console.log('func2')
  }
}
<=>
[object Object] {
  func1: function func1() {
    window.runnerWindow.proxyConsole.log('func1');
  },
  func2: function func2() {
    window.runnerWindow.proxyConsole.log('func2');
  }
}
*/
