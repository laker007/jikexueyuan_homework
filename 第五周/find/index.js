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
            most = count;//�ҵ���������ĸ���ֵĴ���
        }
        count = 0;
    }

    //document.write(most);
//����֮ǰ�ҵ��Ĵ������±������飬�ҵ���ĸ�Լ����ֵ�λ��
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }
        if ((count == most) && (result != arr[i])) {//��ֹ��ͬ����ĸ�ظ�����
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