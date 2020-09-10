import React from 'react'


function Results({results}) {
    return (
        <section className='results'>
            {results.map(result=>(
                
                <div className='result'>
                    <img src={result.Poster}/>
                    <h1 className='movie'>{result.Title}</h1>
            
                </div>
            ))}
        </section>
    )
}

export default Results
