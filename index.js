var numberOfdrumButton = document.querySelectorAll(".drum").length;

// function add(){
    
// }

for(var i = 0 ; i<numberOfdrumButton ; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            break;

            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            break;

            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            break;

            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            break;

            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
            break;

            case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
            break;

            case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            break;

            default:
        }
    });
}

for(var i = 0 ; i<numberOfdrumButton ; i++){
    document.querySelectorAll("button")[i].addEventListener("keypress" , function(e){
        var buttonInnerHTML = e.key;

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            break;

            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            break;

            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            break;

            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            break;

            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
            break;

            case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
            break;

            case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            break;

            default:
        }
    });
}


