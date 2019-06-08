import React, { Component, Fragment } from 'react';
import './App.css'
import MyName from './MyName';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

const App = () => {
  
  const style = {
    backgroundColor: 'black', 
    padding: '16px', 
    color: 'white', 
    fonstSize: '12px'
  };
  

  return (
    <Fragment>
      {/*Hooks*/}
      <CounterHooks />
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
    </Fragment>
  );
};

export default App;