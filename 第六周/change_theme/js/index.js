/**
 * Created by laker on 2015/11/26.
 */
var green = document.getElementById("green");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var pink = document.getElementById("pink");

var nav = document.getElementById("nav_ul");
var nav_li1 = document.getElementById("nav_li1");
var right_part = document.getElementById("right_part");
var nav_class = document.getElementsByClassName("nav_class");

green.onclick = function(){
    nav.style.borderColor = "#228B22";
    nav_li1.style.background = "#228B22";
    right_part.style.borderTopColor = "#228B22";
    localStorage.setItem("theme","#228B22");
}

red.onclick = function(){
    nav.style.borderColor = "#D32222";
    nav_li1.style.background = "#D32222";
    right_part.style.borderTopColor = "#D32222";
    localStorage.setItem("theme","#D32222");
}

blue.onclick = function(){
    nav.style.borderColor = "#6264B6";
    nav_li1.style.background = "#6264B6";
    right_part.style.borderTopColor = "#6264B6";
    localStorage.setItem("theme","#6264B6");
}

pink.onclick = function(){
    nav.style.borderColor = "#C90C75";
    nav_li1.style.background = "#C90C75";
    right_part.style.borderTopColor = "#C90C75";
    localStorage.setItem("theme","#C90C75");
}

window.onload = function(){
    var theme = localStorage.getItem("theme");
    nav.style.borderColor = theme;
    nav_li1.style.background = theme;
    right_part.style.borderTopColor = theme;
}
