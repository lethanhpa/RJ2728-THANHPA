import React, { Component } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

type Props = {};

type State = {
  isLike: boolean;
};

class LikeButton extends Component<Props, State> {
  state = {
    isLike: false,
  };

  handleLike = () => {
    console.log("handleLike");
    this.setState((state) => ({
      isLike: !state.isLike,
    }));
  };

  render() {
    return (
      <div onClick={() => this.handleLike()}>
        {this.state.isLike ? <AiFillDislike /> : <AiFillLike />}
      </div>
    );
  }
}

export default LikeButton;
