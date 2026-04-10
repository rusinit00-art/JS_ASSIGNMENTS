var letters = ["A", "B", "C", "D", "E", "F"];
var colors = ["#e74c3c", "#2ecc71", "#3498db", "#f1c40f", "#9b59b6", "#e67e22"];

var timerId = null;

function updateQueue() {
    letters.unshift(letters.pop());
    colors.unshift(colors.pop());

    var labelElements = document.getElementsByClassName("label");

    for (let i = 0; i < letters.length; i++) {
        labelElements[i].innerText = letters[i];
        labelElements[i].style.color = colors[i];
    }
}

document.getElementById("startBtn").addEventListener("click", () => {
    if (timerId !== null) clearInterval(timerId);

    timerId = setInterval(updateQueue, 1000);
    console.log("Queue Animation Started");
});

document.getElementById("stopBtn").addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    console.log("Queue Animation Stopped");
});

timerId = setInterval(updateQueue, 1000);

