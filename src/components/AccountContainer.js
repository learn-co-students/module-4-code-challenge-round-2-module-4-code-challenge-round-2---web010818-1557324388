import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

 state = {
   transactions: [],
     inputValue: ""
 };

 componentDidMount() {
     fetch ('https://boiling-brook-94902.herokuapp.com/transactions')
         .then(res => res.json())
         .then(transactions => this.setState({
             transactions:transactions
         }))
 }

allTransactions = () => {
     let getTrans = this.state.transactions
    getTrans = getTrans.filter(trans => trans.description.toLowerCase().includes(this.state.inputValue.toLowerCase()) || trans.category.toLowerCase().includes(this.state.inputValue.toLowerCase()))

        return getTrans
 }


  handleChange = (event) => {
     this.setState ({
         ...this.state,
         inputValue: event.target.value
     })
  }

render(){

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList allTransactions={this.allTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
