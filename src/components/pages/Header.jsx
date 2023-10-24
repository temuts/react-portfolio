import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
  };

  return (
    <header style={headerStyle}>
      <h1>Temuulen Tsengel's Portfolio</h1>
    </header>
  );
}

export default Header;
