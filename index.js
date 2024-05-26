$(".btn").click(start);

$(".blue").click(function () {
    addAudio("blue");
    buttonAnimation("blue");
});

$(".red").click(function () {
    addAudio("red");
    buttonAnimation("red");
});

$(".green").click(function () {
    addAudio("green");
    buttonAnimation("green");
});

$(".yellow").click(function () {
    addAudio("yellow");
    buttonAnimation("yellow");
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

function start() {
    console.log("Start");
}
