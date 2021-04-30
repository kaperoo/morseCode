var textField = document.getElementById("textField");

function testFunc(){
    fetch('./mcode.json')
    .then( res => res.json(),console.log(Error))
    .then(data => {
        textField.innerHTML = "";
        var xxx = document.getElementById("textInput").value;

        for(i=0;i<xxx.length;i++){
          textField.innerHTML += data[xxx[i].toLowerCase()] + "/";
        }
    });
}
document.addEventListener("keydown",function(e){
});

document.addEventListener("keyup",function(e){
    testFunc();
});