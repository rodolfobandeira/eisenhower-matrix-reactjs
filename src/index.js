import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <div className="div-square top-left">
        Do first
      </div>

      <div className="div-square top-right">
        Do Later
      </div>

      <div className="clear"></div>

      <div className="div-square bottom-left">
        Delegate
      </div>

      <div className="div-square bottom-right">
        Eliminate
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
