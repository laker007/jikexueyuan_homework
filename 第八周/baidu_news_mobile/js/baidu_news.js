$(document).ready(function() {
    $.ajax({
        url: '../baidu_news_mobile/php/baidu_news.php',
        dataType: "json",
        success: function(data) {
            dealData(data);
        }
    });

    $(".spo").on("click", function() {
        $.ajax({
            url: '../baidu_news_mobile/php/baidu_news_sport.php',
            dataType: "json",
            success: function(data) {
                dealData(data);
            }
        });
    });

    $(".rec").on("click", function() {
        $.ajax({
            url: '../baidu_news_mobile/php/baidu_news.php',
            dataType: "json",
            success: function(data) {
                dealData(data);
            }
        });
    });

    function dealData(data) {
        // console.log(data);
        // console.log(data.length);
        // console.log(data[0]);
        // console.log(data[0].addtime);

        $(".news-list").empty();

        for (var i = 0; i < data.length; i++) {
        	var listitem = $("<div>").addClass("list-item").appendTo($(".news-list"));
        	$("<img>").attr("src",""+data[i].newsimg).addClass("list-item-img").appendTo(listitem);
        	$("<div>").addClass("newstitle").appendTo(listitem).text(data[i].newstitle);
        	$("<div>").addClass("addtime").appendTo(listitem).text(data[i].addtime);
        }

    }

})
