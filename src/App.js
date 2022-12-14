import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Thomas', lastName: 'Code92' },
      company: 'ZTM',
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <p>
          Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{' '}
          {this.state.company}!
        </p>
        <button
          onClick={() => {
            this.setState({
              name: { firstName: 'Andrei', lastName: 'Neagoie' },
            });
            console.log(this.state);
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
