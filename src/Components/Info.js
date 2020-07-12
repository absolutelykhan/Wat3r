import React from "react";
import Drink from "./drink.jpg";

const Info = () => {
  return (
    <div className="row">
      <div className=" col9 offset col3 s12">
        <h2 className="header blue-text">The Math Behind</h2>
        <div
          className="card medium horizontal blue-grey darken-3 medium-card"
          style={{ height: "550px" }}
        >
          <div className="card-image">
            <img src={Drink} alt="Wat3r Logo" />
          </div>
          <div className="card-stacked">
            <div className="card-content white-text left-align">
              <p>
                Currently, no official recommendations exist for the intake of
                plain water alone. The amount you need is based on several
                factors, such as age, gender, and activity level.However, there
                are recommendations for total water intake, which includes water
                consumed through all foods and beverages, such as plain water,
                fruits, and vegetables. A total daily intake of around 2.7
                liters (91 ounces) for women and 3.7 liters (125 ounces) for men
                can meet most adults’ needs. Depending on the other foods and
                beverages you consume, you may not need to drink 3 liters (100
                ounces) of water per day to meet your fluid requirements. Simply
                listening to your body and drinking when you feel thirsty is one
                of the best ways to ensure that you’re staying hydrated. In
                fact, most people can meet their daily needs by drinking water
                when they’re thirsty (19). Notably, some individuals, such as
                athletes and manual laborers, may need more than 3 liters (100
                ounces) of water per day
              </p>
              <br />
              <p>
                Keep in mind that excessive water intake can be dangerous.
                Drinking too much can disrupt your body’s electrolyte balance,
                leading to hyponatremia, or low levels of sodium in your blood .
                Symptoms of hyponatremia include weakness, confusion, nausea,
                vomiting, and — in severe cases — even death. Although your
                kidneys can excrete up to 20–28 liters (4.5–6 gallons) of water
                per day, they can only process 800–1,000 ml (27–34 ounces) of
                water per hour (23Trusted Source). For this reason, it’s
                important to spread your water intake throughout the day rather
                than drink it all in a single sitting. Additionally, be sure to
                listen to your body and adjust your water intake accordingly if
                you’re feeling unwell.
              </p>
              <br />
              <p>
                You will be reminded every 20 minutes to drink water throughout
                the day. Stay Hydrated!
              </p>
            </div>
            <div className="card-action">
              <a href="/">Click here to go Back</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
