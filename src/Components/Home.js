import React, { Component } from "react";
import "materialize-css";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col9 s12">
            <div class="card blue-grey darken-3 medium-card">
              <div class="card-content justified white-text">
                <span class="card-title center amber-text">
                  This will remind you to Drink Water
                </span>
                <div class="post">
                  <br />
                  <p>
                    Research suggests you should drink 3 liters of water a day.
                    If you work 8 hours a day, this will approximate to drink 2
                    liters in those 8 hours. So that is approximately 250
                    milliliters in an hour. This includes other fluids like Tea
                    and Coffee.
                  </p>
                  <br />
                  <p>
                    Drinking enough water is important for many aspects of
                    health, including body temperature, nutrient transport, and
                    brain function.
                  </p>
                  <br />
                  <p>
                    Click the button below when you start your 8 hour work day.
                    The timer will remind you to drink water.
                  </p>
                </div>
              </div>
              <div
                class="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  display: "flex",
                }}
              >
                <div class="col xs4 center-align ">
                  <a
                    style={{ color: "orange", textTransform: "uppercase" }}
                    href="https://www.healthline.com/nutrition/3-liters-of-water#general-health"
                    target="_blank"
                  >
                    Click here for the article
                  </a>
                </div>
                <div class="col xs4 center-align">
                  <a
                    style={{ color: "orange", textTransform: "uppercase" }}
                    href="/info"
                  >
                    Click here for the math
                  </a>
                </div>
                <div class="col xs4 center-align">
                  <a
                    class="waves-effect waves-grey btn btn-small"
                    href="/timer"
                  >
                    Start your Work Day!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
