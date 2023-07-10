import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideTime: false,
      minutes: props.startingMin,
      minutesPlueOne: props.startingMin,
      seconds: 60,
      secondsRemaining: props.startingMin * 60
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    const min = Math.floor(this.state.secondsRemaining / 60);
    const minPlusOne = Math.ceil(this.state.secondsRemaining / 60);
    const sec = this.state.secondsRemaining - (min * 60);

    this.setState({ minutes: min, seconds: sec, minutesPlueOne: minPlusOne });

    if (sec < 10) {
      this.setState({ seconds: `0${sec}` });
    }

    if (min < 10) {
      this.setState({ minutes: `0${min}` });
    }

    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 }, () => {
      if (this.state.secondsRemaining === 0) {
        this.props.forceEndTest();
      }
    });
  }

  renderTime() {
    if (this.state.hideTime) {
      return (
        <span>Click to show time</span>
      )
    } else {
      return (
        <span>
          <span className='show-hover'><span className='font-big'>{this.state.minutes}:{this.state.seconds} </span>left</span>
          <span className='hide-hover'><span className='font-big'>{this.state.minutesPlueOne} </span>minutes left</span>
        </span>
      )
    }
  }

  render() {
    const flash = (((this.state.secondsRemaining <= 600 && this.state.secondsRemaining >= 596) || (this.state.secondsRemaining <= 300 && this.state.secondsRemaining >= 296))
     && !this.state.hideTime) ? true : false;

    return (
      <span
        onClick={() => this.setState({ hideTime: !this.state.hideTime })}
        className={`timer-container ${ flash ? 'flash': ''} ${(this.state.secondsRemaining <= 300 && !this.state.hideTime) ? 'red': ''}`}
      >
        {this.renderTime()}
      </span>
    );
  }
}

export default Timer;
