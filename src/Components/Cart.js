import React, { Component } from "react";
import "./Cart.css";
class Cart extends Component {
  state = {
    playerTurn: ""
  };

  getItem = Player => {
    const player = Player.find(item => item.playerTurn === true);
    this.setState({
      playerTurn: player.name
    });
    if (this.props.winOrDraw !== null) {
      this.setState({
        playerTurn: ""
      });
    }
  };
  componentWillReceiveProps() {
    if (this.props.winOrDraw !== null) {
      this.setState({
        playerTurn: ""
      });
    }
  }
  render() {
    const O = <div className="O"></div>;
    const X = <div className="X"></div>;
    return (
      <div
        disabled={this.state.playerTurn !== ""}
        className="Cart"
        onClick={
          this.state.playerTurn === ""
            ? () => {
                this.getItem(this.props.players);
                this.props.playerClick();
              }
            : null
        }
      >
        {this.state.playerTurn === "playerOne"
          ? X
          : this.state.playerTurn === "playerTwo"
          ? O
          : null}
      </div>
    );
  }
}

export default Cart;
