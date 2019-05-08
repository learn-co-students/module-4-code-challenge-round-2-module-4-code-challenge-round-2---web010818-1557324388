import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
 
 


  render() {

    return (
      <div>
        <Search searchListener={this.props.searchListener}/>
        <TransactionsList transactions={this.props.account}/>
      </div>
    )
  }
}

export default AccountContainer
