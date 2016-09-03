riot.tag2('about-facebook', '<span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-facebook fa-stack-1x fa-inverse"></i> </span> <p class="text-muted"> 最新情報をタイムラインでお知らせ </p> <div class="hidden-xs"> <div class="fb-page" data-href="https://www.facebook.com/cupcakemafa/" data-tabs="timeline" data-width="268" data-height="360" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"> <blockquote cite="https://www.facebook.com/cupcakemafa/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cupcakemafa/">Cupcakemafa</a></blockquote> </div> </div> <div class="visible-xs"> <button class="btn btn-default btn-block btn-lg" type="button" data-toggle="modal" data-target="#facebook-widget-modal"> <i class="fa fa-plus"></i> ポップしてちょっとみてみる </button> <div class="modal fade" id="facebook-widget-modal" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body"> <div class="fb-page" data-href="https://www.facebook.com/cupcakemafa/" data-tabs="timeline" data-width="268" data-height="360" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"> <blockquote cite="https://www.facebook.com/cupcakemafa/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cupcakemafa/">Cupcakemafa</a></blockquote> </div> </div> <div class="modal-footer"> <button class="btn btn-default btn-block" data-dismiss="modal"> <span class="glyphicon glyphicon-remove"></span> Close</button> </div> </div> </div> </div> </div> <hr>', '', '', function(opts) {
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

this.on('mount', function() {
  setFacebookWidget()
});
});

riot.tag2('about-instagram', '<span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-instagram fa-stack-1x fa-inverse"></i> </span> <p class="text-muted"> いろんな国のいろんな場所を <br> フォトグラフしています </p> <div id="instagram-widget"> </div> <a href="https://www.instagram.com/cupcakemafaofficial/?ref=badge" class="ig-b- ig-b-v-24 hidden"> <img src="//badges.instagram.com/static/images/ig-badge-view-24.png" alt="Instagram"> </a> <hr>', '', '', function(opts) {
function setInstagramWidget() {
    var url = [
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGSyXq0iYnh/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[Paris] #GalerieMarianGoodman に到着！中庭が可愛い◡̈♥︎ #paris #パリ #tbt #france #フランス #2015summer</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-06-06T00:51:05+00:00">2016 6月 5 5:51午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.4537037037% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGDUnIYiYkX/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] 映画「ダークナイト #darknight 」が大好きな夫(けん)。いつも頭のかなはそんなことを思っているのか？ #kensnerdword #2015summer #nyc #newyork #ニューヨーク #夜景 #ワンワールドトレードセンター #OneWorldTradeCenter #展望台#Observatory</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-31T00:42:26+00:00">2016 5月 30 5:42午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BGBJ5zjiYmQ/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] ものすごいお金のかかっている駅への通路。とても未来的。なのでぱしゃり。 #2015summer #newyork #NYC #ニューヨーク #tbt #kenjumpproject</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-30T04:30:23+00:00">2016 5月 29 9:30午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BF-Zch8CYvo/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] #kensnerdword けんが大好きな「ダークナイト」 マンハッタンは舞台となるゴッサムシティーみたいだから、(あれ？実際にここがゴッサムシティーなあのかな？よくわからないけど…)彼は時折、大興奮します。 #2015summer #newyork #NYC #ニューヨーク #darknight</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-29T02:48:29+00:00">2016 5月 28 7:48午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFz4bp3iYqX/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">[New York] #2015summer にはまだ工事中だった、#ワールドトレードセンタートランスポーテーションハブ 。徐々に出来上がっているみたいですねー。次回行くの楽しみ♡ #newyork #NYC #ニューヨーク #transportationhub</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-25T00:47:36+00:00">2016 5月 24 5:47午後 PDT</time></p></div></blockquote>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/8nl1nTCYo2/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">最後の日に行ってみたよ。家賃高騰のため別の場所に移転するんだって！#tbt #nyc #ニューヨーク #faoschwarz</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Cupcakemafaさん(@cupcakemafaofficial)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-10-09T13:31:41+00:00">2015 10月 9 6:31午前 PDT</time></p></div></blockquote>'
        ],
        widget = document.getElementById('instagram-widget'),
        content, script;
    if (widget) {
        content = url[Math.floor(Math.random() * url.length)];
        widget.innerHTML = content;

        script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.defer = true;
        script.async = true;
        script.src = '//platform.instagram.com/en_US/embeds.js';
        widget.appendChild(script);
    }
}

this.on('mount', function() {
  setInstagramWidget()
});
});
riot.tag2('about-ken-zukan-app', '<span class="fa-stack fa-4x"> <a href="/p/kenzukan.html"> <img class="img-responsive" src="https://4.bp.blogspot.com/-uKaB2EZONjQ/VnS78cUs6mI/AAAAAAAABaM/eWV9bE86IekVoatyhiA4Su_nKkdfp6gGw/s1600/33.png" srcset=" https://4.bp.blogspot.com/-uKaB2EZONjQ/VnS78cUs6mI/AAAAAAAABaM/eWV9bE86IekVoatyhiA4Su_nKkdfp6gGw/s320/33.png 1x, https://4.bp.blogspot.com/-uKaB2EZONjQ/VnS78cUs6mI/AAAAAAAABaM/eWV9bE86IekVoatyhiA4Su_nKkdfp6gGw/s640/33.png 2x, https://4.bp.blogspot.com/-uKaB2EZONjQ/VnS78cUs6mI/AAAAAAAABaM/eWV9bE86IekVoatyhiA4Su_nKkdfp6gGw/s1280/33.png 3x" alt="それ、きょうみある！！"> </a> </span> <h4 class="service-heading">無料アプリのKEN図鑑</h4> <a href="/p/kenzukan.html"> <img alt="無料アプリのKEN図鑑" class="img-responsive float-center" src="http://2.bp.blogspot.com/-JN5v65tyAGA/VdkE7PMaZzI/AAAAAAAAAK4/YkfuzYk1OZU/s400/main-2-1024x500.png" srcset=" http://2.bp.blogspot.com/-JN5v65tyAGA/VdkE7PMaZzI/AAAAAAAAAK4/YkfuzYk1OZU/s320/main-2-1024x500.png 1x, http://2.bp.blogspot.com/-JN5v65tyAGA/VdkE7PMaZzI/AAAAAAAAAK4/YkfuzYk1OZU/s640/main-2-1024x500.png 2x, http://2.bp.blogspot.com/-JN5v65tyAGA/VdkE7PMaZzI/AAAAAAAAAK4/YkfuzYk1OZU/s1280/main-2-1024x500.png 3x" style="margin-bottom:0px;"> </a> <p class="text-muted"> けんのシュールな日常の小話を集めた無料アプリです。 じわーっと来る笑いのひと時をどうぞ!! iPhone/Androidでご利用になれます。 </p> <p> <a href="https://itunes.apple.com/us/app/ken-zukan/id980811179?l=ja&amp;ls=1&amp;mt=8" target="_blank" rel="nofollow" class="exLink"> <img alt="iOS用KEN図鑑のダウンロードはこちらです" border="0" height="40" width="135" src="http://4.bp.blogspot.com/-SPpo7aXEKFM/VdjpCNxQXuI/AAAAAAAAAJA/HtWqrn2h-IQ/s135/Download_on_the_App_Store_JP_135x40.png"> </a> <a href="https://play.google.com/store/apps/details?id=com.cupcakemafa.kenzukan" target="_blank" rel="nofollow" class="exLink"> <img alt="Get it on Google Play" height="40" width="115" src="http://3.bp.blogspot.com/-LIRGKjh0Ct0/VqeFGOATwnI/AAAAAAAABpU/ta4wuxp44c8/s1600/ja_generic_rgb_wo_45.png"> </a> </p> <p> <a href="/p/kenzukan.html" class="btn btn-default btn-block">KEN図鑑を見てみる <i class="fa fa-chevron-right"></i></a> </p> <hr>', '', '', function(opts) {
});
riot.tag2('about-line-stamp-second', '<span class="fa-stack fa-4x"> <a href="http://line.me/S/sticker/1201752" rel="nofollow" target="_blank" class="exLink"> <img class="img-responsive" src="https://2.bp.blogspot.com/-4PKLIsIhPoU/VnS57Zk2DJI/AAAAAAAABY0/AQ9oOyIt-WYhu4QUph1sFpjC2MKd3S15Q/s320/22.png" srcset=" https://2.bp.blogspot.com/-4PKLIsIhPoU/VnS57Zk2DJI/AAAAAAAABY0/AQ9oOyIt-WYhu4QUph1sFpjC2MKd3S15Q/s320/22.png 1x, https://2.bp.blogspot.com/-4PKLIsIhPoU/VnS57Zk2DJI/AAAAAAAABY0/AQ9oOyIt-WYhu4QUph1sFpjC2MKd3S15Q/s640/22.png 2x, https://2.bp.blogspot.com/-4PKLIsIhPoU/VnS57Zk2DJI/AAAAAAAABY0/AQ9oOyIt-WYhu4QUph1sFpjC2MKd3S15Q/s1280/22.png 3x" alt="そんなバナナ！？"> </a> </span> <h4 class="service-heading">LINEスタンプPart2も発売中!!</h4> <p class="text-muted"> ワンアンドオンリーなナオとふわふわ浮いてる天然ケンのスタンプ第2弾が登場です!! カラーになった2人のビター&amp;おとぼけスタンプをお楽しみくださーい。 </p> <p> <img alt="LINEスタンプ Part2 も発売中!!" class="img-responsive float-center" src="http://1.bp.blogspot.com/-DkhM6wdq710/Vnez52WK1mI/AAAAAAAABb8/Fy8OpnQhI2Y/s320/line-stamp-pr-2-1126x432.png"> </p> <a href="http://line.me/S/sticker/1201752" rel="nofollow" target="_blank" class="exLink btn btn-default btn-block"> スタンプを見てみる <i class="fa fa-external-link"></i> </a> <hr>', '', '', function(opts) {
});

