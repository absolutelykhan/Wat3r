import React from "react";
import Drink from "./drink.jpg";

const Info = () => {
  return (
    <div class="row">
      <div class=" col9 offset col3 s12">
        <h2 class="header blue-text">The Math Behind</h2>
        <div class="container card horizontal blue-grey darken-3">
          <div class="card-image">
            <img src={Drink} alt="Wat3r Logo" />
          </div>
          <div class="card-stacked">
            <div class="card-content teal-text">
              <p>One sip of water contains ≈ 21 ml of water.</p>
              <br />
              <p>
                So that you need 12 sips of water in an hour. On average, a
                person take 4 sips of when drinking water. With that logic you
                will be reminded thrice to drink water in an hour and throughout
                the 8 hours of work.
              </p>
              <br />
              <p>Stay Hydrated!</p>
            </div>
            <div class="card-action">
              <a href="/">Click here to go Back</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
