import React from 'react';

function Alphabet({ categories }) {
 
  const uniqueLetters = Array.from(new Set(categories.map(category => category.name.charAt(0))));

  return (
    <div className="alphabet">
      {uniqueLetters.map(letter => (
        <a key={letter} href={`#${letter}`}>
          {letter}
        </a>
      ))}
    </div>
  );
}

export default Alphabet;
