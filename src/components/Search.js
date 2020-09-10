import React from 'react'

function Search({handleInput,search}) {
    return (
        <div>
            <input 
                type='text'
                placeholder='Search by movie name....' 
                className='searchbox' 
                onChange={handleInput}
                onKeyPress={search}
                />
        </div>
    )
}

export default Search
