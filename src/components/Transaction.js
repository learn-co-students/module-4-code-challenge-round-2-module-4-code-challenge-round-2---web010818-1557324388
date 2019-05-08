import React from 'react'
import AccountContainer from './AccountContainer'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.posted_at}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  )
}

export default Transaction
