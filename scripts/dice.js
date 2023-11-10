const roomSubtext = document.querySelector("#roomSubText");
const diceBtn = document.createElement("button");
const container = document.querySelector("#container");
function loadDiceGame() {
  if (playerState.roomNr === "room2") {
    const diceOne = Math.ceil(Math.random() * 6);
    const diceTwo = Math.floor(Math.random() * 6);
    //temp throwdice
    diceBtn.textContent = "Slå tärning";
    roomSubtext.append(diceBtn);
  }
}

diceBtn.addEventListener("click", throwDices);
function throwDices() {
  const diceOne = Math.ceil(Math.random() * 6);
  const diceTwo = Math.ceil(Math.random() * 6);
  if (diceDiv.classList.contains("hide")) {
    diceDiv.classList.toggle("diceDiv");
    diceDiv.classList.toggle("hide");
  }
  const numberDiv1 = document.querySelector(".numberDiv1");
  const numberDiv2 = document.querySelector(".numberDiv2");

  const keepBtn = document.createElement("button");
  keepBtn.textContent = "Behåll?";
  container.append(keepBtn);

  numberDiv1.textContent = diceOne;
  numberDiv2.textContent = diceTwo;
}
