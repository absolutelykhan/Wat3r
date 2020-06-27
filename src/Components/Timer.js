import React, { Component } from "react";
import "materialize-css";

const defaultState = {
  minutes: 0,
  seconds: 30,
  isTimerForBreak: false,
};

const breaktimeState = {
  minutes: 0,
  seconds: 5,
  isTimerForBreak: true,
};
export default class Timer extends Component {
  state = defaultState;

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes, isTimerForBreak } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          //clearInterval(this.myInterval);
          if (isTimerForBreak === true) {
            this.setState(defaultState);
          } else {
            this.setState(breaktimeState);
          }
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds, isTimerForBreak } = this.state;
    return (
      <div>
        {isTimerForBreak ? (
          <h1>Time to drink Water!</h1>
        ) : (
          <h1>
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
    );
  }
}
