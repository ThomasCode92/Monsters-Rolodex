import { Component } from 'react';

import CardList from './components/card-list.component';
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

  onSearchChange(event) {
    const inputValue = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString: inputValue };
    });
  }

  render() {
    const { onSearchChange } = this;
    const { monsters, searchString } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange.bind(this)}
        />
        <CardList />
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
