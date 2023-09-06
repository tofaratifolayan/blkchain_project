import React from "react";
// import '../styles/RandomColors.css'

export default function RandomColors() {
  // This variable stores the "Pick a Color" button
  let button = document.getElementById("color-button");

  // This variable stores the "Mystery Color" button
  let mysteryButton = document.getElementById("next-button");

  // This random number function will create color codes for the randomColor variable
  function colorValue() {
    return Math.floor(Math.random() * 256);
  }

  function colorChange(event) {
    let randomColor =
      "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
    event.target.style.backgroundColor = randomColor;
  }

  button.addEventListener("click", colorChange);
  mysteryButton.addEventListener("wheel", colorChange);

  return (
    <section id="container">
      <img src="http://pngimg.com/uploads/rainbow/rainbow_PNG5580.png" />
      <h1>Random Color Generator</h1>
      <p>Find your new favorite color!</p>
      <button id="color-button">Pick a Color</button>
      <button id="next-button">Mystery Color</button>
    </section>
  );
}
