

//Detecting Button press
var noOfDrumBtn = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfDrumBtn; i++ ){

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){


   var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);
   btnAnimation(buttonInnerHTML);

});

}
 //detecting keyboard Press

document.addEventListener("keypress", function(event){

  makeSound(event.key);
  btnAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
         var tom1 = new Audio("sound/tom-1.wav");
         tom1.play();
      break;
    case "a":
         var tom2 = new Audio("sound/tom-2.wav");
         tom2.play();
      break;
    case "s":
          var tom3 = new Audio("sound/tom-3.wav");
          tom3.play();
      break;
    case "d":
          var tom4 = new Audio("sound/tom-4.wav");
          tom4.play();
      break;
    case "j":
          var snare = new Audio("sound/snare.wav");
          snare.play();
      break;
    case "k":
          var crash = new Audio("sound/crash.wav");
          crash.play();
      break;
    case "l":
          var kick = new Audio("sound/kick.wav");
          kick.play();
      break;

    default: console.log(key);
 }
}

function btnAnimation(currentBtn){

  var activeButton = document.querySelector("." + currentBtn);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
