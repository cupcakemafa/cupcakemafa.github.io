/**
 * Event Class
 * @param {Object} global
 * @returns {undefined}
 */
(function (global) {
    "use strict";

    // Class ------------------------------------------------
    /**
     * コンストラクタ
     * @returns {event.class_L6.Event}
     */
    function Event() {
        if (window.hasOwnProperty('ontouchstart')) {
            this.TOUCH_START = 'touchstart';
            this.TOUCH_MOVE = 'touchmove';
            this.TOUCH_END = 'touchend';
        } else {
            this.TOUCH_START = 'mousedown';
            this.TOUCH_MOVE = 'mousemove';
            this.TOUCH_END = 'mouseup';
        }

        this.TRANSITION_END = 'transitionend webkitTransitionEnd';
        this.ANIMATION_END = 'animationend webkitAnimationEnd';
        this.SCROLL = 'scroll';
        this.CHANGE = 'change';
    }

    // Implementation ---------------------------------------
    /**
     * イベント発生位置取得メソッド
     * @param {Object} event イベントオブジェクト
     * @returns {object|Boolean} position
     * @returns {number} position.x
     * @returns {number} position.y
     */
    function Event_getPosition(event) {
        var position = false;
        if (window.hasOwnProperty('ontouchstart')) {
            position = {
                x: event.originalEvent.changedTouches[0].pageX,
                y: event.originalEvent.changedTouches[0].pageY
            };
        } else {
            position = {
                x: event.pageX,
                y: event.pageY
            };
        }
        return position;
    }

    // Header -----------------------------------------------
    Event.prototype.getPosition = Event_getPosition; // Event#getPosition():Object

    // Exports ----------------------------------------------
    if (global.hasOwnProperty("process")) {
        module.exports = Event;
    }
    global.Event = Event;

}((this || 0).self || global));

/**
 * Util Class
 * 共通ユーティリティ機能クラス
 * @param {Object} global
 * @returns {undefined}
 */
