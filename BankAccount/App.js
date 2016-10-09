import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import bankStore from './bankStore';
import constants from './constants';
import bankActionCreators from './bankActionCreators';
import ExchangeRate from './components/ExchangeRate';

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
        <ExchangeRate />
        {/*
        <div className="exchange" onClick={this.props.onToggle}>
          <h1>Exchange Rates:</h1>
          <div className={this.props.showExchange? 'exchange--visible': 'exchange--close'}>
            <strong> $1 USD = </strong>
            <span className="rate">0.9990 EUR</span>
            <span className="rate">0.7989 GBP</span>
            <span className="rate">710.15 JPY</span>
          </div>
        </div>
        */}
      </div>
    );
  }
}
BankApp.propTypes = {
  blance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func,
  onToggle: PropTypes.func
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
    balance: state.balance,
    showExchange: state.ui.showInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
    onToggle: () => dispatch(bankActionCreators.toggleInfo())
  }
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);

render(
  <Provider store={bankStore}>
    <BankAppContainer />
  </Provider>,
  document.getElementById('root')
);
