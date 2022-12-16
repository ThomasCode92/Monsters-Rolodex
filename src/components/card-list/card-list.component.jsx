import { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map(monster => {
          const { id, name, email } = monster;
          return (
            <div key={id} className="card-container">
              <img
                src={`https://robohash.org/${id}?set=set2`}
                alt={`monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
