import React, { Component }  from 'react';
import javaScriptLogo from './javaScript-logo.png';
import './App.css';

class App extends Component {
  render () {
    return (
    <div className="App">
      <img src={javaScriptLogo} alt="javaScript Logo" />
      <br /><br /><br />
      <div className='container'>
        <div className='item'>ReactJs</div> 
        <div className='item'>HTML5</div> 
        <div className='item'>CSS3</div>
      </div> 
      <div className='container'>
        <div className='item'>Node.Js</div> 
        <div className='item'>MongoDB</div> 
        <div className='item'>Heroku</div>  
      </div>>
    </div>
  );
 }
}

export default App;
