import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import GameNew from './GameNew';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleButtonEatClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.eat++;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleButtonPlayClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.fun++;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleButtonSleepClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.rest++;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleButtonKillClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.kill++;
    this.setState({tamagotchi: newTamagotchi});
  }

  render() {
    return(
      <div>
        <style jsx global>{`
          body {
            font-family: Trebuchet MS;
            padding: 30px;
            background-color: #80DAFF;
          }
        `}</style>
        <Header/>
        <Switch>
          <Game onButtonPlayClick = {this.handleButtonPlayClick} onButtonEatClick = {this.handleButtonButtonClick} onButtonSleepClick = {this.handleButtonSleepClick} onButtonKillClick = {this.handleButtonKillClick} myTamagotchi = {this.state.tamagotchi} />
          <GameNew onNewTamagotchi = {this.handleNewTamagotchi} />
          <Route component = {Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
