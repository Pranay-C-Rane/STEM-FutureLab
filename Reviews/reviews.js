/* ========================================
   STEM FUTURELAB
   REVIEWS DASHBOARD
======================================== */


/* ========================================
   HOME BUTTON
======================================== */

const backButton =
    document.getElementById("back-button");


if (backButton) {

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "../index.html";

        }
    );

}


/* ========================================
   SAMPLE RESPONSE DATA
   ========================================
   Temporary data only.
   We will replace this with real
   Google Form response data later.
======================================== */


/* Total responses */

const totalResponses = 120;


/* Age distribution */

const ageLabels = [
    "8–10",
    "11–12",
    "13–14",
    "15+"
];

const ageData = [
    25,
    38,
    42,
    15
];


/* Class distribution */

const classLabels = [
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th"
];

const classData = [
    18,
    22,
    25,
    21,
    19,
    15
];


/* Technology interest */

const interestLabels = [
    "Very Interested",
    "Interested",
    "Neutral",
    "Not Very Interested",
    "Not Interested"
];

const interestData = [
    42,
    60,
    12,
    4,
    2
];


/* ========================================
   UPDATE SUMMARY CARDS
======================================== */

const totalResponsesElement =
    document.getElementById(
        "total-responses"
    );


if (totalResponsesElement) {

    totalResponsesElement.textContent =
        totalResponses;

}


/* ========================================
   AGE CHART
======================================== */

const ageCanvas =
    document.getElementById(
        "ageChart"
    );


if (ageCanvas) {

    new Chart(
        ageCanvas,
        {

            type: "bar",

            data: {

                labels: ageLabels,

                datasets: [

                    {
                        label:
                            "Number of Students",

                        data:
                            ageData,

                        borderWidth: 1

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        labels: {

                            color: "#ffffff"

                        }

                    }

                },

                scales: {

                    x: {

                        ticks: {

                            color: "#a9bdd3"

                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.08)"

                        }

                    },

                    y: {

                        beginAtZero: true,

                        ticks: {

                            color: "#a9bdd3",

                            precision: 0

                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.08)"

                        }

                    }

                }

            }

        }
    );

}


/* ========================================
   CLASS CHART
======================================== */

const classCanvas =
    document.getElementById(
        "classChart"
    );


if (classCanvas) {

    new Chart(
        classCanvas,
        {

            type: "bar",

            data: {

                labels: classLabels,

                datasets: [

                    {
                        label:
                            "Students",

                        data:
                            classData,

                        borderWidth: 1

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        labels: {

                            color: "#ffffff"

                        }

                    }

                },

                scales: {

                    x: {

                        ticks: {

                            color: "#a9bdd3"

                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.08)"

                        }

                    },

                    y: {

                        beginAtZero: true,

                        ticks: {

                            color: "#a9bdd3",

                            precision: 0

                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.08)"

                        }

                    }

                }

            }

        }
    );

}


/* ========================================
   TECHNOLOGY INTEREST CHART
======================================== */

const interestCanvas =
    document.getElementById(
        "interestChart"
    );


if (interestCanvas) {

    new Chart(
        interestCanvas,
        {

            type: "doughnut",

            data: {

                labels:
                    interestLabels,

                datasets: [

                    {
                        data:
                            interestData,

                        borderWidth: 1
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        position: "bottom",

                        labels: {

                            color: "#ffffff",

                            padding: 18

                        }

                    }

                }

            }

        }
    );

}