riot.tag2('about-line-stamp-first', '<span class="fa-stack fa-4x"> <a href="http://line.me/S/sticker/1222589" rel="nofollow" target="_blank" class="exLink"> <img class="img-responsive" src="https://4.bp.blogspot.com/-Za7R5UaXXiI/VkUs39wF-8I/AAAAAAAABMg/xdvMknb96ogLkTOczYD7ArKjDccZSIzZQ/s1600/19-IMG_0064.png" alt="オタクではないし！！"> </a> </span> <h4 class="service-heading">LINEスタンプ発売中!!</h4> <p class="text-muted">NaoとKenの日常から飛び出したおもしろLINEスタンプ発売中でーす!! ぜひみてみてね!!</p> <p> <img class="img-responsive float-center" src="http://3.bp.blogspot.com/-s46iH9DInFg/Vjvvqfj28gI/AAAAAAAABI8/eNP_dNolGdA/s320/line-stamp-pr-2-1024x392.png" alt="LINEスタンプ発売中!!"> </p> <a href="http://line.me/S/sticker/1222589" rel="nofollow" target="_blank" class="exLink btn btn-default btn-block"> スタンプを見てみる <i class="fa fa-external-link"></i> </a> <hr>', '', '', function(opts) {
});

riot.tag2('about-tour-post', '<span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-plane fa-stack-1x fa-inverse"></i> </span> <p class="text-muted"> 旅のおすすめ記事リストたち </p> <ul class="label-link list-group no-margin margin-bottom"> <li class="list-group-item clearfix"> <img class="img-circle pull-left" src="https://4.bp.blogspot.com/-UWX0BYJCaAo/V3_BGGTzh8I/AAAAAAADb7c/gOrvqKovMwYl2pF7AcB4rm5kjt0CPj0LgCLcB/s40/IMG_6448.jpg" srcset=" https://4.bp.blogspot.com/-UWX0BYJCaAo/V3_BGGTzh8I/AAAAAAADb7c/gOrvqKovMwYl2pF7AcB4rm5kjt0CPj0LgCLcB/s40/IMG_6448.jpg 1x, https://4.bp.blogspot.com/-UWX0BYJCaAo/V3_BGGTzh8I/AAAAAAADb7c/gOrvqKovMwYl2pF7AcB4rm5kjt0CPj0LgCLcB/s80/IMG_6448.jpg 2x, https://4.bp.blogspot.com/-UWX0BYJCaAo/V3_BGGTzh8I/AAAAAAADb7c/gOrvqKovMwYl2pF7AcB4rm5kjt0CPj0LgCLcB/s120/IMG_6448.jpg 3x"> <h4 class="pull-left"> <a href="/search/label/NEW%20YORK">New York</a> </h4> </li> <li class="list-group-item clearfix"> <img class="img-circle pull-left" src="https://2.bp.blogspot.com/-72vDcnJJElM/VyBqZxo0ESI/AAAAAAACxU0/z7ZPeiXIU58z1X77BxjB3Pma7Ko9WqhVgCLcB/s40/IMG_8562.jpg" srcset=" https://2.bp.blogspot.com/-72vDcnJJElM/VyBqZxo0ESI/AAAAAAACxU0/z7ZPeiXIU58z1X77BxjB3Pma7Ko9WqhVgCLcB/s40/IMG_8562.jpg 1x, https://2.bp.blogspot.com/-72vDcnJJElM/VyBqZxo0ESI/AAAAAAACxU0/z7ZPeiXIU58z1X77BxjB3Pma7Ko9WqhVgCLcB/s80/IMG_8562.jpg 2x, https://2.bp.blogspot.com/-72vDcnJJElM/VyBqZxo0ESI/AAAAAAACxU0/z7ZPeiXIU58z1X77BxjB3Pma7Ko9WqhVgCLcB/s120/IMG_8562.jpg 3x"> <h4 class="pull-left"> <a href="/search/label/PARIS">Paris</a> </h4> </li> <li class="list-group-item clearfix"> <img class=\'img-circle pull-left\' src=\'https://4.bp.blogspot.com/-f3kEVgcodtg/V1fPRnifQnI/AAAAAAADa5M/V_A-OCvq95Egkhi26JfQRvVf-NEbrQlZQCLcB/s40/IMG_9095.jpg srcset=\' https://4.bp.blogspot.com/-f3kEVgcodtg/V1fPRnifQnI/AAAAAAADa5M/V_A-OCvq95Egkhi26JfQRvVf-NEbrQlZQCLcB/s40/IMG_9095.jpg 1x, https://4.bp.blogspot.com/-f3kEVgcodtg/V1fPRnifQnI/AAAAAAADa5M/V_A-OCvq95Egkhi26JfQRvVf-NEbrQlZQCLcB/s80/IMG_9095.jpg 2x, https://4.bp.blogspot.com/-f3kEVgcodtg/V1fPRnifQnI/AAAAAAADa5M/V_A-OCvq95Egkhi26JfQRvVf-NEbrQlZQCLcB/s120/IMG_9095.jpg 3x\'/> <h4 class="pull-left"> <a href="/search/label/BARCELONA">Barcelona</a> </h4> </li> <li class="list-group-item clearfix"> <img class="img-circle pull-left" src="http://1.bp.blogspot.com/-IZDdWbXkCg8/Vop2GB_EvGI/AAAAAAAABmk/kum1lYp9Xbo/s40/IMG_5287-1024.JPG" srcset=" http://1.bp.blogspot.com/-IZDdWbXkCg8/Vop2GB_EvGI/AAAAAAAABmk/kum1lYp9Xbo/s40/IMG_5287-1024.JPG 1x, http://1.bp.blogspot.com/-IZDdWbXkCg8/Vop2GB_EvGI/AAAAAAAABmk/kum1lYp9Xbo/s80/IMG_5287-1024.JPG 2x, http://1.bp.blogspot.com/-IZDdWbXkCg8/Vop2GB_EvGI/AAAAAAAABmk/kum1lYp9Xbo/s120/IMG_5287-1024.JPG 3x"> <h4 class="pull-left"> <a href="/search/label/持ち物">持ち物</a> </h4> </li> </ul> <hr>', '', '', function(opts) {
});
riot.tag2('about-twitter', '<span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-twitter fa-stack-1x fa-inverse"></i> </span> <p class="text-muted"> いろいろツイートしています </p> <div class="hidden-xs"> <a class="twitter-timeline" data-height="360" href="https://twitter.com/cupcakemafa">Tweets by cupcakemafa</a> </div> <div class="visible-xs"> <button class="btn btn-default btn-block btn-lg" type="button" data-toggle="modal" data-target="#twitter-widget-modal"> <i class="fa fa-plus"></i> ポップしてちょっとみてみる </button> <div class="modal fade" id="twitter-widget-modal" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body"> <a class="twitter-timeline" data-height="360" href="https://twitter.com/cupcakemafa">Tweets by cupcakemafa</a> </div> <div class="modal-footer"> <button class="btn btn-default btn-block" data-dismiss="modal"> <span class="glyphicon glyphicon-remove"></span> Close</button> </div> </div> </div> </div> </div> <hr>', '', '', function(opts) {

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

this.on('mount', function() {
  setTwitterWidget()
});
});
riot.tag2('about-us', '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="service-heading">About Cupcakemafa</h3> </div> <div class="panel-body"> <p class="text-muted"> <img class="img-responsive img-rounded" src="http://1.bp.blogspot.com/-t2lVMMltkCA/VgPNsvzjX9I/AAAAAAAAAns/7c3LdZ95WLM/s320/mafas-1024x747.jpg" srcset=" http://1.bp.blogspot.com/-t2lVMMltkCA/VgPNsvzjX9I/AAAAAAAAAns/7c3LdZ95WLM/s320/mafas-1024x747.jpg 1x, http://1.bp.blogspot.com/-t2lVMMltkCA/VgPNsvzjX9I/AAAAAAAAAns/7c3LdZ95WLM/s640/mafas-1024x747.jpg 2x, http://1.bp.blogspot.com/-t2lVMMltkCA/VgPNsvzjX9I/AAAAAAAAAns/7c3LdZ95WLM/s1280/mafas-1024x747.jpg 3x" alt="Cupcakemafa"> </p> <p class="text-muted text-left">カップケーキとマーファをくっつけた造語、それが『カップケーキマーファ （Cupcakemafa）』です。 カップケーキは、Naoの好物。マーファとは、Kenがその昔に映画でイタリア男性が「マフィア」の事を 「マーファ」と言っていたのを聞きかじったのがきっかけで、できた言葉なのです。 Kenに言わせれば、Naoはマフィアのように怖い時と甘える時とをうまく使い分けるそう。 時にカップケーキのように甘く、時にマフィアのように厳しい。まるで、人生のようですね。 なんてね。そんなわけで、カップケーキマーファの誕生ですっ!! </p> <p> <a href="/2016/05/about-us.html" class="btn btn-default btn-block">もうちょっと見てみる <i class="fa fa-chevron-right"></i></a> </p> </div> </div>', '', '', function(opts) {
});
riot.tag2('about-virtual-tour', '<span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-youtube fa-stack-1x fa-inverse"></i> </span> <p class="text-muted"> 旅のヴァーチャルツアーなどなど <br> ビデオでお送りしています。 </p> <div id="youtube-video-widget"></div> <div class="g-ytsubscribe" data-channelid="UCA-5O04iRku19b8KMUMm_OA" data-layout="full" data-count="default" data-onytevent="onYtEvent"></div> <hr>', '', '', function(opts) {
function setYoutubeVideoWidget() {
    var url = [
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfADH3ksWCw" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="420" height="315" src="https://www.youtube.com/embed/FYSEMQO23oU" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zhOzVklI28U" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/qyIdz9ye_AQ" frameborder="0" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/64FwJafIPFM?list=PLi53PE6aeqspRrSPiIFTvPtB9N764C6WF" frameborder="0" allowfullscreen></iframe>'
        ],
        widget = document.getElementById('youtube-video-widget'),
        content, widget_width,
        iframe, iframe_width, iframe_height, css_width, css_height;
    if (widget) {
        widget_width = parseInt(widget.offsetWidth, 10);
        content = url[Math.floor(Math.random() * url.length)];
        widget.innerHTML = content;

        iframe = widget.getElementsByTagName('iframe')[0];
        iframe_width = parseInt(iframe.width, 10);
        iframe_height = parseInt(iframe.height, 10);
        if (iframe_width !== widget_width) {
            css_width = widget_width + 'px';
            css_height = parseInt(widget_width / iframe_width * iframe_height) + 'px';
            iframe.style.width = css_width;
            iframe.style.height = css_height;
        }
    }
}

this.on('mount', function() {
  setYoutubeVideoWidget()
});
});
riot.tag2('back-number', '', '', '', function(opts) {
});
riot.tag2('footer-navi', '<aside class="clients margin-top"> <div class="container"> <div id="footer-navi" class="row"></div> </div> </aside>', '', '', function(opts) {
function hasClass(element, className) {
    return (' ' + element.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + className + ' ') !== -1;
}
function setFooterNavi() {
    var header = document.getElementById('header'),
        navi = header.getElementsByClassName('nav'),
        footerNavi = document.getElementById('footer-navi'),
        menuItem, i, l, tag;
    if (navi.length && footerNavi) {
        menuItem = navi[0].getElementsByTagName('li');
        for (i = 0, l = menuItem.length; i < l; i++) {
            if(menuItem[i] && menuItem[i].innerHTML) {
                if(!hasClass(menuItem[i], 'hidden') && !hasClass(menuItem[i], 'dropdown')
                    && !hasClass(menuItem[i], 'visible-xs') && !hasClass(menuItem[i], 'menu-search')) {
                    tag = "<div class='col-xs-6 text-center padding-bottom'>" + menuItem[i].innerHTML.replace('a href', 'a class="btn btn-default btn-block" href') + "</div>";
                    footerNavi.innerHTML += tag;
                }
            }
        }
    }
}

this.on('mount', function() {
  setFooterNavi()
});
});
riot.tag2('header-nav', '<div class="container"> <div class="navbar-header page-scroll"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-aria-expanded="false" data-target="#bs-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand hidden-sm" href="/">Cupcakemafa</a> <a class="navbar-brand visible-sm" href="/"><img class="img-rounded" src="http://4.bp.blogspot.com/-VA6sLbbGX4I/VdmIpQk5I5I/AAAAAAAAAPM/GyDtlKiC4-0/s20/cupcakemafa-favicon-200x200.png"></a> </div> <div class="collapse navbar-collapse" id="bs-navbar-collapse-1"> <ul class="nav navbar-nav navbar-right"> <li class="hidden"> <a href="#page-top"></a> </li> <li> <a href="/2016/05/about-us.html"> <i class="fa fa-rocket"></i> ABOUT US </a> </li> <li> <a href="/search/label/NEWS"> <i class="fa fa-file-text"></i> NEWS </a> </li> <li id="travel-dropdown" class="dropdown"> <button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-plane"></i> TRAVEL <span class="caret"></span> </button> <ul class="dropdown-menu"> <li><a href="/search/label/NEW%20YORK">New York</a></li> <li><a href="/search/label/PARIS">Paris</a></li> <li><a href="/search/label/BARCELONA">Barcelona</a></li> <li><a href="/search/label/持ち物">持ち物</a></li> </ul> </li> <li> <a href="/search/label/ART"> <i class="fa fa-heart"></i> ART </a> </li> <li class="dropdown"> <button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-globe"></i> BOOK <span class="caret"></span> </button> <ul class="dropdown-menu"> <li><a href="/search/label/BOOK">BOOK LIST</a></li> <li><a href="/p/kenzukan.html">Ken Zukan</a></li> <li><a href="/p/kenzukan-ep-s1.html">Season 1</a></li> </ul> </li> <li class="dropdown"> <button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-lightbulb-o"></i> SNS <span class="caret"></span> </button> <ul class="dropdown-menu"> <li><a href="https://www.facebook.com/cupcakemafa">Facebook</a></li> <li><a href="https://twitter.com/cupcakemafa">Twitter</a></li> <li><a href="https://www.instagram.com/cupcakemafaofficial/">Instagram</a></li> <li><a href="https://www.youtube.com/c/Cupcakemafa2015/">Youtube</a></li> <li><a href="/2015/09/sns.html">いろいろなSNSの紹介</a></li> </ul> </li> <li class="visible-xs no-padding padding-right padding-left"> <hr> <h4 class="text-muted text-center"> <a href="http://line.me/S/sticker/1222589" rel="nofollow" target="_blank" class="exLink"> LINEスタンプ<br> Part 2 も発売中!! </a> </h4> <h5 class="text-muted"> <a href="http://line.me/S/sticker/1222589" rel="nofollow" target="_blank" class="exLink"> <img alt="LINEスタンプ Part2 も発売中!!" class="img-responsive float-center" src="http://1.bp.blogspot.com/-DkhM6wdq710/Vnez52WK1mI/AAAAAAAABb8/Fy8OpnQhI2Y/s320/line-stamp-pr-2-1126x432.png"> </a> </h5> <a href="http://line.me/S/sticker/1222589" rel="nofollow" target="_blank" class="exLink"> ワンアンドオンリーなナオとふわふわ浮いてる天然ケンのスタンプ第2弾が登場です!! カラーになった2人のビター&amp;おとぼけスタンプをお楽しみくださーい。 </a> <a href="http://line.me/S/sticker/1222589" rel="nofollow" target="_blank" class="exLink btn btn-default btn-block"> スタンプを見てみる <i class="fa fa-external-link"></i> </a> </li> <li class="visible-xs no-padding padding-right padding-left"> <hr> <h4 class="text-muted text-center"> <a href="http://line.me/S/sticker/1201752" rel="nofollow" target="_blank" class="exLink"> LINEスタンプ発売中!! </a> </h4> <h5 class="text-muted"> <a href="http://line.me/S/sticker/1201752" rel="nofollow" target="_blank" class="exLink"> <img alt="LINEスタンプ発売中!!" class="img-responsive float-center" src="http://3.bp.blogspot.com/-s46iH9DInFg/Vjvvqfj28gI/AAAAAAAABI8/eNP_dNolGdA/s320/line-stamp-pr-2-1024x392.png"> </a> </h5> <a href="http://line.me/S/sticker/1201752" rel="nofollow" target="_blank" class="exLink"> NaoとKenの日常から飛び出したおもしろLINEスタンプ発売中でーす!! ぜひみてみてね!! </a> <a href="http://line.me/S/sticker/1201752" rel="nofollow" target="_blank" class="exLink btn btn-default btn-block"> スタンプを見てみる <i class="fa fa-external-link"></i> </a> </li> <li class="menu-search no-hover visible-xs- padding hidden"> <form action="/search" class="navbar-form form-inline navbar-right" method="get" role="search"> <div class="input-group padding-left padding-right"> <input class="form-control" name="q" placeholder="Search" type="search"> <span class="input-group-btn"> <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button> </span> </div> </form> </li> <li class="padding visible-xs"> <hr> <button href="#" class="btn btn-default btn-lg btn-block" data-toggle="collapse" data-target="#bs-navbar-collapse-1"><i class="fa fa-close"></i> Close</button> </li> </ul> </div> </div>', '', '', function(opts) {
function setNaviHeight() {
    var
        padding_y_body = 101,
        window_height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight,
        navi = document.getElementsByClassName('navbar-collapse');

    if(navi.length) {
        navi[0].style.maxHeight = window_height+'px';
        navi[0].style.paddingBottom = padding_y_body+'px';
    }
}

});

