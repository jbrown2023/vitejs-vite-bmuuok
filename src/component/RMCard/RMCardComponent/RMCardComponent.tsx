import { useEffect, useState } from 'react';
import RMCard from '../../RMCard/RMCard';
import './RMCardComponent.css';

// interface Character {
//   person: char;
// }
// const char: CharInterface = {
//   id: 361,
//   name: 'Toxic Rick',
//   status: 'Dead',
//   species: 'Humanoid',
//   image: 'string'
// }

interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

const RMCardComponent = () => {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  // characters.id = characters

  console.log('test1 characters', characters);

  const handleClick = (id: number) => {
    const updatedCharacter = characters.filter((char) => char.id != id);
    setCharacters(updatedCharacter);
  };

  return (
    <div className="cardContainer">
      {characters.map((character) => {
        return (
          <RMCard
            key={character.id}
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.species}
            specie={character.status}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default RMCardComponent;

//favourites tab
