var unit, personalizedLatency;
var textField = document.getElementById("textField");

function testFunc(){
    fetch('./mcode.json')
    .then( res => res.json(),console.log(Error))
    .then(data => {
    });
}

const timer = document.getElementById('stopwatch');
var sec = 0;
var stoptime = true;
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}
function resetTimer() {
    stoptime = true;
    sec = 0;
}
function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    sec = sec + 1;

    setTimeout("timerCycle()", 1000);
  }
}

unit= sec*personalizedLatency;

var slider = document.getElementById("myRange");
textField.innerHTML = slider.value;
slider.oninput = function() {
  textField.innerHTML = this.value;
}


document.addEventListener("keydown",function(e){
        startTimer();
});
document.addEventListener("keyup",function(e){
    if(e.which == 32){
        stopTimer();
        if(sec <= unit){
            textField.innerHTML += "&#8226 ";
            sec = 0;
        }
        else {
            textField.innerHTML += "&#9135 ";
            sec = 0;
        }
    }
});