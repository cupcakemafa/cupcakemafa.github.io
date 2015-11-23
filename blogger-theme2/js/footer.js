"use strict";

function set_debug_mode(debugMode) {
    if (debugMode) {
        console.log('setDebugMode()');
    } else {
        console.log = function () {};
        console.info = function () {};
        console.warn = function () {};
        console.error = function () {};
        console.time = function () {};
        console.timeEnd = function () {};
    }
};

/////////////////////////////////////////////////////////////
// Start Related Post List
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();

function related_results_labels_thumbs(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        relatedTitles[relatedTitlesNum] = entry.title.$t;
        try {
            thumburl[relatedTitlesNum] = entry.gform_foot.url;
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a !== -1) && (b !== -1) && (c !== -1) && (d !== "")) {
                thumburl[relatedTitlesNum] = d;
            } else
                thumburl[relatedTitlesNum] = 'http://4.bp.blogspot.com/-fjds8kVeOqE/VlMP_JXdObI/AAAAAAAABQw/L4Q4imeQu0M/s1600/picture_not_available.png';
        }
        if (relatedTitles[relatedTitlesNum].length > 35)
            relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 35) + "...";
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel === 'alternate') {
                relatedUrls[relatedTitlesNum] = entry.link[k].href;
                relatedTitlesNum++;
            }
        }
    }
}

function removeRelatedDuplicates_thumbs() {
    var tmp = new Array(0);
    var tmp2 = new Array(0);
    var tmp3 = new Array(0);
    for (var i = 0, l = relatedUrls.length; i < l; i++) {
        if (!contains_thumbs(tmp, relatedUrls[i])) {
            tmp.length += 1;
            tmp[tmp.length - 1] = relatedUrls[i];
            tmp2.length += 1;
            tmp3.length += 1;
            tmp2[tmp2.length - 1] = relatedTitles[i];
            tmp3[tmp3.length - 1] = thumburl[i];
        }
    }
    relatedTitles = tmp2;
    relatedUrls = tmp;
    thumburl = tmp3;
}

function contains_thumbs(a, e) {
    for (var j = 0, m = a.length; j < m; j++)
        if (a[j] === e)
            return true;
    return false;
}

function printRelatedLabels_thumbs() {
    var currentposturl = location.href,
        relatedpoststitle = 'relatedpoststitle',
        maxresults = 3;

    console.log('currentposturl', currentposturl);
    for (var i = 0, l = relatedUrls.length; i < l; i++) {
        if ((relatedUrls[i] === currentposturl) || (!(relatedTitles[i]))) {
            relatedUrls.splice(i, 1);
            relatedTitles.splice(i, 1);
            thumburl.splice(i, 1);
            i--;
        }
    }
    var r = Math.floor((relatedTitles.length - 1) * Math.random());
    var i = 0;
    var tag = '';
    if (relatedTitles.length > 0) {
        //tag += '<h1>' + relatedpoststitle + '</h1>';
    }
    tag += '<div class="clearfix">';
    tag += '<ul class="list-inline">'
    while (i < relatedTitles.length && i < 20 && i < maxresults) {
        tag += '<li class="pull-left">';
        tag += '<a href="' + relatedUrls[r] + '">';
        tag += '<img class="related_img" src="' + thumburl[r] + '"/>';
        tag += '</a>';
        tag += '<div>';
        tag += '<a href="' + relatedUrls[r] + '">';
        tag += relatedTitles[r];
        tag += '</a>';
        tag += '</div>';
        tag += '</li>';
        if (r < relatedTitles.length - 1) {
            r++;
        } else {
            r = 0;
        }
        i++;
    }
    tag += '</ul>';
    tag += '</div>';
    relatedUrls.splice(0, relatedUrls.length);
    thumburl.splice(0, thumburl.length);
    relatedTitles.splice(0, relatedTitles.length);
    console.log('tag', tag);
    $('#related-posts').append(tag);
}
// 関連ポスト取得完了カウント
var relation_count = 0;

