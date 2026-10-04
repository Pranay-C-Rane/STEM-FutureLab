// ========================================
// SMART LEARNING
// ========================================


// ========================================
// QUESTION DATA
// ========================================

const quizData = {

    coding: {

        name: "💻 Coding Basics",

        questions: [

            {
                question:
                    "A robot needs to move 3 steps forward. Which sequence is correct?",

                answers: [
                    "⬆️ ⬆️ ⬆️",
                    "⬇️ ⬇️ ⬇️",
                    "⬅️ ➡️ ⬆️",
                    "⬆️ ⬅️ ⬆️"
                ],

                correct: 0,

                explanation:
                    "Three Forward commands move the robot three steps forward."
            },


            {
                question:
                    "What is a computer program?",

                answers: [
                    "A set of instructions",
                    "A computer screen",
                    "A keyboard",
                    "A battery"
                ],

                correct: 0,

                explanation:
                    "A program is a set of instructions that tells a computer what to do."
            },


            {
                question:
                    "Which symbol is commonly used to represent a decision in programming flowcharts?",

                answers: [
                    "Circle",
                    "Diamond",
                    "Square",
                    "Star"
                ],

                correct: 1,

                explanation:
                    "A diamond is commonly used for decisions such as Yes/No or True/False."
            },


            {
                question:
                    "What should you do first when solving a coding problem?",

                answers: [
                    "Understand the problem",
                    "Write random code",
                    "Close the computer",
                    "Delete the program"
                ],

                correct: 0,

                explanation:
                    "Understanding the problem first helps you decide what solution is needed."
            },


            {
                question:
                    "Which one is an example of an instruction?",

                answers: [
                    "Move forward",
                    "Computer",
                    "Screen",
                    "Mouse"
                ],

                correct: 0,

                explanation:
                    "Move forward is an instruction because it tells the robot what action to perform."
            }

        ]

    },


    // ========================================
    // LOGIC
    // ========================================

    logic: {

        name: "🧩 Logic",

        questions: [

            {
                question:
                    "What comes next? 2, 4, 6, 8, ___",

                answers: [
                    "9",
                    "10",
                    "12",
                    "14"
                ],

                correct: 1,

                explanation:
                    "The pattern increases by 2 each time, so the next number is 10."
            },


            {
                question:
                    "If all cats are animals and Tom is a cat, what is Tom?",

                answers: [
                    "A plant",
                    "An animal",
                    "A machine",
                    "A number"
                ],

                correct: 1,

                explanation:
                    "If every cat is an animal and Tom is a cat, Tom must be an animal."
            },


            {
                question:
                    "Which one does NOT belong?",

                answers: [
                    "Apple",
                    "Mango",
                    "Banana",
                    "Car"
                ],

                correct: 3,

                explanation:
                    "Apple, Mango and Banana are fruits. Car is not a fruit."
            },


            {
                question:
                    "If today is Monday, what day will it be after 2 days?",

                answers: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],

                correct: 1,

                explanation:
                    "Monday → Tuesday → Wednesday."
            },


            {
                question:
                    "Which shape has 3 sides?",

                answers: [
                    "Circle",
                    "Square",
                    "Triangle",
                    "Rectangle"
                ],

                correct: 2,

                explanation:
                    "A triangle has three sides."
            }

        ]

    },


    // ========================================
    // ALGORITHMS
    // ========================================

    algorithms: {

        name: "🔢 Algorithms",

        questions: [

            {
                question:
                    "What is an algorithm?",

                answers: [
                    "A step-by-step solution",
                    "A computer screen",
                    "A keyboard",
                    "A game controller"
                ],

                correct: 0,

                explanation:
                    "An algorithm is a step-by-step method for solving a problem."
            },


            {
                question:
                    "Which should usually happen first when making a sandwich?",

                answers: [
                    "Eat the sandwich",
                    "Prepare the ingredients",
                    "Throw it away",
                    "Wash the plate"
                ],

                correct: 1,

                explanation:
                    "Preparing the ingredients is an earlier step in the process."
            },


            {
                question:
                    "Which sequence is correct for brushing your teeth?",

                answers: [
                    "Brush → Apply toothpaste → Pick up brush",
                    "Pick up brush → Apply toothpaste → Brush",
                    "Eat → Brush → Pick up brush",
                    "Sleep → Brush → Apply toothpaste"
                ],

                correct: 1,

                explanation:
                    "First pick up the brush, then apply toothpaste, and finally brush."
            },


            {
                question:
                    "Why are algorithms useful?",

                answers: [
                    "They provide organized steps",
                    "They make computers heavier",
                    "They remove electricity",
                    "They stop programs"
                ],

                correct: 0,

                explanation:
                    "Algorithms organize the steps needed to solve a problem."
            },


            {
                question:
                    "Which is an everyday algorithm?",

                answers: [
                    "Following a recipe",
                    "Looking at a wall",
                    "Sitting quietly",
                    "Watching the sky"
                ],

                correct: 0,

                explanation:
                    "A recipe contains ordered instructions, so it is an everyday example of an algorithm."
            }

        ]

    },


    // ========================================
    // PROBLEM SOLVING
    // ========================================

    problem: {

        name: "💡 Problem Solving",

        questions: [

            {
                question:
                    "What should you do when you face a difficult problem?",

                answers: [
                    "Give up immediately",
                    "Break it into smaller parts",
                    "Ignore it",
                    "Guess randomly"
                ],

                correct: 1,

                explanation:
                    "Breaking a large problem into smaller parts makes it easier to solve."
            },


            {
                question:
                    "A robot cannot pass through a wall. What should you try?",

                answers: [
                    "Find another path",
                    "Keep hitting the wall",
                    "Stop thinking",
                    "Delete the robot"
                ],

                correct: 0,

                explanation:
                    "Finding another path is a logical way to solve the problem."
            },


            {
                question:
                    "You tried a solution and it failed. What should you do?",

                answers: [
                    "Learn from the mistake and try again",
                    "Give up",
                    "Break the computer",
                    "Ignore the result"
                ],

                correct: 0,

                explanation:
                    "Testing, learning from mistakes and trying again is an important problem-solving process."
            },


            {
                question:
                    "Which question helps identify a problem?",

                answers: [
                    "What is wrong?",
                    "What is my favorite color?",
                    "What game should I play?",
                    "What should I eat?"
                ],

                correct: 0,

                explanation:
                    "Understanding what is wrong helps you identify the actual problem."
            },


            {
                question:
                    "What is a good way to test a solution?",

                answers: [
                    "Try it and observe the result",
                    "Never test it",
                    "Guess the result",
                    "Delete it"
                ],

                correct: 0,

                explanation:
                    "Testing a solution shows whether it actually works."
            }

        ]

    }

};


