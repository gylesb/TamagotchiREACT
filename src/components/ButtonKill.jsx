import React from 'react';
import PropTypes from 'prop-types';

function ButtonKill(props) {
  function handleButtonKillClick() {
    props.onButtonKillClick();
  }

  return (
    <div>
      <button onClick = {handleButtonKillClick}>Don't press me.</button>
    </div>
  );
}

ButtonKill.propTypes = {
  onButtonKillClick: PropTypes.func
};

export default ButtonKill;
