import { useState, useEffect, ChangeEvent } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersUrl = 'https://jsonplaceholder.typicode.com/users';
      const users = await getData<Monster[]>(usersUrl);
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  function onSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    const inputValue = event.target.value.toLocaleLowerCase();
    setSearchString(inputValue);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
