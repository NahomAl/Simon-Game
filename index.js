var clicks = [];
var list = [];
var level = 0;
$(".blue").click(function () {
    clicks.push(0);
    press("blue");
});

$(".red").click(function () {
    clicks.push(1);
    press("red");
});

$(".green").click(function () {
    clicks.push(2);
    press("green");
});

$(".yellow").click(function () {
    clicks.push(3);
    press("yellow");
});

function addAudio(color) {
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}

function buttonAnimation(currentKey) { 
    document.querySelector('.' + currentKey).classList.add('pressed');
    setTimeout(() => {
         document.querySelector('.' + currentKey).classList.remove('pressed');
    }, 125);
}

function press( color) { 
    addAudio(color);
    buttonAnimation(color);
     setTimeout(function () {
        start();
      }, 200);
    
}



function start() {
    if (level == 0) {
        $("h1").text("Level " + ++level);
        list.push(clicks[0]);
        levelSequence();
    }
    else if (clicks.length <= list.length) {
        for (var i = 0; i < clicks.length; i++) {
            if (clicks[i] != list[i]) {
                $("h1").text("Game Over, Press Any Key to Restart");
                restart();
            }
        }
        
    }
    if (clicks.length == list.length && level != 0) {
        $("h1").text("Level " + ++level);
        levelSequence();
    }
}
function levelSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    list.push(randomNumber);  
    var i = 0;
    if (level == 1) 
        i=1;
    for (; i < list.length; i++) {
        (function (i) {
            setTimeout(function () {
                switch (list[i]) { 
                case 0:
                    addAudio("blue");
                    buttonAnimation("blue");
                    break;
                case 1:
                    addAudio("red");
                    buttonAnimation("red");
                    break;
                case 2:
                    addAudio("green");
                    buttonAnimation("green");
                    break;
                case 3:
                    addAudio("yellow");
                    buttonAnimation("yellow");
                    break;
                }
            }, i * 700);
        })(i);
    }
    clicks = [];
}
function restart() { 
    clicks = [];
    list = [];
    level = 0;
    addAudio("wrong");
    $("h1").text("Game Over Press A Key to Start");
}
