const quizData = [
  {
    question: "What is the capital city of France?",
    a: "A. London",
    b: "B. Paris",
    c: "C. Rome",
    d: "D. Berlin",
    correct: "b",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Jupiter",
    c: "Mars",
    d: "Venus",
    correct: "c",
  },
  {
    question: "Who was the first president of the United States?",
    a: "George Washington",
    b: "Abraham Lincoln",
    c: "Thomas Jefferson",
    d: "John Adams",
    correct: "a",
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    a: "Asia",
    b: "Africa",
    c: "Australia",
    d: "South America",
    correct: "b",
  },
  {
    question: "What is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d",
  },
  {
    question: "What is the official language of Brazil?",
    a: "Spanish",
    b: "Portuguese",
    c: "French",
    d: "English",
    correct: "b",
  },
  {
    question: "Which of the following is a renewable resource?",
    a: "Coal",
    b: "Oil",
    c: "Solar energy",
    d: "Natural gas",
    correct: "c",
  },
  {
    question: "Which country is known for the Great Wall?",
    a: "Japan",
    b: "China",
    c: "India",
    d: "Russia",
    correct: "b",
  },
  {
    question: "Which of these is a symbol of peace?",
    a: "Lion",
    b: "Eagle",
    c: "Dove",
    d: "Shark",
    correct: "c",
  },
  {
    question: "What is the main language spoken in Egypt?",
    a: "Arabic",
    b: "Hebrew",
    c: "English",
    d: "Swahili",
    correct: "a",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".option");
const currentQuestionEl = document.getElementById("current-qtn");
const totalQuestions = document.getElementById("total-qtns");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("results");
const scoreEl = document.getElementById("score");
const quiz = document.getElementById("quiz");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  try {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    currentQuestionEl.textContent = currentQuestion;
    totalQuestions.textContent = quizData.length;

    optionsEls.forEach((option) => {
      const answer = option.getAttribute("data-answer");
      option.textContent = currentQuizData[answer];
    });
  } catch (error) {
    console.log("Error loading question:", error);
  }
}

function selectAnswer(e) {
  try {
    const selectedAnswer = e.target.getAttribute("data-answer");
    console.log("Selected Answer", selectedAnswer);
    const correctAnswer = quizData[currentQuestion].correct;
    console.log("Correct Answer", selectedAnswer);
    if (selectedAnswer === correctAnswer) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  } catch (error) {
    console.log("Error processing answer:", error);
  }
}

function endQuiz() {
  try {
    currentQuestion = 0;
    score = 0;
    quiz.style.display = "none";
    resultEl.style.display = "block";
    scoreEl.style.display = score;
  } catch (error) {
    console.log("Error restarting quiz:", error);
  }
}

function restartQuiz() {
  try {
    currentQuestion = 0;
    score = 0;
    quiz.style.display = "block";
    resultEl.style.display = "none";
  } catch (error) {
    console.log(`Error restarting quiz:`, error);
  }
}

nextBtn.addEventListener("click", () => {
  console.log("Button clicked");
  loadQuestion();
});

optionsEls.forEach((option) => {
  option.addEventListener("click", selectAnswer);
});

restartBtn.addEventListener("click", restartQuiz);

loadQuestion();

console.log("Score", score);
