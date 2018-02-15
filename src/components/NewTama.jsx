import React from 'react';
import PropTypes from 'prop-types';

function NewTama(props) {
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchi({name: _name.value, hunger: 100, fun: 100, energy: 100, mystery: 0});
    _name.value = '';
    props.onNewGame();
  }

  return (
    <div>
      <form onSubmit = {handleNewTamagotchiFormSubmission}>
        <input
          type = 'text'
          id = 'name'
          placeholder = 'What is its name?'
          ref = {(input) => {_name = input;}}
        />
        <button type = 'submit'>Begin</button>
      </form>
    </div>
  );
}

NewTama.propTypes = {
  onNewGame: PropTypes.func,
  onNewTamagotchi: PropTypes.func
};

export default NewTama;
