const questions = {
    Mathematics: [
        { question: "What is 2+2?", options: ["a. 3", "b. 4", "c. 5", "d. 6"], correct: "b" },
        { question: "What is 2+3?", options: ["a. 3", "b. 4", "c. 5", "d. 6"], correct: "c" },
        { question: "What is 2+4?", options: ["a. 3", "b. 4", "c. 5", "d. 6"], correct: "d" },
        { question: "What is 2+5?", options: ["a. 7", "b. 4", "c. 5", "d. 6"], correct: "a" },
        { question: "What is 2+1?", options: ["a. 3", "b. 4", "c. 5", "d. 6"], correct: "a" },
        // Add more Math questions here
    ],
    Elecs: [
        { question: "What is Ohm's Law?", options: ["a. V=IR", "b. E=mc^2", "c. F=ma", "d. P=IV"], correct: "a" },
        // Add more Elecs questions here
    ],
    GEAS: [
        { question: "What does CPU stand for?", options: ["a. Central Process Unit", "b. Central Processing Unit", "c. Computer Personal Unit", "d. Central Processor Unit"], correct: "b" },
        // Add more GEAS questions here
    ],
    EST: [
        { question: "What is the frequency range of the HF band?", options: ["a. 3-30 MHz", "b. 30-300 MHz", "c. 300-3000 MHz", "d. 3-30 GHz"], correct: "a" },
        // Add more EST questions here
    ]
};

let selectedSubject = '';
let selectedQuestions = [];
let currentQuestionIndex = 0;
let answeredCount = 0;
let correctCount = 0;
let wrongCount = 0;

function selectSubject(subject) {
    selectedSubject = subject;
    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('question-setup').style.display = 'block';
}

function setupQuestions(number) {
    selectedQuestions = questions[selectedSubject].sort(() => 0.5 - Math.random()).slice(0, number);
    document.getElementById('question-setup').style.display = 'none';
    document.getElementById('question-display').style.display = 'block';
    document.getElementById('total-count').innerText = number;
    showQuestion();
}

function showQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option.charAt(0), button);
        optionsDiv.appendChild(button);
    });
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selectedOption, selectedButton) {
    answeredCount++;
    const correctAnswer = selectedQuestions[currentQuestionIndex].correct;
    const buttons = document.querySelectorAll('#options button');

    buttons.forEach(button => {
        if (button.innerText.charAt(0) === correctAnswer) {
            button.classList.add('correct');
        } else if (button === selectedButton && selectedOption !== correctAnswer) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        correctCount++;
    } else {
        wrongCount++;
    }

    document.getElementById('answered-count').innerText = answeredCount;
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('wrong-count').innerText = wrongCount;
    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        document.getElementById('question-display').style.display = 'none';
        document.getElementById('quiz-complete').style.display = 'block';
        document.getElementById('summary-answered-count').innerText = answeredCount;
        document.getElementById('summary-correct-count').innerText = correctCount;
        document.getElementById('summary-wrong-count').innerText = wrongCount;
    }
}

function restartQuiz() {
    document.getElementById('quiz-complete').style.display = 'none';
    document.getElementById('subject-selection').style.display = 'block';
    currentQuestionIndex = 0;
    answeredCount = 0;
    correctCount = 0;
    wrongCount = 0;
    document.getElementById('answered-count').innerText = answeredCount;
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('wrong-count').innerText = wrongCount;
}

const validUsername = "admin";  // Change to your desired username
const validPassword = "password";  // Change to your desired password

const validUsers = [
    { username: "Herbert", password: "Toppingtheboards1!" },
    { username: "Mark", password: "password1" },
    { username: "Paula", password: "password2" },
    { username: "Alex", password: "guestpass" }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match any valid user
    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Login successful, hide login page and show subject selection
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('subject-selection').style.display = 'block';
    } else {
        // Login failed, show error message
        document.getElementById('login-error').style.display = 'block';
    }

    // Prevent form from submitting (page refresh)
    return false;
}

