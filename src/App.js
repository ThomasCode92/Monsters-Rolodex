import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.state)
        );
      });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(this.state.searchString)
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={event => {
            const inputValue = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchString: inputValue };
            });
          }}
        />
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
