
    (function(){
        var div,id;
        for(i=1;i<=400;i++){
          div = document.createElement('div');
          id = "box" + i;
          div.id = id;
          var snk = document.getElementById("snake");
          document.getElementById("game").insertBefore(div, snk);
        }

    })();


function resgame()  {
grid = 0;
score = 0;
p.innerHTML = 0;
snake.style.top = 0;
snake.style.left = 0;
move = 0;
setpos()

for(var i=1;i<400;i++){
    var q;
    q = "box" + i;
    var box = document.getElementById(q);
    box.classList.remove("box");
}

};

function gameover() {

     sleft = parseInt(snake.style.left)
     stop = parseInt(snake.style.top)
     sright = parseInt(snake.style.right)
     sbottom = parseInt(snake.style.bottom)


    for(var n=1;n<score;n++){
    var m = "box" + n;
    var boxNum = document.getElementById(m);
    if(boxNum.style.left === snake.style.left && snake.style.top === boxNum.style.top){
    resgame();
    }
}


if(sleft < 0){
resgame();
}


if(sleft >= 690){
resgame();
}

if(stop < 0){
resgame();
}

if(stop >= 700){
resgame();
}

if(frut.style.left === snake.style.left && snake.style.top === frut.style.top){
setpos()
++grid;
var box;
box = document.getElementById("box" + grid);
box.classList.add("box")
p.innerHTML = ++score;
}

};



var grid = 0;
var move = 0;
var btop = document.getElementById("top")
var bbottom = document.getElementById("bottom")
var bleft = document.getElementById("left")
var bright = document.getElementById("right")
var fist = true;
var snake = document.getElementById("snake")
var frut = document.getElementById("frut")
var game = document.getElementById("game")
var score = 0;
var p = document.getElementById("score")
var interval = 400;
function setpos() {
frut.style.left = ((Math.floor(Math.random() * 10) * 70)) + "px";
frut.style.top = ((Math.floor(Math.random() * 10) * 70)) + "px";

    if(parseInt(frut.style.left) == 630 ){
        var num = Math.floor(Math.random() * 2)
        if(num == 1){
            frut.style.left = 630 + "px";
        } else {
            frut.style.left = 665 + "px";
        }
    }
    if(parseInt(frut.style.top) == 630 ){
        var num = Math.floor(Math.random() * 2)
        if(num == 1){
            frut.style.top = 630 + "px";
        } else {
            frut.style.top = 665 + "px";
        }
    }

     for(var i=1;i<score;i++){
    var q = "box" + i;
    var box = document.getElementById(q)
   
        if(frut.style.left === box.style.left && frut.style.top === box.style.top){
            setpos();
        }
    }

}


setpos();



setInterval(function() {
if(fist){
snake.style.left = 0;
snake.style.top = 0;
snake.style.right = 0;
snake.style.bottom = 0;
}



function boxAddPos(){
    for(i=400;i>1;i--){
    var num;
    var q = "box" + i;
    var box = document.getElementById(q);
    num = i - 1;
    var w = "box" + num;
    var boxN = document.getElementById(w);
    box.style.top = parseInt(boxN.style.top) + "px"
    box.style.left = parseInt(boxN.style.left) + "px"
    }
};


fist = false;
if(move == 0){

boxAddPos();

box1.style.top = stop + "px"
box1.style.left = sleft + "px"


snake.style.left = (sleft + 35) + "px"

}

if(move == 2){

boxAddPos();


box1.style.top = stop + "px"
box1.style.left = sleft + "px"

snake.style.top = (stop + 35) + "px"
}
if(move == 1){

boxAddPos();

box1.style.top = stop + "px"
box1.style.left = sleft + "px"

snake.style.left = (sleft - 35) + "px"
}

if(move == 3){

boxAddPos();

box1.style.top = stop + "px"
box1.style.left = sleft + "px"

snake.style.top = (stop - 35) + "px"
}


}, 100);

setInterval(gameover , 1);

addEventListener("keydown", function(e) {

if(e.keyCode == 37 && move != 0){
	move = 1
}
if(e.keyCode == 38 && move != 2){
	move = 3
}
if(e.keyCode == 39 && move != 1){
	move = 0
}
if(e.keyCode == 40 && move != 3){
	move = 2
}

})


