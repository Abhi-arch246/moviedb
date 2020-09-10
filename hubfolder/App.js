import React from 'react';
import logo from './github.png';
import './App.css';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{marginTop:'40px',fontWeight:'1000',fontSize:'55px',wordSpacing:'10px'}}>A Explore</h1>
      </header>
      <Profile/>
      <h4 className='footer'>
        This Application is built using React and Github API by &#x1F496; 
      </h4>
    </div>
  );
}

export default App;
