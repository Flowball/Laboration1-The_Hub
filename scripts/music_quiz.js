/** Object for items used for music quiz */
const someMusic = [
  {
    question: "Vem är artisten som sjunger denna låt?",
    musicId: 0,
    songTitle: "Post Malone - Mourning",
    source: "audio/post_malone.mp3",
    correct: "POST MALONE",
  },
  // {
  //   question: "Vem är artisten ?????",
  //   musicId: 1,
  //   songTitle: "Kent - En helt ny karriär II",
  //   source: "audio/kent.mp3",
  //   correct: "KENT",
  // },
];

/** Music quiz function, takes data from music - object, data displayed and returned based on below logic  */
const playBtn = document.querySelector("#musicBtn-1");
const guessInput = document.querySelector("#guessInput");
let songIndex = 0;

playBtn.addEventListener("click", startMusicQuiz);

function startMusicQuiz() {
  let songSource = someMusic[`${songIndex}`].source;
  secondResponse.textContent = "";
  playBtn.textContent = "PLAY";
  playMusic(songSource);
  guessInput.classList.remove("hide");
  response.textContent = someMusic[`${songIndex}`].question;
  guessInput.addEventListener("change", () => {
    if (guessInput.value.toUpperCase() === someMusic[`${songIndex}`].correct) {
      secondResponse.textContent = `🥳korrekt svar!🍾`;
      playBtn.remove();
      response.textContent = "";
      playBtn.addEventListener("click", () => {
        songIndex++;
        startMusicQuiz();
      });
    } else {
      secondResponse.textContent = `fel svar... prova igen!`;
    }
  });
}

function playMusic(songSource) {
  var audio = new Audio(songSource);
  audio.play();
}
