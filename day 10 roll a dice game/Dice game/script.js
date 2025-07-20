"Use strict";
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");
const score0el = document.getElementById("score--0");
const score1el = document.getElementById("score--1");
const current0el = document.getElementById("current--0");
const current1el = document.getElementById("current--1");
const diceel = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let activePlayer, currentScore, playing, scores;
const initial = function () {
  player0el.classList.remove("player--winner");
  player1el.classList.remove("player--winner");
  diceel.classList.add("hidden");
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  score0el.textContent = 0;
  score1el.textContent = 0;
  player0el.classList.add("player--active");
  player1el.classList.remove("player--active");
  current0el.textContent = 0;
  current1el.textContent = 0;
};
initial();
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0el.classList.toggle("player--active");
  player1el.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1; //generate random no
    diceel.classList.remove("hidden");
    console.log(dice);
    diceel.src = `dice${dice}.png`;

    if (dice !== 1) {
      //checking if random is !1
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    diceel.classList.add("hidden");
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceel.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceel.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", initial);
