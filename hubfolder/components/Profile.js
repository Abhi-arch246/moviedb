import React, { useState } from 'react'
import DisplayTable from './DisplayTable'
function Profile() {
    const [data, setData] = useState({});
    const [username, setusername] = useState("");
    const [repo, setRepo] = useState([]);

    const onChangeHandler = (e) => {
        setusername(e.target.value)
    }
    const submitHandler = async e => {
        e.preventDefault();
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);
        const repo = await fetch(profileJson.repos_url);
        const repoJson = await repo.json()
        console.log(repoJson);

        if (profileJson) {
            setData(profileJson);
            setRepo(repoJson);
        }
    }

    return (
        <div>
            <div style={{ padding: '20px' }}>
            <form onSubmit={submitHandler}>
                <div className="ui big icon input">
                    <input type="text" placeholder="Search user..." value={username} onChange={onChangeHandler} />
                    <i className="users icon"></i>
                </div>
                    <button style={{marginLeft:'50px'}} className="ui black button" type='submit'>
                        <i className="github icon"></i>
                 Github Search
                </button>
                <DisplayTable data={data} repo={repo} />
                </form>
            </div>

        </div>
    )
}

export default Profile
