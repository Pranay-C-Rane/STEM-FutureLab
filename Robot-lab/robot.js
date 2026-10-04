// ========================================
// VIRTUAL ROBOT LAB
// ========================================


// ========================================
// LEVEL DATA
// ========================================

const levels = {

    1: {
        start: [2, 0],
        target: [0, 3],
        obstacles: [
            [1, 1]
        ],
        limit: 10
    },

    2: {
        start: [4, 0],
        target: [0, 4],
        obstacles: [
            [3, 1],
            [2, 1],
            [2, 3]
        ],
        limit: 12
    },

    3: {
        start: [4, 0],
        target: [0, 4],
        obstacles: [
            [3, 0],
            [3, 1],
            [1, 1],
            [1, 2],
            [1, 3]
        ],
        limit: 14
    },

    4: {
        start: [4, 0],
        target: [0, 4],
        obstacles: [
            [3, 0],
            [3, 1],
            [3, 3],
            [2, 3],
            [1, 1],
            [1, 2]
        ],
        limit: 16
    },

    5: {
        start: [4, 0],
        target: [0, 4],
        obstacles: [
            [3, 0],
            [3, 1],
            [2, 1],
            [1, 1],
            [1, 3],
            [2, 3],
            [3, 3]
        ],
        limit: 18
    }

};


// ========================================
// GAME VARIABLES
// ========================================

let currentLevel = 1;

let row = 2;

let column = 0;

let moves = 0;

let score =
    Number(
        localStorage.getItem("totalScore")
    ) || 0;

let program = [];

let running = false;


// ========================================
// SAVED PROGRESS
// ========================================

let unlocked =
    Number(
        localStorage.getItem("robotLevel")
    ) || 1;


let completedLevels =
    JSON.parse(
        localStorage.getItem(
            "robotCompletedLevels"
        )
    ) || [];


// ========================================
// SAVE PROGRESS
// ========================================

function saveProgress() {

    localStorage.setItem(
        "robotLevel",
        unlocked
    );

    localStorage.setItem(
        "robotCompletedLevels",
        JSON.stringify(completedLevels)
    );

    localStorage.setItem(
        "totalScore",
        score
    );

    localStorage.setItem(
        "labsCompleted",
        completedLevels.length
    );

    localStorage.setItem(
        "achievements",
        completedLevels.length
    );

}


// ========================================
// HTML ELEMENTS
// ========================================

const grid =
    document.getElementById("grid");

const programBox =
    document.getElementById("program");

const moveDisplay =
    document.getElementById("moves");

const limitDisplay =
    document.getElementById("limit");

const scoreDisplay =
    document.getElementById("score");

const levelDisplay =
    document.getElementById("level-number");

const messageTitle =
    document.getElementById(
        "message-title"
    );

const message =
    document.getElementById("message");


// ========================================
// CREATE GRID
// ========================================

function createGrid() {

    grid.innerHTML = "";

    for (
        let r = 0;
        r < 5;
        r++
    ) {

        for (
            let c = 0;
            c < 5;
            c++
        ) {

            const cell =
                document.createElement(
                    "div"
                );

            cell.className = "cell";

            const data =
                levels[currentLevel];


            // OBSTACLE

            if (
                data.obstacles.some(
                    obstacle =>
                        obstacle[0] === r &&
                        obstacle[1] === c
                )
            ) {

                cell.classList.add(
                    "obstacle"
                );

                cell.textContent = "🧱";

            }


            // TARGET

            if (
                data.target[0] === r &&
                data.target[1] === c
            ) {

                cell.classList.add(
                    "target"
                );

                cell.textContent = "🎯";

            }

            grid.appendChild(cell);

        }

    }

    updateRobot();

}


// ========================================
// UPDATE ROBOT
// ========================================

function updateRobot() {

    const cells =
        document.querySelectorAll(
            ".cell"
        );


    cells.forEach(
        cell => {

            if (
                cell.classList.contains(
                    "robot"
                )
            ) {

                cell.classList.remove(
                    "robot"
                );

                cell.textContent = "";

            }

        }
    );


    const index =
        row * 5 + column;


    const robot =
        cells[index];


    if (robot) {

        robot.classList.add(
            "robot"
        );

        robot.textContent = "🤖";

    }


    moveDisplay.textContent =
        moves;

}


