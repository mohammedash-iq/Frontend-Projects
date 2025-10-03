const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.getElementById("question");
const questionNumberElement = document.getElementById("question-number");
const startContainer = document.querySelector(".start-container");
const resultContainer = document.querySelector(".result-container");
const resultTextElement = document.getElementById("result-text-element");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const scoreDisplay = document.getElementById("score-display");
const optionsContainer = document.querySelector(".answer-container");
const progressBar = document.querySelector(".progress");
let score = 0;
let count = 1;
const questions = {
  1: {
    question: "What is the capital of France?",
    options: {
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
    },
    answer: "c",
  },
  2: {
    question: "What is 2 + 2?",
    options: {
      a: "3",
      b: "4",
      c: "5",
      d: "6",
    },
    answer: "b",
  },
  3: {
    question: "what is the capital of India?",
    options: {
      a: "Delhi",
      b: "Mumbai",
      c: "Kolkatta",
      d: "Pune",
    },
    answer: "a",
  },
};

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  startContainer.style.display = "none";
  quizContainer.style.display = "block";
  count = 1;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  manageProgressBar();
  if (count > Object.keys(questions).length) {
    quizContainer.style.display = "none";
    loadResults();
    return;
  }
  questionElement.innerText = questions[count].question;
  scoreDisplay.innerText = `Score: ${score}`;
  questionNumberElement.innerText = `${count} of ${
    Object.keys(questions).length
  }`;
  optionsContainer.innerHTML = `
    <button class="option-btn" data-option="a">${questions[count].options.a}</button>
    <button class="option-btn" data-option="b">${questions[count].options.b}</button>
    <button class="option-btn" data-option="c">${questions[count].options.c}</button>
    <button class="option-btn" data-option="d">${questions[count].options.d}</button>`;
  let optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((button) => {
    button.addEventListener("click", selectOption);
  });
}
function selectOption(event) {
  if (event.target.dataset.option === questions[count].answer) {
    event.target.classList.add("correct");
    score++;
    count++;
    manageProgressBar();
    setTimeout(() => {
      loadQuestion();
    }, 500);
  } else {
    event.target.classList.add("incorrect");
    count++;
    manageProgressBar();
    setTimeout(() => {
      loadQuestion();
    }, 500);
  }
}

function loadResults() {
  resultContainer.style.display = "block";
  resultTextElement.innerHTML = `Your final score is ${score} out of ${
    Object.keys(questions).length
  }`;
}

restartButton.addEventListener("click", restartQuiz);
function restartQuiz() {
  resultContainer.style.display = "none";
  quizContainer.style.display = "none";
  startContainer.style.display = "block";
}

function manageProgressBar() {
  progressBar.style.width = `${
    ((count - 1) / Object.keys(questions).length) * 100
  }%`;
}
