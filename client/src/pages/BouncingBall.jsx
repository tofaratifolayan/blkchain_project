import React from "react";
// import '../styles/BouncingBall.css'

export default function BouncingBall() {
  let ball = document.getElementById("float-circle");

  // Write your code below
  const up = () => {
    ball.style.bottom = "250px";
  };

  const down = () => {
    ball.style.bottom = "50px";
  };

  return (
    <div id="container">
      <h1>Ball Bounce</h1>
      <p>
        Let's dribble the ball on the platform using any key on your keyboard.
        Hold a key down to lift the ball, then release the key to drop the ball.
      </p>
      {/* <!--<button id='button'>Reset</button>--> */}
      <div id="float-circle" onKeyDown={up} onKeyUp={down}></div>
      <div id="platform"></div>
      <div id="floor"></div>
    </div>
  );
}
