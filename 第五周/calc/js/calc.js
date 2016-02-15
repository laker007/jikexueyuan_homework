/**
 * Created by laker on 2015/11/21.
 */
window.onload = function () {
    var operate;
    var btn_0 = document.getElementById("btn_0");
    var btn_1 = document.getElementById("btn_1");
    var btn_2 = document.getElementById("btn_2");
    var btn_3 = document.getElementById("btn_3");
    var btn_4 = document.getElementById("btn_4");
    var btn_5 = document.getElementById("btn_5");
    var btn_6 = document.getElementById("btn_6");
    var btn_7 = document.getElementById("btn_7");
    var btn_8 = document.getElementById("btn_8");
    var btn_9 = document.getElementById("btn_9");
    var show = document.getElementById("show");
    var btn_div = document.getElementById("btn_div");
    var btn_mul = document.getElementById("btn_mul");
    var btn_less = document.getElementById("btn_less");
    var btn_plus = document.getElementById("btn_plus");
    var btn_equal = document.getElementById("btn_equal");
    var btn_ce = document.getElementById("btn_ce");

    function clear() {
        var m = show.value.search("=");
        if (m >= 0) {
            show.value = "";
        }
    }

    btn_0.onclick = function () {
        clear();
        show.value = show.value + 0;
    };
    btn_1.onclick = function () {
        clear();
        show.value = show.value + 1;
    };
    btn_2.onclick = function () {
        clear();
        show.value = show.value + 2;
    };
    btn_3.onclick = function () {
        clear();
        show.value = show.value + 3;
    };
    btn_4.onclick = function () {
        clear();
        show.value = show.value + 4;
    };
    btn_5.onclick = function () {
        clear();
        show.value = show.value + 5;
    };
    btn_6.onclick = function () {
        clear();
        show.value = show.value + 6;
    };
    btn_7.onclick = function () {
        clear();
        show.value = show.value + 7;
    };
    btn_8.onclick = function () {
        clear();
        show.value = show.value + 8;
    };
    btn_9.onclick = function () {
        clear();
        show.value = show.value + 9;
    };
    btn_div.onclick = function () {
        operate = "/";
        show.value = show.value + "/";
    };
    btn_mul.onclick = function () {
        operate = "*";
        show.value = show.value + "*";
    };
    btn_less.onclick = function () {
        operate = "-";
        show.value = show.value + "-";
    };
    btn_plus.onclick = function () {
        operate = "+";
        show.value = show.value + "+";
    };

    btn_equal.onclick = function () {
        var result = show.value;
        var first_number;
        var second_number;
        var num;

        var a = result.split(operate);
        first_number = a[0];
        second_number = a[1];

        switch (operate) {
            case "+":
                num = parseFloat(first_number) + parseFloat(second_number);
                break;
            case "-":
                num = first_number - second_number;
                break;
            case "*":
                num = first_number * second_number;
                break;
            case "/":
                num = first_number / second_number;
                break;
        }

        show.value = show.value + "=" + num;

    };

    btn_ce.onclick = function () {
        show.value = "";
    }
};