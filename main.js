import "./style.css";
import logo from "/logo.svg";

import { setupCounter } from "./counter";

document.querySelector("#app").innerHTML = /* html */ `
  <div>
    <a href="https://abeltran.co.uk" target="_blank">
      <img src="${logo}" class="logo" alt="Amparo Beltran web developer logo" />
    </a>
    <h1>Score Board</h1>
   
    <div class="container"> </div>
<div class="new-game" id="newGame">
  <button class="new-game-btn" type="button">New game</button>
</div>
  `;

setupCounter(document.querySelector(".container"), "home");
setupCounter(document.querySelector(".container"), "guest");
