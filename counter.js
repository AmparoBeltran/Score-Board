export function setupCounter(container, label) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = label;
  card.innerHTML += `<h1>${label.toUpperCase()}</h1>
    <div class="counter-container"></div>
    <div class="btns-container">
     <button class="add" type="button">+1</button>
    <button class="add" type="button">+2</button>
    <button class="add" type="button">+3</button>
   </div>`;
  container.appendChild(card);
  const counterEl = document.querySelector(`#${label} > .counter-container`);
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    counterEl.innerHTML = `${counter}`;
  };

  document.querySelectorAll(`#${label} .add`).forEach((item, index) => {
    item.addEventListener("click", (event) => {
      setCounter(counter + index + 1);
    });
  });

  setCounter(0);

  document.querySelector(".new-game-btn").addEventListener("click", () => {
    setCounter(0);
  });
}
