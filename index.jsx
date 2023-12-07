import React from 'react';
import './styles.css'; // Make sure to import your CSS file

const PokemonCard = ({ id, name, image, types }) => (
  <div className="card">
    <div className="photo">
      <img src={image} alt={`${name} photo`} />
    </div>
    <div className="info">
      <div className="id">N° {id}</div>
      <div className="name">{name}</div>
      <div className="types">
        {types.map((type, index) => (
          <div key={index} className={type.toLowerCase()}>
            {type}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PokemonDetail = () => (
  <div className="detalle">
    <PokemonCard id="001" name="bulbasaur" image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" types={['Grass', 'Poison']} />
  </div>
);

const App = () => (
  <div className="container">
    <div className="header">
      <div className="title">Pokedex</div>
      <div className="search">
        <input type="text" className="searchbox" placeholder="Search Pokemon" />
      </div>
    </div>
    <div className="contenido">
      {[...Array(9)].map((_, index) => (
        <PokemonCard
          key={index}
          id="001"
          name="bulbasaur"
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          types={['Grass', 'Poison']}
        />
      ))}
      <PokemonDetail />
    </div>
  </div>
);

export default App;
