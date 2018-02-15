import React from 'react';
import PropTypes from 'prop-types';

function GameOver(props) {

  function handleNewPlayer() {
    props.onNewTamagotchi();
  }

  return (
    <div>
      <h1>It's dead... You killed it.</h1>
      <button>Want to try again?</button>
    </div>
  );
}

GameOver.propTypes = {
  onNewTamagotchi: PropTypes.func
};

export default GameOver;
