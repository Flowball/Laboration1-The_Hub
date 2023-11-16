/** Function to display emojis from data-object where you click on the screen */
function painting() {
  const circle = document.createElement("div");
  const canvas = document.querySelector(".canvas");
  console.log(canvas);
  circle.classList = "circle";

  document.addEventListener("click", (e) => {
    circle.textContent = icons[iconIndex];
    iconIndex++;
    if (iconIndex >= icons.length) {
      iconIndex = 0;
    }

    let xPos = e.x;
    let yPos = e.y;
    circle.style.left = xPos + "px";
    circle.style.top = yPos + "px";
    canvas.append(circle.cloneNode(true));
  });

  let iconIndex = 0;
  let icons = [
    "👍",
    "🔪",
    "👩🏻‍🎤",
    "🥺",
    "🤓",
    "👹",
    "🤡",
    "🎃",
    "🤳",
    "🍌",
    "🇸🇪",
  ];
}
