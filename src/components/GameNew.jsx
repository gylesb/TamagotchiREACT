import React from 'react';
import NewTama from './NewTama';

class GameNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewPlayer: true
    };

    this.handleNewPlayer = this.handleNewPlayer.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewPlayer() {
    this.setState({isNewPlayer: true});
  }

  handleNewGame() {
    this.setState({isNewPlayer: false});
  }

  render() {
    let content = null;
    if (this.state.isNewPlayer){
      content = <NewTama onNewGame = {this.handleNewGame} onNewTamagotchi = {this.props.onNewTamagotchi} />;
    } else {
      content = <GameOver onNewTamagotchi = {this.handleNewPlayer} />;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

GameNew.propTypes = {
  onNewTamagotchi: PropTypes.func
};

export default GameNew;
