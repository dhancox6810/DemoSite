import React from 'react';
import './App.css';

import Navbar from "./Components/Navbar/Navbar.js";

class App extends React.Component {

  render(){
    return (
      
      <div className="App">
        <Navbar />
        <body>
          <style>{'body { background-color: #C0C0C0; }'}</style>
          <div className="headerText">This page is currently under construction. Dan.</div>
        </body>
      </div>
    )
  };

}

export default App;