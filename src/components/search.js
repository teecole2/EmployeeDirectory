import React from 'react'

const Search = (props) => {
    return (
        <div> <input vaule={props.searchTerm} onChange={props.handelChange}/>
            <button onClick={props.handelClick}>Search</button>
        </div>
    )
}

export default Search
