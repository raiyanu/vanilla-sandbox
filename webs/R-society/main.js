var menu = document.getElementById("menu");
menu.style.display = "none";

var ham = document.getElementById("ham");
var closer = document.getElementById("closer");
ham.style.display = "block";
closer.style.display = "none";


var listcontainer = document.getElementById("listcontainer");
listcontainer.style.display ="none";
function show_player() {
      var player = document.getElementById("player");
      player.classList.toggle("musciplayer-active");
      if (player.style.display === "block") {
        player.style.display = "none";
      } else{
        player.style.display = "block";
      }
      var musicdot = document.getElementById("musicdot");
      musicdot.classList.toggle('noopacity')
}
function show_extra(selection){
  if(selection===0){
    var setting = document.getElementById("setting");
    if(setting.style.display === "flex"){
      setting.style.display = "none";
    } 
    else {
      setting.style.display = "flex";
    }
  }
  if(selection===1){
    if( menu.style.display === "flex"){
      document.getElementById("main").style.width = "100%";
      document.getElementById("main").style.border_bottom_left_radius = "1.5rem";
      menu.style.display = "none";
      closer.style.display = "none";
      ham.style.display = "block";
    } 
    else {
      document.getElementById("main").style.width = "inherit";
      menu.style.display = "flex";
      closer.style.display = "block";
      ham.style.display = "none";
    }
  }
  if(selection===2){
    console.log("clicked");
    if( listcontainer.style.display === "flex"){
      listcontainer.style.display ="none";
    } 
    else {
      listcontainer.style.display ="flex";
    }
  }
}

