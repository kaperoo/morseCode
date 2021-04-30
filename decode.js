var textField = document.getElementById("textField");
var unitField = document.getElementById("units");
var translation = document.getElementById("tlumaczenie");

var unit;

var start;
var koniec;
var pressed = false;
var dur;

var stringi = "";

var slider = document.getElementById("myRange");
unitField.innerHTML = "Unit length: " + slider.value;

function testFunc(){
    fetch('./rcode.json')
    .then( res => res.json(),console.log(Error))
    .then(data => {
        translation.innerHTML= data[stringi];
    });
}

document.addEventListener("keydown",function(e){
    if(e.which == 32){
        if(!pressed){
            start = Date.now();
            pressed = true;
        }
    }
});

document.addEventListener("mousedown",function(e){
    slider.oninput = function() {
        unitField.innerHTML = "Unit length: " + this.value ;
    }
    
    unit = slider.value * 1000;
});

document.addEventListener("keyup",function(e){

    if(e.which == 32){
        pressed = false;
        koniec = Date.now();
        dur = (koniec - start);
        
        console.log("duration: " +dur);
        console.log("unit: " + unit);

        if(dur < 3*unit){
            textField.innerHTML += "&#8226 ";
            stringi += ".";
        }
        else if(dur >= 3*unit && dur <= 7*unit){
            textField.innerHTML += "&#9135 ";
            stringi += "-";
        }
        dur = 0;
        console.log(stringi);
    }
    if(e.which == 8){
        var temp = textField.innerHTML.slice(0,textField.innerHTML.length-2);
        textField.innerHTML= temp;
        stringi = stringi.slice(0,stringi.length-1);
    }
    testFunc();
});