riot.tag2('travel-goods-link', '<h2 class="sign no-border"> 旅のおとも まとめ </h2> </p> <ul class="list star-o"> <li><a href="/2016/02/Travel-Planning.html">周遊チケット</a></li> <li><a href="/2015/10/travel-apps.html">旅で役立つアプリ</a></li> <li><a href="/2016/01/myrecommend-skinfood.html">おすすめ化粧品</a></li> <li><a href="/2016/02/bpafree-water-bottle.html">ウォーターボトル</a></li> <li><a href="/2016/04/handsanitizer.html">ハンドサニタイザー</a></li> <li><a href="/2016/04/RuMe-ecobag.html">エコバッグ</a></li> <li><a href="/2016/05/rubber-sponge-sandals.html">ラバースポンジサンダル</a></li> <li><a href="/2016/05/suitcase-SCALE.html">スーツケースのはかり</a></li> </ul>', '', '', function(opts) {
});

riot.tag2('bcn-link', '<p> <h2 class="sign no-border"> その他のバルセロナ観光 </h2> </p> <p> <b>[ガウディ]</b> </p> <p> <ul> <li><a href="/2016/05/casa-mila-day.html">カサ・ミラ/Casa Mila</a></li> <li><a href="/2016/05/casa-mila-la-pedrera-night.html">カサ・ミラ/Casa Mila 夜バージョン</a></li> <li><a href="/2016/06/CasaBatllo.html">カサ・バトリョ/Casa Batllo</a></li> <li><a href="/2016/05/palau-guell.html">グエル邸/Palau Guell</a></li> <li><a href="/2016/06/streetlamp-of-Placa-Reial.html">ガウディの街灯/Gaudi’s streetlamp</a></li> <li><a href="/2016/05/casacalvet-chocolates-bresco.html">カサ・カルベット/Casa Calvet</a></li> <li><a href="/2016/06/SagradaFamilia.html">サグラダ・ファミリア/Sagrada Familia</a></li> <li><a href="/2016/06/Park-Guell.html">グエル公園/Park Guell</a></li> <li><a href="/2016/07/ColoniaGuell.html">コロニア・グエル教会/Colonia Guell</a></li> <li><a href="/2016/07/Montserrat.html">モンセラット/Montserrat</a></li> </ul> </p> <p> <b>[美術館]</b> </p> <p> <ul> <li><a href="/2016/07/museo-picasso.html">ピカソ美術館/Museo Picasso</a></li> <li><a href="/2016/07/Teatre-Museu-Dali.html">フィゲラスのダリ美術館/Teatre Museu Dali</a></li> </ul> </p> <p> <b>[食べ物]</b> </p> <p> <ul> <li><a href="/2016/06/Les-Quinze-Nits.html">イカスミのパエリア at Les Quinze Nits</a></li> <li><a href="/2016/06/mauri-barcelona.html">老舗パティスリー マウリ/Mauri</a></li> <li><a href="/2016/06/la-bodegueta.html">バル 『la bodegueta』</a></li> <li><a href="/2016/06/ciudad-condal.html">バル 『シウダット・コンダル/Ciudad Condal』</a></li> <li><a href="/2016/06/Cerveceria-Catalana.html">バル 『セルべセリア カタラナ/Cerveceria Catalana』</a></li> <li><a href="/2016/07/txapela.html">バル 『TXAPELA』</a></li> <li><a href="/2016/07/fabrica-moritz.html">タパスバー 『ファブリカ・モリッツ/Fabrica Moritz』</a></li> </ul> </p> <p> <b>[その他]</b> </p> <p> <ul> <li><a href="/2016/05/las-arenas-barcelona.html">元闘牛場のショッピングモール/Las Arenas Barcelona</a></li> <li><a href="/2016/05/Fuente-Magica-de-Montjuic.html">モンジュイックの噴水/Fuente Magica de Montjuic</a></li> <li><a href="/2016/06/MercatdeSantaCaterina.html">サンタカタリーナ市場/Mercat de Santa Caterina</a></li> <li><a href="/2016/06/Boqueria.html">バルセロナ最大規模の市場 ボケリア/Boqueria</a></li> <li><a href="/2016/06/El-Corte-Ingles.html">デパート『El Corte Ingles』</a></li> <li><a href="/2016/07/Splash-Laundry.html">コインランドリー『Splash Laundry』</a></li> <li><a href="/2016/06/Bicing.html">公共レンタサイクル</a></li> <li><a href="/2016/07/barcelona-city-guide.html">街をお散歩（カナレタスの泉やカテドラルのことなど）</a></li> <li><a href="/2016/05/myfirst-barcelona.html">初めてのバルセロナ（サンツ駅やタクシー地下鉄のことなど）</a></li> </ul> </p> <div class="row"> <div class="col col-md-2"> <a href="http://www.amazon.co.jp/gp/product/B007ATHHUA/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B007ATHHUA&linkCode=as2&tag=cupcakemafa03-22"> <img class="media-object" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007ATHHUA&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=cupcakemafa03-22" alt="Casa BRUTUS(カーサ・ブルータス)2014年8月号[雑誌]"> </a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=cupcakemafa03-22&l=as2&o=9&a=B007ATHHUA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"> </div> <div class="col col-md-10"> <h4 class="media-heading">Casa BRUTUS(カーサ・ブルータス)2014年8月号[雑誌]</h4> <a href="http://www.amazon.co.jp/gp/product/B007ATHHUA/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=B007ATHHUA&linkCode=as2&tag=cupcakemafa03-22" class="btn btn-default"><i class="fa fa-amazon"></i> Amazonでみてみる</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=cupcakemafa03-22&l=as2&o=9&a=B007ATHHUA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"> </div> </div>', '', '', function(opts) {
});

