import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const mockCharacters = [
    { name: 'Luke Skywalker', birthYear: '19BBY', gender: 'male' },
    { name: 'Leia Organa', birthYear: '19BBY', gender: 'female' },
    { name: 'Darth Vader', birthYear: '41.9BBY', gender: 'male' }
  ];

  return (
    <div className="p-3">
      <h2>Characters</h2>
      {mockCharacters.map((char, index) => (
        <CharacterCard key={index} {...char} />
      ))}
    </div>
  );
}

export default CharacterList;
