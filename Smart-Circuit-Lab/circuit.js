// ========================================
// STEM FUTURELAB
// SMART CIRCUIT LAB
// CIRCUIT CONTROL
// ========================================


// ========================================
// CIRCUIT STATE
// ========================================

let switchOn = false;


// ========================================
// GET ELEMENTS
// ========================================

const switchButton =
    document.getElementById("switch-button");

const toggleSwitchButton =
    document.getElementById("toggle-switch");

const resetButton =
    document.getElementById("reset-circuit");

const ledComponent =
    document.getElementById("led-component");

const ledLight =
    document.getElementById("led-light");

const switchStatus =
    document.getElementById("switch-status");

const ledStatus =
    document.getElementById("led-status");

const circuitStatus =
    document.getElementById("circuit-status");

const circuitMessage =
    document.getElementById("circuit-message");

const powerStatus =
    document.getElementById("power-status");

const controlSwitchStatus =
    document.getElementById(
        "control-switch-status"
    );

const controlLedStatus =
    document.getElementById(
        "control-led-status"
    );

const wires =
    document.querySelectorAll(".wire");

const refreshButton =
    document.getElementById("refresh-page");

const homeButton =
    document.getElementById("home-page");


// ========================================
// UPDATE CIRCUIT
// ========================================

function updateCircuit() {

    if (switchOn) {

        // -------------------------------
        // SWITCH
        // -------------------------------

        switchButton.classList.add("active");

        switchStatus.textContent =
            "ON";


        // -------------------------------
        // LED
        // -------------------------------

        ledComponent.classList.add("active");

        ledLight.textContent =
            "💡";

        ledStatus.textContent =
            "ON";


        // -------------------------------
        // WIRES
        // -------------------------------

        wires.forEach(function (wire) {

            wire.classList.add("active");

        });


        // -------------------------------
        // STATUS
        // -------------------------------

        circuitStatus.textContent =
            "Circuit ON";

        powerStatus.textContent =
            "Power Flowing";

        controlSwitchStatus.textContent =
            "ON";

        controlLedStatus.textContent =
            "ON";


        // -------------------------------
        // MESSAGE
        // -------------------------------

        circuitMessage.innerHTML = `

            <h3>
                💡 Circuit Complete!
            </h3>

            <p>
                Excellent! The switch is ON,
                electricity can flow and the
                LED is glowing.
            </p>

        `;


        // -------------------------------
        // BUTTON
        // -------------------------------

        toggleSwitchButton.textContent =
            "🔘 Turn Switch OFF";

    }

    else {

        // -------------------------------
        // SWITCH
        // -------------------------------

        switchButton.classList.remove(
            "active"
        );

        switchStatus.textContent =
            "OFF";


        // -------------------------------
        // LED
        // -------------------------------

        ledComponent.classList.remove(
            "active"
        );

        ledLight.textContent =
            "💡";

        ledStatus.textContent =
            "OFF";


        // -------------------------------
        // WIRES
        // -------------------------------

        wires.forEach(function (wire) {

            wire.classList.remove(
                "active"
            );

        });


        // -------------------------------
        // STATUS
        // -------------------------------

        circuitStatus.textContent =
            "Circuit Off";

        powerStatus.textContent =
            "Ready";

        controlSwitchStatus.textContent =
            "OFF";

        controlLedStatus.textContent =
            "OFF";


        // -------------------------------
        // MESSAGE
        // -------------------------------

        circuitMessage.innerHTML = `

            <h3>
                🎯 Circuit Mission
            </h3>

            <p>
                Turn ON the switch to
                complete the circuit.
            </p>

        `;


        // -------------------------------
        // BUTTON
        // -------------------------------

        toggleSwitchButton.textContent =
            "🔘 Turn Switch ON";

    }

}


// ========================================
// TOGGLE SWITCH
// ========================================

function toggleCircuit() {

    switchOn =
        !switchOn;

    updateCircuit();

}


// ========================================
// SWITCH BUTTON
// ========================================

switchButton.addEventListener(
    "click",
    function () {

        toggleCircuit();

    }
);


// ========================================
// CONTROL BUTTON
// ========================================

toggleSwitchButton.addEventListener(
    "click",
    function () {

        toggleCircuit();

    }
);


// ========================================
// RESET CIRCUIT
// ========================================

resetButton.addEventListener(
    "click",
    function () {

        switchOn = false;

        updateCircuit();

    }
);


// ========================================
// REFRESH PAGE
// ========================================

refreshButton.addEventListener(
    "click",
    function () {

        location.reload();

    }
);


// ========================================
// HOME PAGE
// ========================================

homeButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "../index.html";

    }
);


// ========================================
// INITIAL STATE
// ========================================

updateCircuit();