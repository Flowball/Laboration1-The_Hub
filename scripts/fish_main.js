/** Render species from data-sheet onto site (data sheet --> species_data.js*/
function loadSpecies() {
  const fishContainer = document.createElement("div");
  fishContainer.classList = "fishContainer";
  document.body.append(fishContainer);
  const cardsDiv = document.createElement("div");
  fishContainer.append(cardsDiv);
  for (myObject of species) {
    cardsDiv.classList = "cards";
    const cardDiv = document.createElement("div");
    const imageDiv = document.createElement("div");
    const cardInfo = document.createElement("div");
    const imgTag = document.createElement("img");
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    imgTag.src = myObject.imgSource;
    p.textContent = myObject.speciesName;
    p1.textContent = myObject.latinName;
    p2.textContent = myObject.description;
    cardInfo.classList = "cardInfo";
    imageDiv.classList = "image";
    cardDiv.classList = "card";
    cardDiv.id = "card";
    p.classList = "cardTitle";
    p1.classList = "cardLatinName";
    p2.classList = "cardDesc";
    cardInfo.append(p, p1, p2);
    imageDiv.append(imgTag);
    cardsDiv.append(cardDiv);
    cardDiv.append(imageDiv, cardInfo);
  }
}
