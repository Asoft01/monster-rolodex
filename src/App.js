import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // available on all class component
  constructor() {
    super(); 

    this.state = {
      name: { firstName: 'Yihua', lastName: 'Zhang' },
      company: 'ZTM'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi { this.state.name.firstName} {this.state.name.lastName}, I work at { this.state.company} </p>
          <button onClick={() => {
            // this.state.name = 'Adeleke';
            // console.log(this.state); 
            this.setState({name: {firstName: 'Andrei', lastName: 'Kunle'}}); 
            console.log(this.state);
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
