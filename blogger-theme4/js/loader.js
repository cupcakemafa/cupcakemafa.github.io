(function($) {

    var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame,
    setCss = function() {
        var l,h,css,extCss, appCss,i,len;
        extCss = [
            '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
            //'//maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css',
            '//fonts.googleapis.com/css?family=Chewy',
            '//fonts.googleapis.com/css?family=Montserrat:400,700',
            '//fonts.googleapis.com/css?family=Kaushan+Script',
            '//fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic',
            '//fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700'
        ];
    //            if(location.hostname == 'www.cupcakemafa.com' || location.hostname == 'cupcakemafa.com') {
    //                appCss = [
    //                    '//cupcakemafa.github.io/blogger-theme4/css/agency.min.css',
    //                    '//cupcakemafa.github.io/blogger-theme4/css/style-old.min.css',
    //                    '//cupcakemafa.github.io/blogger-theme4/css/style.min.css'
    //                ];
    //            }
    //            else {
    //                appCss = [
    //                    '//cupcakemafa.github.io/blogger-theme4/css/agency.css',
    //                    '//cupcakemafa.github.io/blogger-theme4/css/style-old.css',
    //                    '//cupcakemafa.github.io/blogger-theme4/css/style.css'
    //                ];
    //            }
    //            css = extCss.concat(appCss);

        css = extCss;
        len = css.length;
        for(i=0;i<len;i++) {
            l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = css[i];
            h = document.getElementsByTagName('head')[0];
            h.parentNode.insertBefore(l, h);
        }
    };

    if (raf) {
        raf(setCss);
    }
    else {
        window.addEventListener('load', setCss);
    }

    riot.compile(function() {
        riot.mount('*');

        var js = [
                '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'
                //'//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
            ],
            len;

        if(location.hostname == 'www.cupcakemafa.com') {
            //js.push('//cupcakemafa.github.io/blogger-theme4/js/ms.min.js');
            js.push('//cupcakemafa.github.io/blogger-theme4/js/app.min.js');
        }
        else {
            //js.push('//cupcakemafa.github.io/blogger-theme4/js/ms.js');
            js.push('//cupcakemafa.github.io/blogger-theme4/js/app.js');
        }
        len = js.length;
        for(i=0;i<len;i++) {
            l = document.createElement('script');
            l.setAttribute('src', js[i]);
            l.setAttribute('type', 'text/javascript');
            l.setAttribute('charset', 'utf-8');
            l.setAttribute('async', 'false');
            b = document.getElementsByTagName('body')[0];
            //b.parentNode.insertBefore(l, b);
            b.appendChild(l);
        }

        function getQueryString() {
            var vars = [], max = 0, hash = '', array = '';
            hash  = window.location.search.slice(1).split('&');
            max = hash.length;
            for (var i = 0; i < max; i++) {
                array = hash[i].split('=');
                vars[array[0]] = decodeURIComponent(array[1].replace(/\+/g , ' '));
            }
            return vars;
        }

        if(location.pathname == '/search') {
            $('#welcome-message').addClass('hidden');
            var query = getQueryString(),
                $siteSearch = $('#site-search');
            $siteSearch.find('#search-input').val(query.q);
            $siteSearch.removeClass('hidden');
        }
    });
})(jQuery);