riot.tag2('ny-link', '<p> <h2 class="sign no-border"> その他のニューヨーク観光 </h2> </p> <p> <b>[美術館/博物館]</b> </p> <p> <ul> <li><a href="/2016/03/art-in-newyork.html">どこに行くか悩むほど沢山ある美術館や博物館にギャラリー</a></li> <li><a href="/2015/08/whitney-museum.html">ホイットニー美術館/Whitney Museum of American Art</a></li> <li><a href="/2015/08/moma.html">モマ/MoMA</a></li> <li><a href="/2015/08/amnh.html">アメリカ自然史博物館/American Museum of Natural History</a></li> <li><a href="/2015/10/morgan-library.html">モルガンさんの図書館/THE MORGAN LIBRARY & MUSEUM</a></li> <li><a href="/2015/09/intrepid-ny.html">イントレピッド/Intrepid Sea-Air-Space Museum</a></li> </ul> </p> <p> <b>食べ物</b> </p> <p> <ul> <li><a href="/2015/11/new-york.html">食べ物一覧：マップ</a></li> <li><a href="/2015/11/new-york_3.html">食べ物一覧：写真</a></li> <li><a href="/2015/10/friedmans-restaurant.html">フライドマンズ/Friedmans</a></li> <li><a href="/2015/10/bark-hotdogs-ny.html">閉店してしまったホットドッグ屋さん。バークホットドッグ</a></li> <li><a href="/2015/09/gregory-coffee.html">グレゴリーズコーヒー/Gregory Coffee</a></li> <li><a href="/2015/09/eataly-ny.html">大好きなイータリー/Eataly NY</a></li> <li><a href="/2015/10/chelsea-market-ny.html">チェルシーマーケット/Chelsea Market</a></li> <li><a href="/2015/09/plaza-hotel-food-court.html">プラザホテルの地下のフードホール//Plaza Hotel Food Hall</a></li> </ul> </p> <p> <b>その他</b> </p> <p> <ul> <li><a href="/2015/09/toysrus-times-square.html">閉店してしまったタイムズスクエアのトイザらス</a></li> <li><a href="/2015/09/one-world-trade-center.html">ワールドトレードセンター/One World Trade Center</a></li> <li><a href="/2015/08/brook-field-place.html">ブルックフィールドプレイス/Brook Field Place</a></li> <li><a href="/2015/09/central-park-nyc.html">セントラルパーク/Central Park</a></li> <li><a href="/2015/08/blueman-ny.html">本場のブルーマン/Blueman Group</a></li> <li><a href="/2015/08/high-line.html">ハイライン/High Line</a></li> <li><a href="/2016/01/meow-parlour-in-newyork.html">猫カフェ体験@Meow Parlour</a></li> <li><a href="/2015/10/ken-jump.html">けんジャンプでニューヨークの名所を巡ります</a></li> </ul> </p>', '', '', function(opts) {
});

