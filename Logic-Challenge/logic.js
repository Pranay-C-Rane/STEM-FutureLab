// ========================================
// STEM FUTURELAB
// LOGIC CHALLENGE LAB
// CODING THINKING ACTIVITIES
// ========================================


// ========================================
// CHALLENGE DATA
// ========================================

const challengeData = {

    // ====================================
    // 1. CODE SEQUENCER
    // ====================================

    sequencer: {

        name: "🔀 Code Sequencer",

        questions: [

            {
                question:
                    "🤖 Put the commands in the correct order to make the robot move forward twice.",

                options: [
                    "START → MOVE → MOVE",
                    "MOVE → START → MOVE",
                    "MOVE → MOVE → START",
                    "START → TURN → MOVE"
                ],

                correct: 0,

                explanation:
                    "A program normally starts first, followed by the instructions."
            },


            {
                question:
                    "🎯 The robot must reach the target. Which sequence is correct?",

                options: [
                    "START → MOVE → TURN RIGHT → MOVE",
                    "TURN RIGHT → START → MOVE → MOVE",
                    "MOVE → TURN RIGHT → START → MOVE",
                    "MOVE → MOVE → TURN LEFT → START"
                ],

                correct: 0,

                explanation:
                    "The robot starts, moves forward, turns right and then moves toward the target."
            },


            {
                question:
                    "💡 Which order correctly represents a simple program?",

                options: [
                    "Output → Input → Process",
                    "Start → Instructions → Result",
                    "Result → Start → Instructions",
                    "Instructions → Result → Start"
                ],

                correct: 1,

                explanation:
                    "A simple program begins, follows instructions and produces a result."
            },


            {
                question:
                    "🤖 Robot needs to go forward and then turn right. Which command order is correct?",

                options: [
                    "TURN RIGHT → MOVE FORWARD",
                    "MOVE FORWARD → TURN RIGHT",
                    "STOP → MOVE → TURN",
                    "TURN LEFT → MOVE"
                ],

                correct: 1,

                explanation:
                    "The robot must move forward first and then turn right."
            },


            {
                question:
                    "🧠 Why is the order of instructions important in a program?",

                options: [
                    "Because computers follow instructions in order",
                    "Because programs cannot contain instructions",
                    "Because computers only understand pictures",
                    "Because order does not matter"
                ],

                correct: 0,

                explanation:
                    "Changing the order of instructions can change what the program does."
            }

        ]

    },


    // ====================================
    // 2. LOOP CHALLENGE
    // ====================================

    loop: {

        name: "🔁 Loop Challenge",

        questions: [

            {
                question:
                    "🔁 REPEAT 4 TIMES: MOVE FORWARD. How many times will the robot move?",

                options: [
                    "2 times",
                    "3 times",
                    "4 times",
                    "5 times"
                ],

                correct: 2,

                explanation:
                    "The REPEAT command tells the computer to perform the instruction 4 times."
            },


            {
                question:
                    "Which is better than writing MOVE 5 times separately?",

                options: [
                    "REPEAT 5 TIMES → MOVE",
                    "STOP → MOVE",
                    "DELETE → MOVE",
                    "TURN → STOP"
                ],

                correct: 0,

                explanation:
                    "A loop avoids repeating the same instruction manually."
            },


            {
                question:
                    "🔁 REPEAT 3 TIMES: JUMP. How many jumps happen?",

                options: [
                    "1",
                    "2",
                    "3",
                    "6"
                ],

                correct: 2,

                explanation:
                    "The instruction JUMP is repeated exactly 3 times."
            },


            {
                question:
                    "A loop is mainly used to:",

                options: [
                    "Repeat instructions",
                    "Delete instructions",
                    "Turn off the computer",
                    "Create a keyboard"
                ],

                correct: 0,

                explanation:
                    "Loops allow a computer to repeat instructions efficiently."
            },


            {
                question:
                    "🔁 REPEAT 2 TIMES: MOVE → TURN RIGHT. How many times does TURN RIGHT happen?",

                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],

                correct: 1,

                explanation:
                    "The entire group is repeated twice, so TURN RIGHT happens twice."
            }

        ]

    },


    // ====================================
    // 3. IF ELSE CHALLENGE
    // ====================================

    condition: {

        name: "🔀 If–Else Challenge",

        questions: [

            {
                question:
                    "🤖 IF obstacle detected → TURN RIGHT. ELSE → MOVE FORWARD. An obstacle is detected. What will the robot do?",

                options: [
                    "Move Forward",
                    "Turn Right",
                    "Turn Left",
                    "Stop"
                ],

                correct: 1,

                explanation:
                    "The IF condition is true because an obstacle is detected, so the robot turns right."
            },


            {
                question:
                    "IF temperature > 30 → FAN ON. The temperature is 35°C. What happens?",

                options: [
                    "Fan OFF",
                    "Fan ON",
                    "Computer OFF",
                    "Nothing"
                ],

                correct: 1,

                explanation:
                    "35 is greater than 30, so the condition is true and the fan turns ON."
            },


            {
                question:
                    "IF score >= 50 → PASS. A student scores 75. What is the result?",

                options: [
                    "FAIL",
                    "PASS",
                    "TRY AGAIN",
                    "ERROR"
                ],

                correct: 1,

                explanation:
                    "75 is greater than or equal to 50, so the student passes."
            },


            {
                question:
                    "IF light is dark → TURN LIGHT ON. The room is bright. What should happen?",

                options: [
                    "Turn light ON",
                    "Turn light OFF",
                    "Break the light",
                    "Restart the computer"
                ],

                correct: 1,

                explanation:
                    "The room is not dark, so the condition is false and the light stays OFF."
            },


            {
                question:
                    "What does IF help a program do?",

                options: [
                    "Make decisions",
                    "Delete the program",
                    "Increase screen size",
                    "Turn the keyboard into a mouse"
                ],

                correct: 0,

                explanation:
                    "IF statements allow programs to make decisions based on conditions."
            }

        ]

    },


    // ====================================
    // 4. DEBUG THE CODE
    // ====================================

    debug: {

        name: "🐞 Debug the Code",

        questions: [

            {
                question:
                    "🐞 The robot should move forward twice, but the code says: MOVE → TURN LEFT → MOVE. What is the extra instruction?",

                options: [
                    "MOVE",
                    "TURN LEFT",
                    "START",
                    "Nothing"
                ],

                correct: 1,

                explanation:
                    "TURN LEFT is not required when the robot only needs to move forward twice."
            },


            {
                question:
                    "🐞 The target is on the right, but the robot code says TURN LEFT. What should replace it?",

                options: [
                    "TURN RIGHT",
                    "MOVE BACK",
                    "STOP",
                    "TURN LEFT"
                ],

                correct: 0,

                explanation:
                    "The target is on the right, so TURN RIGHT is the correct command."
            },


            {
                question:
                    "🐞 Find the problem: START → MOVE → MOVE → MOVE → STOP. The target is reached after 2 moves. What should be removed?",

                options: [
                    "START",
                    "First MOVE",
                    "Third MOVE",
                    "STOP"
                ],

                correct: 2,

                explanation:
                    "The third MOVE is unnecessary because the target is already reached after two moves."
            },


            {
                question:
                    "🐞 Code: REPEAT 3 TIMES → MOVE. The robot should move only 2 times. What should change?",

                options: [
                    "REPEAT 1 TIME",
                    "REPEAT 2 TIMES",
                    "REPEAT 4 TIMES",
                    "REMOVE MOVE"
                ],

                correct: 1,

                explanation:
                    "The loop should repeat twice because the robot needs two movements."
            },


            {
                question:
                    "🐞 Code: IF obstacle → MOVE FORWARD. Why is this a problem?",

                options: [
                    "The robot may move into the obstacle",
                    "The robot will fly",
                    "The program becomes a game",
                    "Nothing is wrong"
                ],

                correct: 0,

                explanation:
                    "If an obstacle is detected, moving forward could cause the robot to hit it."
            }

        ]

    }

};


