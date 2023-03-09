let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let num = 0;
let totallabel = document.getElementById('totallabel');
let total = document.getElementById('total');

function getrandom(){
    return Math.floor((Math.random()*6)+1);
}
function roller(){
    num = 0;
    dice1.innerHTML = Math.floor((Math.random()*6)+1);
    num = num + parseInt(dice1.innerHTML);
    dice2.innerHTML = Math.floor((Math.random()*6)+1);
    num = num + parseInt(dice2.innerHTML);
    dice3.innerHTML = Math.floor((Math.random()*6)+1);
    num = num + parseInt(dice3.innerHTML);
    totallabel.innerHTML = num;
    total.innerHTML = num;
    num=0;
    totallabel.innerHTML = "Total:"
}