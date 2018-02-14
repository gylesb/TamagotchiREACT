import React from 'react';

function ButtonSleep() {
  function handleButtonSleepClick() {
    props.onButtonSleepClick();
  }

  return (
    <div>
      <button onClick = {handleButtonSleepClick}>Rest</button>
    </div>
  );
}

export default ButtonSleep;
