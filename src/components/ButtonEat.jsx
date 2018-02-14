import React from 'react';

function ButtonEat() {
  function handleButtonEatClick() {
    props.onButtonEatClick();
  }

  return (
    <div>
      <button onClick = {handleButtonEatClick}>Feed</button>
    </div>
  );
}

export default ButtonEat;
