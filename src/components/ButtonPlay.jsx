import React from 'react';
import PropTypes from 'prop-types';

function ButtonPlay(props) {
  function handleButtonPlayClick() {
    props.onButtonPlayClick();
  }

  return (
    <div>
      <button onClick = {handleButtonPlayClick}>Play</button>
    </div>
  );
}

ButtonPlay.propTypes = {
  onButtonPlayClick: PropTypes.func
};

export default ButtonPlay;
