<about-twitter>
<span class='fa-stack fa-4x'>
    <i class='fa fa-circle fa-stack-2x text-primary'></i>
    <i class='fa fa-twitter fa-stack-1x fa-inverse'></i>
</span>
<p class='text-muted'>
    いろいろツイートしています
</p>
<div class='hidden-xs'>
    <a class='twitter-timeline' data-height='360' href='https://twitter.com/cupcakemafa'>Tweets by cupcakemafa</a>
</div>
<div class='visible-xs'>
    <button class='btn btn-default btn-block btn-lg' type='button' data-toggle='modal' data-target='#twitter-widget-modal'>
        <i class='fa fa-plus'></i> ポップしてちょっとみてみる
    </button>
    <div class='modal fade' id='twitter-widget-modal' role='dialog'>
        <div class='modal-dialog'>
            <!-- Modal content-->
            <div class='modal-content'>
                <div class='modal-body'>
                    <a class='twitter-timeline' data-height='360' href='https://twitter.com/cupcakemafa'>Tweets by cupcakemafa</a>
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
// init this content
this.on('mount', function() {
  setTwitterWidget()
});
</script>
</about-twitter>