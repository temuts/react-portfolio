import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 Temuulen Tsengel. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
