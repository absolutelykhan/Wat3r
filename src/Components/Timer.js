import React, { Component, useEffect } from "react";
import "materialize-css";
import UIfx from "uifx";
import drinkAudio from "./DrinkW.mp3";

const jingle = new UIfx(drinkAudio, {
  volume: 0.6,
  trottleMs: 100,
});

const defaultState = {
  minutes: 20,
  seconds: 0,
  isTimerForBreak: false,
};

const breaktimeState = {
  minutes: 0,
  seconds: 40,
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
            jingle.play();
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
      <div className="container">
        <div className="row">
          <div className="col9 s12">
            <div className="card blue-grey darken-3 medium-card">
              <div className="card-content justified amber-text">
                {isTimerForBreak ? (
                  <div>
                    <h3>Time to drink Water!</h3>
                  </div>
                ) : (
                  <h1>
                    Time Remaining: {minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </h1>
                )}
                <div className="card-action">
                  <div className="col xs4 center-align">
                    <a
                      style={{
                        color: "lightsalmon",
                        textTransform: "uppercase",
                      }}
                      href="/"
                    >
                      Click here to go Back
                    </a>
                  </div>
                  <div className="col xs4 center-align">
                    <a
                      style={{
                        color: "salmon",
                        textTransform: "uppercase",
                      }}
                      href="/"
                    >
                      Click here to End your Day
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
