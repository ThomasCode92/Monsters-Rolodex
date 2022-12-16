import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
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
        this.setState(() => {
          return { monsters: users };
        });
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
        <SearchBox
          className="search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchChange.bind(this)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