// ========================================
// VARIABLES
// ========================================

let currentTopic = "";

let currentQuestion = 0;

let score = 0;

let answered = false;


// ========================================
// HTML ELEMENTS
// ========================================

const topicScreen =
    document.getElementById(
        "topic-screen"
    );

const quizScreen =
    document.getElementById(
        "quiz-screen"
    );

const resultScreen =
    document.getElementById(
        "result-screen"
    );


const topicName =
    document.getElementById(
        "topic-name"
    );


const question =
    document.getElementById(
        "question"
    );


const answers =
    document.getElementById(
        "answers"
    );


const questionNumber =
    document.getElementById(
        "question-number"
    );


const scoreDisplay =
    document.getElementById(
        "score"
    );


const progressBar =
    document.getElementById(
        "progress-bar"
    );


const feedback =
    document.getElementById(
        "feedback"
    );


const feedbackTitle =
    document.getElementById(
        "feedback-title"
    );


const feedbackText =
    document.getElementById(
        "feedback-text"
    );


const nextButton =
    document.getElementById(
        "next-button"
    );


// ========================================
// TOPIC BUTTONS
// ========================================

document.querySelectorAll(
    ".topic-card"
).forEach(
    card => {

        card.addEventListener(
            "click",
            function () {

                const topic =
                    card.dataset.topic;

                startQuiz(topic);

            }

        );

    }
);


