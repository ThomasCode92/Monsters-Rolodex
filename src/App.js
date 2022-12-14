import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Thomas',
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <p>Hi {this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: 'Andrei' });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
