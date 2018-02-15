import React from 'react';

function Header() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      borderType: 'solid',
      borderColor: 'black',
      borderWidth: '2px',
      borderRadius: '20px'
    }}>
      <h1 style = {{fontSize: '65px'}}>Tamagotchi Game</h1>
    </div>
  );
}

export default Header;