// ========================================
// VARIABLES
// ========================================

let currentChallenge = "";

let currentQuestion = 0;

let score = 0;

let answered = false;


// ========================================
// HTML ELEMENTS
// ========================================

const challengeScreen =
    document.getElementById("challenge-screen");

const gameScreen =
    document.getElementById("game-screen");

const resultScreen =
    document.getElementById("result-screen");

const challengeName =
    document.getElementById("challenge-name");

const puzzle =
    document.getElementById("puzzle");

const options =
    document.getElementById("options");

const challengeNumber =
    document.getElementById("challenge-number");

const scoreDisplay =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress-bar");

const feedback =
    document.getElementById("feedback");

const feedbackTitle =
    document.getElementById("feedback-title");

const feedbackText =
    document.getElementById("feedback-text");

const nextButton =
    document.getElementById("next-button");


// ========================================
// CHALLENGE BUTTONS
// ========================================

document.querySelectorAll(".challenge-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            function () {

                const challenge =
                    card.dataset.challenge;

                startChallenge(challenge);

            }
        );

    });


// ========================================
// START CHALLENGE
// ========================================

function startChallenge(challenge) {

    currentChallenge = challenge;

    currentQuestion = 0;

    score = 0;

    challengeScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    challengeName.textContent =
        challengeData[challenge].name;

    scoreDisplay.textContent = score;

    showQuestion();

}


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    answered = false;

    const data =
        challengeData[currentChallenge];

    const current =
        data.questions[currentQuestion];

    puzzle.textContent =
        current.question;

    challengeNumber.textContent =
        `Challenge ${currentQuestion + 1} of ${data.questions.length}`;

    const progress =
        (currentQuestion / data.questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;

    options.innerHTML = "";

    feedback.classList.add("hidden");

    nextButton.classList.add("hidden");


    current.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");

            button.className =
                "option-button";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );

            options.appendChild(button);

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
        challengeData[currentChallenge];

    const current =
        data.questions[currentQuestion];


    const allButtons =
        document.querySelectorAll(
            ".option-button"
        );


    allButtons.forEach(
        function (button, index) {

            button.disabled = true;

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
        selectedIndex === current.correct
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
// NEXT CHALLENGE
// ========================================

nextButton.addEventListener(
    "click",
    function () {

        const total =
            challengeData[
                currentChallenge
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
// RESULT
// ========================================

function showResult() {

    gameScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    const total =
        challengeData[
            currentChallenge
        ].questions.length;

    const maximum =
        total * 10;


    document.getElementById(
        "final-score"
    ).textContent =
        `${score} / ${maximum}`;


    const percentage =
        (score / maximum) * 100;


    let resultMessage;


    if (percentage === 100) {

        resultMessage =
            "🏆 Perfect! You are thinking like a programmer!";

    }

    else if (percentage >= 70) {

        resultMessage =
            "🌟 Great work! Your coding logic is developing.";

    }

    else if (percentage >= 40) {

        resultMessage =
            "👍 Good effort! Keep practicing coding logic.";

    }

    else {

        resultMessage =
            "💪 Keep learning! Every programmer learns by solving problems.";

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

        startChallenge(
            currentChallenge
        );

    }
);


// ========================================
// CHOOSE ANOTHER CHALLENGE
// ========================================

document.getElementById(
    "challenges-button"
).addEventListener(
    "click",
    function () {

        resultScreen.classList.add("hidden");

        gameScreen.classList.add("hidden");

        challengeScreen.classList.remove("hidden");

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