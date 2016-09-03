<about-virtual-tour>
<div class='hidden-sm'>
    <span class='fa-stack fa-4x'>
        <i class='fa fa-circle fa-stack-2x text-primary'></i>
        <i class='fa fa-youtube fa-stack-1x fa-inverse'></i>
    </span>
    <p class='text-muted'>
        旅のヴァーチャルツアーなどなど
        <br /> ビデオでお送りしています。
    </p>
    <div id='youtube-video-widget'></div>
    <div class='g-ytsubscribe' data-channelid='UCA-5O04iRku19b8KMUMm_OA' data-layout='full' data-count='default' data-onytevent='onYtEvent'></div>
    <hr />
</div>
<script>
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
        // Fit wideo aspect to iframe
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
// init this content
this.on('mount', function() {
  setYoutubeVideoWidget()
});
</script>
</about-virtual-tour>