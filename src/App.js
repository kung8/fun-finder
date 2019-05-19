import React, {Component} from 'react';
import './App.css';
import './Reset.css';
import Header from './Components/Header';
import routes from './routes';
import styled from 'styled-components';

class App extends Component {
  render(){
    return (
      <div style={{width:'100%',background:'red',minHeight:'100vh'}}>
        <Header/>
        {routes}
      </div>
    )
  }
}

export default App;