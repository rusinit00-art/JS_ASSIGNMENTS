var colorList = ["yellow", "#ffc0cb", "orchid", "red", "green", "blue"];

var timerId = null;

function renderQueue() {
    var lastColor = colorList.pop();
    colorList.unshift(lastColor);

    document.getElementById("box1").style.backgroundColor = colorList[0];
    document.getElementById("box2").style.backgroundColor = colorList[1];
    document.getElementById("box3").style.backgroundColor = colorList[2];
    document.getElementById("box4").style.backgroundColor = colorList[3];
    document.getElementById("box5").style.backgroundColor = colorList[4];
    document.getElementById("box6").style.backgroundColor = colorList[5];
}


document.getElementById("startBtn").addEventListener("click", function() {
    if (timerId === null) {
        timerId = setInterval(renderQueue, 800);
    }
});

document.getElementById("stopBtn").addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
});


renderQueue();