riot.tag2('paris-link', '<p> <h2 class="sign no-border"> その他のパリ観光 </h2> </p> <p> <b>コルビュジェさん</b> </p> <p> <ul> <li><a href="/2016/04/Villa-La-Roche-Jeanneret.html">ラロッシュ邸/Villa La Roche Jeanneret</a></li> <li><a href="/2016/04/villa-savoye.html">サヴォア邸/Villa Savoye</a></li> </ul> </p> <p> <b>美術館</b> </p> <p> <ul> <li><a href="/2016/04/centre-pompidou.html">ポンピドゥセンター/Centre Pompidou</a></li> <li><a href="/2016/04/musee-picasso.html">ピカソ美術館/Musee Picasso.</a></li> <li><a href="/2016/05/musee-dart-moderne-de-la-ville-de-paris.html">パリ市立近代美術館</a></li> <li><a href="/2016/05/palais-de-tokyo.html">パレドトーキョー/Palais de Tokyo</a></li> <li><a href="/2016/05/petit-palais.html">プティパレ/Petit Palais</a></li> <li><a href="/2016/04/espace-louis-vuitton-paris.html">エスパス ルイ・ヴィトン パリ/Espace Louis Vuitton Paris</a></li> <li><a href="/2016/08/Jeanne-Lanvin.html">世界初のランバン創始者ジャンヌ・ランバンの回顧展『JEANNE LANVIN』</a></li> </ul> </p> <p> <b>[その他]</b> </p> <p> <ul> <li><a href="/2016/07/merci-paris.html">パリのおしゃれなセレクトショップ《MERCI/メルシー》</a></li> <li><a href="/2016/08/apc-surplus-paris.html">パリ18区 モンマルトルのA.P.C. SURPLUS</a></li> <li><a href="/2016/08/Laverie-Automatique.html">パリのコインランドリー”LAVERIE AUTOMATIQUE”</a></li> <li><a href="/2016/05/citroen-c42.html">シトロエンのショールーム/Citroen C42</a></li> <li><a href="/2016/05/tour-Eiffel.html">エッフェル塔のシャンパンフラッシュ</a></li> <li><a href="/2016/04/the-first-time-in-paris.html">初めてのパリ</a></li> </ul> </p>', '', '', function(opts) {
});
riot.tag2('lucky-word-panel', '<div class="panel panel-default lucky-word-box hidden"> <div class="panel-heading stripe yellow-light text-center clearfix float-center" data-target="#lucky-icons" data-toggle="modal" disabled="disabled" id="lucky-header"> <div class="row clearfix"> <div class="col-xs-3 no-padding"> <img class="lucky-icon img-responsive pull-right" src="https://3.bp.blogspot.com/-lM8x18lylrU/VnS2PfJEmTI/AAAAAAAABXQ/CYH7UQyLle4ty4hTn1DAicu4fkAI-uRiQ/s108/10.png" srcset=" https://3.bp.blogspot.com/-lM8x18lylrU/VnS2PfJEmTI/AAAAAAAABXQ/CYH7UQyLle4ty4hTn1DAicu4fkAI-uRiQ/s108/10.png 1x, https://3.bp.blogspot.com/-lM8x18lylrU/VnS2PfJEmTI/AAAAAAAABXQ/CYH7UQyLle4ty4hTn1DAicu4fkAI-uRiQ/s216/10.png 2x, https://3.bp.blogspot.com/-lM8x18lylrU/VnS2PfJEmTI/AAAAAAAABXQ/CYH7UQyLle4ty4hTn1DAicu4fkAI-uRiQ/s324/10.png 3x"> </div> <div class="col-xs-6 no-padding"> <h3 class="content-title no-margin margin-top text-center"> Lucky Word <p class="text-muted no-margin hidden-xs-"> どちらか直感で選んでねっ!! </p> </h3> </div> <div class="col-xs-3 no-padding"> <img class="lucky-icon img-responsive pull-left" src="https://4.bp.blogspot.com/-Q4NOjUaiPcA/VnS5xNQUtJI/AAAAAAAABYs/nLvG0kkCH28AJBPrf6QWjp3w_Qnf7-W2gCKgB/s108/21.png" srcset=" https://4.bp.blogspot.com/-Q4NOjUaiPcA/VnS5xNQUtJI/AAAAAAAABYs/nLvG0kkCH28AJBPrf6QWjp3w_Qnf7-W2gCKgB/s108/21.png 1x, https://4.bp.blogspot.com/-Q4NOjUaiPcA/VnS5xNQUtJI/AAAAAAAABYs/nLvG0kkCH28AJBPrf6QWjp3w_Qnf7-W2gCKgB/s216/21.png 2x, https://4.bp.blogspot.com/-Q4NOjUaiPcA/VnS5xNQUtJI/AAAAAAAABYs/nLvG0kkCH28AJBPrf6QWjp3w_Qnf7-W2gCKgB/s324/21.png 3x"> </div> </div> </div> <div class="panel-body text-center"> <div class="row"> <div class="col-xs-6 col-md-3 col-md-offset-3"> <div class="panel panel-default"> <div class="panel-body"> <img id="lucky-icon-a" class="lucky-icon full-width" src="https://2.bp.blogspot.com/-B0r2dczrGQ8/Vv_kHG_7TyI/AAAAAAAAB28/Yx7Z1fcCrk83i1cEjQR8AbfaZjgc3sAeQ/s320/IMG_0202.jpg" data-dismiss="modal" data-toggle="modal" data-target="#lucky-word-box-a"> </div> </div> </div> <div class="col-xs-6 col-md-3"> <div class="panel panel-default"> <div class="panel-body"> <img id="lucky-icon-b" class="lucky-icon full-width" src="https://1.bp.blogspot.com/-rziKDlCa4Ko/Vv_kHO_4WwI/AAAAAAAAB3A/eakwUXYfSzIK-TrMggX0Qy9VpTFyy3yYg/s320/IMG_0203.jpg" data-dismiss="modal" data-toggle="modal" data-target="#lucky-word-box-b"> </div> </div> </div> </div> </div> </div> <div class="modal fade" id="lucky-word-box-a" tabindex="-1" role="dialog" aria-labelledby="lucky-word-box-a-label"> <div class="modal-dialog lucky-word-modal row" role="document"> <div class="modal-content col-xs-12 col-md-8 col-md-offset-2 no-padding"> <div class="modal-header stripe yellow-light text-center clearfix row no-margin"> <div class="col-xs-12 col-md-12 padding-top"> <h3 class="modal-title content-title no-margin" id="lucky-word-box-a-label"> Lucky Word </h3> <p class="text-muted"> あなたのラッキーワードは… </p> </div> </div> <div class="modal-body text-center"> <img id="lucky-word-a" class="lucky-word lucky-image" src="https://4.bp.blogspot.com/-FIibBoeaMK4/Vv_kTQ4JYnI/AAAAAAAAB4Q/eHuMFyM-HucKt-vhoYwD3ryFtld2eX6Og/s320/IMG_0222.jpg" alt="イッツニューミー"> <p class="text-muted text-center"> どこかのタイミングで <br> この言葉をブチ込んでみて!! <br> きっといい日になるはず!! </p> <div class="text-center row"> <div class="col-xs-6 text-right"> <button type="button" class="btn btn-warning" data-dismiss="modal" aria-label="Close"> チャオ!! </button> </div> <div class="col-xs-6 text-left"> <div class="share-this-content"> <span><a id="lucky-word-share-a" class="twitter-share-button" data-size="large" href="" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></span> </div> </div> </div> </div> </div> </div> </div> <div class="modal fade" id="lucky-word-box-b" tabindex="-1" role="dialog" aria-labelledby="lucky-word-box-b-label"> <div class="modal-dialog lucky-word-modal row" role="document"> <div class="modal-content col-xs-12 col-md-8 col-md-offset-2 no-padding"> <div class="modal-header stripe yellow-light text-center clearfix row no-margin"> <div class="col-xs-12 col-md-12 padding-top"> <h3 class="modal-title content-title no-margin" id="lucky-word-box-b-label">Lucky Word</h3> <p class="text-muted"> あなたのラッキーワードは… </p> </div> </div> <div class="modal-body text-center"> <img id="lucky-word-b" class="lucky-word lucky-image" src="https://2.bp.blogspot.com/-agnHXR8ghtQ/VwUUwHull9I/AAAAAAAAB9Y/zSc7yTHOSPYeg48WtI8DZJ6RWyGMBQ8BQ/s320/IMG_0223.png" alt="そうなんですの?"> <p class="text-muted text-center"> どこかのタイミングで <br> この言葉をブチ込んでみて!! <br> きっといい日になるはず!! </p> <div class="text-center row"> <div class="col-xs-6 text-right"> <button type="button" class="btn btn-warning" data-dismiss="modal" aria-label="Close"> チャオ!! </button> </div> <div class="col-xs-6 text-left"> <div class="share-this-content"> <span><a id="lucky-word-share-b" class="twitter-share-button" data-size="large" href="" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></span> </div> </div> </div> </div> </div> </div> </div>', '', '', function(opts) {
var luckyWord = [

    {
        "img": "https://4.bp.blogspot.com/-s9aoQUpjSic/VwUUwMJQT2I/AAAAAAAAB9U/_OB1osuzSpYlzJSyFgRjJEwjGVhaLE5_g/s320/IMG_0222.png",
        "text": "It&rsquo;s new me!"
    },
    {
        "img": "https://2.bp.blogspot.com/-agnHXR8ghtQ/VwUUwHull9I/AAAAAAAAB9Y/zSc7yTHOSPYeg48WtI8DZJ6RWyGMBQ8BQ/s320/IMG_0223.png",
        "text": "そうなんですの?"
    },
    {
        "img": "https://3.bp.blogspot.com/-ZQQQ_x1v_3g/VwUUwCa7ijI/AAAAAAAAB9Q/6tzGbRyHdxkW2nHq9vrAinQ73l6DIa4Ww/s320/IMG_0224.png",
        "text": "がっぷりやってやるぞ"
    },
    {
        "img": "https://2.bp.blogspot.com/-jparoIZl8g0/VwUUw3nBKWI/AAAAAAAAB9c/c5H8_ylTdi4Xt6ilf2KJjKyDZsKjDCxmA/s320/IMG_0225.png",
        "text": "さてがんばるべっ"
    },
    {
        "img": "https://3.bp.blogspot.com/-ly8xkOSy3oM/VwUUw4VV_VI/AAAAAAAAB9g/cOkLs61hTEkOqqxYHq5I2ifYp14sw1WTw/s320/IMG_0226.png",
        "text": "このとんま!"
    },
    {
        "img": "https://1.bp.blogspot.com/-wBFAQ_OlX-k/VwUUxPHeUyI/AAAAAAAAB9k/pnRera6F6YovIBGcJH7Ue396IhCSH_sag/s320/IMG_0227.png",
        "text": "ごくつぶて"
    },
    {
        "img": "https://4.bp.blogspot.com/-hWKVm9qS46w/VwUUxWRYKII/AAAAAAAAB9o/V_6IwuBEk-sB8g1oVsqeAUjCoOpJYEYmQ/s320/IMG_0228.png",
        "text": "なにそのすっとんきょうな顔は!?"
    },
    {
        "img": "https://2.bp.blogspot.com/-r5KwT0szJQw/VwUUxuQyUcI/AAAAAAAAB9s/85c69N-x3UYdRUmp1LsE37Wzofx3U0GmA/s320/IMG_0229.png",
        "text": "今日すごいラッキー"
    },
    {
        "img": "https://3.bp.blogspot.com/-bq0cazudybA/VwUUxyIe1HI/AAAAAAAAB9w/54dbjkUi1AULLktbU1C-ESdjLaTubfxFA/s320/IMG_0230.png",
        "text": "はてしがないね〜"
    },
    {
        "img": "https://2.bp.blogspot.com/-lyeP4VCQsso/VwUUyEKj90I/AAAAAAAAB90/a6tT6Seer10wfpoJlImss1ek_V1ln8NBg/s320/IMG_0231.png",
        "text": "とてつもなく"
    },
    {
        "img": "https://1.bp.blogspot.com/-EZxmoYtp98g/VwUUyeHOoJI/AAAAAAAAB94/rdiOIoK1FYIR5nEa9yZX2A6BHxDiunb_Q/s320/IMG_0232.png",
        "text": "いい日だなぁ〜"
    },
    {
        "img": "https://1.bp.blogspot.com/-MDCaZtPosd0/VwUUym8dd7I/AAAAAAAAB98/3wSQsGZDUFA5c6nUvus2I1NhKs1SsZNZQ/s320/IMG_0233.png",
        "text": "生きている限り望みはある"
    },
    {
        "img": "https://2.bp.blogspot.com/-hSANzQHZVIs/VwUUywdrdXI/AAAAAAAAB-A/RDg1IhYWFzMxRM6wzbUvg6SHsDKoK6fcA/s320/IMG_0234.png",
        "text": "地球は丸いからね"
    },
    {
        "img": "https://4.bp.blogspot.com/-dT4zlpHtuk8/VwUUzKmNLKI/AAAAAAAAB-M/DWvwVcdztiI53nBTlwKgYKzO6VRZINWJA/s320/IMG_0235.png",
        "text": "今日はいちだんときれいだね"
    },
    {
        "img": "https://4.bp.blogspot.com/-nYOPrMXckGg/VwUUzU0SoOI/AAAAAAAAB-E/xKc17BBjF7Ywy2NdKIRiW6RLvdOppzYpg/s320/IMG_0236.png",
        "text": "がっびーん"
    },
    {
        "img": "https://2.bp.blogspot.com/-3trKbKmnO24/VwUUznrEJcI/AAAAAAAAB-I/7OJKQVB5ss8MS50byJa6J9CVb0HWhzb4g/s320/IMG_0237.png",
        "text": "逆ではないけどね..."
    },
    {
        "img": "https://1.bp.blogspot.com/-ieS7mbGtcvw/VwUU0L3eRVI/AAAAAAAAB-Q/6uKnCaxO1ZMm2bFqZk-NxHwQuyYR3nm0A/s320/IMG_0238.png",
        "text": "どんっどんっどんたこすっ"
    },
    {
        "img": "https://3.bp.blogspot.com/-JR-D3Z0ibhE/VwUU0bgJ_JI/AAAAAAAAB-U/mDPRwJwCnxYY9fNOUyyqyzkQnkrKYsT6w/s320/IMG_0239.png",
        "text": "もんもんもんまるとる!"
    },
    {
        "img": "https://1.bp.blogspot.com/-V8VjdyR9rsU/VwUU0mwfC3I/AAAAAAAAB-c/cquMF2Q0MxkjV9EivLS0oB8YsVuGD7Wnw/s320/IMG_0241.png",
        "text": "おたんこなすー"
    },
    {
        "img": "https://3.bp.blogspot.com/-Du5kLNalKLQ/VwUU1EMAmSI/AAAAAAAAB-k/Ykme8r1KEJ07nUYMSEoYSkmi4rw-lcytA/s320/IMG_0242.png",
        "text": "やなこった!"
    },
    {
        "img": "https://4.bp.blogspot.com/-XK7T4O9CsfY/VwUU1JsLSmI/AAAAAAAAB-g/kC49eK-liYM7ht4VdmJLE2UNsGnG3hXEA/s320/IMG_0243.png",
        "text": "ばいなら"
    },
    {
        "img": "https://4.bp.blogspot.com/-Vp4S79_K9M0/VwUU1T9LKDI/AAAAAAAAB-o/66Uu2BVGgI4l8zr38jIsshXpH1rQnDT9Q/s320/IMG_0244.png",
        "text": "どっひゃー"
    },
    {
        "img": "https://3.bp.blogspot.com/-YsQuaj-Dkn0/VwUU162L5gI/AAAAAAAAB-s/qPr3YhNsK-8J8vSUPhECu5gkLHTt1EAaw/s320/IMG_0245.png",
        "text": "運も実力のうち"
    },
    {
        "img": "https://2.bp.blogspot.com/-IDbqkzzZmZE/VwUU1zYpJ-I/AAAAAAAAB-w/CRhG-HCqQdg_cTwJAwZl1UsvvLC8-YvXw/s320/IMG_0246.png",
        "text": "このスットコドッコイ!"
    },
    {
        "img": "https://4.bp.blogspot.com/-ei4HcjRMv7k/V7flrJpMN7I/AAAAAAADeIs/sAxcpQe0KtEizWgA1TjmUrykd5UPS3akACLcB/s1600/word-1.png",
        "text": "にやり。"
	},
    {
        "img": "https://4.bp.blogspot.com/-Z7vQBC-ygPI/V7fls3OGp4I/AAAAAAADeJY/eic6t-m2dlk70oyK_JCthKJybYCPTkwMQCLcB/s1600/word-2.png",
        "text": "そりゃいいこってす"
	},
    {
        "img": "https://4.bp.blogspot.com/-Dt7jOOhR6N4/V7fluc-R2ZI/AAAAAAADeKE/3cazeYb-j7wwWCAjB5kfccYnGriAV899gCLcB/s1600/word-3.png",
        "text": "ええやんね"
	},
    {
        "img": "https://1.bp.blogspot.com/-zMVBmYFhv24/V7flu5Z6rFI/AAAAAAADeKU/R9rCyz5cmx8v-RtMwmkhyuUTKkguwp28gCLcB/s1600/word-4.png",
        "text": "ハブアナイスデイ!"
	},
    {
        "img": "https://4.bp.blogspot.com/-3ydXvAT0u3k/V7flu3dedpI/AAAAAAADeKY/1X4aXEDNmGQgZUx8kvZbMas_-36Yi1BWQCLcB/s1600/word-5.png",
        "text": "ハブアナイスデイ"
	},
    {
        "img": "https://3.bp.blogspot.com/-VaHoRkAl5OM/V7flvFY87mI/AAAAAAADeKc/ZLq-KKpKrpMdXjz5BGbZvoT4UPY3OVoUgCLcB/s1600/word-7.png",
        "text": "すべてが美しい!"
	},
    {
        "img": "https://1.bp.blogspot.com/-wHdZD5do8MI/V7flvL3HOKI/AAAAAAADeKg/q1Yc5s3HfAIKuOZniHuJbTGnbgaW6sItACLcB/s1600/word-8.png",
        "text": "ぱふぱふ"
	},
    {
        "img": "https://2.bp.blogspot.com/-gIR0m_oq_d8/V7flvdK8G5I/AAAAAAADeKk/MII5PMc_bm8yZquQRCdBCdmeGBsOqFsagCLcB/s1600/word-9.png",
        "text": "こっぱかぱーん"
	},
    {
        "img": "https://2.bp.blogspot.com/-E_z5LeDoJDw/V7flrYj-yfI/AAAAAAADeIw/XFCDVtngtz4P-2wFXj0xaDp5bIvI2rzYgCLcB/s1600/word-10.png",
        "text": "とれびあーん!"
	},
    {
        "img": "https://3.bp.blogspot.com/-fsQg4n5d2ng/V7flrvbACYI/AAAAAAADeI0/QFm0J_nkcxAbDhn4HkPL2SiB8oQMGOdAACLcB/s1600/word-11.png",
        "text": "ファビュラスですね"
	},
    {
        "img": "https://2.bp.blogspot.com/-72XOWyobOU0/V7flrksRKJI/AAAAAAADeI4/n3Kdk5D2S3wdzM7hE538UEMe7HCfsDyawCLcB/s1600/word-12.png",
        "text": "なんつって"
	},
    {
        "img": "https://1.bp.blogspot.com/-T0WyHm5G5Hs/V7flr2WjBMI/AAAAAAADeI8/jXewmlW4PE8In1dP9m5495DnbmTF8grHwCLcB/s1600/word-13.png",
        "text": "ばびょーん"
	},
    {
        "img": "https://3.bp.blogspot.com/-J7wwIbJtnzo/V7flrwGLClI/AAAAAAADeJA/-8_dnngei_oZH2acsx0Sav-jionLt39mACLcB/s1600/word-14.png",
        "text": "がっぴーん"
	},
    {
        "img": "https://3.bp.blogspot.com/-0Ydd7ISaQxE/V7flsI49ePI/AAAAAAADeJE/fMWtzvxLvycj_6_lNkud_fLA79PxmyuqQCLcB/s1600/word-15.png",
        "text": "行っトイレ"
	},
    {
        "img": "https://4.bp.blogspot.com/-Udmxnf0D4wk/V7flsGC4xuI/AAAAAAADeJI/jESXIggJtMwpOpK1EjKHrr6PzSad6l6qwCLcB/s1600/word-16.png",
        "text": "おなかがぽんぽこりんです。"
	},
    {
        "img": "https://3.bp.blogspot.com/-pddZG4n70hQ/V7flseMu33I/AAAAAAADeJM/6-v28mmHTKgHKjggw-Zo3pISoqVL-1mmgCLcB/s1600/word-17.png",
        "text": "メルシー"
	},
    {
        "img": "https://1.bp.blogspot.com/-cYT5Ja0UhNU/V7flsdfyfgI/AAAAAAADeJQ/s2tQGHQiNa0bh6wCrJ8eMdiIwMsEcMifwCLcB/s1600/word-18.png",
        "text": "今日は半日スマホ見ません..."
	},
    {
        "img": "https://4.bp.blogspot.com/-DLdi9_-HFIA/V7flslX2W9I/AAAAAAADeJU/6IkJMaGFV5ApaDQS81sa5H11Cqr9LgNwQCLcB/s1600/word-19.png",
        "text": "希望はある!"
	},
    {
        "img": "https://1.bp.blogspot.com/-656po3gdWKM/V7fls8B3X2I/AAAAAAADeJc/9pYx4wYzPMExhIIu9ZKKum3WF7G3gH4FgCLcB/s1600/word-20.png",
        "text": "おいしいもの食べに行こう!"
	},
    {
        "img": "https://2.bp.blogspot.com/-Eojk7ekr6Pc/V7fltJgK2aI/AAAAAAADeJg/grGWGtPyGfk7bkUAI9lDevyONu7aRO50wCLcB/s1600/word-21.png",
        "text": "It&rsquo;s all good."
	},
    {
        "img": "https://1.bp.blogspot.com/-tpCBtGfE05Q/V7fltC1kFII/AAAAAAADeJk/Si6_8-HPWOgChBrxnzyl3vGjavK3CpR-gCLcB/s1600/word-22.png",
        "text": "ちゃんちゃらおかしいぜ!"
	},
    {
        "img": "https://1.bp.blogspot.com/-z1lnNCrI36k/V7fltUbet3I/AAAAAAADeJo/v4OsEmzaHJYy159O-TlhTNwgGZySBIxHACLcB/s1600/word-23.png",
        "text": "どんがらがっしゃーん"
	},
    {
        "img": "https://1.bp.blogspot.com/-Y5iBiC_WpLE/V7fltgMS38I/AAAAAAADeJs/oKImekFnpQAKNrzdNENJUocx5wselRRxwCLcB/s1600/word-24.png",
        "text": "スーパースター並だね!"
	},
    {
        "img": "https://4.bp.blogspot.com/-v1_-YoxP9rQ/V7fltk99HpI/AAAAAAADeJw/lfm88vJMaB0SL4WcCXHW8WDzU3qR_wvcQCLcB/s1600/word-25.png",
        "text": "並の努力ではないね"
	},
    {
        "img": "https://3.bp.blogspot.com/-V9Rj5gbCusk/V7fltlpXkcI/AAAAAAADeJ0/GUKrB-tc4IE3WYWB4wwI-XFOpzk5RZKjQCLcB/s1600/word-26.png",
        "text": "たまらんね"
	},
    {
        "img": "https://2.bp.blogspot.com/-EP96ErdDRjU/V7fltyoafTI/AAAAAAADeJ4/KAgWwb0s8Q8aftms5CZKELWVkR_oMgT9QCLcB/s1600/word-27.png",
        "text": "イッツニューミー!"
	},
    {
        "img": "https://2.bp.blogspot.com/-yFwBBB_2HF0/V7fluGQS8CI/AAAAAAADeKA/F6RpusFkVQ43BMw5ghHeye0Y_hNBzA6DwCLcB/s1600/word-28.png",
        "text": "ダコー!"
	},
    {
        "img": "https://1.bp.blogspot.com/-csrHLn9llg4/V7fluGEm3xI/AAAAAAADeJ8/rs_0zbYLLywAxFS4pfb2REZwv1tYmVuOACLcB/s1600/word-29.png",
        "text": "やわらかい頭で考える。"
	},
    {
        "img": "https://4.bp.blogspot.com/-huxORm5tK1w/V7fluYT0UJI/AAAAAAADeKI/mKAvsfHMV90aUeG1lIk10zS_nY4Z1A6aACLcB/s1600/word-30.png",
        "text": "生きている限り希望はある"
	},
    {
        "img": "https://2.bp.blogspot.com/-_x92JKPxKIY/V7flui3EqzI/AAAAAAADeKM/SQrxrsdDLusL4-VAFj6i6gej9SdDpMlkgCLcB/s1600/word-31.png",
        "text": "足首、手首は冷やさないで!"
	},
    {
        "img": "https://3.bp.blogspot.com/-THheQotCwIY/V7fluo_N8pI/AAAAAAADeKQ/e6p9YfC5XacBI2JKL2nSIULxK2Eui7goACLcB/s1600/word-32.png",
        "text": "これだけは伝えておこう"
	}
];

var luckyIcon = [
    "https://2.bp.blogspot.com/-fK0VZbQ_glM/VwUUMQqU69I/AAAAAAAAB8I/u56itzMBTFQnKSxaw8rea1iFTj5JS9E6w/s320/IMG_0202.png",
    "https://3.bp.blogspot.com/-Zs4sYLFz-kc/VwUUMjV3eTI/AAAAAAAAB8M/hGo6oT25jy4cYit_S8aigyWmI1Pfzp66Q/s320/IMG_0203.png",
    "https://2.bp.blogspot.com/-s3AoXBMF1w4/VwUUMbzj8WI/AAAAAAAAB8E/Bt9W2bDCoO4R9yLpUieMrkSD6lR5I-LfA/s320/IMG_0204.png",
    "https://2.bp.blogspot.com/-p7qNn6mlLXw/VwUUNM74nlI/AAAAAAAAB8Q/IAadiFSKqCU35OfPqA-NWmgwg5kF4mwzg/s320/IMG_0205.png",
    "https://1.bp.blogspot.com/-yNO_lDFDBDo/VwUUNwKuZKI/AAAAAAAAB8c/7PyS0PdExcYejIsDFhRWSZ8y1ATgMBjDw/s320/IMG_0206.png",
    "https://1.bp.blogspot.com/-9qAKgMu_zXQ/VwUUNk5zHPI/AAAAAAAAB8U/OVAFLIL5qkUo34e3I6X-EAr7XdnTYuU1g/s320/IMG_0207.png",
    "https://2.bp.blogspot.com/-puRDv8cjnHs/VwUUNiH0jHI/AAAAAAAAB8Y/F4SsuRYIY6kVUUPB6f-PCkQWm5qwm_76Q/s320/IMG_0208.png",
    "https://4.bp.blogspot.com/-XAnYP9NNgwM/VwUUOfzRk4I/AAAAAAAAB8g/x923a1MRh_sPufQFMaPcx-FXHQSGvVcqg/s320/IMG_0209.png",
    "https://2.bp.blogspot.com/-yaqewPFk6jk/VwUUOa-FIQI/AAAAAAAAB8k/Wb8jfwhhRG0p8X-g82a6nrZAxGcePrBNA/s320/IMG_0210.png",
    "https://2.bp.blogspot.com/-HDWxhTsKR7U/VwUUOqaC0LI/AAAAAAAAB8o/EwPvqZPNKKM75mkyh0Qf76GInyPLOaI-A/s320/IMG_0211.png",
    "https://3.bp.blogspot.com/-2HW6GB8ZLzs/VwUUO5sYgpI/AAAAAAAAB8s/7uesT58PeDwjnjd0OzyI0h8i2EqbNeuTA/s320/IMG_0212.png",
    "https://3.bp.blogspot.com/-Fh6QEwnJ8Jk/VwUUPCH7n-I/AAAAAAAAB8w/G3gK7gmvnWoBm5gdkwvjdPNP0Tco2TBYg/s320/IMG_0213.png",
    "https://4.bp.blogspot.com/-5SOAQjQe-2I/VwUUPU21SzI/AAAAAAAAB80/E3QoqH1vlBUgaR4xco1rmvGvvG66dWLeQ/s320/IMG_0214.png",
    "https://2.bp.blogspot.com/-S50RC9Beew8/VwUUPpj9IcI/AAAAAAAAB84/GkQGVnMfKbsBC5UD-j11Ezhjbry8JT7jw/s320/IMG_0215.png",
    "https://1.bp.blogspot.com/-X7CILi2d_10/VwUUPwvpw0I/AAAAAAAAB88/o2Xjehk2BRQyzl-LuPNRvoQk60H33qUhg/s320/IMG_0216.png",
    "https://3.bp.blogspot.com/-8NmYH1SRfpY/VwUUQFH7fVI/AAAAAAAAB9A/FsnpFtEmCqwlSpX-hzOHpL9pw_SLeECZA/s320/IMG_0217.png",
    "https://4.bp.blogspot.com/-U7kXYHM_VFA/VwUURP_nnoI/AAAAAAAAB9M/MRTuCPqZ9a8NYZgjxWD0KZOZgAoR5z6cQ/s320/IMG_0218.png",
    "https://2.bp.blogspot.com/-BDc06ZxdxLo/VwUUQcDivKI/AAAAAAAAB9E/TSr-QCBWpxwZOqKH1rSKTuFQMOTo7Ey6Q/s320/IMG_0219.png",
    "https://2.bp.blogspot.com/-Xmthb3oo6Us/VwUUQ0el6fI/AAAAAAAAB9I/Z9Dz65vlSB8Bwcuet71FM0KacfNNbRkzA/s320/IMG_0220.png",
    "https://1.bp.blogspot.com/-SyajPH5Q_7o/V7flqIF6qZI/AAAAAAADeIQ/UybhgY7blyUUXahnSbclxHM28ku_8S1JACLcB/s1600/icon-1.png",
    "https://4.bp.blogspot.com/-GKXFNw8v4BI/V7flqOt3OBI/AAAAAAADeIM/HgP7sqm86lUZRxDMzHyOOW20z3IlYvHHwCLcB/s1600/icon-2.png",
    "https://3.bp.blogspot.com/-H_MQjcMQanM/V7flqVWnYNI/AAAAAAADeIU/wj-HeKL4Xf8wTZgHJCgx-eNnWn0HEyfDgCLcB/s1600/icon-3.png",
    "https://1.bp.blogspot.com/-9dzHO_6HLDk/V7flquuJ_rI/AAAAAAADeIY/KAr-bKTw9BA6dfjpZfHKL83RHgjV8YFfwCLcB/s1600/icon-4.png",
    "https://3.bp.blogspot.com/-U4LPn9DO1IM/V7flqqIe2jI/AAAAAAADeIc/BNnU0Bq855g1gkuA-vcADRNXVUnXRM9rACLcB/s1600/icon-5.png",
    "https://3.bp.blogspot.com/-iMhu-h9mkzY/V7flq2JG7JI/AAAAAAADeIg/hiN4lY-IoDsEZgJxhbxAOGCUL3pISaMvACLcB/s1600/icon-6.png",
    "https://1.bp.blogspot.com/-O3DI3oH445I/V7flrKcNFVI/AAAAAAADeIk/Sys5k30DAtsaIEBJYlm45eiJP0LiICwmACLcB/s1600/icon-7.png",
    "https://3.bp.blogspot.com/-mkHzqWG0kRs/V7flrP7O4ZI/AAAAAAADeIo/Rk-ZrEFBdPkIQquv_KXaz3MhPofe6Q6TQCLcB/s1600/icon-8.png"
];
function setLuckyWord(_$) {
    var $luckyWordBox = _$('.lucky-word-box')
    if (luckyWord.length && luckyIcon.length && $luckyWordBox.length) {
        var
            HUSH_TAG = 'luckyWord',
            SHARE_VIA = 'cupcakemafa',
            SHARE_URL = 'http://www.cupcakemafa.com/',
            TWITTER_SHARE_BASE = 'http://twitter.com/intent/tweet?text=',
            idx, idx_b, icon = [],
            word = [],
            share_url, lucky_word,
            hush_tag, share_tag,
            looper = ['a', 'b'],
            i, l,
            date = new Date().getDate(),
                word_count = luckyWord.length - 1,
                icon_count = luckyIcon.length - 1,

            getTweetText = function (word) {
                if (word) {

                    var
                        TEXT_PREFIX = ('本日のお言葉→「 #'),
                        TEXT_POSTFIX = (' 」') + decodeURIComponent('%0A'),
                        hushTag = (word.replace(/ /g, '_'));
                    return TEXT_PREFIX + hushTag
                        + TEXT_POSTFIX + word
                        + decodeURIComponent('%0A')
                        + '#luckyWord'
                        + ' @cupcakemafa';
                }
            };

        idx = parseInt(date % word_count, 10);
        word.push(luckyWord[idx]);
        idx_b = word_count - idx;
        idx_b = idx_b != idx ? idx_b : 1;
        word.push(luckyWord[idx_b]);

        idx = parseInt(date % icon_count, 10);
        icon.push(luckyIcon[idx]);
        idx_b = icon_count - idx;
        idx_b = idx_b != idx ? idx_b : 1;
        icon.push(luckyIcon[idx_b]);

        for (i = 0, l = looper.length; i < l; i++) {
            _$('#lucky-icon-' + looper[i]).attr('src', icon[i]);
            _$('#lucky-word-' + looper[i]).attr('src', word[i].img).attr('alt', word[i].text);
            lucky_word = word[i].text;
            share_tag = '<a href="https://twitter.com/share" ';
            share_tag += 'class="twitter-share-button" ';
            share_tag += 'data-text="' + getTweetText(lucky_word) + '" ';
            share_tag += 'data-size="large" ';
            share_tag += 'data-url="' + SHARE_URL + '" ';

            share_tag += 'data-dnt="false">Tweet</a>';

            $('#lucky-word-share-' + looper[i]).replaceWith(share_tag);
        }

        var $open_lucky = _$('#open-lucky'),
            $lucky_header = _$('#lucky-header');
        $open_lucky.prop('disabled', false);
        $lucky_header.prop('disabled', false);

        $luckyWordBox.eq(0).removeClass('hidden');
    }
}
this.on('mount', function() {
    setLuckyWord($);
});
});