// ========================================
// MOVE ROBOT
// ========================================

function moveRobot(
    rowChange,
    columnChange
) {

    const newRow =
        row + rowChange;

    const newColumn =
        column + columnChange;


    const data =
        levels[currentLevel];


    // BOUNDARY

    if (
        newRow < 0 ||
        newRow > 4 ||
        newColumn < 0 ||
        newColumn > 4
    ) {

        showMessage(
            "⚠️ Cannot Move",
            "The robot cannot leave the grid."
        );

        return false;

    }


    // OBSTACLE

    if (
        data.obstacles.some(
            obstacle =>
                obstacle[0] === newRow &&
                obstacle[1] === newColumn
        )
    ) {

        showMessage(
            "🧱 Obstacle!",
            "There is a wall here."
        );

        return false;

    }


    // MOVE

    row = newRow;

    column = newColumn;

    moves++;

    updateRobot();


    // MOVE LIMIT

    if (
        moves > data.limit
    ) {

        showMessage(
            "❌ Too Many Moves",
            "Try finding a shorter solution."
        );

        return false;

    }


    // TARGET

    if (
        row === data.target[0] &&
        column === data.target[1]
    ) {

        completeLevel();

    }


    return true;

}


// ========================================
// ADD COMMAND
// ========================================

function addCommand(command) {

    if (running) {
        return;
    }


    const limit =
        levels[currentLevel].limit;


    if (
        program.length >= limit
    ) {

        showMessage(
            "⚠️ Program Full",
            "You reached the command limit."
        );

        return;

    }


    program.push(command);

    displayProgram();

}


// ========================================
// DISPLAY PROGRAM
// ========================================

function displayProgram() {

    programBox.innerHTML = "";


    if (
        program.length === 0
    ) {

        programBox.textContent =
            "Add commands here...";

        return;

    }


    program.forEach(
        (command, index) => {

            const item =
                document.createElement(
                    "span"
                );

            item.className =
                "command";


            const names = {

                up: "⬆️",

                down: "⬇️",

                left: "⬅️",

                right: "➡️"

            };


            item.textContent =
                `${index + 1} ${names[command]}`;


            programBox.appendChild(
                item
            );

        }
    );

}


// ========================================
// RUN PROGRAM
// ========================================

document.getElementById(
    "run"
).addEventListener(
    "click",
    async function () {

        if (running) {
            return;
        }


        if (
            program.length === 0
        ) {

            showMessage(
                "⚠️ Empty Program",
                "Add commands first."
            );

            return;

        }


        running = true;


        // RESET ROBOT

        const data =
            levels[currentLevel];

        row =
            data.start[0];

        column =
            data.start[1];

        moves = 0;

        updateRobot();


        showMessage(
            "▶ Running",
            "The robot is following your algorithm."
        );


        for (
            let i = 0;
            i < program.length;
            i++
        ) {

            let success;


            if (
                program[i] === "up"
            ) {

                success =
                    moveRobot(-1, 0);

            }

            else if (
                program[i] === "down"
            ) {

                success =
                    moveRobot(1, 0);

            }

            else if (
                program[i] === "left"
            ) {

                success =
                    moveRobot(0, -1);

            }

            else {

                success =
                    moveRobot(0, 1);

            }


            await wait(450);


            if (!success) {

                running = false;

                return;

            }


            if (
                row === data.target[0] &&
                column === data.target[1]
            ) {

                running = false;

                return;

            }

        }


        running = false;


        showMessage(
            "🤔 Try Again",
            "The robot did not reach the target."
        );

    }
);


// ========================================
// CLEAR
// ========================================

document.getElementById(
    "clear"
).addEventListener(
    "click",
    function () {

        program = [];

        displayProgram();

    }
);


// ========================================
// RESET
// ========================================

document.getElementById(
    "reset"
).addEventListener(
    "click",
    function () {

        startLevel(
            currentLevel
        );

    }
);


// ========================================
// LEVEL BUTTONS
// ========================================

