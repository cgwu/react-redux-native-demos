import React, { Component, PropTypes } from 'react';
import {connect, Provider} from 'react-redux';
import bankActionCreators from '../bankActionCreators';

class ExchangeRate extends Component {
  render() {
    return (
      <div className="exchange" onClick={this.props.onToggle}>
          <h1>Exchange Rates:</h1>
          <div className={this.props.showExchange? 'exchange--visible': 'exchange--close'}>
            <strong> $1 USD = </strong>
            <span className="rate">0.9990 EUR</span>
            <span className="rate">0.7989 GBP</span>
            <span className="rate">710.15 JPY</span>
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //balance: state.balance,
    showExchange: state.ui.showInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
    // onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
    onToggle: () => dispatch(bankActionCreators.toggleInfo())
  }
}

const ExchangeRateContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeRate);

export default ExchangeRateContainer;
