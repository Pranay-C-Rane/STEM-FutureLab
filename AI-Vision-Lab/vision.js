// ========================================
// STEM FUTURELAB
// AI VISION LAB
// ========================================


// ========================================
// OBJECT DATA
// ========================================

const objects = [

    {
        name: "Cat",
        emoji: "🐱",
        confidence: 94
    },

    {
        name: "Dog",
        emoji: "🐶",
        confidence: 91
    },

    {
        name: "Car",
        emoji: "🚗",
        confidence: 96
    },

    {
        name: "Robot",
        emoji: "🤖",
        confidence: 89
    }

];


// ========================================
// CURRENT OBJECT
// ========================================

let currentObject =
    objects[0];


// ========================================
// STUDENT ANSWER
// ========================================

let selectedObject =
    null;


// ========================================
// SCORE
// ========================================

let score = 0;

let totalAttempts = 0;

let correctAnswers = 0;


// ========================================
// HTML ELEMENTS
// ========================================

const objectEmoji =
    document.getElementById(
        "object-emoji"
    );

const predictedObject =
    document.getElementById(
        "predicted-object"
    );

const confidence =
    document.getElementById(
        "confidence"
    );

const confidenceBar =
    document.getElementById(
        "confidence-bar"
    );

const aiDecision =
    document.getElementById(
        "ai-decision"
    );

const aiStatus =
    document.getElementById(
        "ai-status"
    );

const scoreDisplay =
    document.getElementById(
        "score"
    );

const accuracyDisplay =
    document.getElementById(
        "accuracy"
    );

const objectsAnalyzed =
    document.getElementById(
        "objects-analyzed"
    );

const answerMessage =
    document.getElementById(
        "answer-message"
    );

const analyzeButton =
    document.getElementById(
        "analyze-button"
    );

const checkButton =
    document.getElementById(
        "check-button"
    );

const refreshButton =
    document.getElementById(
        "refresh-page"
    );

const homeButton =
    document.getElementById(
        "home-page"
    );

const objectButtons =
    document.querySelectorAll(
        ".object-button"
    );


// ========================================
// SELECT OBJECT
// ========================================

objectButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                // Remove previous selection

                objectButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                // Select clicked button

                button.classList.add(
                    "selected"
                );


                selectedObject =
                    button.dataset.object;


                answerMessage.className =
                    "answer-message";

                answerMessage.textContent =
                    "Object selected. Now check your answer.";

            }
        );

    }
);


// ========================================
// ANALYZE OBJECT
// ========================================

function analyzeObject() {

    aiStatus.textContent =
        "Analyzing...";


    predictedObject.textContent =
        "Processing...";


    confidence.textContent =
        "0%";


    confidenceBar.style.width =
        "0%";


    aiDecision.textContent =
        "Analyzing...";


    analyzeButton.disabled =
        true;


    setTimeout(
        function () {

            predictedObject.textContent =
                currentObject.name;


            confidence.textContent =
                currentObject.confidence +
                "%";


            confidenceBar.style.width =
                currentObject.confidence +
                "%";


            aiDecision.textContent =
                "Object Detected";


            aiStatus.textContent =
                "Analysis Complete";


            objectsAnalyzed.textContent =
                totalAttempts + 1;


            analyzeButton.disabled =
                false;

        },
        1000
    );

}


// ========================================
// CHECK ANSWER
// ========================================

function checkAnswer() {

    if (!selectedObject) {

        answerMessage.className =
            "answer-message error";

        answerMessage.textContent =
            "⚠️ Please choose an object first.";

        return;

    }


    totalAttempts++;


    const correctObject =
        currentObject.name.toLowerCase();


    // ====================================
    // CORRECT
    // ====================================

    if (
        selectedObject ===
        correctObject
    ) {

        correctAnswers++;

        score += 10;


        answerMessage.className =
            "answer-message success";


        answerMessage.innerHTML =

            "🎉 <strong>Correct!</strong> " +
            "The AI identified the object correctly.";


        aiDecision.textContent =
            "Correct Prediction ✓";

    }


    // ====================================
    // WRONG
    // ====================================

    else {

        answerMessage.className =
            "answer-message error";


        answerMessage.innerHTML =

            "❌ <strong>Not quite!</strong> " +
            "The correct object is " +
            "<strong>" +
            currentObject.name +
            "</strong>.";


        aiDecision.textContent =
            "Prediction Incorrect";

    }


    // ====================================
    // UPDATE SCORE
    // ====================================

    scoreDisplay.textContent =
        score;


    const accuracyValue =
        Math.round(
            (correctAnswers /
                totalAttempts) *
            100
        );


    accuracyDisplay.textContent =
        accuracyValue + "%";


    objectsAnalyzed.textContent =
        totalAttempts;


    // ====================================
    // NEXT OBJECT
    // ====================================

    setTimeout(
        nextObject,
        1500
    );

}


// ========================================
// NEXT OBJECT
// ========================================

function nextObject() {

    let randomIndex;


    do {

        randomIndex =
            Math.floor(
                Math.random() *
                objects.length
            );

    }

    while (
        objects[randomIndex] ===
        currentObject
    );


    currentObject =
        objects[randomIndex];


    objectEmoji.textContent =
        currentObject.emoji;


    predictedObject.textContent =
        "Unknown";


    confidence.textContent =
        "0%";


    confidenceBar.style.width =
        "0%";


    aiDecision.textContent =
        "Waiting...";


    aiStatus.textContent =
        "Ready";


    selectedObject =
        null;


    objectButtons.forEach(
        function (button) {

            button.classList.remove(
                "selected"
            );

        }
    );


    answerMessage.className =
        "answer-message";

    answerMessage.textContent =
        "Choose an object.";

}


// ========================================
// RESET
// ========================================

function resetVisionLab() {

    score = 0;

    totalAttempts = 0;

    correctAnswers = 0;

    selectedObject = null;

    currentObject =
        objects[0];


    objectEmoji.textContent =
        currentObject.emoji;


    predictedObject.textContent =
        "Unknown";


    confidence.textContent =
        "0%";


    confidenceBar.style.width =
        "0%";


    aiDecision.textContent =
        "Waiting...";


    aiStatus.textContent =
        "Ready";


    scoreDisplay.textContent =
        "0";


    accuracyDisplay.textContent =
        "0%";


    objectsAnalyzed.textContent =
        "0";


    answerMessage.className =
        "answer-message";

    answerMessage.textContent =
        "Choose an object first.";


    objectButtons.forEach(
        function (button) {

            button.classList.remove(
                "selected"
            );

        }
    );

}


// ========================================
// ANALYZE BUTTON
// ========================================

analyzeButton.addEventListener(
    "click",
    analyzeObject
);


// ========================================
// CHECK BUTTON
// ========================================

checkButton.addEventListener(
    "click",
    checkAnswer
);


// ========================================
// REFRESH
// ========================================

refreshButton.addEventListener(
    "click",
    function () {

        location.reload();

    }
);


// ========================================
// HOME
// ========================================

homeButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "../index.html";

    }
);


// ========================================
// START
// ========================================

resetVisionLab();