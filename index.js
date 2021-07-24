var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimg="dice"+randomNumber1 + ".png";
var imgsrc="images/"+randomimg;
document.querySelectorAll("img")[0].setAttribute("src",imgsrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randomNumber2 + ".png";
var imgsrc2="images/"+randomimg2;
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins !";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML="Draw !"
}