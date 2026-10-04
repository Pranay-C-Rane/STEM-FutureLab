// ========================================
// STEM FUTURELAB
// CODING PLAYGROUND
// VERSION 3
// Commands + Loops + Variables + IF/ELSE
// ========================================

const GRID_SIZE = 5;


// ========================================
// ROBOT STATE
// ========================================

let robotRow = 4;
let robotColumn = 0;

let robotDirection = 0;

// 0 = UP
// 1 = RIGHT
// 2 = DOWN
// 3 = LEFT


const targetRow = 1;
const targetColumn = 4;

let moveCount = 0;


// ========================================
// VARIABLES
// ========================================

let programVariables = {};


// ========================================
// HTML ELEMENTS
// ========================================

const codeEditor =
    document.getElementById("code-editor");

const runButton =
    document.getElementById("run-button");

const clearButton =
    document.getElementById("clear-code");

const refreshButton =
    document.getElementById("refresh-page");

const homeButton =
    document.getElementById("home-page");

const robotGrid =
    document.getElementById("robot-grid");

const robotStatus =
    document.getElementById("robot-status");

const messageTitle =
    document.getElementById("message-title");

const messageText =
    document.getElementById("message-text");

const moveCountDisplay =
    document.getElementById("move-count");

const missionStatus =
    document.getElementById("mission-status");


// ========================================
// CREATE GRID
// ========================================

function createGrid() {

    robotGrid.innerHTML = "";

    for (
        let row = 0;
        row < GRID_SIZE;
        row++
    ) {

        for (
            let column = 0;
            column < GRID_SIZE;
            column++
        ) {

            const cell =
                document.createElement("div");

            cell.className =
                "robot-cell";

            cell.dataset.row =
                row;

            cell.dataset.column =
                column;

            robotGrid.appendChild(cell);

        }

    }

    updateRobotDisplay();

}


// ========================================
// UPDATE DISPLAY
// ========================================

function updateRobotDisplay() {

    const cells =
        document.querySelectorAll(
            ".robot-cell"
        );


    cells.forEach(
        function (cell) {

            cell.textContent = "";

            cell.classList.remove(
                "robot",
                "target"
            );

        }
    );


    // TARGET

    const targetCell =
        document.querySelector(
            `[data-row="${targetRow}"][data-column="${targetColumn}"]`
        );


    if (targetCell) {

        targetCell.classList.add(
            "target"
        );

        targetCell.textContent =
            "🎯";

    }


    // ROBOT

    const robotCell =
        document.querySelector(
            `[data-row="${robotRow}"][data-column="${robotColumn}"]`
        );


    if (robotCell) {

        robotCell.classList.add(
            "robot"
        );

        robotCell.textContent =
            "🤖";

    }


    moveCountDisplay.textContent =
        moveCount;

}


// ========================================
// RESET
// ========================================

function resetRobot() {

    robotRow = 4;
    robotColumn = 0;

    robotDirection = 0;

    moveCount = 0;

    programVariables = {};


    robotStatus.textContent =
        "Ready";

    missionStatus.textContent =
        "Not Started";

    messageTitle.textContent =
        "🎯 Mission";

    messageText.textContent =
        "Write a program and press Run Program.";

    updateRobotDisplay();

}


// ========================================
// MOVE ROBOT
// ========================================

function moveRobot() {

    let newRow =
        robotRow;

    let newColumn =
        robotColumn;


    if (robotDirection === 0) {

        newRow--;

    }

    else if (robotDirection === 1) {

        newColumn++;

    }

    else if (robotDirection === 2) {

        newRow++;

    }

    else if (robotDirection === 3) {

        newColumn--;

    }


    // BOUNDARY

    if (
        newRow < 0 ||
        newRow >= GRID_SIZE ||
        newColumn < 0 ||
        newColumn >= GRID_SIZE
    ) {

        showError(
            "⚠️ Boundary Error",
            "The robot cannot move outside the grid."
        );

        return false;

    }


    robotRow =
        newRow;

    robotColumn =
        newColumn;

    moveCount++;


    updateRobotDisplay();


    // TARGET

    if (
        robotRow === targetRow &&
        robotColumn === targetColumn
    ) {

        robotStatus.textContent =
            "Mission Complete!";

        missionStatus.textContent =
            "Completed 🎉";

        messageTitle.textContent =
            "🎉 Target Reached!";

        messageText.textContent =
            "Excellent! Your program guided the robot to the target.";

        return true;

    }


    return true;

}


// ========================================
// TURN RIGHT
// ========================================

function turnRight() {

    robotDirection++;

    if (robotDirection > 3) {

        robotDirection = 0;

    }

}


// ========================================
// TURN LEFT
// ========================================

function turnLeft() {

    robotDirection--;

    if (robotDirection < 0) {

        robotDirection = 3;

    }

}


// ========================================
// ERROR
// ========================================

function showError(
    title,
    text
) {

    robotStatus.textContent =
        "Error";

    missionStatus.textContent =
        "Error ❌";

    messageTitle.textContent =
        title;

    messageText.textContent =
        text;

}


// ========================================
// SET VARIABLE
// ========================================

