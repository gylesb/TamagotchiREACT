import React from 'react';

function ButtonKill() {
  function handleButtonKillClick() {
    props.onButtonKillClick();
  }

  return (
    <div>
      <button onClick = {handleButtonKillClick}>Don't press me.</button>
    </div>
  );
}

export default ButtonSleep;
