import React from 'react';
import PropTypes from 'prop-types';

function ButtonEat(props) {
  function handleButtonEatClick() {
    props.onButtonEatClick();
  }

  return (
    <div>
      <button onClick = {handleButtonEatClick}>Feed</button>
    </div>
  );
}

ButtonEat.propTypes = {
  onButtonEatClick: PropTypes.func
};

export default ButtonEat;
