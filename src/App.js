import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // available on all class component
  constructor() {
    super(); 

    this.state = {
      name: 'Yihua',

    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi { this.state.name} </p>
          <button onClick={() => {
            // this.state.name = 'Adeleke';
            // console.log(this.state); 
            this.setState({name: 'Andrei'})
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
