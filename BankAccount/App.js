import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import bankStore from './bankStore';
import constants from './constants';
import bankActionCreators from './bankActionCreators';

class BankApp extends Component {
  handleDeposit() {
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value='';
  }
  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value='';
  }
  render() {
    return (
      <div>
        <header>
          <img src="//www.pro-react.com/logos/redux-bank.svg" />
        </header>
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Amount" ref="amount" />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>
      </div>
    );
  }
}
BankApp.propTypes = {
  blance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
}

/*
class BankAppContainer extends Component {
  // constructor(...args) {
  //   super(...args);
  //   bankStore.dispatch({type: constants.CREATE_ACCOUNT});
  //   this.state = {
  //     balance: bankStore.getState().balance
  //   }
  // }

  componentDidMount(){
    this.unsubscribe = bankStore.subscribe(()=>{
      this.setState({balance: bankStore.getState().balance});
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return (

      // <BankApp
      //   balance={ bankStore.getState().balance }
      //   onDeposit={ (amount)=>bankStore.dispatch(
      //     {type:constants.DEPOSIT_INTO_ACCOUNT, amount: amount}) }
      //   onWithdraw={ (amount)=>bankStore.dispatch(
      //     {type:constants.WITHDRAW_FROM_ACCOUNT, amount: amount}) }
      //   >
      // </BankApp>

      <BankApp
        balance={ bankStore.getState().balance }
        onDeposit={ (amount)=>bankStore.dispatch(
          bankActionCreators.depositIntoAccount(amount)
        ) }
        onWithdraw={ (amount)=>bankStore.dispatch(
          bankActionCreators.withdrawFromAccount(amount)
        ) }
      />
    );
  }
}

render(<BankAppContainer />, document.getElementById('root'));
*/

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount))
  }
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);

render(
  <Provider store={bankStore}>
    <BankAppContainer />
  </Provider>,
  document.getElementById('root')
);
