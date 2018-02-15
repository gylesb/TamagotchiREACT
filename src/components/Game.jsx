import React from 'react';
import ButtonEat from './ButtonEat';
import ButtonKill from './ButtonKill';
import ButtonSleep from './ButtonSleep';
import ButtonPlay from './ButtonPlay';
import PropTypes from 'prop-types';


function Game(props) {
  return (
    <div>
      <h3>{props.myTamagotchi.name}</h3>
      <ul>
        <li>Fun: {props.myTamagotchi.fun}</li>
        <li>Hunger: {props.myTamagotchi.hunger}</li>
        <li>Energy: {props.myTamagotchi.energy}</li>
        <li>Mystery: {props.myTamagotchi.kill}</li>
      </ul>
      <ButtonPlay onButtonPlayClick={props.onButtonPlayClick} />
      <ButtonEat onButtonEatClick={props.onButtonEatClick} />
      <ButtonSleep onButtonSleepClick={props.onButtonSleepClick} />
      <ButtonKill onButtonKillClick={props.onButtonKillClick} />
    </div>
  );
}

Game.propTypes = {
  onButtonPlayClick: PropTypes.func,
  onButtonEatClick: PropTypes.func,
  onButtonSleepClick: PropTypes.func,
  onButtonKillClick: PropTypes.func,
  myTamagotchi: PropTypes.object
};

export default Game;
