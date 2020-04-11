import React, { PureComponent } from "react";
import random from "random";
import { withAlert } from "react-alert";

import {
  Wrapper,
  Heading,
  WrapperContainer,
  SubHeading,
  ScoreContainer,
  Score,
  Circles,
  Circle,
  Buttons,
  Play,
  Stop
} from "./styles";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedRandom: 100,
      score: 0
    };
    this.handleOnClickPlay = this.handleOnClickPlay.bind(this);
    this.handleOnClickStop = this.handleOnClickStop.bind(this);
  }

  handleCircleClick = index => event => {
    const { selectedRandom, score } = this.state;
    const { alert } = this.props;
    let newScore = score;
    if (selectedRandom === 100) {
      alert.show("Please click on the Play button");
    } else {
      if (selectedRandom !== index) {
        newScore = newScore - 1;
        this.setState({ score: newScore });
        alert.error("Wrong selection");
      } else {
        newScore = newScore + 1;
        this.setState({ score: newScore });
        alert.success("Correct circle selected");
        const randomNumber = random.int(1, 36);
        this.setState({ selectedRandom: randomNumber });
      }
    }
  };

  handleOnClickPlay() {
    const randomNumber = random.int(1, 36);
    this.setState({ selectedRandom: randomNumber });
  }

  handleOnClickStop() {
    const { alert } = this.props;
    const { score } = this.state;
    this.setState({ selectedRandom: 100 });
    alert.show(`Your final score is ${score}`);
  }

  render() {
    const { selectedRandom, score } = this.state;
    return (
      <Wrapper>
        <WrapperContainer>
          <Heading>Hit The Circle</Heading>
          <SubHeading>Test your skill how many circles you can hit?</SubHeading>
          <ScoreContainer>
            Score: <Score value={score} />
          </ScoreContainer>
          <Circles>
            {[...new Array(36)].map((a, index) => (
              <Circle key={index} onClick={this.handleCircleClick(index + 1)} />
            ))}
          </Circles>
          <Buttons>
            <Play
              onClick={this.handleOnClickPlay}
              disabled={selectedRandom !== 100}
            >
              Play
            </Play>
            <Stop
              onClick={this.handleOnClickStop}
              disabled={selectedRandom === 100}
            >
              Stop
            </Stop>
          </Buttons>
        </WrapperContainer>
      </Wrapper>
    );
  }
}

export default withAlert()(Container);
