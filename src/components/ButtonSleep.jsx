import React from 'react';
import PropTypes from 'prop-types';

function ButtonSleep(props) {
  function handleButtonSleepClick() {
    props.onButtonSleepClick();
  }

  return (
    <div>
      <button onClick = {handleButtonSleepClick}>Rest</button>
    </div>
  );
}

ButtonSleep.propTypes = {
  onButtonSleepClick: PropTypes.func
};

export default ButtonSleep;
