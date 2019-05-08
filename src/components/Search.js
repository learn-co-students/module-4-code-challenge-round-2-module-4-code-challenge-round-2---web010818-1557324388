import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input" >
      <input onChange={(e) => props.handleChange(e.target.value)}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
