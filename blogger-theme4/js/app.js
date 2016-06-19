//function setNaviHeight(_$) {
//    var
//        padding_y_body = 51,
//        window_height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
//    window_height -= padding_y_body;
//    _$('.navbar-fixed-bottom .navbar-collapse').each(function(idx, elm) {
//        _$(elm).css('max-height', window_height);
//    });
//    _$('.navbar-fixed-top .navbar-collapse').each(function(idx, elm) {
//        _$(elm).css('max-height', window_height);
//    });
//}

/**
 * Set headroom to navi menu
 * @depends headroom.js/jQuery.headroom.js
 * @link http://wicky.nillia.ms/headroom.js/
 **/
function setHeadRoom(_$) {
    var $headRoom = _$('#header-navi');
    if ($headRoom.length) {
        $headRoom.headroom();
    }
}

// Begin Twitter widget
//function setTwitterWidget() {
//    ! function(d, s, id) {
//        var js, fjs = d.getElementsByTagName(s)[0],
//            p = /^http:/.test(d.location) ? 'http' : 'https';
//        if (!d.getElementById(id)) {
//            js = d.createElement(s);
//            js.id = id;
//            js.src = p + "://platform.twitter.com/widgets.js";
//            fjs.parentNode.insertBefore(js, fjs);
//        }
//    }(document, "script", "twitter-wjs");
//}

function onYtEvent(payload) {
    if (payload.eventType == 'subscribe') {
        // Add code to handle subscribe event.
    } else if (payload.eventType == 'unsubscribe') {
        // Add code to handle unsubscribe event.
    }
    if (window.console) { // for debugging only
        window.console.log('YT event: ', payload);
    }
}

//function setFacebookWidget() {
//    (function(d, s, id) {
//        var js, fjs = d.getElementsByTagName(s)[0];
//        if (d.getElementById(id)) return;
//        js = d.createElement(s);
//        js.id = id;
//        js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.6&appId=414444272074407";
//        fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
//}

//function setInstagramWidget(_$) {
//    var url = [
//            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGSyXq0iYnh/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[Paris] #GalerieMarianGoodman に到着！中庭が可愛い◡̈♥︎ #paris #パリ #tbt #france #フランス #2015summer</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-06-06T00:51:05+00:00">2016 6月 5 5:51午後 PDT</time></p></div></blockquote>',
//            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.4537037037% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGDUnIYiYkX/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] 映画「ダークナイト #darknight 」が大好きな夫(けん)。いつも頭のかなはそんなことを思っているのか？ #kensnerdword #2015summer #nyc #newyork #ニューヨーク #夜景 #ワンワールドトレードセンター #OneWorldTradeCenter #展望台#Observatory</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-31T00:42:26+00:00">2016 5月 30 5:42午後 PDT</time></p></div></blockquote>',
//            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGBJ5zjiYmQ/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] ものすごいお金のかかっている駅への通路。とても未来的。なのでぱしゃり。 #2015summer #newyork #NYC #ニューヨーク #tbt #kenjumpproject</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-30T04:30:23+00:00">2016 5月 29 9:30午後 PDT</time></p></div></blockquote>',
//            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BF-Zch8CYvo/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] #kensnerdword けんが大好きな「ダークナイト」 マンハッタンは舞台となるゴッサムシティーみたいだから、(あれ？実際にここがゴッサムシティーなあのかな？よくわからないけど…)彼は時折、大興奮します。 #2015summer #newyork #NYC #ニューヨーク #darknight</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-29T02:48:29+00:00">2016 5月 28 7:48午後 PDT</time></p></div></blockquote>',
//            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFz4bp3iYqX/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] #2015summer にはまだ工事中だった、#ワールドトレードセンタートランスポーテーションハブ 。徐々に出来上がっているみたいですねー。次回行くの楽しみ♡ #newyork #NYC #ニューヨーク #transportationhub</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-25T00:47:36+00:00">2016 5月 24 5:47午後 PDT</time></p></div></blockquote>',
//            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/8nl1nTCYo2/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">最後の日に行ってみたよ。家賃高騰のため別の場所に移転するんだって！#tbt #nyc #ニューヨーク #faoschwarz</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-10-09T13:31:41+00:00">2015 10月 9 6:31午前 PDT</time></p></div></blockquote>'
//        ],
//        $widget = _$('#instagram-widget'),
//        content;
//    if ($widget.length) {
//        content = url[Math.floor(Math.random() * url.length)];
//        $widget.html(content);
//    }
//}

