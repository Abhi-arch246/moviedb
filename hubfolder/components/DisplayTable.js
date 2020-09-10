import React from 'react'

function DisplayTable({data,repo}) {
    return (
        <div>
            <table style={{marginTop:'50px'}} className="ui fixed table">
                <thead>
                    <tr>
                        <th style={{background:'aqua'}} >Name</th>
                        <th style={{background:'indigo',color:'white'}} >Avatar</th>
                        <th style={{background:'darkslategrey',color:'white'}}>Location</th>
                        <th style={{background:'blue',color:'white'}}>Bio</th>
                        <th>Repositories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{fontWeight:'bold'}}><h3>{data.name}</h3></td>
                        <td> 
                        {!data.avatar_url ? (
                            " "
                        ) : (<img className='ui small circular image' src={data.avatar_url} />

                        )}
                        </td>
                        <td style={{padding:'20px',fontWeight:'bolder'}}>{data.location}</td>
                        <td style={{padding:'20px',fontWeight:'bolder'}}>{data.bio}</td>
                        <td>
                        {repo.map(re=>(
                            <div className='ui relaxed divided list' key={re.name}>
                                <div className='item'>
                                    <i className='large github middle aligned icon'></i>
                                <div className='content'>
                                    <a href={re.html_url} className='header' target='_blank'>
                                        {re.name}
                                    </a>
                                </div>
                                </div>
                            </div>
                        ))
                        }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTable
