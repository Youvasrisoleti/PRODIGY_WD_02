let timerId; 
let time = 0; 
let running = false; 

function formatTime(ms) {
    
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function updateDisplay() {
    
    document.querySelector('.time-display').textContent = formatTime(time);
}
function startTimer() {
    
    if (!running) {
        running = true;
        timerId = setInterval(() => {
            time += 1000;
            updateDisplay();
        }, 1000);
    }
}
function stopTimer() {
    
    if (running) {
        running = false;
        clearInterval(timerId);
    }
}
function resetTimer() {
    
    stopTimer();
    time = 0;
    updateDisplay();
    const lapsContainer = document.getElementById('laps');
    while (lapsContainer.firstChild) {
        lapsContainer.removeChild(lapsContainer.firstChild);
    }
}
function lapTimer() {
   
    if (running) {
        const lapTime = formatTime(time);
        const lapItem = document.createElement('div');
        lapItem.classList.add('lap');
        lapItem.textContent = lapTime;
        document.getElementById('laps').appendChild(lapItem);
    }
}


document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTimer);
