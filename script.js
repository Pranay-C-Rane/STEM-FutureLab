// ========================================
// STEM FUTURELAB
// MAIN JAVASCRIPT
// ========================================


// ========================================
// GET STARTED BUTTON
// ========================================

const startButton =
    document.getElementById("start-button");

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            document.querySelector("#learn")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


// ========================================
// PRACTICE BUTTON
// ========================================

const practiceButton =
    document.getElementById("practice-button");

if (practiceButton) {

    practiceButton.addEventListener(
        "click",
        function () {

            document.querySelector("#explore")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


// ========================================
// MAIN MODULE NAVIGATION
// ========================================

const moduleButtons =
    document.querySelectorAll(".module-button");


moduleButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const module =
                button.dataset.module;


            // =================================
            // VIRTUAL ROBOT LAB
            // =================================

            if (module === "robot") {

                window.location.href =
                    "Robot-lab/robot.html";

            }


            // =================================
            // SMART LEARNING
            // =================================

            else if (
                module === "smart-learning"
            ) {

                window.location.href =
                    "Smart-Learning/learning.html";

            }


            // =================================
            // MY PROGRESS
            // =================================

            else if (
                module === "progress"
            ) {

                document.querySelector("#progress")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        }
    );

});


// ========================================
// INTERACTIVE LAB NAVIGATION
// ========================================

const labButtons =
    document.querySelectorAll(".lab-button");


labButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const lab =
                button.dataset.lab;


            // =================================
            // LOGIC CHALLENGE
            // =================================

            if (lab === "logic") {

                window.location.href =
                    "Logic-Challenge/logic.html";

            }


            // =================================
            // CODING PLAYGROUND
            // =================================

            else if (lab === "coding") {

                window.location.href =
                    "Coding-Playground/coding.html";

            }


            // =================================
            // AI VISION LAB
            // =================================

            else if (lab === "vision") {

                window.location.href =
                    "AI-Vision-Lab/vision.html";

            }


            // =================================
            // SMART CIRCUIT LAB
            // =================================

            else if (lab === "circuit") {

                window.location.href =
                    "Smart-Circuit-Lab/circuit.html";

            }

        }
    );

});


// ========================================
// REVIEWS BUTTON
// ========================================

const reviewsButton =
    document.getElementById("reviews-button");

if (reviewsButton) {

    reviewsButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "Reviews/reviews.html";

        }
    );

}


// ========================================
// NAVIGATION - PROGRESS
// ========================================

const progressLink =
    document.querySelector(
        'a[href="#progress"]'
    );


if (progressLink) {

    progressLink.addEventListener(
        "click",
        function () {

            document.querySelector("#progress")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* ========================================
   FEEDBACK BUTTON
======================================== */

const feedbackButton =
    document.getElementById("feedback-button");

if (feedbackButton) {

    feedbackButton.addEventListener(
        "click",
        function () {

            window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSce1IdeudvuNN6T75faIGp2XPDvEGXph7-jt2aHvRQ8H_O8Eg/viewform?usp=publish-editor",
                "_blank"
            );

        }
    );

}


// ========================================
// HOME PAGE PROGRESS
// ========================================

function updateHomeProgress() {

    const labsCompleted =
        localStorage.getItem("labsCompleted") || 0;


    const totalScore =
        localStorage.getItem("totalScore") || 0;


    const achievements =
        localStorage.getItem("achievements") || 0;


    const labsElement =
        document.getElementById("labs-completed");


    const scoreElement =
        document.getElementById("total-score");


    const achievementsElement =
        document.getElementById("achievements");


    if (labsElement) {

        labsElement.textContent =
            labsCompleted;

    }


    if (scoreElement) {

        scoreElement.textContent =
            totalScore;

    }


    if (achievementsElement) {

        achievementsElement.textContent =
            achievements;

    }

}


// ========================================
// RUN WHEN HOME PAGE LOADS
// ========================================

updateHomeProgress();