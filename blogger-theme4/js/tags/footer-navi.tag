<footer-navi>
<aside class='clients margin-top'>
    <div class='container'>
        <div id='footer-navi' class='row'></div>
    </div>
</aside>
<script>
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
// init this content
this.on('mount', function() {
  setFooterNavi()
});
</script>
</footer-navi>