function getRelatedPosts(labels) {
    console.log('labels', labels);
    var url,
        host,
        parser = $('<a>', { href:location.href } )[0];
    for (var i = 0, l = labels.length; i < l; i++) {
        url = 'http://' + parser.hostname + '/feeds/posts/default/-/' + labels[i].name + '?alt=json-in-script&max-results=8';
        console.log('url', url);

        //blogger API を実行する
        $.ajax({
            type: "GET",
            url: url,
            cache: false,
            data: {},
            dataType: 'jsonp'
        }).done(function (json) {
            console.log('json', json);

            var no_img_url = 'http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s300/picture_not_available.png';
            for (var i = 0; i < json.feed.entry.length; i++) {
                var entry = json.feed.entry[i];

                relatedTitles[relatedTitlesNum] = entry.title.$t;

                try {
                    thumburl[relatedTitlesNum] = entry.gform_foot.url;
                } catch (error) {
                    s = entry.content.$t;
                    a = s.indexOf("<img");
                    b = s.indexOf("src=\"", a);
                    c = s.indexOf("\"", b + 5);
                    d = s.substr(b + 5, c - b - 5);
                    if ((a !== -1) && (b !== -1) && (c !== -1) && (d !== "")) {
                        thumburl[relatedTitlesNum] = d;
                    } else
                        thumburl[relatedTitlesNum] = no_img_url;
                }
                if (relatedTitles[relatedTitlesNum].length > 35)
                    relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 35) + "...";
                for (var k = 0; k < entry.link.length; k++) {
                    if (entry.link[k].rel === 'alternate') {
                        relatedUrls[relatedTitlesNum] = entry.link[k].href;
                        relatedTitlesNum++;
                    }
                }
            }

            removeRelatedDuplicates_thumbs();

            relation_count++;
            console.log('relation_count', relation_count);
            console.log('labels.length', labels.length);
            if (relation_count == labels.length) {
                printRelatedLabels_thumbs();
            }

        }).fail(function (error) {
            console.error('error', error);
        });

    }
}
// End Related Post List
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// Pager for index, archive page
var pageNaviConf = {
    "perPage": 5,
    "numPages": 9,
    "firstText": " First ",
    "lastText": " Last ",
    "nextText": " Next ",
    "prevText": " Prev "
};

function pageNavi(o) {
    var m = location.href,
        l = m.indexOf("/search/label/") !== -1,
        a = l ? m.substr(m.indexOf("/search/label/") + 14,
            m.length) : "";
    a = a.indexOf("?") !== -1 ? a.substr(0, a.indexOf("?")) : a;
    var g = l ? "/search/label/" + a + "?updated-max=" : "/search?updated-max=",
        k = o.feed.entry.length,
        e = Math.ceil(k / pageNaviConf.perPage);
    if (e <= 1) {
        return;
    }
    var n = 1,
        h = [""];
    l ? h.push("/search/label/" + a + "?max-results=" + pageNaviConf.perPage) : h.push("/?max-results=" + pageNaviConf.perPage);
    for (var d = 2; d <= e; d++) {
        var c = (d - 1) * pageNaviConf.perPage - 1,
            b = o.feed.entry[c].published.$t,
            f = b.substring(0, 19) + b.substring(23, 29);
        f = encodeURIComponent(f);
        if (m.indexOf(f) !== -1) {;
            n = d;
        }
        h.push(g + f + "&max-results=" + pageNaviConf.perPage);
    }
    pageNavi.show(h, n, e);
};
pageNavi.show = function (f, e, a) {
    var d = Math.floor((pageNaviConf.numPages - 1) / 2),
        g = pageNaviConf.numPages - 1 - d,
        c = e - d,
        endPage;
    if (c <= 0) {
        c = 1;
    }
    endPage = e + g;
    if ((endPage - c) < pageNaviConf.numPages) {
        endPage = c + pageNaviConf.numPages - 1;
    }
    if (endPage > a) {
        endPage = a;
        c = a - pageNaviConf.numPages + 1;
    }
    if (c <= 0) {
        c = 1;
    }
    var b = '<span class="pages">Pages ' + e + ' of ' + a + "</span> ";
    if (c > 1) {
        b += '<a href="' + f[1] + '">' + pageNaviConf.firstText + "</a>";
    }
    if (e > 1) {
        b += '<a href="' + f[e - 1] + '">' + pageNaviConf.prevText + "</a>";
    }
    for (var i = c; i <= endPage; ++i) {
        if (i === e) {
            b += '<span class="current">' + i + "</span>";
        } else {
            b += '<a href="' + f[i] + '">' + i + "</a>";
        }
    }
    if (e < a) {
        b += '<a href="' + f[e + 1] + '">' + pageNaviConf.nextText + "</a>";
    }
    if (endPage < a) {
        b += '<a href="' + f[a] + '">' + pageNaviConf.lastText + "</a>";
    }
    //    document.write( b );
    $('.pagenavi').html(b);
};
// End Pager for index, archive page
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// シェアボタンタグ取得
function getSocialShareTag(share_url) {
    var tag = '';
    tag += '<div class="share_this_content">';
    tag += '<span>';
    tag += '<a class="hs-icon" href="http://www.facebook.com/sharer.php?u=' + share_url + '" target="_blank">';
    tag += '<i class="fa fa-facebook fa-2x"/>';
    tag += '</a>';
    tag += '</span>';

    tag += '<span>';
    tag += '<a class="hs-icon" href="http://twitter.com/share?url=' + share_url + '" target="_blank">';
    tag += '<i class="fa fa-twitter fa-2x"/>';
    tag += '</a>';
    tag += '</span>';

    tag += '<span>';
    tag += '<a class="hs-icon" href="https://plus.google.com/share?url=' + share_url + '" target="_blank">';
    tag += '<i class="fa fa-google-plus fa-2x"/>';
    tag += '</a>';
    tag += '</span>';

    tag += '<span>';
    tag += '<a class="hs-icon" href="#" onclick="setPinterestShare()">';
    tag += '<i class="fa fa-pinterest fa-2x"/>';
    tag += '</a>';
    tag += '</span>';

    tag += '<span>';
    tag += '<a class="hs-icon" href="http://www.linkedin.com/shareArticle?mini=true&;url=' + share_url + '" target="_blank">';
    tag += '<i class="fa fa-linkedin fa-2x"/>';
    tag += '</a>';
    tag += '</span>';

    tag += '<span>';
    tag += '<a class="hs-icon" href="http://www.stumbleupon.com/submit?url=' + share_url + '" target="_blank">';
    tag += '<i class="fa fa-stumbleupon fa-2x"/>';
    tag += '</a>';
    tag += '</span>';

    tag += '<span>';
    tag += '<a class="hs-icon" href="http://www.tumblr.com/share/link?url=' + share_url + '" target="_blank">';
    tag += '<i class="fa fa-tumblr fa-2x"/>';
    tag += '</a>';
    tag += '</span>';

    tag += '</div>';
    return tag;
}
// Pinterest シェア実行処理
function setPinterestShare() {
    var e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'UTF-8');
    e.setAttribute('src', 'http://assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
    document.body.appendChild(e)
}
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// HTMLエスケープ処理
function stripHtmlTags(s, max) {
    return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0, max - 1).join(' ')
}

