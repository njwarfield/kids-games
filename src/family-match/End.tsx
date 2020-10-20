import * as React from "react";

import { LaunchPad } from "../fireworks/launch";

interface IEndProps {}

type EndState = {
  launchPad: LaunchPad | null;
};

export default class End extends React.Component<IEndProps, EndState>
  implements IEndProps {
  constructor(props: IEndProps) {
    super(props);
    this.state = {
      launchPad: null
    };
  }

  componentDidMount() {
    const canvas = this.refs.canvas as HTMLCanvasElement
    const launchPad = new LaunchPad(canvas, window.innerHeight, window.innerWidth)
    if(launchPad) {
      this.setState({launchPad: launchPad})
      this.state.launchPad?.init()
    }
    
  }

  render() {
    return (
      <div>
        <div className="gameOver">
          <p className="message">You Won!</p>
          <a href="/family-match">Play again?</a>
        </div>
        <canvas id="end-fireworks" className="end-fireworks" ref="canvas">Test</canvas>
      </div>
    );
  }
}
