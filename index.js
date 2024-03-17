for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makeSound(button);
        annimation(button);
    });
}


document.addEventListener("keypress", function (event) {
    var keys = event.key;
    makeSound(keys);
    annimation(keys);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;

        case "s":
            var crash = new Audio("sounds/snare.mp3");
            crash.play();
            break;

        case "d":
            var crash = new Audio("sounds/tom-1.mp3");
            crash.play();
            break;

        case "j":
            var crash = new Audio("sounds/tom-2.mp3");
            crash.play();
            break;

        case "k":
            var crash = new Audio("sounds/tom-3.mp3");
            crash.play();
            break;

        case "l":
            var crash = new Audio("sounds/tom-4.mp3");
            crash.play();
            break;

        default:
            console.log(key);
    }
}

function annimation(currkey){
    var buttonPressed=document.querySelector("."+currkey);

    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },100);
    
}