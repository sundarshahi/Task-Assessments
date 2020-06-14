import React from 'react';

import { Link } from 'react-router-dom'

import { Container } from './Style.js';

import colorType from './Types'

function Card({ pokemon }) {

  return (
    <Container
    color={pokemon.types.map((type,i) => ( i===0&&colorType[type.type.name] ))}
    > 
       <Link to={`/pokemon/${pokemon.id}`}>
      <div className="container">
      {console.log(pokemon.types.map((type,i) => ( i===0&&type.type.name )))}
        <div className="card">
          <div className="button_info">
            {pokemon.id}            
          </div>
          <h2 className="id_card_middle">{pokemon.name}</h2>
          <div className="imgBx">
        
            <img className="card-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
          
          </div>
          <div className="contentBx">
            <h3>{pokemon.name}</h3>

          </div>
          <div className="type_area">
            <div className="type">
              {pokemon.types.map((type,i) => (
                <span key={i} className="types_form" style={{ backgroundColor: colorType[type.type.name] }}>
                  { (type.type.name).split(' ').map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(' ')}
               
                </span>
              ))}
            </div>
          
          </div>
        </div>
      </div>
      </Link>
    </Container>
  );
}

export default Card;
