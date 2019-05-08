import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      search: " "
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then((res) => {return res.json()})
      .then((data) => {
        console.log(data)
        this.setState({
          transactions: data
        })
      })
  }

  handleChange = (event) => {
    this.setState({search: event})
  }


  


  //this.state.transactions.filter(x=> )
  render() {
    console.log(this.state.transactions)
    if (this.state.search === " ") {
      return (
        <div>
          <Search handleChange={this.handleChange}/>
          <TransactionsList data={this.state.transactions}/>
        </div>
      )
    }
    else
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList data={this.state.transactions.filter(x =>   x.category === this.state.search)} />
      </div>
    )
  }
}

export default AccountContainer
