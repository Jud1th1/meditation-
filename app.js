// variables

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 10;
let breakTime = 5;

let seconds = "00"
let timerInterval; // Variable to store the timer interval
let isTimerRunning = false; // Variable to track if the timer is running

// Get a reference to the audio element
let sound = document.getElementById('sound');

// Set the autoplay attribute to false initially
sound.autoplay = false;

// Function to stop audio playback
function stopSound() {
    sound.pause();
    sound.currentTime = 0; // Reset audio playback to the beginning
}

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// start timer
function start() {
    if (!isTimerRunning) {
        // change button
        document.getElementById('start').style.display = "none";
        document.getElementById('reset').style.display = "block";

        // change the time
        seconds = 59;

        let workMinutes = workTime - 1;
        let breakMinutes = breakTime - 1;

        let breakCount = 0;

        // countdown
        let timerFunction = () => {
            //change the display
            document.getElementById('minutes').innerHTML = workMinutes;
            document.getElementById('seconds').innerHTML = seconds;

            // start
            seconds = seconds - 1;

            if (seconds === 0) {
                workMinutes = workMinutes - 1;
                if (workMinutes === -1) {
                    if (breakCount % 2 === 0) {
                        // start break
                        workMinutes = breakMinutes;
                        breakCount++

                        // change the painel
                        workTittle.classList.remove('active');
                        breakTittle.classList.add('active');
                    } else {
                        // continue work
                        workMinutes = workTime;
                        breakCount++

                        // change the painel
                        breakTittle.classList.remove('active');
                        workTittle.classList.add('active');
                    }
                }
                seconds = 59;
            }
            
            // Check if the timer has reached 10 minutes
            if (workMinutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                stopSound(); // Stop the sound when the timer reaches 10 minutes
                document.getElementById('start').style.display = "block";
                document.getElementById('reset').style.display = "none";
                document.getElementById('minutes').innerHTML = workTime;
                document.getElementById('seconds').innerHTML = "00";
            }
        }

        // Start audio playback only when the start button is clicked
        sound.play();

        // start countdown
        timerInterval = setInterval(timerFunction, 1000); // 1000 = 1s
        isTimerRunning = true;
    }
}

// pause timer
function pause() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    
    // Pause audio playback
    sound.pause();
}

// reset timer
function reset() {
    clearInterval(timerInterval);
    isTimerRunning = false;

    // Reset audio playback and stop the sound
    stopSound();

    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = "00";
}