(function (global) {
    "use strict";

    // Class ------------------------------------------------
    /**
     * コンストラクタ
     * @returns {util.class_L7.Util}
     */
    function Util() {
        Util.prototype = {}; // to avoid json lint error
    }

    // Implementation ---------------------------------------

    /**
     * Get value from query string
     * @link http://vba-geek.jp/blog-entry-183.html
     * @link http://www.bloggingdeveloper.com/post/JavaScript-QueryString-ParseGet-QueryString-with-Client-Side-JavaScript.aspx
     */
    function Util_getQueryString (key, default_) {
        var regex, qs;
        if (default_ == null) {
            default_ = '';
        }
        key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        qs = regex.exec(window.location.href);
        if (qs == null) {
            return default_;
        } else {
            return qs[1];
        }
    }

    /**
     * 引数の変数が定義されているかを判定
     * @param {type} argumentName
     * @returns {Boolean}
     */
    function Util_isDefined(argumentName) {
        //console.info('argumentName', argumentName);
        // グローバルを表すオブジェクトを生成
        //var global = ( function() { return this; } ).apply( null, [] );
        //console.info('global', global);
        //console.info('window', window);
        if (!window) {
            return false;
        }
        if (window.hasOwnProperty(argumentName)) {
            return true;
        }
        return false;
    }

    /**
     * OS プラットフォーム文字列取得メソッド
     * @returns {Boolean|String}
     */
    function Util_getPlatform() {

        var platform = this.getNavigatorPlatform().toLowerCase();
        if (platform) {
            if (platform.match(/ios/)) {
                return 'ios';
            }
            if (platform.match(/android/)) {
                return 'android';
            }
        }
        //console.warn('platform not defined');
        return false;
    }

    /**
     * プラットフォーム（OS）タイプ取得メソッド
     * @private
     * @returns {Boolean|RegExp} ios|android|false
     */
    function Util_getNavigatorPlatform() {
        //var deviceType = navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/);
        // プラットフォーム判定
        if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
            return 'ios';
        }
        if (navigator.userAgent.match(/(Android)/)) {
            return 'android';
        }
        return;
    }

    /**
     * プラットフォーム判定メソッド
     * @returns {Array}
     */
    function Util_getNavigatorDeviceType() {
        // プラットフォーム判定
        var deviceType = navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/);
        return deviceType;
    }

    /**
     * 引数 num を受け取って、0 から (num - 1) までの乱数を返す関数
     * @param {Number} num
     * @returns {Number}
     */
    function Util_rand(num) {
        return Math.floor(Math.random() * num);
    }

    /**
     * ランダムストリング生成メソッド
     * @returns {String}
     */
    function Util_randStr() {
        var
            chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
            string_length = 8,
            randomstring = '',
            i,
            rnum;
        for (i = 0; i < string_length; i += 1) {
            rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring;
    }

    /**
     * 配列もしくはオブジェクト内の値の個数カウントメソッド
     * @param {Array|Object} stack
     * @param {Number|String} value
     * @returns {Number}
     */
    function Util_countVal(stack, value) {
        var count = 0;
        Object.keys(stack).forEach(function (key) {
            if (stack[key] === value) {
                count += 1;
            }
        });
        return count;
    }

    /**
     * デバイスのピクセル比取得メソッド
     * @deprecated 未使用のため
     * @returns {Number}
     */
    function Util_getDevicePixcelRatio() {
        return parseInt(window.devicePixelRatio, 10) || 1;
    }

    /**
     * 画像リソースの縦横ピクセル数取得メソッド
     * @deprecated 未使用のため
     * @param {string} url
     * @returns {object}
     * @returns {Number} width
     * @returns {Number} height
     */
    function Util_getImageMetrics(url) {
        var
            img,
            width,
            height;

        img = new Image();
        img.src = url;
        width = img.width || 0; // 幅
        height = img.height || 0; // 高さ
        return {
            "width": width,
            "height": height
        };
    }

    /**
     * 配列マージメソッド
     * @deprecated 未使用のため
     * @param {Array} baseArr
     * @param {Array} addArr
     * @returns {Array}
     */
    function Util_arrayMerge(baseArr, addArr) {
        baseArr.concat(addArr);
        return baseArr;
    }

    /**
     * オブジェクトマージメソッド
     * @deprecated 未使用のため
     * @param {Object} baseObj
     * @param {Object} addObj
     * @param {bool} recursive
     * @returns {Object}
     */
    function Util_objectMerge(baseObj, addObj, recursive) {
        $.extend(recursive, baseObj, addObj);
        return baseObj;
    }

    // Header -----------------------------------------------
    Util.prototype.isDefined = Util_isDefined; // Util#isDefined():Object
    Util.prototype.getPlatform = Util_getPlatform; // Util#getPlatform():Object
    Util.prototype.getNavigatorPlatform = Util_getNavigatorPlatform; // Util#getNavigatorPlatform():Object
    Util.prototype.getNavigatorDeviceType = Util_getNavigatorDeviceType; // Util#getNavigatorDeviceType():Object
    Util.prototype.rand = Util_rand; // Util#rand():Object
    Util.prototype.randStr = Util_randStr; // Util#randStr():Object
    Util.prototype.countVal = Util_countVal; // Util#countVal():Object
    Util.prototype.getDevicePixcelRatio = Util_getDevicePixcelRatio; // Util#getDevicePixcelRatio():Object
    Util.prototype.getImageMetrics = Util_getImageMetrics; // Util#getImageMetrics():Object
    Util.prototype.arrayMerge = Util_arrayMerge; // Util#arrayMerge():Object
    Util.prototype.objectMerge = Util_objectMerge; // Util#objectMerge():Object
    Util.prototype.getQueryString = Util_getQueryString; // Util#getQueryString():Object

    // Exports ----------------------------------------------
    if (global.hasOwnProperty("process")) {
        module.exports = Util;
    }
    global.Util = Util;

}((this || 0).self || global));

