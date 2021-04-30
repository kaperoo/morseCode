/* var start;
var stops;
var pressed = false;

document.addEventListener("keydown",function(e){
    if(!pressed){
        start = Date.now();
        console.log("test1: "+start)
        pressed = true;
    }
});

document.addEventListener("keyup",function(e){
    pressed = false;
    stops = Date.now();
    console.log("test2: "+stops)
    var dur = stops - start;
    console.log(dur);
}); */