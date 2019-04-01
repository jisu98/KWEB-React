import React, { Component } from 'react';
import './App.css'
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black', 
      padding: '16px', 
      color: 'white', 
      fonstSize: '12px'
    };

    return (
      <React.Fragment>
        {/*3강*/}
        <div style={style}>
          hi there
        </div>
        <div className="App">
          bye
        </div>  

        {/*4강*/}
        <MyName /*name="박지수"*//>

        <Counter/>
      </React.Fragment>
    );
  }
}

export default App;
