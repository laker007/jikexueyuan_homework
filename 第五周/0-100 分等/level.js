/**
 * Created by laker on 2015/11/20.
 */


window.onload = function () {
    var btn = document.getElementById("change");
    btn.onclick = function () {
        var level = 0;
        var score = document.getElementById("score").value;
        //alert(score);

        if ((score < 0) || (score > 100)) {
            alert("Please input number in 0-100");
        }
        else {
            switch (true) {
                case (score >= 90) && (score <= 100):
                    level = 1;
                    break;
                case (score >= 80) && (score < 90):
                    level = 2;
                    break;
                case (score >= 70) && (score < 80):
                    level = 3;
                    break;
                case (score >= 60) && (score < 70):
                    level = 4;
                    break;
                case (score >= 50) && (score < 60):
                    level = 5;
                    break;
                case (score >= 40) && (score < 50):
                    level = 6;
                    break;
                case (score >= 30) && (score < 40):
                    level = 7;
                    break;
                case (score >= 20) && (score < 30):
                    level = 8;
                    break;
                case (score >= 10) && (score < 20):
                    level = 9;
                    break;
                case (score >= 0) && (score < 10):
                    level = 10;
                    break;
            }

            //alert(level);

            var result = document.getElementById("level");
            result.innerHTML = level;
            result.style.color = "#F00";
        }


    };
}