//function setYoutubeVideoWidget(_$) {
//    var url = [
//            '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfADH3ksWCw" frameborder="0" allowfullscreen></iframe>',
//            '<iframe width="420" height="315" src="https://www.youtube.com/embed/FYSEMQO23oU" frameborder="0" allowfullscreen></iframe>',
//            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zhOzVklI28U" frameborder="0" allowfullscreen></iframe>',
//            '<iframe width="560" height="315" src="https://www.youtube.com/embed/qyIdz9ye_AQ" frameborder="0" allowfullscreen></iframe>',
//            '<iframe width="560" height="315" src="https://www.youtube.com/embed/64FwJafIPFM?list=PLi53PE6aeqspRrSPiIFTvPtB9N764C6WF" frameborder="0" allowfullscreen></iframe>'
//        ],
//        $widget = _$('#youtube-video-widget'),
//        content, widget_width,
//        $iframe, iframe_width, iframe_height, css_width, css_height;
//    if ($widget.length) {
//        widget_width = parseInt($widget.width(), 10);
//        content = url[Math.floor(Math.random() * url.length)];
//        $widget.html(content);
//        // Fit wideo aspect to iframe
//        $iframe = $widget.find('iframe');
//        iframe_width = parseInt($iframe.width(), 10);
//        iframe_height = parseInt($iframe.height(), 10);
//        if (iframe_width !== widget_width) {
//            css_width = widget_width + 'px';
//            css_height = parseInt(widget_width / iframe_width * iframe_height) + 'px';
//            $iframe.css({
//                'width': css_width,
//                'height': css_height
//            });
//        }
//    }
//}

function setLazyLoad(_$) {
    var $imgs = _$('.post-body img'),
        $img, src, srcUrl = location.protocol + '//placeholdit.imgix.net/~text?txtsize=33&bg=ffb6c1&txtclr=000000&&txt=Cupcakemafa&w=350&h=150';
    $imgs.each(function(idx, elm) {
        if (idx > 0) {
            $img = $(elm);
            if (!$img.hasClass('main')) {
                src = $img.attr('src');
                $img.attr('data-original', src);
                $img.attr('src', srcUrl);
            }
            if (idx == $imgs.length - 1) {
                $imgs.lazyload({
                    threshold: 200, // 200pxの距離まで近づいたら表示する
                    effect: 'fadeIn', // じわじわっと表示させる
                });
            }
        }
    });
}