function updateLevelButtons() {

    document.querySelectorAll(
        ".level"
    ).forEach(
        button => {

            const level =
                Number(
                    button.dataset.level
                );


            if (
                level <= unlocked
            ) {

                button.classList.remove(
                    "locked"
                );

                button.textContent =
                    `Level ${level}`;

            }

            else {

                button.classList.add(
                    "locked"
                );

                button.textContent =
                    `🔒 Level ${level}`;

            }

        }
    );

}


// ========================================
// LEVEL SELECTION
// ========================================

document.querySelectorAll(
    ".level"
).forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                const level =
                    Number(
                        button.dataset.level
                    );


                if (
                    level > unlocked
                ) {

                    showMessage(
                        "🔒 Locked",
                        "Complete the previous level first."
                    );

                    return;

                }


                startLevel(level);

            }
        );

    }
);


// ========================================
// START LEVEL
// ========================================

function startLevel(level) {

    currentLevel = level;


    const data =
        levels[level];


    row =
        data.start[0];

    column =
        data.start[1];

    moves = 0;

    program = [];


    levelDisplay.textContent =
        level;

    limitDisplay.textContent =
        data.limit;

    scoreDisplay.textContent =
        score;


    displayProgram();

    createGrid();


    document.querySelectorAll(
        ".level"
    ).forEach(
        button => {

            button.classList.remove(
                "active"
            );


            if (
                Number(
                    button.dataset.level
                ) === level
            ) {

                button.classList.add(
                    "active"
                );

            }

        }
    );


    showMessage(
        "🎯 Your Mission",
        "Create a program and guide the robot to the target."
    );

}


// ========================================
// COMPLETE LEVEL
// ========================================

function completeLevel() {

    const data =
        levels[currentLevel];


    // Calculate points

    const points =
        100 +
        (
            data.limit -
            moves
        ) * 20;


    const earnedPoints =
        Math.max(
            points,
            50
        );


    // Add score

    score += earnedPoints;


    scoreDisplay.textContent =
        score;


    // Save completed level

    if (
        !completedLevels.includes(
            currentLevel
        )
    ) {

        completedLevels.push(
            currentLevel
        );

        completedLevels.sort(
            (a, b) => a - b
        );

    }


    // Unlock next level

    if (
        currentLevel === unlocked &&
        unlocked < 5
    ) {

        unlocked++;

        localStorage.setItem(
            "robotLevel",
            unlocked
        );

    }


    // Save progress

    saveProgress();


    // Update buttons

    updateLevelButtons();


    showMessage(
        "🎉 Level Complete!",
        `Great job! You earned ${earnedPoints} points.`
    );

}


// ========================================
// MESSAGE
// ========================================

function showMessage(
    title,
    text
) {

    messageTitle.textContent =
        title;

    message.textContent =
        text;

}


// ========================================
// WAIT
// ========================================

function wait(ms) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );

}


// ========================================
// BUTTON COMMANDS
// ========================================

document.getElementById(
    "up"
).addEventListener(
    "click",
    () => addCommand("up")
);


document.getElementById(
    "down"
).addEventListener(
    "click",
    () => addCommand("down")
);


document.getElementById(
    "left"
).addEventListener(
    "click",
    () => addCommand("left")
);


document.getElementById(
    "right"
).addEventListener(
    "click",
    () => addCommand("right")
);


// ========================================
// KEYBOARD
// ========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowUp"
        ) {

            addCommand("up");

        }

        else if (
            event.key === "ArrowDown"
        ) {

            addCommand("down");

        }

        else if (
            event.key === "ArrowLeft"
        ) {

            addCommand("left");

        }

        else if (
            event.key === "ArrowRight"
        ) {

            addCommand("right");

        }

    }
);


// ========================================
// HEADER BUTTONS
// ========================================

// REFRESH

document.getElementById(
    "refresh-page"
).addEventListener(
    "click",
    function () {

        location.reload();

    }
);


// HOME

document.getElementById(
    "home-page"
).addEventListener(
    "click",
    function () {

        window.location.href =
            "../index.html";

    }
);


// ========================================
// INITIALIZE
// ========================================

updateLevelButtons();

startLevel(1);

saveProgress();