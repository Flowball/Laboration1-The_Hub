/** Item used for quotes,  */
const quotes = [
  {
    quote: 0,
    content: "A rose by any other name would smell as sweet.	",
    author: "William Shakespeare",
    imgSource:
      "url(https://images.bonnier.cloud/files/phi/production/2021/07/29112633/william_shakespeare_med_vanner_john_faed-9OqWllCRyaIQFEshI7ULJw.jpg?max-w=1200&max-h=630&fit=crop)",
  },
  {
    quote: 0,
    content: "Not all those who wander are lost.",
    author: "J. R. R. Tolkein",
    imgSource:
      "url(https://media.tacdn.com/media/attractions-splice-spp-674x446/07/74/88/a0.jpg)",
  },
  {
    quote: 0,
    content: "Out of the mountain of despair, a stone of hope.",
    author: "Martin Luther King",
    imgSource:
      "url(https://media.npr.org/assets/img/2017/01/15/king-speech_custom-55a36ccca2c18277f6560b860375bd766a40c22d-s1100-c50.jpg)",
  },
  {
    quote: 0,
    content: "If you are going through hell, keep going.",
    author: "Winston Churchill",
    imgSource:
      "url(https://www.historic-uk.com/wp-content/uploads/2018/11/churchill-2800x1440.jpg)",
  },
  {
    quote: 0,
    content: "May the Force be with you.	",
    author: "Star Wars",
    imgSource:
      "url(https://filmtopp.imgix.net/media/2020/10/StarWars.jpg?w=900&h=700&crop=top&auto=format&s=a4be6a4f367108e304fd30c5d1104ca9)",
  },
  {
    quote: 0,
    content: "Speak softly and carry a big stick ",
    author: "Theodore Roosevelt",
    imgSource:
      "url(https://assets.editorial.aetnd.com/uploads/2022/04/teddy-roosevelt-gettyimages-515467118.jpg)",
  },
];

var index = 0;
/** Function to loop through data and add classes, then loaded with the help of setInterval below */
function loadQuotes() {
  if (playerState.roomNr === "room4") {
    if (index < quotes.length) {
      roomText.textContent = quotes[`${index}`].content;
      response.textContent = quotes[`${index}`].author;
      containerDiv.style.background = quotes[`${index}`].imgSource;
      containerDiv.style.backgroundSize = "100% 100%";
      containerDiv.height = "50%";
      roomText.style.backgroundColor = "rgb(125, 62, 62)";
      roomText.style.padding = "15px";
      roomText.style.textAlign = "center";
      response.style.background = "white";
      response.style.color = "black";
      response.style.padding = "15px";
      index++;
    } else {
      index = 1;
    }
  }
}

setInterval(loadQuotes, 5000);
