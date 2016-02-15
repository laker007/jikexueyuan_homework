/**
 * Created by laker on 2015/12/8.
 */
$(document).ready(function(){
    $(".nav-wrap-left").mouseenter(function () {
        $(".nav-hover").show();
    });
    $(".panel-item").mouseenter(function(){
        $(this.firstElementChild).css("display","block");
    })

});