function setNaviHeight(_$) {
    var
        padding_y_body = 51,
        window_height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
    window_height -= padding_y_body;
    _$('.navbar-fixed-bottom .navbar-collapse').each(function(idx, elm) {
        _$(elm).css('max-height', window_height);
    });
    _$('.navbar-fixed-top .navbar-collapse').each(function(idx, elm) {
        _$(elm).css('max-height', window_height);
    });
}

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
function setTwitterWidget() {
    ! function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
}

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

function setFacebookWidget() {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.6&appId=414444272074407";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

function setInstagramWidget(_$) {
    var url = [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGSyXq0iYnh/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[Paris] #GalerieMarianGoodman に到着！中庭が可愛い◡̈♥︎ #paris #パリ #tbt #france #フランス #2015summer</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-06-06T00:51:05+00:00">2016 6月 5 5:51午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.4537037037% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGDUnIYiYkX/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] 映画「ダークナイト #darknight 」が大好きな夫(けん)。いつも頭のかなはそんなことを思っているのか？ #kensnerdword #2015summer #nyc #newyork #ニューヨーク #夜景 #ワンワールドトレードセンター #OneWorldTradeCenter #展望台#Observatory</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-31T00:42:26+00:00">2016 5月 30 5:42午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGBJ5zjiYmQ/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] ものすごいお金のかかっている駅への通路。とても未来的。なのでぱしゃり。 #2015summer #newyork #NYC #ニューヨーク #tbt #kenjumpproject</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-30T04:30:23+00:00">2016 5月 29 9:30午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BF-Zch8CYvo/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] #kensnerdword けんが大好きな「ダークナイト」 マンハッタンは舞台となるゴッサムシティーみたいだから、(あれ？実際にここがゴッサムシティーなあのかな？よくわからないけど…)彼は時折、大興奮します。 #2015summer #newyork #NYC #ニューヨーク #darknight</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-29T02:48:29+00:00">2016 5月 28 7:48午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFz4bp3iYqX/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] #2015summer にはまだ工事中だった、#ワールドトレードセンタートランスポーテーションハブ 。徐々に出来上がっているみたいですねー。次回行くの楽しみ♡ #newyork #NYC #ニューヨーク #transportationhub</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-25T00:47:36+00:00">2016 5月 24 5:47午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/8nl1nTCYo2/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">最後の日に行ってみたよ。家賃高騰のため別の場所に移転するんだって！#tbt #nyc #ニューヨーク #faoschwarz</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-10-09T13:31:41+00:00">2015 10月 9 6:31午前 PDT</time></p></div></blockquote>'
        ],
        $widget = _$('#instagram-widget'),
        content;
    if ($widget.length) {
        content = url[Math.floor(Math.random() * url.length)];
        $widget.html(content);
    }
}

function setYoutubeVideoWidget(_$) {
    var url = [
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfADH3ksWCw" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="420" height="315" src="https://www.youtube.com/embed/FYSEMQO23oU" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zhOzVklI28U" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/qyIdz9ye_AQ" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/64FwJafIPFM?list=PLi53PE6aeqspRrSPiIFTvPtB9N764C6WF" frameborder="0" allowfullscreen></iframe>'
        ],
        $widget = _$('#youtube-video-widget'),
        content, widget_width,
        $iframe, iframe_width, iframe_height, css_width, css_height;
    if ($widget.length) {
        widget_width = parseInt($widget.width(), 10);
        content = url[Math.floor(Math.random() * url.length)];
        $widget.html(content);
        // Fit wideo aspect to iframe
        $iframe = $widget.find('iframe');
        iframe_width = parseInt($iframe.width(), 10);
        iframe_height = parseInt($iframe.height(), 10);
        if (iframe_width !== widget_width) {
            css_width = widget_width + 'px';
            css_height = parseInt(widget_width / iframe_width * iframe_height) + 'px';
            $iframe.css({
                'width': css_width,
                'height': css_height
            });
        }
    }
}

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

!(function($) {
    // Set UI
    // setHeadRoom($);
    setNaviHeight($);
    setLazyLoad($);
    setLuckyWord($);

    // Set contents
    setTwitterWidget();
    setFacebookWidget();
    setInstagramWidget($);
    setYoutubeVideoWidget($);
})(jQuery);