(function ($) {

    var
        SITE_URL = location.protocol + '//www.cupcakemafa.com',
        util = new window.Util(),
        event = new window.Event(),
        pageType = $('#page-type').text(),
        pageUrl = $('#post-url').text(),
        setMetaTag = function () {
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
        },
        // this method is called in ajax CB (setSinglePageNavi())
        trimThumb = function () {
            var $elm;
            $('img.thumb').each(function (idx, elm) {
                $elm = $(elm);
                $elm.height($elm.width());
            });
        },
        // this method is called in ajax CB (setSinglePageNavi())
        setTitleCR = function () {
            var title, $elm;
            $('.post-title a').each(function (idx, elm) {
                $elm = $(elm);
                title = $elm.text().replace(/　/g, '<br />');
                $elm.html(title);
            });
        },
        setPostSummary = function () {
            // set post summary text
            $('.post-summary').each(function (index, elm, arr) {
                var SUMMARY_LENGTH = 64,
                    $elm = $(elm),
                    id = $elm.find('#id').text(),
                    url = $elm.find('#url').text(),
                    title = $elm.find('#title').text(),
                    $content = $elm.find('#content'),
                    $imgs = $content.find('img'),
                    content = $content.text(),
                    summary = content.substring(0, SUMMARY_LENGTH),
                    summaryTag = '',
                    imgTag = '',
                    attr = '',
                    clas = '';

                if (content.length > summary.length) {
                    summary += '...';
                }

                //summaryTag = '<div class="alert alert-warning">';
                summaryTag += '<a href="' + url + '" title="' + title + '">';
                summaryTag += summary;
                summaryTag += '</a>';
                //summaryTag += '</div>';
                $elm.html(summaryTag).removeClass('hidden');

                //                $imgs.each(function (index, img, arr) {
                //                    if (index > 0 && 5 > index) {
                //                        attr = $(img).attr('src');
                //                        //clas='img-rounded';
                //                        clas = 'img-circle';
                //                        imgTag += '<img src="' + attr + '" class="' + clas + '" />';
                //                    }
                //                });
                //                if (imgTag.length) {
                //                    imgTag = '<a href="' + url + '" title="' + title + '">' + imgTag + '</a>';
                //                    $('#footer-' + id).html(imgTag);
                //                }
            });
        },
        // maintain iframe aspect for fluid width
        // @link http://qiita.com/ryounagaoka/items/a98f59347ed758743b8d
        // CSS style is needed.
        // .aspect {
        //     position: relative;
        //     width: 100%;
        // }
        // .aspect:before {
        //     content:"";
        //     display: block;
        //     padding-top: 56.25%; /* 高さと幅の比を16:9に固定。9/16*100=56.25 */
        // }
        // .aspect .content {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        // }
        setAspect = function () {
            //$('.post iframe').each(function(index, elm) {
            $('div iframe').each(function (index, elm) {
                var
                    $elm = $(elm),
                    tag = '';

                if (!$elm.hasClass('custom-size')) {
                    elm.classList.add('content');
                    tag += '<div class="aspect">';
                    tag += '<div class="content">';
                    tag += elm.outerHTML;
                    tag += '</div>';
                    tag += '</div>';
                    $elm.replaceWith(tag);
                }
            });
        },
        // set share button tags
        setSocialShareTag = function (shareUrl) {
            var
                tag = '',
                $share = $('.post-social-share'),
                via = $("meta[name='twitter:site']").attr('content'),
                twTitle = $("meta[name='twitter:title']").attr('content'),
                postTitle = $('title').text(),
                // Pinterest シェア実行処理
                setPinterestShare = function () {
                    var e = document.createElement('script');
                    e.setAttribute('type', 'text/javascript');
                    e.setAttribute('charset', 'UTF-8');
                    e.setAttribute('src', 'http://assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
                    document.body.appendChild(e);
                };

            if (via.length) {
                via = via.replace(/@/g, '');
            }

            if ($share.length) {
                tag += '<div class="share-this-content">';
                tag += '<span>';
                tag += '<a class="btn-circle facebook" href="http://www.facebook.com/sharer.php?u=' + shareUrl + '" target="_blank">';
                tag += '<i class="fa fa-facebook fa-2x"/></i>';
                tag += '</a>';
                tag += '</span>';

                tag += '<span>';
                tag += '<a class="btn-circle twitter" href="http://twitter.com/share?text=' + twTitle + '&url=' + shareUrl + '&via=' + via + '" target="_blank">';
                tag += '<i class="fa fa-twitter fa-2x"/></i>';
                tag += '</a>';
                tag += '</span>';

                tag += '<span>';
                tag += '<a class="btn-circle google-plus" href="https://plus.google.com/share?url=' + shareUrl + '" target="_blank">';
                tag += '<i class="fa fa-google-plus fa-2x"/></i>';
                tag += '</a>';
                tag += '</span>';

                //                tag += '<span>';
                //                tag += '<a class="btn-circle pinterest" href="#" onclick="setPinterestShare()">';
                //                tag += '<i class="fa fa-pinterest fa-2x"/></i>';
                //                tag += '</a>';
                //                tag += '</span>';

                //                tag += '<span>';
                //                tag += '<a class="btn-circle linkedin" href="http://www.linkedin.com/shareArticle?mini=true&;url=' + shareUrl + '" target="_blank">';
                //                tag += '<i class="fa fa-linkedin fa-2x"/></i>';
                //                tag += '</a>';
                //                tag += '</span>';

                //                tag += '<span>';
                //                tag += '<a class="btn-circle stumbleupon" href="http://www.stumbleupon.com/submit?url=' + shareUrl + '" target="_blank">';
                //                tag += '<i class="fa fa-stumbleupon fa-2x"/></i>';
                //                tag += '</a>';
                //                tag += '</span>';

                tag += '<span>';
                tag += '<a class="btn-circle tumblr" href="http://www.tumblr.com/share/link?url=' + shareUrl + '" target="_blank">';
                tag += '<i class="fa fa-tumblr fa-2x"/></i>';
                tag += '</a>';
                tag += '</span>';

                tag += '</div>';

                $share.each(function (index, elm) {
                    elm.innerHTML += tag;
                    elm.classList.remove('hidden');
                });
            }
        },
        /**
         * Check if the page is last of the list.
         */
        checkLastPage = function () {
            var
                homePage = SITE_URL,
                activePageUrl = location.href,
                postLabel = '',
                labelSearchURI = '/search/label/',
                requestUrl = false,
                currentPageNo = 0,
                perPage = 0;
            // Checking Post Max Count
            // Get label string from location URL
            if (activePageUrl.indexOf('/search') != -1 || activePageUrl.indexOf('/search/label/') != -1) {
                if (activePageUrl.indexOf("?updated-max") != -1) {
                    postLabel = activePageUrl.substring(activePageUrl.indexOf(labelSearchURI) + labelSearchURI.length, activePageUrl.indexOf("?updated-max"));
                } else if (activePageUrl.indexOf("?updated-max") != -1) {
                    postLabel = activePageUrl.substring(activePageUrl.indexOf(labelSearchURI) + labelSearchURI.length, activePageUrl.indexOf("?&max"));
                } else {
                    postLabel = activePageUrl.substring(activePageUrl.indexOf(labelSearchURI) + labelSearchURI.length);
                    if (location.search) {
                        postLabel = postLabel.replace(location.search, '');
                    }
                }
            }
            // Set a request URL for a post count
            if (activePageUrl.indexOf("?q=") == -1 && activePageUrl.indexOf(".html") == -1) {
                if (activePageUrl.indexOf("/search/label/") == -1) {
                    // For page
                    if (activePageUrl.indexOf("#PageNo=") != -1) {
                        currentPageNo = activePageUrl.substring(activePageUrl.indexOf("#PageNo=") + 8, activePageUrl.length)
                    } else {
                        currentPageNo = 1
                    }
                    requestUrl = homePage + '/feeds/posts/summary?max-results=1&alt=json-in-script';
                } else {
                    // For Label archive
                    perPage = util.getQueryString('max-results', 20);
                    if (activePageUrl.indexOf("#PageNo=") != -1) {
                        currentPageNo = activePageUrl.substring(activePageUrl.indexOf("#PageNo=") + 8, activePageUrl.length)
                    } else {
                        currentPageNo = 1
                    }
                    requestUrl = homePage + '/feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&max-results=1';
                }
                // @todo for Year archive last page check
            }
            // Get a post count.
            $.ajax({
                type: 'GET',
                url: requestUrl,
                dataType: 'jsonp',
                success: function (root) {
                    var
                        feed = false,
                        postCount = 0,
                        startCount = 0;
                    if (root.hasOwnProperty('feed')) {
                        feed = root.feed;
                    } else {
                        return;
                    }
                    // Check if next posts are exists.
                    if (feed.hasOwnProperty('openSearch$totalResults') && feed.openSearch$totalResults.hasOwnProperty('$t')) {
                        postCount = parseInt(feed.openSearch$totalResults.$t, 10);
                        startCount = parseInt(util.getQueryString('start', 0), 10);
                        perPage = parseInt(perPage, 10);
                        if(!perPage) {
                            perPage = parseInt(util.getQueryString('max-results', 0), 10);
                        }
//console.info('postCount', postCount);
//console.info('startCount', startCount);
//console.info('perPage', perPage);
                        if ((startCount + perPage) > postCount) {
                            $('#blog-pager-older-link').find('.blog-pager-older-link').each(function (idx, elm) {
                                $(elm).hide();
                            });
                        }
                    }
                }
            });
        },
//        // Pager for index, archive page
//        pageListNavi = function (o) {
//            var pageNaviConf = {
//                    "perPage": 8,
//                    "numPages": 4,
//                    "firstText": " First ",
//                    "lastText": " Last ",
//                    "nextText": " &gt; ",
//                    "prevText": " &lt; "
//                },
//                m = location.href,
//                l = m.indexOf("/search/label/") !== -1,
//                a = l ? m.substr(m.indexOf("/search/label/") + 14, m.length) : '',
//                b = '',
//                g, k, e, n, h,
//                d, c, b, f,
//                show = function (f, e, a) {
//                    var d = Math.floor((pageNaviConf.numPages - 1) / 2),
//                        g = pageNaviConf.numPages - 1 - d,
//                        c = e - d,
//                        endPage;
//                    if (c <= 0) {
//                        c = 1;
//                    }
//                    endPage = e + g;
//                    if ((endPage - c) < pageNaviConf.numPages) {
//                        endPage = c + pageNaviConf.numPages - 1;
//                    }
//                    if (endPage > a) {
//                        endPage = a;
//                        c = a - pageNaviConf.numPages + 1;
//                    }
//                    if (c <= 0) {
//                        c = 1;
//                    }
//                    b = '<p class="pages padding">Pages ' + e + ' of ' + a + "</p> ";
//                    b += '<div class="btn-group btn-group-lg" role="group">';
//                    if (e > 1) {
//                        b += '<a class="btn btn-default" href="' + f[e - 1] + '">' + pageNaviConf.prevText + "</a>";
//                    }
//                    for (var i = c; i <= endPage; ++i) {
//                        if (i == e) {
//                            b += '<a class="btn btn-info current">' + i + "</a>";
//                        } else {
//                            b += '<a class="btn btn-default" href="' + f[i] + '">' + i + "</a>";
//                        }
//                    }
//                    if (e < a) {
//                        b += '<a class="btn btn-default" href="' + f[e + 1] + '">' + pageNaviConf.nextText + "</a>";
//                    }
//                    b += '</div>';
//
//                    b += '<div class="margin">';
//                    if (c > 1) {
//                        b += '<a class="btn btn-default btn-lg" href="' + f[1] + '">' + pageNaviConf.firstText + "</a>";
//                    }
//                    if (endPage < a) {
//                        b += ' <a class="btn btn-default btn-lg" href="' + f[a] + '">' + pageNaviConf.lastText + "</a>";
//                    }
//                    b += '</div>';
//
//                    $('.page-navi').html(b).removeClass('hidden');
//                };
//
//            if (o && o.feed && o.feed.entry && o.feed.entry.length) {
//                a = a.indexOf("?") !== -1 ? a.substr(0, a.indexOf("?")) : a;
//                g = l ? "/search/label/" + a + "?updated-max=" : "/search?updated-max=";
//                k = o.feed.entry.length;
//                e = Math.ceil(k / pageNaviConf.perPage);
//                if (e <= 1) {
//                    return;
//                }
//                n = 1;
//                h = [''];
//                l ? h.push("/search/label/" + a + "?max-results=" + pageNaviConf.perPage) : h.push("/?max-results=" + pageNaviConf.perPage);
//                for (d = 2; d <= e; d++) {
//                    c = (d - 1) * pageNaviConf.perPage - 1;
//                    b = o.feed.entry[c].published.$t;
//                    f = b.substring(0, 19) + b.substring(23, 29);
//                    //f = encodeURIComponent(f);
//                    //f = encodeURI(f);
//                    m = decodeURIComponent(m);
//                    if (m.indexOf(f) !== -1) {
//                        n = d;
//                    }
//                    f = encodeURIComponent(f);
//                    h.push(g + f + "&max-results=" + pageNaviConf.perPage);
//                }
//                show(h, n, e);
//            }
//        },
        setSinglePageNavi = function () {
            var
                $newerLink = $('a.next-link'),
                $olderLink = $('a.prev-link'),
                postTitle, postThumb,
                setSinglePageNaviData = function (pageContentTag, $link) {
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
                };
            if ($newerLink.length) {
                $.get($newerLink.attr('href'), function (data) {
                    setSinglePageNaviData(data, $newerLink);
                    trimThumb();
                    setTitleCR();
                }, "html");
            }
            if ($olderLink.length) {
                $.get($olderLink.attr('href'), function (data) {
                    setSinglePageNaviData(data, $olderLink);
                    trimThumb();
                    setTitleCR();
                }, "html");
            }
        },
//        // End Pager for index, archive page
//        setPageListNavi = function () {
//            var
//                $pageNavi = $('.page-navi'),
//                a, b, c, d,
//                //url = location.protocol + '//' + parser.hostname; //// @todo
//                url = SITE_URL; //// @debug
//            if ($pageNavi.length) {
//                b = location.href;
//                if (b.indexOf('?q=') !== -1 || b.indexOf('.html') !== -1) {
//                    return;
//                }
//                d = b.indexOf('/search/label/') + 14;
//                if (d !== 13) {
//                    c = b.indexOf("?"),
//                        a = (c === -1) ? b.substring(d) : b.substring(d, c);
//                    url += '/feeds/posts/summary/-/' + a + '?alt=json-in-script&max-results=99999';
//                } else {
//                    url += '/feeds/posts/summary?alt=json-in-script&max-results=99999';
//                }
//                //blogger API を実行する
//                $.ajax({
//                    type: 'GET',
//                    url: url,
//                    cache: false,
//                    data: {},
//                    dataType: 'jsonp'
//                }).done(function (json) {
//                    pageListNavi(json);
//                }).fail(function (error) {
//                    console.error('error', error);
//                });
//            }
//        },
        setRelatedPostNavi = function (labels) {
            var
            //url = location.protocol + '//' + parser.hostname, //// @todo
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
        },
        setFooterNavi = function () {
            var $menuItem = $('#header nav ul.nav li.menu-item').clone(),
                i, l;
            if ($menuItem.length) {
                for (i = 0, l = $menuItem.length; i < l; i++) {
                    $('#footer .footer-navi').append($menuItem[i]);
                }
            }
        },
        disableImageLink = function () {
            $('a').filter(function () {
                return /\.(jpe?g|png|gif)$/i.test(this.href);
            }).on('click', function (e) {
                e.preventDefault();
            });
        },
        // set ken zukan story view template
        setStory = function () {
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
        },
        setArchiveTitle = function() {
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
        },
        /////////////////////////////////////////////////////////////
        // 外部リンクに_blank, class, 属性付与
        // 2015/8/25追加
        // http://datsugoku.hatenablog.jp/entry/2014/05/11/205638
        setExternalLink = function () {
            $("a[href^=http]")
                .not('.external')
                .not('[href*="' + location.hostname + '"]')
                //.not( ":has(img)" )
                .attr({
                    target: "_blank",
                    rel: "nofollow"
                })
                .addClass("exLink");
        },
        /////////////////////////////////////////////////////////////
        // ページトップへ戻るボタンの表示ロジック
        // 2015/8/25追加
        setToTop = function () {
            var
                s = $(this).scrollTop(),
                m = 300,
                $scrollTop = $("#scroll-top");
            if ($scrollTop.length) {
                $(window).scroll(function () {
                    if (s > m) {
                        $scrollTop.fadeIn('slow');
                    } else if (s < m) {
                        $scrollTop.fadeOut('slow');
                    }
                });
            }
        },
        setAffiliateItemTag = function (itemData) {
            var
                $affiliateBoxTpl = $('#affiliate-box-tpl'),
                $affiliateBox = $('#affiliate-box'),
                source, template, values, html;
            if ($affiliateBoxTpl.length) {
                source = $affiliateBoxTpl.html();
                template = Handlebars.compile(source);
                html = template(itemData);
                if ($affiliateBox.length) {
                    $affiliateBox.html(html);
                }
            }
        },
        setAffiliateItems = function () {
            // Start of Set affiliate item list
            var
                MAIN_PLATFORM = 'amazon',
                $items = $('#item-data'),
                items, data,
                param = {
                    "title": "",
                    "items": []
                },
                i, l;

            // transform items data to template param.
            if ($items.length) {
                items = $items.html();
                if (items.length) {
                    try {
                        data = JSON.parse(items);
                        param.title = data.title;
                        for (i = 0, l = data.items.length; i < l; i++) {
                            param.items.push({
                                "thumb": data.items[i].platform[MAIN_PLATFORM].thumb,
                                "name": data.items[i].platform[MAIN_PLATFORM].name,
                                "url": {
                                    "amazon": data.items[i].platform.amazon.url,
                                    "rakuten": data.items[i].platform.rakuten.url
                                }
                            });
                        }
                        setAffiliateItemTag(param);
                    } catch (err) {
                        console.warn(err);
                    }
                }
            }
            // End of Set affiliate item list
        },
        setLuckyWord = function () {
            if (luckyWord.length && luckyIcon.length && $('.lucky-word-box').length) {
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
                    $('#lucky-icon-' + looper[i]).attr('src', icon[i]);
                    $('#lucky-word-' + looper[i]).attr('src', word[i].img).attr('alt', word[i].text);
                    lucky_word = word[i].text;
                    share_tag = '<a href="https://twitter.com/share" ';
                    share_tag += 'class="twitter-share-button" data-url="' + SHARE_URL + '" ';
                    share_tag += 'data-text="' + getTweetText(lucky_word) + '" ';
                    share_tag += 'data-via="' + SHARE_VIA + '" data-size="large" ';
                    share_tag += 'data-related="' + SHARE_VIA + '" ';
                    share_tag += 'data-hashtags="' + HUSH_TAG + '" ';
                    share_tag += 'data-dnt="false">Tweet</a>';
                    $('#lucky-word-share-' + looper[i]).replaceWith(share_tag);
                }
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

                var $open_lucky = $('#open-lucky');
                $open_lucky.prop('disabled', false);
                //$open_lucky.removeClass('disabled');
            }
        },
        setLazyLoad = function () {
            var $imgs = $('.post-body img'),
                $img, src, srcUrl = location.protocol + '//placeholdit.imgix.net/~text?txtsize=33&bg=ffb6c1&txtclr=000000&&txt=Cupcakemafa&w=350&h=150';
            $imgs.each(function (idx, elm) {
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
                            effect: "fadeIn", // じわじわっと表示させる
                        });
                    }
                }
            });
        },
        /**
         * Set headroom to navi menu
         * @depends headroom.js/jQuery.headroom.js
         * @link http://wicky.nillia.ms/headroom.js/
         **/
        setHeadRoom = function () {
            var $headRoom = $('#header-navi');
            if ($headRoom.length) {
                $headRoom.headroom();
            }
        },
        /**
         * Not work
         */
        setEqualHeight = function() {
            var
                ADJUST_BOTTOM=8,
                heightOne, heightTwo, $elmOne, $elmTwo,
                $listItem=$('.post-col.list-item'),
                i=0, l=$listItem.length;
            for(i=0;i<l;i+=2) {
                $elmOne=$($listItem.eq(i));
                $elmTwo=$($listItem.eq(i+1));
                heightOne = $elmOne.length ? parseInt($elmOne.height(), 10) : 0;
                heightTwo = $elmTwo.length ? parseInt($elmTwo.height(), 10) : 0;
                //console.info(heightOne + ':' + heightTwo);
                if(heightOne && heightTwo) {
                    if(heightOne > heightTwo) {
                        heightOne+=ADJUST_BOTTOM;
                        heightTwo=0;
                        $elmOne.height(heightOne);
                        $elmTwo.height(heightOne);
                    }
                    else if(heightTwo > heightOne) {
                        heightTwo+=ADJUST_BOTTOM;
                        heightOne=0;
                        $elmOne.height(heightTwo);
                        $elmTwo.height(heightTwo);
                    }
                    else {
                        heightOne+=ADJUST_BOTTOM;
                        heightTwo+=ADJUST_BOTTOM;
                        $elmOne.height(heightOne);
                        $elmTwo.height(heightTwo);
                    }
                }
            }
        },
        //
        // Main
        //
        main = function () {
            console.log = function () {};

            var
                $labels, $attrs, labels = [];

            setMetaTag();
            setAspect();
            setTitleCR();
            // set share buttons
            setSocialShareTag(pageUrl);

            if (pageType === 'index') {
                setPostSummary();
            } else if (pageType === 'item') {
                $('.post').addClass('item');
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

            if (pageType === 'index' || pageType === 'archive') {
                //setPageListNavi();

                // Equal height for each .post-col.list-item
                //setEqualHeight();

                // Set title
                setArchiveTitle();
                // For show/hide previous prev page in a pager.
                checkLastPage();
            } else if (pageType === 'item') {
                setSinglePageNavi();
            }

            $('body').addClass(pageType);

            if (pageType !== 'item' && pageType !== 'static_page') {
                $('.post-col').addClass('col col-md-6 col-sm-12 col-xs-12').removeClass('hide');;
            }
            $('#body').removeClass('hidden');
            $('#footer').removeClass('hidden');

            setHeadRoom();

            //setAffiliateButton();

            setLazyLoad();

            setLuckyWord();

            trimThumb();

            setFooterNavi();

            disableImageLink();

            setExternalLink();

            setStory();

            setAffiliateItems();
        };

    main();
})(jQuery);
