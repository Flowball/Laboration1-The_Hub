const roomSubtext = document.querySelector("#roomSubText");
function loadDiceGame() {
  if (playerState.roomNr === "room2") {
    const diceOne = Math.ceil(Math.random() * 6);
    const diceTwo = Math.floor(Math.random() * 6);
    //temp throwdice
    throwDices();
  }
}

function throwDices() {
  const diceOne = Math.ceil(Math.random() * 6);
  const diceTwo = Math.ceil(Math.random() * 6);

  const numberDiv1 = document.querySelector(".numberDiv1");
  const numberDiv2 = document.querySelector(".numberDiv2");

  numberDiv1.textContent = diceOne;
  numberDiv2.textContent = diceTwo;
}