riot.tag2('not-found', '<article class="post text-center"> <a href="/" title="Cupcakemafaのトップページへ"> <img class="img-circle" src="http://4.bp.blogspot.com/-VA6sLbbGX4I/VdmIpQk5I5I/AAAAAAAAAPM/GyDtlKiC4-0/s200/cupcakemafa-favicon-200x200.png"> </a> <h3>Sorry...</h3> <p>おさがしのページが<br>見つかりませんでした&#12290;</p> <p> <a href="/" class="btn btn-default" title="Cupcakemafaのトップページへ"> <i class="fa fa-home"></i> Cupcakemafaのトップページへ </a> </p> もしくは <div class="padding text-center"> <form action="/search" method="get" role="search"> <div class="input-group input-group-lg margin padding"> <input class="form-control" name="q" placeholder="サイト検索" type="search"> <span class="input-group-btn"> <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button> </span> </div> </form> </div> </article>', '', '', function(opts) {
});
riot.tag2('site-footer', '<footer> <div class="container"> <div class="row"> <div class="col-md-4 col-md-offset-4"> <p> <span class="copyright">Copyright &copy; Cupcakemafa 2014-{nowYear}</span> </p> <p> <ul class="list-inline social-buttons"> <li> <a class="btn-circle facebook exLink" href="https://www.facebook.com/cupcakemafa" target="_blank" rel="nofollow"> <i class="fa fa-facebook"></i> </a> </li> <li> <a class="btn-circle twitter exLink" href="https://twitter.com/cupcakemafa" target="_blank" rel="nofollow"> <i class="fa fa-twitter"></i> </a> </li> <li> <a class="btn-circle google-plus exLink" href="https://plus.google.com/u/0/b/111933427629078412827/+Cupcakemafa2015/posts" target="_blank" rel="nofollow"> <i class="fa fa-google-plus"></i> </a> </li> <li> <a class="btn-circle youtube exLink" href="https://www.youtube.com/c/Cupcakemafa2015/" target="_blank" rel="nofollow"> <i class="fa fa-youtube"></i> </a> </li> <li> <a class="btn-circle instagram exLink" href="https://instagram.com/cupcakemafaofficial/" target="_blank" rel="nofollow"> <i class="fa fa-instagram"></i> </a> </li> </ul> </p> <p> <ul class="list-inline quicklinks"> <li> <a class="btn btn-default" href="/"><i class="fa fa-home"></i> SITE TOP</a> </li> </ul> </p> </div> </div> </div> </footer>', '', '', function(opts) {
    this.nowYear = new Date().getFullYear();
});
riot.tag2('site-search', '<section id="contact"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading">SEARCH</h2> <p class="text-muted">Cupcakemafaのサイトの中を検索!!</p> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="row"> <div class="col-md-12 text-center"> <div class="form-group"> <form name="sentMessage" id="contactForm" action="/search" method="get"> <input type="search" class="form-control" name="q" placeholder="Search Word Please"><br> <p> <input type="submit" class="btn btn-xl" value="Search"> </p> </form> </div> </div> </div> </div> </div> </div> </section>', '', '', function(opts) {
});
riot.tag2('tag-cloud', '<div class="panel panel-default"> <div class="panel-heading"> <h3>Tags</h3> </div> <div id="tagList" class="panel-body widget-content cloud-label-widget-content text-left"> <p class="text-muted"> <img src="https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s120/01.png" srcset=" https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s120/01.png 1x, https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s240/01.png 2x, https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s360/01.png 3x" class="team-icon img-responsive" alt="ながれで！"> </p> <span each="{tag_cloud_data}" class="label-size label-size-{cssSize}"> <span dir="{langageDirection}"> <a href="{href}">{tag} ({count})</a> </span> </span> </div> </div>', '', '', function(opts) {
    this.tag_cloud_data = tag_cloud_data
});
riot.tag2('top-header', '<div class="post-col col col-md-6 col-sm-12 col-xs-12 hidden-xs"> <div class="panel panel-default"> <div class="panel-body text-center" id="header-box"> <img alt="Cupcakemafa" src="http://3.bp.blogspot.com/-ZNLv0M8ltMY/VdmC4QtSpZI/AAAAAAAAAO8/KD02eh8ll2w/s320/cupcakemafa-blog-header-490x153.png"> <p class="text-muted description"> ちょっとしたことで日常に笑いを。<br> そんな思いを持ちながらゆるーく活動しています。 </p> </div> </div> </div>', '', '', function(opts) {
});

