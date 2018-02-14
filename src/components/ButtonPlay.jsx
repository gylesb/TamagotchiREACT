import React from 'react';

function ButtonPlay() {
  function handleButtonPlayClick() {
    props.onButtonPlayClick();
  }

  return (
    <div>
      <button onClick = {handleButtonPlayClick}></button>
    </div>
  );
}

export default ButtonPlay;