function setLuckyWord (_$) {
    if (luckyWord.length && luckyIcon.length && _$('.lucky-word-box').length) {
        var
            HUSH_TAG = 'luckyWord',
            SHARE_VIA = 'cupcakemafa',
            SHARE_URL = 'http://www.cupcakemafa.com/',
            TWITTER_SHARE_BASE = 'http://twitter.com/intent/tweet?text=',
            idx, icon = [],
            word = [],
            share_url, lucky_word,
            hush_tag, share_tag,
            looper = ['a', 'b'],
            i, l,
            date,
            word_count = luckyWord.length - 1,
            icon_count = luckyIcon.length - 1,
            /**
             * 2つの日付から日数を計算
             * @param string startDate 2016/01/01
             * @param string endDate 2016/12/31
             **/
            countDate = function (startDateStr, endDateStr) {
                var date = new Date(),
                    year = date.getFullYear(),
                    startDate = new Date(year + '/01/01'),
                    endDate = new Date();

                // getTimeメソッドで経過ミリ秒を取得し、２つの日付の差を求める
                var msDiff = endDate.getTime() - startDate.getTime();

                // 求めた差分（ミリ秒）を日付へ変換します（経過ミリ秒÷(1000ミリ秒×60秒×60分×24時間)。端数切り捨て）
                var daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));

                // 差分へ1日分加算して返却します
                return ++daysDiff;
            },
            /**
             * Get a text for tweeting.
             * @param string word
             */
            getTweetText = function (word) {
                if(word) {
                    // %20: space
                    // %23: #
                    // %0a: CR
                    var
                        TEXT_PREFIX = ('本日のお言葉→「 #'),
                        TEXT_POSTFIX = (' 」')+ decodeURIComponent('%0a'),
                        hushTag = (word.replace(/ /g, '_'));
                    return TEXT_PREFIX + hushTag + TEXT_POSTFIX + word + decodeURIComponent('%0a');
                }
            };

        // 当日の日付に対応したラッキーワードのインデックスを取得
        date = countDate();
        idx = date % word_count;
        word.push(luckyWord[idx]);
        idx = word_count - idx;
        word.push(luckyWord[idx]);

        idx = date % icon_count;
        icon.push(luckyIcon[idx]);
        idx = icon_count - idx;
        icon.push(luckyIcon[idx]);

        for (i = 0, l = looper.length; i < l; i++) {
            _$('#lucky-icon-' + looper[i]).attr('src', icon[i]);
            _$('#lucky-word-' + looper[i]).attr('src', word[i].img).attr('alt', word[i].text);
            lucky_word = word[i].text;
            share_tag = '<a href="https://twitter.com/share" ';
            share_tag += 'class="twitter-share-button" data-url="' + SHARE_URL + '" ';
            share_tag += 'data-text="' + getTweetText(lucky_word) + '" ';
            share_tag += 'data-via="' + SHARE_VIA + '" data-size="large" ';
            share_tag += 'data-related="' + SHARE_VIA + '" ';
            share_tag += 'data-hashtags="' + HUSH_TAG + '" ';
            share_tag += 'data-dnt="false">Tweet</a>';

//                    share_tag = '<a href="https://twitter.com/share?url=' + SHARE_URL + '&text=' + getTweetText(lucky_word) + '&via=' + SHARE_VIA + '&related=' + SHARE_VIA + '&hushtags=' + HUSH_TAG + '" ';
//                    share_tag += 'class="twitter-share-button" data-size="large">Tweet</a>';

            $('#lucky-word-share-' + looper[i]).replaceWith(share_tag);
            // activate tweet button
            ! function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, 'script', 'twitter-wjs');
        }

        var $open_lucky = _$('#open-lucky'),
            $lucky_header = _$('#lucky-header');
        $open_lucky.prop('disabled', false);
        $lucky_header.prop('disabled', false);
    }
}

        function setMetaTag() {
            var $metaTag = $('.meta-tag'),
                $elm, $attrs, $attr, key, value,
                metaTag = '',
                i, l,
                metaAttr;
            $metaTag.each(function (index, elm) {
                $elm = $(elm);
                metaAttr = '';
                $attrs = $elm.find('.attr');
                for (i = 0, l = $attrs.length; i < l; i++) {
                    $attr = $attrs.eq(i);
                    key = $attr.data('key');
                    value = $attr.text();
                    if (key && value) {
                        if (i > 0) {
                            metaAttr += ' ';
                        }
                        metaAttr += key + '="' + value + '"';
                    }
                    if (i === (l - 1)) {
                        metaTag += '<meta ' + metaAttr + '/>';
                    }
                }

                if (metaTag && index === ($metaTag.length - 1)) {
                    $('head').find('meta').last().after(metaTag);
                }
            });
        }

        function setRelatedPostNavi(labels) {
            var
                url = SITE_URL,
                request_url,
                request_count = labels.length,
                request_complete_count = 0,
                parser,
                postData = [],
                $relatedPosts = $('#related-posts');

            function printRelatedLabelsThumbs(postList) {
                var
                    showResults = 6,
                    tag = '', i, l;

                if (postList.length > 0) {
                    tag += '<ul class="related-post-list media-list no-padding">';
                    for (i = 0, l = postList.length; i < l; i++) {
                        if(showResults > i) {
                            tag += '<li class="media">';
                        }
                        else {
                            tag += '<li class="media hidden">';
                        }
                        tag += '<div class="media-left">';
                        tag += '<a href="' + postList[i].url + '">';
                        tag += '<img class="img-rounded media-object" src="' + postList[i].thumbUrl + '" alt="' + postList[i].title + '">';
                        tag += '</a>';
                        tag += '</div>';
                        tag += '<div class="media-body">';
                        tag += '<a class="block" href="' + postList[i].url + '">';
                        tag += '<h5 class="media-heading no-padding no-margin margin-bottom">' + postList[i].title + '</h5>';
                        tag += '<span class="text-right">' + postList[i].updated + '</span>';
                        tag += '</a>';
                        tag += '</div>';
                        tag += '</li>';
                    }
                    tag += '</ul>';
                    if(postList.length > showResults) {
                        tag += '<p><button class="btn btn-default btn-block related-more">More</button></p>';
                    }
                }
                $relatedPosts.find('.content').eq(0).append(tag);
                $relatedPosts.removeClass('hidden');
                $('.related-more').on('click', function(e) {
                    e.preventDefault();
                    $(this).addClass('hidden');
                    $('.related-post-list').each(function(idx, elm){
                        $(elm).find('.media.hidden').each(function(idx, hiddenElm){
                            $(hiddenElm).removeClass('hidden');
                        });
                    });
                    return false;
                });
            }

            // process start
            if (labels && labels.length && $relatedPosts.length) {
                parser = $('<a>', {
                    href: location.href
                })[0];

                for (var i = 0, l = labels.length; i < l; i++) {
                    request_url = url + '/feeds/posts/default/-/' + labels[i] + '?alt=json-in-script&max-results=8';
                    //console.info('request_url', request_url);
                    // blogger API を実行する
                    $.ajax({
                        type: 'GET',
                        url: request_url,
                        cache: false,
                        dataType: 'jsonp'
                    }).done(function (json) {
                        //console.info('json', json);

                        var entry;
                        if (json && json.feed && json.feed.entry && json.feed.entry.length) {
                            for (var i = 0; i < json.feed.entry.length; i++) {
                                var title, thumbUrl, url, updated;

                                entry = json.feed.entry[i];
                                //console.info('entry', entry);

                                // set link url
                                for (var k = 0; k < entry.link.length; k++) {
                                    if (entry.link[k].rel === 'alternate') {
                                        url = entry.link[k].href;
                                    }
                                }

                                // check duplicate url
                                var duplicate = false;
                                for (var j = 0; j < postData.length; j++) {
                                    if (url === postData[j].url) {
                                        duplicate = true;
                                    }
                                }
                                if (url === location.href) {
                                    duplicate = true;
                                }

                                if (url && !duplicate) {
                                    // set thumbnail image
                                    if (entry.hasOwnProperty('media$thumbnail') &&
                                        entry.media$thumbnail.hasOwnProperty('url')) {
                                        thumbUrl = entry.media$thumbnail.url;
                                    } else if (entry.hasOwnProperty('gform_foot') && entry.gform_foot.hasOwnProperty('url')) {
                                        thumbUrl = entry.gform_foot.url;
                                    } else {
                                        function getThumbUrlFromContent(content) {
                                            var
                                                no_img_url = 'http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s300/picture_not_available.png',
                                                content, imgIdx, srcIdx, quotIdx, thumb;
                                            imgIdx = content.indexOf("<img");
                                            srcIdx = content.indexOf("src=\"", imgIdx);
                                            quotIdx = content.indexOf("\"", srcIdx + 5);
                                            thumb = content.substr(srcIdx + 5, quotIdx - srcIdx - 5);
                                            if ((imgIdx !== -1) && (srcIdx !== -1) && (quotIdx !== -1) && (thumb !== "")) {
                                                return thumb;
                                            } else {
                                                return no_img_url;
                                            }
                                        }
                                        thumbUrl = getThumbUrlFromContent(entry.content.$t);
                                    }

                                    // set title
                                    title = entry.title.$t;
                                    if (title.length > 35) {
                                        title = title.substring(0, 35) + "...";
                                    }

                                    // set publish/update date
                                    if (entry.hasOwnProperty('updated') &&
                                        entry.updated.hasOwnProperty('$t')) {
                                        var date = new Date(entry.updated.$t)
                                        updated = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
                                    }

                                    postData.push({
                                        'title': title,
                                        'url': url,
                                        'thumbUrl': thumbUrl,
                                        'updated': updated
                                    });
                                }
                            }
                        }

                        request_complete_count++;
                        if (request_count === request_complete_count) {
                            printRelatedLabelsThumbs(postData);
                        }
                    }).fail(function (error) {
                        console.error('error', error);
                    });
                }
            }
        }

        /////////////////////////////////////////////////////////////
        // 外部リンクに_blank, class, 属性付与
        // 2015/8/25追加
        // http://datsugoku.hatenablog.jp/entry/2014/05/11/205638
        function setExternalLink() {
            $("a[href^=http]")
                .not('.external')
                .not('[href*="' + location.hostname + '"]')
                //.not( ":has(img)" )
                .attr({
                    target: "_blank",
                    rel: "nofollow"
                })
                .addClass("exLink");
        }

        // set ken zukan story view template
        function setStory() {
            var
                $storyBox = $('#story-box'),
                tag = '',
                $frame,
                $elm,
                more,
                season,
                backUrl = '/p/kenzukan-ep-s1.html',
                imgMain,
                caption;
            if ($storyBox.length) {
                season = $storyBox.data('season');
                $frame = $storyBox.find('.frame');
                if ($frame.length) {
                    tag += '<div class="text-center row" style="margin-top:-15px;">';
                    $frame.each(function (idx, elm) {
                        if (idx === 0) {
                            tag += '<p>';
                            tag += '<img src="http://4.bp.blogspot.com/-vwQJvGoXZtg/ViTvzIau-pI/AAAAAAAAA-Q/6THLDuzPpOA/s640/ken-kobanashi-banner-1024px.png" />';
                            tag += '</p>';
                        }
                        $elm = $(elm);
                        more = $elm.data('more');
                        imgMain = $elm.find('img.main').eq(0).attr('src');
                        caption = $elm.find('.caption').eq(0).html();
                        tag += '<div class="col col-md-6 col-md-offset-3 col-xs-12">';
                        if (imgMain) {
                            if (season) {
                                if (season === 'about' || season === 'favorite') {
                                    seasonClass = ' ' + season;
                                } else if (parseInt(season, 10) > 0) {
                                    seasonClass = ' season' + season;
                                }
                            }
                            tag += '<div class="frame' + seasonClass + '">';
                            tag += '<img class="main" src="';
                            tag += imgMain;
                            tag += '" />';
                            tag += '</div>';
                        }
                        if (caption) {
                            tag += '<p class="text-left padding">';
                            tag += caption;
                            tag += '</p>';
                        }
                        if (more) {
                            tag += '<a name="more"></a>';
                        }

                        if (backUrl && idx === ($frame.length - 1)) {
                            tag += '<p>';
                            tag += '<a href="' + backUrl + '" class="btn btn-success">';
                            tag += '小話リストへ戻る';
                            tag += '</a>';
                            tag += '<p>';
                        }
                        tag += '</div>';

                    });
                    tag += '</div>';
                }
                $storyBox.html(tag).fadeIn().removeClass('hidden');
            }
        }

        function setArchiveTitle() {
            var
                $archiveTitle = $('#archive-title'),
                fileInfo = location.pathname.split('/').pop().split('_'),
                year, month, date, title;
            if($archiveTitle.length && fileInfo[3] === 'archive.html') {
                year = fileInfo[0].toString();
                month = parseInt(fileInfo[1],10).toString();
                date = parseInt(fileInfo[2],10).toString();
                if(year && month && date) {
                    title = year + '/' + month;
                }
            }
            else {
                var
                    yearQuery = util.getQueryString('updated-max', false),
                    parser, date = new Date(), yearNow = date.getFullYear();
                if(yearQuery) {
                    parser = yearQuery.split('-');
                    if(parser.length) {
                        year = parser[0];
                        if(year > yearNow) {
                            year = yearNow;
                        }
                        title = year+'年'
                    }
                }
            }

            if(title) {
                $archiveTitle.find('.title').eq(0).html(title);
                $archiveTitle.removeClass('hidden');
            }
        }

        // this method is called in setSinglePageNavi() function.
        function trimThumb() {
            var $elm;
            $('img.thumb').each(function (idx, elm) {
                $elm = $(elm);
                $elm.height($elm.width());
            });
        }

        function setSinglePageNavi() {

            // AJAX callback for setting navi content.
            function setSinglePageNaviData(pageContentTag, $link) {
                var
                    $data = $(pageContentTag),
                    $title, $imgs, $date, $linkElm, $linkTitle, $linkThumb,
                    linkContent = '',
                    postTitle, postThumb, postDate;
                if (pageContentTag && $data.length && $link.length) {
                    $title = $data.find('.post #post-title');
                    if ($title.length) {
                        postTitle = $title.text();
                        if (postTitle) {

                            // Post title
                            linkContent += '<p class="title">' + postTitle + '</p>';

                            // Post publish date
                            $date = $data.find('.post #post-date');
                            if ($date.length) {
                                postDate = $date.html();
                                if (postDate) {
                                    linkContent += '<p class="date">' + postDate + '</p>';
                                }
                            }

                            // Post thumb
                            $imgs = $data.find('.post img');
                            if ($imgs.length) {
                                postThumb = $imgs.eq(0).attr('src');
                            }

                            for (var i = 0, l = $link.length; i < l; i++) {
                                $linkElm = $($link[i]);
                                if ($linkElm.hasClass('title')) {
                                    $linkTitle = $linkElm.find('.link-title');
                                    if ($linkTitle.length) {
                                        $linkTitle.eq(0).html(linkContent);
                                    }

                                } else if ($linkElm.hasClass('thumb')) {
                                    $linkThumb = $linkElm.find('.link-thumb');
                                    if ($linkThumb.length) {
                                        $linkThumb = $linkThumb.eq(0);
                                        $linkThumb.attr('alt', postTitle);
                                        $linkThumb.attr('src', postThumb);
                                        $linkThumb.attr('data-src', postThumb);
                                    }
                                }
                            }

                            $('.page-navi.single').removeClass('hidden');
                        }
                    }
                }
            }

            var
                $newerLink = $('a.next-link'),
                $olderLink = $('a.prev-link'),
                postTitle, postThumb;

            if ($newerLink.length) {
                $newerLink.each(function(idx, elm){
                    $.get(elm.href, function (data) {
                        setSinglePageNaviData(data, $(elm).eq(0));
                        trimThumb();
                    }, "html");
                });
            }
            if ($olderLink.length) {
                $olderLink.each(function(idx, elm){
                    $.get(elm.href, function (data) {
                        setSinglePageNaviData(data, $(elm).eq(0));
                        trimThumb();
                    }, "html");
                });
            }
        }



!(function($) {
    var
        SITE_URL = location.protocol + '//www.cupcakemafa.com',
        pageType = $('#page-type').text(),
        pageUrl = $('#post-url').text(),
        $labels, labels, $attrs;

    //console.log('pageType', pageType);

    setLazyLoad($);
    setExternalLink();

    if (pageType === 'item') {

        setMetaTag();

        setStory();

        setSinglePageNavi();

        $labels = $('.param.label');
        $labels.each(function (labelIdx, labelElm) {
            $attrs = $(labelElm).find('.attr');
            $attrs.each(function (attrIdx, attrElm) {
                if ($(attrElm).attr('data-key') === 'content') {
                    if (attrElm.textContent) {
                        labels.push(attrElm.textContent);
                    }
                }
                if (labelIdx === ($labels.length - 1)) {
                    if (attrIdx === ($attrs.length - 1)) {
                        setRelatedPostNavi(labels);
                    }
                }
            });
        });
    }
    else {
        setLuckyWord($);
        setArchiveTitle();
    }
})(jQuery);
