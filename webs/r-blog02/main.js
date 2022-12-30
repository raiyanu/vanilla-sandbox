function show_menu() {
  var menupopy = document.getElementById("menubar");
  menupopy.classList.add("menuactive");
}
function hide_menu() {
  var menupopy = document.getElementById("menubar");
  menupopy.classList.remove("menuactive");
}

 var mybutton = document.getElementById("mybutton");
var audio = document.getElementById("mysong");
 var my = document.getElementById("start");
audio. play();
var count =1;
var songicon = document.getElementById("songicon");
var icon = document.getElementById("songicon");
function playsong(){
      if(count==0){
            icon.classList.add("activated");
            count = 1;
            audio.play();
            my.innerHTML = "⏸ Stop";
      } else {
            icon.classList.remove("activated");

            count = 0;
            audio.pause();
            my.innerHTML = " ▶ Play";
      }
}
