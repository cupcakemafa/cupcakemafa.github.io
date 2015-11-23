$(function () {
    "use strict";

    var is_debug = false;
    set_debug_mode(is_debug);

    // 必要に応じてシェアボタン表示
    var $sharer = $('.post-social-share'),
        base_tag = '',
        share_box_tag = '';
    console.log($sharer);

    if ($sharer.length) {
        console.log(sharePostUrl);
        if (sharePostUrl) {
            base_tag = getSocialShareTag(sharePostUrl);
            for (var i = 0, l = $sharer.length; i < l; i++) {
                var $sharer_c = $sharer.eq(i);
                share_box_tag = '';
                if ($sharer_c.hasClass('small') === false) {
                    share_box_tag += '<h3><i class="fa fa-share-square-o"></i> Share</h3>';
                }
                share_box_tag += base_tag;
                $sharer_c.html(share_box_tag);
            }
        }
    }

    // top の投稿サムネイル画像を整列
    var $color_box = $(".colorboxEx");
    console.log('$color_box', $color_box)
    if ($color_box.length) {
        $color_box.justifiedGallery({
            rowHeight: 165,
            //maxRowHeight: 0,
            margins: 5,
            //rel: 'colorboxEx',
            lastRow: 'justify',
            fixedHeight: false,
            captions: false
                //randomize: false
        }).on('jg.complete', function (e) {
            $(this).show();
        });
    }

    if ($('#dataLabels').length) {

        if (labels && labels.length) {
            for (var i = 0, l = labels.length; i < l; i++) {
                var label = labels[i];
                console.log('label.name', label.name);
                postGet(label.name);
            }
        }
    }

    var b = location.href;
    if (b.indexOf("?q=") !== -1 || b.indexOf(".html") !== -1) {
        return;
    }
    var d = b.indexOf("/search/label/") + 14;
    if (d !== 13) {
        var c = b.indexOf("?"),
            a = (c === -1) ? b.substring(d) : b.substring(d, c);
        $('body').append('<script type="text/javascript" src="/feeds/posts/summary/-/' + a + '?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>');
    } else {
        $('body').append('<script type="text/javascript" src="/feeds/posts/summary?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>');
    }

    /////////////////////////////////////////////////////////////
    // 外部リンクに_blank, class, 属性付与
    // 2015/8/25追加
    // http://datsugoku.hatenablog.jp/entry/2014/05/11/205638
    $("a[href^=http]")
        .not('.external')
        .not('[href*="' + location.hostname + '"]')
        //.not( ":has(img)" )
        .attr({
            target: "_blank",
            rel: "nofollow"
        })
        .addClass("exLink");
    /////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////
    // ページトップへ戻るボタンの表示ロジック
    // 2015/8/25追加
    $(window).scroll(function () {
        var s = $(this).scrollTop();
        var m = 300;
        if (s > m) {
            console.log('scroll in');
            $("#scroll-top").fadeIn('slow');
        } else if (s < m) {
            console.log('scroll out');
            $("#scroll-top").fadeOut('slow');
        }
    });

    //test
    //postGet('掃除');

});

////////////////////////
// 定数・変数の定義
////////////////////////

//blogger api v3 のURL
var BASE_URL = "https://www.googleapis.com/blogger/v3/blogs/";
//blogID
var BLOG_ID = '1908039398565058723';
//API key
var API_KEY = 'AIzaSyDTJVyr7bIgb74Cke3mVBcEkBdtVS2B_-Q';
///////////////////////////
// ブログ記事を取得する
///////////////////////////
function postGet(srcWord) {
    console.log('srcWord', srcWord);
    if (!srcWord) {
        return;
    }
    var apiUrl = BASE_URL + BLOG_ID + "/posts?labels=" + encodeURI(srcWord) + "&key=" + API_KEY;
    console.log('apiUrl', apiUrl);
    //nextPageTokenが存在する場合はURLパラメータに追加する
    jQuery.support.cors = true;
    if (typeof nextPageToken !== "undefined") {
        apiUrl += "&pageToken=" + nextPageToken;
    }      //blogger API を実行する

    $.ajax({
        type: "GET",
        url: apiUrl,
        cache: false,
        data: {},
        scriptCharset: 'utf-8',
        success: function (data) {
            console.log('data', data);
            //成功の場合は画面表示処理を行う
            //dataSet(data);
            if (typeof data.nextPageToken !== "undefined") {
                //data.nextPageToken が存在する場合(=取得記事が複数ページに渡る場合)
                //記事取得処理を再帰呼び出しする。

                nextPageToken = data.nextPageToken;
                postGet(srcWord);
            }
        },
        error: function (data) {
            //エラーの場合
            console.error('data', data);
        }
    });
}
