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
    content:
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",
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
      "url(https://static.wikia.nocookie.net/starwars/images/c/c8/SW_franchise_mural_OT.jpg/revision/latest?cb=20211101032806)",
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

function loadQuotes() {
  if (index < quotes.length) {
    roomText.textContent = quotes[`${index}`].content;
    response.textContent = quotes[`${index}`].author;
    containerDiv.style.background = quotes[`${index}`].imgSource;
    index++;
  } else {
    index = 1;
  }
}

setInterval(loadQuotes, 3000);