function processVariable(command) {

    const parts =
        command.split("=");


    if (parts.length !== 2) {

        showError(
            "⚠️ Variable Error",
            "Use: SET STEPS = 3"
        );

        return false;

    }


    const variableName =
        parts[0]
            .replace("SET", "")
            .trim();


    const value =
        parseInt(
            parts[1].trim()
        );


    if (
        !variableName ||
        isNaN(value)
    ) {

        showError(
            "⚠️ Variable Error",
            "Example: SET STEPS = 3"
        );

        return false;

    }


    programVariables[
        variableName
    ] = value;


    return true;

}


// ========================================
// GET VALUE
// ========================================

function getValue(value) {

    value =
        value.trim();


    if (
        programVariables[value]
        !== undefined
    ) {

        return programVariables[value];

    }


    const number =
        parseInt(value);


    if (!isNaN(number)) {

        return number;

    }


    return null;

}


// ========================================
// CHECK CONDITION
// ========================================

function checkCondition(condition) {

    condition =
        condition
            .trim()
            .toUpperCase();


    // ------------------------------
    // STEPS > 0
    // ------------------------------

    if (
        condition.startsWith("STEPS >")
    ) {

        const value =
            condition
                .replace("STEPS >", "")
                .trim();


        const number =
            getValue(value);


        if (number === null) {

            return false;

        }


        return (
            programVariables.STEPS > number
        );

    }


    // ------------------------------
    // STEPS < NUMBER
    // ------------------------------

    if (
        condition.startsWith("STEPS <")
    ) {

        const value =
            condition
                .replace("STEPS <", "")
                .trim();


        const number =
            getValue(value);


        if (number === null) {

            return false;

        }


        return (
            programVariables.STEPS < number
        );

    }


    // ------------------------------
    // STEPS == NUMBER
    // ------------------------------

    if (
        condition.startsWith("STEPS ==")
    ) {

        const value =
            condition
                .replace("STEPS ==", "")
                .trim();


        const number =
            getValue(value);


        if (number === null) {

            return false;

        }


        return (
            programVariables.STEPS === number
        );

    }


    return false;

}


// ========================================
// PROCESS IF / ELSE
// ========================================

function processIfElse(lines) {

    let result = [];


    for (
        let i = 0;
        i < lines.length;
        i++
    ) {

        const line =
            lines[i];


        // IF

        if (
            line.startsWith("IF ")
        ) {

            const condition =
                line
                    .replace("IF ", "")
                    .trim();


            const trueCommand =
                lines[i + 1];


            const nextLine =
                lines[i + 2];


            let falseCommand =
                null;


            if (
                nextLine === "ELSE"
            ) {

                falseCommand =
                    lines[i + 3];

                i += 3;

            }

            else {

                i += 1;

            }


            const resultCondition =
                checkCondition(
                    condition
                );


            if (resultCondition) {

                if (trueCommand) {

                    result.push(
                        trueCommand
                    );

                }

            }

            else {

                if (falseCommand) {

                    result.push(
                        falseCommand
                    );

                }

            }

        }

        else if (
            line === "ELSE"
        ) {

            // Already processed

        }

        else {

            result.push(
                line
            );

        }

    }


    return result;

}


// ========================================
// EXPAND REPEAT
// ========================================

function expandLoops(lines) {

    let expanded = [];


    for (
        let i = 0;
        i < lines.length;
        i++
    ) {

        const line =
            lines[i];


        if (
            line.startsWith("REPEAT ")
        ) {

            const parts =
                line.split(" ");


            const repeatValue =
                parts[1];


            let repeatCount =
                getValue(
                    repeatValue
                );


            if (
                repeatCount === null
            ) {

                showError(
                    "⚠️ Loop Error",
                    "REPEAT needs a valid number or variable."
                );

                return null;

            }


            if (
                repeatCount < 1 ||
                repeatCount > 10
            ) {

                showError(
                    "⚠️ Loop Error",
                    "REPEAT can only use values from 1 to 10."
                );

                return null;

            }


            const command =
                lines[i + 1];


            if (!command) {

                showError(
                    "⚠️ Loop Error",
                    "REPEAT needs a command."
                );

                return null;

            }


            for (
                let j = 0;
                j < repeatCount;
                j++
            ) {

                expanded.push(
                    command
                );

            }


            i++;

        }

        else {

            expanded.push(
                line
            );

        }

    }


    return expanded;

}


// ========================================
// RUN PROGRAM
// ========================================

