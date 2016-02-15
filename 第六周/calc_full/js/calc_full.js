/**
 * Created by laker on 2015/11/26.
 */
var show = document.getElementById("show");
var btn_ce = document.getElementById("btn_ce");
var btn_equal = document.getElementById("btn_equal");
var operator;

function clear() {
    var find_equal = show.value.search("=");
    if (find_equal > 0)//找到等于号
    {
        show.value = "";
    }
}

//往input中添加数字以及基本操作符
function add(val) {
    clear();
    show.value = show.value + val;
    switch (val) {
        case "^":
            operator = "^";
            break;
        case "+":
            operator = "+";
            break;
        case "-":
            operator = "-";
            break;
        case "*":
            operator = "*";
            break;
        case "/":
            operator = "/";
            break;
        default :
            break;
    }
}

//清空input
btn_ce.onclick = function clearInput() {
    show.value = "";
}

function calc_sin() {
    var result_sin = Math.sin(Math.PI * show.value / 180);
    show.value = "sin" + "(" + show.value + ")" + "=" + result_sin;
}

function calc_cos() {
    var result_cos = Math.cos(Math.PI * show.value / 180);
    show.value = "cos" + "(" + show.value + ")" + "=" + result_cos;
}

function calc_tan() {
    var result_tan = Math.tan(Math.PI * show.value / 180);
    show.value = "tan" + "(" + show.value + ")" + "=" + result_tan;
}

function calc_pow2() {
    var result_pow2 = Math.pow(show.value, 2);
    show.value = show.value + "^2" + "=" + result_pow2;
}

function calc_pow10() {
    var result_pow10 = Math.pow(10, show.value);
    show.value = "10^" + show.value + "=" + result_pow10;
}

function calc_log() {
    var result_log = Math.log(show.value) / Math.LN2;
    show.value = "log" + show.value + "=" + result_log;
}

btn_equal.onclick = function () {
    var number = show.value.split(operator);
    var first_number = number[0];
    var second_number = number[1];
    var result;

    switch (operator) {
        case "+":
            result = parseFloat(first_number) + parseFloat(second_number);
            break;
        case "-":
            result = first_number - second_number;
            break;
        case "*":
            result = first_number * second_number;
            break;
        case "/":
            result = first_number / second_number;
            break;
        case "^":
            result = Math.pow(first_number, second_number);
            break;
    }

    show.value = show.value + "=" + result;
}




