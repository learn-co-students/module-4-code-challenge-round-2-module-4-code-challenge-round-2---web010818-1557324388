import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      input: ''
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }


  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res=>res.json())
    .then(transactionsData => {
      this.setState({
        transactions: transactionsData
      })
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      input: event.target.value.toLowerCase()
    })
    //console.log(event.target.value)
    //console.log('got here')
    console.log(this.state.input)
    this.filterTransactions(this.state.input)
  }

  filterTransactions = (given_input) => {
    console.log(given_input)
    return this.state.transactions.filter((transaction) => 
      transaction.description.toLowerCase().includes(given_input) || transaction.category.toLowerCase().includes(given_input))
  }

  renderTransactions = () => {
    if(this.state.input===''){
      return this.state.transactions
    } else {
     return this.filterTransactions(this.state.input)
    }
  }

  render() {
    //console.log(this.state.transaction.filter((transaction)=>transaction.description.includes(this.state.input)))
    //console.log(this.filterTransactions())
    
    console.log(this.state.input)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.renderTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer

//|| transaction.category.includes(given_input)