function runProgram() {

    resetRobot();


    robotStatus.textContent =
        "Reading Code...";


    missionStatus.textContent =
        "Starting";


    let lines =
        codeEditor.value
            .split("\n")
            .map(
                function (line) {

                    return line
                        .trim()
                        .toUpperCase();

                }
            )
            .filter(
                function (line) {

                    return line !== "";

                }
            );


    if (lines.length === 0) {

        showError(
            "⚠️ No Code",
            "Write some commands first."
        );

        return;

    }


    // ====================================
    // VARIABLES
    // ====================================

    for (
        let i = 0;
        i < lines.length;
        i++
    ) {

        if (
            lines[i].startsWith("SET ")
        ) {

            if (
                !processVariable(
                    lines[i]
                )
            ) {

                return;

            }

        }

    }


    // ====================================
    // IF / ELSE
    // ====================================

    lines =
        processIfElse(lines);


    // ====================================
    // LOOPS
    // ====================================

    const commands =
        expandLoops(lines);


    if (!commands) {

        return;

    }


    // ====================================
    // EXECUTE
    // ====================================

    let commandIndex = 0;


    function executeNextCommand() {

        if (
            commandIndex >=
            commands.length
        ) {

            robotStatus.textContent =
                "Finished";


            if (
                robotRow !== targetRow ||
                robotColumn !== targetColumn
            ) {

                missionStatus.textContent =
                    "Not Completed";

                messageTitle.textContent =
                    "💡 Program Finished";

                messageText.textContent =
                    "The program finished, but the robot has not reached the target.";

            }

            return;

        }


        const command =
            commands[
                commandIndex
            ];


        // START

        if (
            command === "START"
        ) {

            messageTitle.textContent =
                "▶️ Program Started";

            messageText.textContent =
                "Your program is running.";

        }


        // MOVE

        else if (
            command === "MOVE"
        ) {

            if (
                !moveRobot()
            ) {

                return;

            }

        }


        // TURN RIGHT

        else if (
            command === "TURN RIGHT"
        ) {

            turnRight();

        }


        // TURN LEFT

        else if (
            command === "TURN LEFT"
        ) {

            turnLeft();

        }


        // STOP

        else if (
            command === "STOP"
        ) {

            robotStatus.textContent =
                "Stopped";

            missionStatus.textContent =
                "Stopped";

            messageTitle.textContent =
                "⏹️ Program Stopped";

            messageText.textContent =
                "The program was stopped.";

            return;

        }


        // SET

        else if (
            command.startsWith("SET ")
        ) {

            // Already processed

        }


        // UNKNOWN

        else {

            showError(
                "🐞 Unknown Command",
                `"${command}" is not a valid command.`
            );

            return;

        }


        commandIndex++;


        setTimeout(
            executeNextCommand,
            450
        );

    }


    executeNextCommand();

}


// ========================================
// BUTTONS
// ========================================

runButton.addEventListener(
    "click",
    runProgram
);


clearButton.addEventListener(
    "click",
    function () {

        codeEditor.value = "";

        resetRobot();

        messageTitle.textContent =
            "🧹 Code Cleared";

        messageText.textContent =
            "Write a new program.";

    }
);


refreshButton.addEventListener(
    "click",
    function () {

        location.reload();

    }
);


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

createGrid();

// ========================================
// DEBUG MISSION
// ========================================

const debugEditor =
    document.getElementById("debug-editor");

const debugRunButton =
    document.getElementById("debug-run");

const debugResult =
    document.getElementById("debug-result");

const debugHint =
    document.getElementById("debug-hint");


// ========================================
// DEBUG PROGRAM
// ========================================

function runDebugTest() {

    const code =
        debugEditor.value
            .split("\n")
            .map(function (line) {

                return line.trim().toUpperCase();

            })
            .filter(function (line) {

                return line !== "";

            });


    if (code.length === 0) {

        debugResult.className =
            "debug-result error";

        debugResult.textContent =
            "⚠️ There is no code to check.";

        return;

    }


    // ====================================
    // VALID COMMANDS
    // ====================================

    const validCommands = [

        "START",
        "MOVE",
        "TURN RIGHT",
        "TURN LEFT",
        "STOP"

    ];


    // ====================================
    // CHECK EACH COMMAND
    // ====================================

    for (
        let i = 0;
        i < code.length;
        i++
    ) {

        const command =
            code[i];


        // Skip variable commands

        if (
            command.startsWith("SET ")
        ) {

            continue;

        }


        // Skip repeat commands

        if (
            command.startsWith("REPEAT ")
        ) {

            continue;

        }


        // Skip IF

        if (
            command.startsWith("IF ")
        ) {

            continue;

        }


        // ELSE

        if (
            command === "ELSE"
        ) {

            continue;

        }


        // Check command

        if (
            !validCommands.includes(
                command
            )
        ) {

            debugResult.className =
                "debug-result error";


            debugResult.innerHTML =

                `❌ <strong>Error Found!</strong><br><br>

                Line ${i + 1} contains:

                <strong>${command}</strong>

                <br><br>

                This is not a valid robot command.

                <br><br>

                💡 Hint: Did you mean

                <strong>MOVE</strong>?`;


            debugHint.textContent =
                "Look carefully at the incorrect command.";

            return;

        }

    }


    // ====================================
    // NO ERROR
    // ====================================

    debugResult.className =
        "debug-result success";


    debugResult.innerHTML =

        `🎉 <strong>No Errors Found!</strong><br><br>

        Great job! Your program contains
        valid commands.`;


    debugHint.textContent =
        "Excellent debugging! Your code looks correct.";

}


// ========================================
// DEBUG BUTTON
// ========================================

debugRunButton.addEventListener(
    "click",
    runDebugTest
);