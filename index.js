var numberOfBtns= document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML=this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    } );
}

document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
} );

function playSound(c){
    switch (c) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(c);
            break;
    }
}

function buttonAnimation(currentKey){
    var allowedKeys=['w','a','s','d','j','k','l'];
    if(!allowedKeys.includes(currentKey))
        return;
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}