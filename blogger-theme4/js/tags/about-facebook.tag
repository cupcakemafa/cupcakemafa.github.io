<about-facebook>
<span class='fa-stack fa-4x'>
    <i class='fa fa-circle fa-stack-2x text-primary'></i>
    <i class='fa fa-facebook fa-stack-1x fa-inverse'></i>
</span>
<p class='text-muted'>
    最新情報をタイムラインでお知らせ
</p>
<div class='hidden-xs'>
    <div class='fb-page' data-href='https://www.facebook.com/cupcakemafa/' data-tabs='timeline' data-width='268' data-height='360' data-small-header='true' data-adapt-container-width='true' data-hide-cover='true' data-show-facepile='true'>
        <blockquote cite='https://www.facebook.com/cupcakemafa/' class='fb-xfbml-parse-ignore'><a href='https://www.facebook.com/cupcakemafa/'>Cupcakemafa</a></blockquote>
    </div>
</div>
<div class='visible-xs'>
    <button class='btn btn-default btn-block btn-lg' type='button' data-toggle='modal' data-target='#facebook-widget-modal'>
        <i class='fa fa-plus'></i> ポップしてちょっとみてみる
    </button>
    <div class='modal fade' id='facebook-widget-modal' role='dialog'>
        <div class='modal-dialog'>
            <!-- Modal content-->
            <div class='modal-content'>
                <div class='modal-body'>
                    <div class='fb-page' data-href='https://www.facebook.com/cupcakemafa/' data-tabs='timeline' data-width='268' data-height='360' data-small-header='true' data-adapt-container-width='true' data-hide-cover='true' data-show-facepile='true'>
                        <blockquote cite='https://www.facebook.com/cupcakemafa/' class='fb-xfbml-parse-ignore'><a href='https://www.facebook.com/cupcakemafa/'>Cupcakemafa</a></blockquote>
                    </div>
                </div>
                <div class='modal-footer'>
                    <button class='btn btn-default btn-block' data-dismiss='modal'>
                        <span class='glyphicon glyphicon-remove'></span> Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<hr />
<script>
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
// init this content
this.on('mount', function() {
  setFacebookWidget()
});
</script>
</about-facebook>
