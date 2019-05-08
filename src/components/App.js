import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  state={accountInfo:[]}
  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res =>res.json())
    .then(accTrasactions => this.setState({accountInfo:accTrasactions}))

    
}

handleChange=(event)=>{
  console.log('here')
    event.persist()
    this.searchArea(event.target.value)
}
 searchArea=(input)=>{
   const arr=this.state.accountInfo.filter(card => card.description.includes(input.toLowerCase()))
   this.setState({accountInfo:arr})
 }
  render() {
    

    console.log(this.state.accountInfo)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        
        <AccountContainer account={this.state.accountInfo} searchListener={this.handleChange}/>

      </div>
    )
  }
}

export default App
