/**
 * Created by laker on 2015/11/21.
 */
window.onload = function () {
    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];

    var count = 0;
    var most = 0;
    var result = 0;
    //alert(arr.length);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }
        if (count >= most) {
            most = count;//找到最多出现字母出现的次数
        }
        count = 0;
    }

    //document.write(most);
//根据之前找到的次数重新遍历数组，找到字母以及出现的位置
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }
        if ((count == most) && (result != arr[i])) {//防止相同的字母重复出现
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] == arr[i]) {
                    document.write(arr[i] + " show at " + j + " position" + "</br>");
                }
            }
            document.write("The most frequent letter is "+arr[i]+",total "+most+" times");
            result = arr[i];
        }
        count = 0;
    }
}