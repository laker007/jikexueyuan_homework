/**
 * Created by laker on 2015/12/7.
 */
/**
 * Created by laker on 2015/12/3.
 */
$(document).ready(function () {

    // 更多产品 hover ??show and hide
    $("#more_pro").mouseenter(function () {
        $(".more_hover").show();
    });
    $(".more_hover").mouseleave(function () {
        $(".more_hover").hide();
    });

    //标签的 hover
    function tagHover() {
        $(".others_nav").mouseenter(function () {
            $(".others_nav").css({
                "background-color": "#b3b6bb",
                "color": "#fff"
            });
        });
        $(".others_nav").mouseleave(function () {
            $(".others_nav").css({
                "background-color": "#fff",
                "color": "#000"
            });
        });
        $(".others_rec").mouseenter(function () {
            $(".others_rec").css({
                "background-color": "#b3b6bb",
                "color": "#fff"
            });
        });
        $(".others_rec").mouseleave(function () {
            $(".others_rec").css({
                "background-color": "#fff",
                "color": "#000"
            });
        });
        $(".others_shop").mouseenter(function () {
            $(".others_shop").css({
                "background-color": "#b3b6bb",
                "color": "#fff"
            });
        });
        $(".others_shop").mouseleave(function () {
            $(".others_shop").css({
                "background-color": "#fff",
                "color": "#000"
            });
        });
        $(".others_video").mouseenter(function () {
            $(".others_video").css({
                "background-color": "#b3b6bb",
                "color": "#fff"
            });
        });
        $(".others_video").mouseleave(function () {
            $(".others_video").css({
                "background-color": "#fff",
                "color": "#000"
            });
        });
        $(".mine").mouseenter(function () {
            $(".mine").css({
                "background-color": "#b3b6bb",
                "font-weight": "bold",
                "color": "#fff"
            });
            $(".mine_icon").css("background-position", "-144px 0");
        });
        $(".mine").mouseleave(function () {
            $(".mine").css({
                "background-color": "#fff",
                "color": "#000",
                "font-weight": "normal"
            });
            $(".mine_icon").css("background-position", "-15px 0");
        });

        //$(this).off("mouseenter mouseleave");
    }


    function tagHide() {
        $(".my_watchlist").hide();
        $(".my_nav").hide();
        $(".my_rec").hide();
        $(".my_shop").hide();
        $(".my_video").hide();
    }

    function login_settingHover(id){
        $(id).mouseenter(function(){
            $(this).css({
                "background-color":"#3388ff",
                "color":"#fff"
            });
        });
        $(id).mouseleave(function(){
            $(this).css({
                "background-color":"#fff",
                "color":"#000"
            });
        });
    }


    //?????????????л?
    $(".others_nav").on("click", function () {

        //$(".others_nav").off("mouseleave");
        //$(this).off("mouseleave");
        //$(".others_shop").on("mouseenter mouseleave");

        tagHover();
        $(".others_nav").off("mouseenter mouseleave");

        //css ?л?
        $(".mine,.others_shop,.others_rec,.others_video").css({
            "background-color": "#FFF",
            "color": "#000",
            "font-weight": "normal"
        });

        $(".mine_icon").css("background-position", "-15px 0");

        $(".others_nav").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });

        tagHide();
        $(".my_nav").show();


    });

    $(".others_rec").on("click", function () {

        tagHover();
        $(".others_rec").off("mouseenter mouseleave");

        //$(".others_rec").off("mouseenter mouseleave");
        //css ?л?
        $(".mine,.others_nav,.others_shop,.others_video").css({
            "background-color": "#FFF",
            "color": "#000",
            "font-weight": "normal"
        });

        $(".mine_icon").css("background-position", "-15px 0");
        $(".others_rec").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });

        tagHide();
        $(".my_rec").show();

    });

    $(".others_shop").on("click", function () {
        tagHover();
        $(".others_shop").off("mouseenter mouseleave");
        //$(".others_shop").off("mouseenter mouseleave");

        //css ?л?
        $(".mine,.others_nav,.others_rec,.others_video").css({
            "background-color": "#FFF",
            "color": "#000",
            "font-weight": "normal"
        });

        $(".mine_icon").css("background-position", "-15px 0");
        $(".others_shop").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });

        tagHide();
        $(".my_shop").show();

    });

    $(".others_video").on("click", function () {

        tagHover();
        $(".others_video").off("mouseenter mouseleave");

        //$(".others_video").off("mouseenter mouseleave");
        //css ?л?
        $(".mine,.others_nav,.others_shop,.others_rec").css({
            "background-color": "#FFF",
            "color": "#000",
            "font-weight": "normal"
        });

        $(".mine_icon").css("background-position", "-15px 0");
        $(".others_video").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });

        tagHide();
        $(".my_video").show();
    });

    $(".mine").on("click", function () {
        tagHover();
        $(".mine").off("mouseenter mouseleave");

        //$(".mine").off("mouseenter mouseleave");
        //css ?л?
        $(".others_nav, .others_shop,.others_rec,.others_video").css({
            "background-color": "#FFF",
            "color": "#000",
            "font-weight": "normal"
        });

        $(".mine_icon").css("background-position", "-144px 0");
        $(".mine").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        tagHide();
        $(".my_watchlist").show();
    });


    //标签设置 hover 事件
    $(".setting").mouseenter(function () {
        $(".setting").css("background-position", "-121px -73px");
    });
    $(".setting").mouseleave(function () {
        $(".setting").css("background-position", "-121px -49px");
    });

    //设置菜单的 hover 事件
    $(".right_nav a:nth-child(8)").mouseenter(function(){
        $(".setting_con").show();
    });

    $(".setting_con").mouseleave(function(){
        $(".setting_con").hide();
    });
    login_settingHover("#setting1");
    login_settingHover("#setting2");
    login_settingHover("#setting3");
    login_settingHover("#setting4");

    //登录菜单的hover事件
    $(".right_nav a:nth-child(7)").mouseenter(function(){
        $(".login_con").show();
    });

    $(".login_con").mouseleave(function(){
        $(".login_con").hide();
    });
    login_settingHover("#login1");
    login_settingHover("#login2");
    login_settingHover("#login3");
    login_settingHover("#login4");
    login_settingHover("#login5");


    //启动页面自动点击我的关注
    $(".mine").trigger("click");

});

