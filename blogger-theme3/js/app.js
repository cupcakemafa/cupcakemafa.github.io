$(function () {

    var pageType = $('#page-type').text(),
            pageUrl = $('#post-url').text(),
            setMetaTag = function () {
                var $metaTag = $('.meta-tag'),
                        $elm, $attrs, $attr, key, value,
                        metaTag = '',
                        i, l,
                        metaAttr;
                //console.log('$metaTag', $metaTag);
                $metaTag.each(function (index, elm) {
                    $elm = $(elm);
                    //console.log('$elm', $elm);
                    metaAttr = '';
                    $attrs = $elm.find('.attr');
                    for (i = 0, l = $attrs.length; i < l; i++) {
                        $attr = $attrs.eq(i);
                        key = $attr.data('key');
                        value = $attr.text();
                        //console.log('key', key);
                        //console.log('value', value);
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
                        //console.log('metaTag', metaTag);
                        $('head').find('meta').last().after(metaTag);
                    }
                });
            },
            // this method is called in ajax CB (setSinglePageNavi())
            trimThumb = function () {
                var $elm;
                $('img.thumb').each(function (idx, elm) {
                    //console.log('$elm', $elm);
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

                    //console.log('-------------------');
                    //console.log('id', id);
                    //console.log('$content', $content);
                    //console.log('$imgs', $imgs);
                    //console.log($('#footer-'+id));
                    //                $imgs.each(function (index, img, arr) {
                    //                    if (index > 0 && 5 > index) {
                    //                        //console.log('img', img);
                    //                        attr = $(img).attr('src');
                    //                        //clas='img-rounded';
                    //                        clas = 'img-circle';
                    //                        //console.log('attr', attr);
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
                    //console.log('elm', elm);
                    var
                            $elm = $(elm),
                            tag = '';

                    elm.classList.add('content');
                    tag += '<div class="aspect">';
                    tag += '<div class="content">';
                    tag += elm.outerHTML;
                    tag += '</div>';
                    tag += '</div>';
                    //console.log('tag', tag);
                    $elm.replaceWith(tag);
                });
            },
            // Pinterest シェア実行処理
            setPinterestShare = function () {
                var e = document.createElement('script');
                e.setAttribute('type', 'text/javascript');
                e.setAttribute('charset', 'UTF-8');
                e.setAttribute('src', 'http://assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
                document.body.appendChild(e);
            },
            // set share button tags
            setSocialShareTag = function (shareUrl) {
                var
                        tag = '',
                        $share = $('.post-social-share'),
                        via = $("meta[name='twitter:site']").attr('content'),
                        postTitle = $('title').text();
                
                if(via.length) {
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
                    tag += '<a class="btn-circle twitter" href="http://twitter.com/share?url=' + shareUrl + '&via=' + via + '" target="_blank">';
                    tag += '<i class="fa fa-twitter fa-2x"/></i>';
                    tag += '</a>';
                    tag += '</span>';

                    tag += '<span>';
                    tag += '<a class="btn-circle google-plus" href="https://plus.google.com/share?url=' + shareUrl + '" target="_blank">';
                    tag += '<i class="fa fa-google-plus fa-2x"/></i>';
                    tag += '</a>';
                    tag += '</span>';

                    tag += '<span>';
                    tag += '<a class="btn-circle pinterest" href="#" onclick="setPinterestShare()">';
                    tag += '<i class="fa fa-pinterest fa-2x"/></i>';
                    tag += '</a>';
                    tag += '</span>';

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
            // Pager for index, archive page
            pageListNavi = function (o) {
                var pageNaviConf = {
                    "perPage": 10,
                    "numPages": 4,
                    "firstText": " First ",
                    "lastText": " Last ",
                    "nextText": " &gt; ",
                    "prevText": " &lt; "
                },
                m = location.href,
                        l = m.indexOf("/search/label/") !== -1,
                        a = l ? m.substr(m.indexOf("/search/label/") + 14, m.length) : '',
                        b = '',
                        g, k, e, n, h,
                        d, c, b, f,
                        show = function (f, e, a) {
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
                            b = '<p class="pages padding">Pages ' + e + ' of ' + a + "</p> ";
                            b += '<div class="btn-group btn-group-lg" role="group">';
                            if (e > 1) {
                                b += '<a class="btn btn-default" href="' + f[e - 1] + '">' + pageNaviConf.prevText + "</a>";
                            }
                            for (var i = c; i <= endPage; ++i) {
                                console.log(i + '/' + e + '/' + a);
                                if (i == e) {
                                    b += '<a class="btn btn-info current">' + i + "</a>";
                                } else {
                                    b += '<a class="btn btn-default" href="' + f[i] + '">' + i + "</a>";
                                }
                            }
                            if (e < a) {
                                b += '<a class="btn btn-default" href="' + f[e + 1] + '">' + pageNaviConf.nextText + "</a>";
                            }
                            b += '</div>';

                            b += '<div class="margin">';
                            if (c > 1) {
                                b += '<a class="btn btn-default btn-lg" href="' + f[1] + '">' + pageNaviConf.firstText + "</a>";
                            }
                            if (endPage < a) {
                                b += ' <a class="btn btn-default btn-lg" href="' + f[a] + '">' + pageNaviConf.lastText + "</a>";
                            }
                            b += '</div>';

                            $('.page-navi').html(b).removeClass('hidden');
                        };

                if (o && o.feed && o.feed.entry && o.feed.entry.length) {
                    a = a.indexOf("?") !== -1 ? a.substr(0, a.indexOf("?")) : a;
                    g = l ? "/search/label/" + a + "?updated-max=" : "/search?updated-max=";
                    k = o.feed.entry.length;
                    e = Math.ceil(k / pageNaviConf.perPage);
                    console.log('e', e);
                    if (e <= 1) {
                        return;
                    }
                    n = 1;
                    h = [''];
                    l ? h.push("/search/label/" + a + "?max-results=" + pageNaviConf.perPage) : h.push("/?max-results=" + pageNaviConf.perPage);
                    for (d = 2; d <= e; d++) {
                        c = (d - 1) * pageNaviConf.perPage - 1;
                        b = o.feed.entry[c].published.$t;
                        f = b.substring(0, 19) + b.substring(23, 29);
                        //f = encodeURIComponent(f);
                        //f = encodeURI(f);
                        m = decodeURIComponent(m);
                        console.log(m + '/' + f);
                        if (m.indexOf(f) !== -1) {
                            console.log('d', d);
                            n = d;
                        }
                        f = encodeURIComponent(f);
                        h.push(g + f + "&max-results=" + pageNaviConf.perPage);
                    }
                    show(h, n, e);
                }
            },
            setSinglePageNavi = function () {
                var
                        $newerLink = $('a.next-link'),
                        $olderLink = $('a.prev-link'),
                        postTitle, postThumb,
                        setSinglePageNaviData = function (pageContentTag, $link) {
                            var
                                    $data = $(pageContentTag),
                                    $title, $imgs, $date, $linkElm,$linkTitle,$linkThumb,
                                    linkContent='', postTitle, postThumb, postDate;
                            //console.log('pageContentTag', pageContentTag);
                            if (pageContentTag && $data.length && $link.length) {
                                $title = $data.find('.post #post-title');
                                if ($title.length) {
                                    postTitle = $title.text();
                                    if (postTitle) {
                                        // publish date
                                        $date = $('.post #post-date');
                                        if ($date.length) {
                                            postDate = $date.html();
                                            if (postDate) {
                                                linkContent += '<p class="date">' + postDate + '</p>';
                                            }
                                        }
                                        linkContent += '<p class="title">' + postTitle + '</p>';

                                        // post thumb
                                        $imgs = $data.find('.post img');
                                        if ($imgs.length) {
                                            postThumb = $imgs.eq(0).attr('src');
                                        }

                                        for(var i=0,l=$link.length;i<l;i++) {
                                            $linkElm = $($link[i]);
                                            if($linkElm.hasClass('title')) {
                                                $linkTitle = $linkElm.find('.link-title');
                                                if($linkTitle.length) {
                                                    $linkTitle.eq(0).html(linkContent);
                                                }

                                            }
                                            else if($linkElm.hasClass('thumb')) {
                                                $linkThumb = $linkElm.find('.link-thumb');
                                                if($linkThumb.length) {
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
            // End Pager for index, archive page
            setPageListNavi = function () {
                var
                        $pageNavi = $('.page-navi'),
                        a, b, c, d,
                        //url = location.protocol + '//' + parser.hostname; //// @todo
                        url = location.protocol + '//cupcakemafa.com'; //// @debug
                //console.log('$pageNavi', $pageNavi);
                if ($pageNavi.length) {
                    b = location.href;
                    //console.log('b', b);
                    if (b.indexOf('?q=') !== -1 || b.indexOf('.html') !== -1) {
                        //console.log('return');
                        return;
                    }
                    d = b.indexOf('/search/label/') + 14;
                    if (d !== 13) {
                        c = b.indexOf("?"),
                                a = (c === -1) ? b.substring(d) : b.substring(d, c);
                        url += '/feeds/posts/summary/-/' + a + '?alt=json-in-script&max-results=99999';
                    } else {
                        url += '/feeds/posts/summary?alt=json-in-script&max-results=99999';
                    }
                    //console.log('url', url);
                    //blogger API を実行する
                    $.ajax({
                        type: 'GET',
                        url: url,
                        cache: false,
                        data: {},
                        dataType: 'jsonp'
                    }).done(function (json) {
                        //console.log('json', json);
                        pageListNavi(json);
                    }).fail(function (error) {
                        console.error('error', error);
                    });
                }
            },
            setRelatedPostNavi = function (labels) {
                //console.log('labels', labels);
                var
                        //url = location.protocol + '//' + parser.hostname, //// @todo
                        url = location.protocol + '//cupcakemafa.com', //// @debug
                        parser,
                        relation_count = 0,
                        relatedTitles = [],
                        relatedTitlesNum = 0,
                        relatedUrls = [],
                        thumburl = [],
                        $relatedPosts = $('#related-posts'),
                        contains_thumbs = function (a, e) {
                            for (var j = 0, m = a.length; j < m; j++)
                                if (a[j] === e)
                                    return true;
                            return false;
                        },
                        removeRelatedDuplicatesThumbs = function () {
                            var
                                    tmp = new Array(0),
                                    tmp2 = new Array(0),
                                    tmp3 = new Array(0);
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
                        },
                        printRelatedLabelsThumbs = function () {
                            var currentposturl = location.href,
                                    maxresults = 3,
                                    i, r, tag = '';

                            //console.log('currentposturl', currentposturl);
                            for (i = 0, l = relatedUrls.length; i < l; i++) {
                                if ((relatedUrls[i] === currentposturl) || (!(relatedTitles[i]))) {
                                    relatedUrls.splice(i, 1);
                                    relatedTitles.splice(i, 1);
                                    thumburl.splice(i, 1);
                                }
                            }
                            r = Math.floor((relatedTitles.length - 1) * Math.random());
                            i = 0;

                            if (relatedTitles.length > 0) {
                                tag += '<table>';
                                tag += '<tr>';
                                while (i < relatedTitles.length && i < 20 && i < maxresults) {
                                    tag += '<td>';
                                    tag += '<div>';
                                    tag += '<a href="' + relatedUrls[r] + '">';
                                    tag += '<img class="related_img" src="' + thumburl[r] + '"/>';
                                    tag += '</a>';
                                    tag += '</div>';

                                    tag += '<div>';
                                    tag += '<a href="' + relatedUrls[r] + '">';
                                    tag += relatedTitles[r];
                                    tag += '</a>';
                                    tag += '</div>';
                                    tag += '</td>';
                                    if (r < relatedTitles.length - 1) {
                                        r++;
                                    } else {
                                        r = 0;
                                    }
                                    i++;
                                }
                            }
                            tag += '</tr>';
                            tag += '</table>';
                            relatedUrls.splice(0, relatedUrls.length);
                            thumburl.splice(0, thumburl.length);
                            relatedTitles.splice(0, relatedTitles.length);
                            //console.log('tag', tag);
                            $relatedPosts.find('.content').eq(0).append(tag);
                        };

                if (labels && labels.length && $relatedPosts.length) {
                    parser = $('<a>', {
                        href: location.href
                    })[0];
                    for (var i = 0, l = labels.length; i < l; i++) {
                        url += '/feeds/posts/default/-/' + labels[i] + '?alt=json-in-script&max-results=8';
                        //console.log('url', url);
                        //blogger API を実行する
                        $.ajax({
                            type: 'GET',
                            url: url,
                            cache: false,
                            data: {},
                            dataType: 'jsonp'
                        }).done(function (json) {
                            //console.log('json', json);
                            var
                                    no_img_url = 'http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s300/picture_not_available.png',
                                    entry, s, a, b, c, d;

                            if (json && json.feed && json.feed.entry && json.feed.entry.length) {
                                for (var i = 0; i < json.feed.entry.length; i++) {
                                    entry = json.feed.entry[i];

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
                                        } else {
                                            thumburl[relatedTitlesNum] = no_img_url;
                                        }
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

                            removeRelatedDuplicatesThumbs();

                            relation_count++;
                            //console.log('relation_count', relation_count);
                            //console.log('labels.length', labels.length);
                            if (relation_count === labels.length) {
                                printRelatedLabelsThumbs();
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
                    console.log('season', season);
                    console.log('backUrl', backUrl);
                    $frame = $storyBox.find('.frame');
                    if ($frame.length) {
                        tag += '<div class="text-center row" style="margin-top:-15px;">';
                        console.log($frame);
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
                            console.log('more', more);
                            console.log('imgMain', imgMain);
                            console.log('caption', caption);
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
                            //console.log('scroll in');
                            $scrollTop.fadeIn('slow');
                        } else if (s < m) {
                            //console.log('scroll out');
                            $scrollTop.fadeOut('slow');
                        }
                    });
                }
            },
            setAffiliateItemTag = function (itemData) {
                console.log('itemData', itemData);
                var
                        $affiliateBoxTpl = $('#affiliate-box-tpl'),
                        $affiliateBox = $('#affiliate-box'),
                        source, template, values, html;
                if ($affiliateBoxTpl.length) {
                    source = $affiliateBoxTpl.html(),
                            template = Handlebars.compile(source),
                            html = template(itemData),
                            console.log('html', html);
                    if ($affiliateBox.length) {
                        $affiliateBox.html(html);
                    }
                }
            },
            setAffiliateItems = function () {
                // Start of Set affiliate item list
                var
                        MAIN_PLATFORM = 'amazon',
                        $items = $('#item-data'), items, data,
                        param = {
                            "title": "",
                            "items": []
                        }, i, l;

                // transform items data to template param.
                if ($items.length) {
                    items = $items.html();
                    if (items.length) {
                        try {
                            data = JSON.parse(items);
                            console.log('data', data);
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
                            console.log('param', param);
                            setAffiliateItemTag(param);
                        } catch (err) {
                            console.warn(err);
                        }
                    }
                }
                // End of Set affiliate item list
            },
            //
            // Main
            //
            main = function () {
                console.log = function () {};

                var
                        $labels, $attrs, labels = [];
                //console.log('pageType', pageType);
                //console.log('pageUrl', pageUrl);

                setMetaTag();
                setAspect();
                setTitleCR();

                if (pageType === 'index') {
                    setPostSummary();
                    // @todo set pager
                } else if (pageType === 'item') {
                    $('.post').addClass('item');
                    // set share buttons
                    setSocialShareTag(pageUrl);
                    // @todo set related-posts
                    $labels = $('.param.label');
                    //console.log($labels);
                    $labels.each(function (labelIdx, labelElm) {
                        $attrs = $(labelElm).find('.attr');
                        $attrs.each(function (attrIdx, attrElm) {
                            if ($(attrElm).attr('data-key') === 'content') {
                                if (attrElm.innerText) {
                                    labels.push(attrElm.innerText);
                                }
                            }
                            //console.log('attrIdx', attrIdx);
                            //console.log('labelIdx', labelIdx);
                            if (labelIdx === ($labels.length - 1)) {
                                if (attrIdx === ($attrs.length - 1)) {
                                    setRelatedPostNavi(labels);
                                }
                            }
                        });
                    });
                }

                if (pageType === 'index') {
                    setPageListNavi();
                } else {
                    setSinglePageNavi();
                }

                if (pageType !== 'item' && pageType !== 'static_page') {
                    $('.post-col').addClass('col col-md-6 col-sm-12 col-xs-12');
                }

                //setAffiliateButton();

                trimThumb();

                setFooterNavi();

                disableImageLink();

                setExternalLink();

                setStory();

                setAffiliateItems();
            };

    main();
});
