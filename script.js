const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which programming language is known as the 'language of the web'?",
    options: ["Java", "Python", "JavaScript", "C#"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the purpose of CSS in web development?",
    options: ["Controlling the structure of a webpage", "Adding interactivity to a webpage", "Styling the appearance of a webpage", "Handling server-side logic"],
    correctAnswer: "Styling the appearance of a webpage",
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Question Language", "Sequential Query Language", "Structured Query Language", "Simplified Question Language"],
    correctAnswer: "Structured Query Language",
  },
  {
    question: "What is the purpose of a firewall in network security?",
    options: ["Ensuring physical security", "Preventing unauthorized access", "Improving internet speed", "Filtering spam emails"],
    correctAnswer: "Preventing unauthorized access",
  },
];

let currentQuestion = 0;
let score = 0;

const startButton = document.querySelector("button");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const questionsContainer = document.getElementById("questions");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  questionsContainer.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => selectOption(button, option));
    optionsContainer.appendChild(button);
  });

  updateButtons();
}

function selectOption(button, answer) {
  const currentQuizData = quizData[currentQuestion];
  optionsContainer.querySelectorAll("button").forEach((btn) => (btn.disabled = true));

  if (answer === currentQuizData.correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
    optionsContainer.querySelectorAll("button").forEach((btn) => {
      if (btn.innerText === currentQuizData.correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  nextBtn.disabled = false;
}

function nextQuestion() {
  clearOptionsStyles();
  currentQuestion++;
  if (currentQuestion === quizData.length - 1) {
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";
  }
  if (currentQuestion === quizData.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

function updateButtons() {
  nextBtn.disabled = true;
}

function submitQuiz() {
  showResults();
}

function showResults() {
  resultElement.innerText = `Your total score is: ${score} out of ${quizData.length}`;
  clearOptionsStyles();
}

function clearOptionsStyles() {
  optionsContainer.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("correct", "incorrect");
    btn.disabled = false;
  });
    }
