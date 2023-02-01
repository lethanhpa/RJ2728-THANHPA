import React, { Component } from "react";

type Props = {};

type State = {
  count: number;
};

class CountClass extends Component<Props, State> {
  timer: ReturnType<typeof setInterval> | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev: State) => ({ count: prev.count + 1 }));
    }, 1000);
  }

componentWillUnmount(): void {
    if (this.timer) {
        clearInterval(this.timer);
    }
}

  render() {
    return <div>CountClass : {this.state.count} </div>;
  }
}

export default CountClass;
