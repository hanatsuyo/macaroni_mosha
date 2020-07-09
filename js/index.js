//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    let height=$("#header").innerHeight();
    $("#main").css("padding-top", height);
});

