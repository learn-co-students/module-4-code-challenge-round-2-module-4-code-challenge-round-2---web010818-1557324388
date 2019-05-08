import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    filter: ''
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(fetchedTransactions => this.setState({transactions: fetchedTransactions}))
  }

  handleChange = (value) => {
    this.setState({filter: value})
  }

  render() {
    let transactions = this.state.transactions
    if(this.state.filter) {
      transactions = this.state.transactions.filter(transaction => (
        transaction.description.toLowerCase().includes(this.state.filter.toLowerCase()) 
          || 
        transaction.category.toLowerCase().includes(this.state.filter.toLowerCase())
      ))
    }
    return (
      <div>
        <Search transactions={this.state.transactions} handleChange={this.handleChange}/>
        <TransactionsList transactions={transactions}/>
      </div>
    )
  }
}

export default AccountContainer
