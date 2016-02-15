/**
 * Created by laker on 2015/10/21.
 */
var setid = document.getElementById("setting_id");
var seta = document.getElementById("setting_a");
var set1 = document.getElementById("setting1");
var set2 = document.getElementById("setting2");
var set3 = document.getElementById("setting3");
var set4 = document.getElementById("setting4");
var more_bt = document.getElementById("more_bt");
var side = document.getElementById("side");
var login_bt = document.getElementById("login_bt_bd");
var login = document.getElementById("login");
var login_clo_bt = document.getElementById("login_clo_bt");

login_clo_bt.onclick = function () {
    login.style.visibility = "hidden";
}

login_bt.onclick = function () {
    login.style.visibility = "visible";
}

//    login_bt.onmouseover = function(){
//        login.style.visibility = "visible";
//    }

seta.onmouseover = function () {
    setid.style.visibility = "visible";
};

setid.onmouseover = function () {
    setid.style.visibility = "visible";
};

setid.onmouseout = function () {
    setid.style.visibility = "hidden";
};

set1.onmouseover = function () {
    set1.style.backgroundColor = "#3388ff";
    set1.style.color = "#FFFFFF";
}

set1.onmouseout = function () {
    set1.style.backgroundColor = "#FFFFFF";
    set1.style.color = "#000000";
}

set2.onmouseover = function () {
    set2.style.backgroundColor = "#3388ff";
    set2.style.color = "#FFFFFF";
}

set2.onmouseout = function () {
    set2.style.backgroundColor = "#FFFFFF";
    set2.style.color = "#000000";
}

set3.onmouseover = function () {
    set3.style.backgroundColor = "#3388ff";
    set3.style.color = "#FFFFFF";
}

set3.onmouseout = function () {
    set3.style.backgroundColor = "#FFFFFF";
    set3.style.color = "#000000";
}

set4.onmouseover = function () {
    set4.style.backgroundColor = "#3388ff";
    set4.style.color = "#FFFFFF";
}

set4.onmouseout = function () {
    set4.style.backgroundColor = "#FFFFFF";
    set4.style.color = "#000000";
}

more_bt.onmouseover = function () {
    side.style.visibility = "visible";
}

side.onmouseover = function () {
    side.style.visibility = "visible";
}

side.onmouseout = function () {
    side.style.visibility = "hidden";
}