// トップページの投稿リスト用ポストタグ取得
function createSummaryAndThumb(post_id, title, post_url, date, label_list, comment) {
    var div = document.getElementById(post_id),
        img = div.getElementsByTagName('img'),
        content1 = div.innerHTML.replace(/<img.*?>/ig, '').replace(/<iframe.*?>/ig, ''),
        arr = content1.split(/<br\s*\/?>/),
        content = arr[0] + arr.slice(1, -1).join('<br>') + arr.slice(-1),
        thumb_tag = '',
        label_tag = '',
        tag = '';

    if (img.length === 1) {
        var imgurl = img[0].src;
        thumb_tag += '<div class="post-image text-center">';
        thumb_tag += '<a href="' + post_url + '">';
        thumb_tag += '<img class="top-thumb" src="' + imgurl + '">';
        thumb_tag += '</a>';
        thumb_tag += '</div>';
    } else if (img.length > 1) {
        thumb_tag = '<div class="colorboxEx">';
        for (var i = 0; i < img.length; i++) {
            thumb_tag += '<a href="' + post_url + '" rel="colorboxEx"><img src="' + img[i].src + '"></a>';
        }
        thumb_tag += '</div>';
    } else {
        var frame = div.getElementsByTagName("iframe");
        if (frame.length >= 1) {
            var iframe1 = frame[0].src;
            thumb_tag += '<div class="post-image">';
            thumb_tag += '<iframe width="100%" height="450" frameborder="no" src="' + iframe1 + '" scrolling="no"></iframe>';
            thumb_tag += '</div>';
        }
    }

    tag += '<div class="entry-content clearfix">';
    tag += thumb_tag;
    tag += getPostHeaderTag(post_url, title, date, label_list);
    tag += '<div class="intro-text">';
    tag += '<a href="' + post_url + '">';
    tag += stripHtmlTags(content, 35);
    tag += '</a>';
    tag += '</div>';
    tag += '</div>';

    div.innerHTML = tag;
    div.style.display = 'block';
    var elem = document.getElementsByClassName('separator');
    for (var i = 0; i < elem.length; i++) {
        elem[i].innerHTML = '';
    }
}

function getPostHeaderTag(post_url, title, date, label_list) {

    var header_tag = '';
    header_tag += '<header class="post-header text-center">';
    header_tag += '<div class="post-details">';
    header_tag += '<div class="post-date">';
    header_tag += '<i class="fa fa-clock-o"></i> ' + date;
    header_tag += '</div>';
    header_tag += '<hr class="embed quater-width" />';
    header_tag += '<div class="post-label clearfix">';
    if (label_list.length) {
        header_tag += '<ul class="labelhome list-inline">';
        for (var i = 0, l = label_list.length; i < l; i++) {
            var label = label_list[i];
            header_tag += '<li>';
            header_tag += '<a href="' + label.url + '?max-results=6&" rel="tag">';
            header_tag += label.name;
            header_tag += '</a>';
            header_tag += '</li>';
        }
        header_tag += '</ul>';
    }
    header_tag += '</div>';
    header_tag += '<h2 class="entry-title">';
    header_tag += '<strong>';
    header_tag += '<a href=' + post_url + '>' + title + '</a>';
    header_tag += '</strong>';
    header_tag += '</h2>';
    header_tag += '</div>';
    header_tag += '</header>';
    return header_tag;
}
/////////////////////////////////////////////////////////////
