import React, { Component } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Modal from "./Components/Modal";
class App extends Component {
  state = {
    //if a player Win winOrDraw get winner name,also if draw and Modal Comes! ; untill null not changed game keeping on;
    WinOrDraw: null,
    players: [
      { name: "playerOne", id: 1, playerTurn: true },
      { name: "playerTwo", id: 2, playerTurn: false }
    ],
    //win Posibility
    win: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ],
    // This line create an array by 9 keys and each keys have NULL value;
    playerChoice: Array(9).fill(null)
  };

  //Player Turns to false and true
  playerTurn = () => {
    const player = this.state.players;
    const playerIsTrue = player.find(item => item.playerTurn === true);
    const playerIsFalse = player.find(item => !item.playerTurn);
    const TurnPlayerIsTrueToFalse = !playerIsTrue.playerTurn;
    const TurnPlayerIsFalseToTrue = !playerIsFalse.playerTurn;
    this.setState(() => {
      playerIsTrue.playerTurn = TurnPlayerIsTrueToFalse;
      playerIsFalse.playerTurn = TurnPlayerIsFalseToTrue;
    });
  };

  //Player Win Or Draw
  playerWinOrDraw = () => {
    const Choice = this.state.playerChoice;
    const draw = Choice.filter(item => item !== null);
    const winPosibilities = this.state.win;
    for (let i = 0; i < winPosibilities.length; i++) {
      //Win Condition
      const [a, b, c] = winPosibilities[i];
      if (Choice[a] && Choice[a] === Choice[b] && Choice[a] === Choice[c]) {
        this.setState({
          WinOrDraw: Choice[a]
        });
      }
      //Draw Condition
      if (
        draw.length === 9 &&
        Choice[a] &&
        Choice[a] !== Choice[b] &&
        Choice[a] !== Choice[c]
      ) {
        this.setState({
          WinOrDraw: "Draw"
        });
      }
    }
  };
  // Handle Players Click;
  handlePlayersClick = choosedNum => {
    const player = this.state.players;
    const playerIsTrue = player.find(item => item.playerTurn === true);
    this.playerTurn();
    if (playerIsTrue.id === 1) {
      const playerChoice = this.state.playerChoice;
      playerChoice.splice(choosedNum, 1, "X");
    } else if (playerIsTrue.id === 2) {
      const playerChoice = this.state.playerChoice;
      playerChoice.splice(choosedNum, 1, "O");
    }
    this.playerWinOrDraw();
  };

  // Handle Start Game After Draw Or Win;
  StartAgain = () => {
    if (this.state.WinOrDraw !== null) {
      this.setState({
        players: [
          { name: "playerOne", id: 1, playerTurn: true },
          { name: "playerTwo", id: 2, playerTurn: false }
        ],
        playerChoice: Array(9).fill(null),
        playerTwoChoice: [],
        WinOrDraw: null
      });
    }
  };

  render() {
    return (
      <div>
        <div className="title">
          <h1>X-O Game</h1>
          <h3>Made By Sajjad Naseri Zadeh</h3>
          <h5>Githib and Instagram and linkedin and twitter : @sajjadatma</h5>
        </div>
        <div className="game_area">
          <div>
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(0)}
              winOrDraw={this.state.WinOrDraw}
            />
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(1)}
              winOrDraw={this.state.WinOrDraw}
            />
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(2)}
              winOrDraw={this.state.WinOrDraw}
            />
          </div>
          <div>
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(3)}
              winOrDraw={this.state.WinOrDraw}
            />
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(4)}
              winOrDraw={this.state.WinOrDraw}
            />
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(5)}
              winOrDraw={this.state.WinOrDraw}
            />
          </div>
          <div>
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(6)}
              winOrDraw={this.state.WinOrDraw}
            />
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(7)}
              winOrDraw={this.state.WinOrDraw}
            />
            <Cart
              players={this.state.players}
              playerClick={() => this.handlePlayersClick(8)}
              winOrDraw={this.state.WinOrDraw}
            />
          </div>
        </div>
        {this.state.WinOrDraw !== null ? (
          <Modal
            winOrDraw={this.state.WinOrDraw}
            startAgain={this.StartAgain}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