riot.tag2('who-we-are', '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="service-heading text-center">Who We Are</h3> </div> <div class="panel-body"> <p class="text-muted"> <img class="img-circle img-responsive team-icon" src="http://4.bp.blogspot.com/-VA6sLbbGX4I/VdmIpQk5I5I/AAAAAAAAAPM/GyDtlKiC4-0/s80/cupcakemafa-favicon-200x200.png" srcset=" http://4.bp.blogspot.com/-VA6sLbbGX4I/VdmIpQk5I5I/AAAAAAAAAPM/GyDtlKiC4-0/s80/cupcakemafa-favicon-200x200.png 1x, http://4.bp.blogspot.com/-VA6sLbbGX4I/VdmIpQk5I5I/AAAAAAAAAPM/GyDtlKiC4-0/s160/cupcakemafa-favicon-200x200.png 2x, http://4.bp.blogspot.com/-VA6sLbbGX4I/VdmIpQk5I5I/AAAAAAAAAPM/GyDtlKiC4-0/s240/cupcakemafa-favicon-200x200.png 3x" alt="Cupcakemafa"> </p> <p class="text-muted text-left"> ちょっとしたことで日常に笑いを;) そんな思いを持ちながらゆるく活動している夫婦です。 読み物アプリを作ったり、旅の情報を発信したり、試行錯誤中。 ゆくゆくは日本の日常にもっとアートが自然に溶け込むようなことをやれたらいいなと思っています。 どうぞ、よろしく。 </p> </div> </div>', '', '', function(opts) {
});
