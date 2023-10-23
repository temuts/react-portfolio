import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
  };

  return (
    <header style={headerStyle}>
      <h1>Temuulen Tsengel's Portfolio</h1>
    </header>
  );
}

export default Header;
