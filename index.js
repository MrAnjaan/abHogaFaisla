var randnomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "dice" + randnomNumber1+ ".png";
var randomImageSource1 = "images/" + randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randnomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "dice" + randnomNumber2+ ".png";
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randnomNumber1 > randnomNumber2)
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins.!!";
else if(randnomNumber1 < randnomNumber2)
    document.querySelector("h1").innerHTML = "🚩 Player2 Wins.!!";
else
document.querySelector("h1").innerHTML ="Draw.!!";