// ========================================
// START QUIZ
// ========================================

function startQuiz(topic) {

    currentTopic = topic;

    currentQuestion = 0;

    score = 0;


    topicScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );


    topicName.textContent =
        quizData[topic].name;


    scoreDisplay.textContent =
        score;


    showQuestion();

}


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    answered = false;


    const data =
        quizData[currentTopic];


    const current =
        data.questions[
            currentQuestion
        ];


    question.textContent =
        current.question;


    questionNumber.textContent =
        `Question ${
            currentQuestion + 1
        } of ${
            data.questions.length
        }`;


    const progress =
        (
            currentQuestion /
            data.questions.length
        ) * 100;


    progressBar.style.width =
        `${progress}%`;


    answers.innerHTML = "";


    feedback.classList.add(
        "hidden"
    );


    nextButton.classList.add(
        "hidden"
    );


    current.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );

}


// ========================================
// CHECK ANSWER
// ========================================

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {

        return;

    }


    answered = true;


    const data =
        quizData[currentTopic];


    const current =
        data.questions[
            currentQuestion
        ];


    const allButtons =
        document.querySelectorAll(
            ".answer-button"
        );


    allButtons.forEach(
        function (button, index) {

            button.disabled =
                true;


            if (
                index === current.correct
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        selectedIndex ===
        current.correct
    ) {

        score += 10;


        scoreDisplay.textContent =
            score;


        selectedButton.classList.add(
            "correct"
        );


        feedbackTitle.textContent =
            "🎉 Correct!";


        feedbackText.textContent =
            current.explanation;

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        feedbackTitle.textContent =
            "❌ Not Quite!";


        feedbackText.textContent =
            current.explanation;

    }


    feedback.classList.remove(
        "hidden"
    );


    nextButton.classList.remove(
        "hidden"
    );

}


// ========================================
// NEXT QUESTION
// ========================================

nextButton.addEventListener(
    "click",
    function () {

        const total =
            quizData[
                currentTopic
            ].questions.length;


        currentQuestion++;


        if (
            currentQuestion >= total
        ) {

            showResult();

        }

        else {

            showQuestion();

        }

    }
);


// ========================================
// SHOW RESULT
// ========================================

function showResult() {

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    const total =
        quizData[
            currentTopic
        ].questions.length;


    const maximum =
        total * 10;


    document.getElementById(
        "final-score"
    ).textContent =
        `${score} / ${maximum}`;


    const percentage =
        (
            score /
            maximum
        ) * 100;


    let resultMessage;


    if (
        percentage === 100
    ) {

        resultMessage =
            "🏆 Perfect score! Excellent thinking!";

    }

    else if (
        percentage >= 70
    ) {

        resultMessage =
            "🌟 Great job! Keep practicing.";

    }

    else if (
        percentage >= 40
    ) {

        resultMessage =
            "👍 Good effort! Try again to improve.";

    }

    else {

        resultMessage =
            "💪 Keep learning! Every mistake helps you improve.";

    }


    document.getElementById(
        "result-message"
    ).textContent =
        resultMessage;

}


// ========================================
// TRY AGAIN
// ========================================

document.getElementById(
    "retry-button"
).addEventListener(
    "click",
    function () {

        startQuiz(
            currentTopic
        );

    }
);


// ========================================
// CHOOSE ANOTHER TOPIC
// ========================================

document.getElementById(
    "topics-button"
).addEventListener(
    "click",
    function () {

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.add(
            "hidden"
        );

        topicScreen.classList.remove(
            "hidden"
        );

    }
);


// ========================================
// REFRESH
// ========================================

document.getElementById(
    "refresh-page"
).addEventListener(
    "click",
    function () {

        location.reload();

    }
);


// ========================================
// HOME
// ========================================

document.getElementById(
    "home-page"
).addEventListener(
    "click",
    function () {

        window.location.href =
            "../index.html";

    }
);