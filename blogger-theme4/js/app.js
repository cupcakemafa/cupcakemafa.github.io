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

/**
 * Check if mobile or not for Blogger.com
 * global isMobile
 * @link https://github.com/kaimallea/isMobile
 */
function isMobileDevice() {
    var is_mobile = false;
    if(isMobile && isMobile.any) {
        is_mobile = true;
    }
    return is_mobile;
}

function setLazyLoad(_$) {
    var $imgs = _$('.post-body img'),
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
                    effect: 'fadeIn', // じわじわっと表示させる
                });
            }
        }
    });
}

function setLuckyWord(_$) {
console.log('setLuckyWord');
    if (luckyWord.length && luckyIcon.length && _$('.lucky-word-box').length) {

console.log('setLuckyWord:start');
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
            date,
            word_count = luckyWord.length - 1,
            icon_count = luckyIcon.length - 1,
            /**
             * 2つの日付から日数を計算
             * @param string startDate 2016/01/01
             * @param string endDate 2016/12/31
             **/
            countDate = function (startDateStr, endDateStr) {
console.log('countDate');
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
console.log('getTweetText');
                if (word) {
                    // %20: space
                    // %23: #
                    // %0a: CR
                    var
                        TEXT_PREFIX = ('本日のお言葉→「 #'),
                        TEXT_POSTFIX = (' 」') + decodeURIComponent('%0a'),
                        hushTag = (word.replace(/ /g, '_'));
                    return TEXT_PREFIX + hushTag + TEXT_POSTFIX + word + decodeURIComponent('%0a');
                }
            };

        // 当日の日付に対応したラッキーワードのインデックスを取得
        date = countDate();
        idx = parseInt(date % word_count,10);
        word.push(luckyWord[idx]);
        idx_b = word_count - idx;
        idx_b = idx_b != idx ? idx_b : 1;
        word.push(luckyWord[idx_b]);

        idx = parseInt(date % icon_count,10);
        icon.push(luckyIcon[idx]);
        idx_b = icon_count - idx;
        idx_b = idx_b != idx ? idx_b : 1;
        icon.push(luckyIcon[idx_b]);

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
console.log('setLuckyWord:end');
    }
}

function setMetaTag() {
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
}

function setRelatedPostNavi(labels) {
    var
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
            tag = '',
            i, l;

        if (postList.length > 0) {
            tag += '<ul class="related-post-list media-list no-padding">';
            for (i = 0, l = postList.length; i < l; i++) {
                if (showResults > i) {
                    tag += '<li class="media">';
                } else {
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
            if (postList.length > showResults) {
                tag += '<p><button class="btn btn-default btn-block related-more">More</button></p>';
            }
        }
        $relatedPosts.find('.content').eq(0).append(tag);
        $relatedPosts.removeClass('hidden');
        $('.related-more').on('click', function (e) {
            e.preventDefault();
            $(this).addClass('hidden');
            $('.related-post-list').each(function (idx, elm) {
                $(elm).find('.media.hidden').each(function (idx, hiddenElm) {
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
}

/////////////////////////////////////////////////////////////
// 外部リンクに_blank, class, 属性付与
// 2015/8/25追加
// http://datsugoku.hatenablog.jp/entry/2014/05/11/205638
function setExternalLink() {
    $("a[href^=http]")
        .not('.external')
        .not('[href*="' + location.hostname + '"]')
        //.not( ":has(img)" )
        .attr({
            target: "_blank",
            rel: "nofollow"
        })
        .addClass("exLink");
}

// set ken zukan story view template
function setStory() {
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
                    tag += '<img class="img-responsive" src="http://4.bp.blogspot.com/-vwQJvGoXZtg/ViTvzIau-pI/AAAAAAAAA-Q/6THLDuzPpOA/s640/ken-kobanashi-banner-1024px.png" />';
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
}

function setArchiveTitle() {
    var
        $archiveTitle = $('#archive-title'),
        fileInfo = location.pathname.split('/').pop().split('_'),
        year, month, date, title;
    if ($archiveTitle.length && fileInfo[3] === 'archive.html') {
        year = fileInfo[0].toString();
        month = parseInt(fileInfo[1], 10).toString();
        date = parseInt(fileInfo[2], 10).toString();
        if (year && month && date) {
            title = year + '/' + month;
        }
    } else {
        var
            yearQuery = getQueryString('updated-max', false),
            parser, date = new Date(),
            yearNow = date.getFullYear();
        if (yearQuery) {
            parser = yearQuery.split('-');
            if (parser.length) {
                year = parser[0];
                if (year > yearNow) {
                    year = yearNow;
                }
                title = year + '年'
            }
        }
    }

    if (title) {
        $archiveTitle.find('.title').eq(0).html(title);
        $archiveTitle.removeClass('hidden');
    }
}

// this method is called in setSinglePageNavi() function.
function trimThumb() {
    var $elm;
    $('img.thumb').each(function (idx, elm) {
        $elm = $(elm);
        $elm.height($elm.width());
    });
}

function setSinglePageNavi() {

    // AJAX callback for setting navi content.
    function setSinglePageNaviData(pageContentTag, $link) {
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
    }

    var
        $newerLink = $('a.next-link'),
        $olderLink = $('a.prev-link'),
        postTitle, postThumb;

    if ($newerLink.length) {
        $newerLink.each(function (idx, elm) {
            $.get(elm.href, function (data) {
                setSinglePageNaviData(data, $(elm).eq(0));
                trimThumb();
            }, "html");
        });
    }
    if ($olderLink.length) {
        $olderLink.each(function (idx, elm) {
            $.get(elm.href, function (data) {
                setSinglePageNaviData(data, $(elm).eq(0));
                trimThumb();
            }, "html");
        });
    }
}

function setAspect() {
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
}

/**
 * Get value from query string
 * @link http://vba-geek.jp/blog-entry-183.html
 * @link http://www.bloggingdeveloper.com/post/JavaScript-QueryString-ParseGet-QueryString-with-Client-Side-JavaScript.aspx
 */
function getQueryString (key, default_) {
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

!(function ($) {

    var
        SITE_URL = location.protocol + '//www.cupcakemafa.com',
        pageType = $('body').attr('data-page-type'),
        pageUrl = $('#post-url').text(),
        $labels, labels, $attrs;

    console.log('pageType', pageType);

    setExternalLink();

    if (pageType === 'item' || pageType === 'static_page') {

        setMetaTag();
        setStory();
        setSinglePageNavi();
        setAspect();
        setLazyLoad($);

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
    } else {

        if (pageType === 'home') {
            $('lucky-word-panel').removeClass('hidden').show();
            $('top-header').removeClass('hidden').show();
            setLuckyWord($);
        }
        else {
            $('lucky-word-panel').addClass('hidden');
            $('top-header').addClass('hidden');
        }

        setArchiveTitle();

        if(!isMobileDevice()) {
            // Equal height
            var
                ADJUST_BOTTOM=8,
                heightOne, heightTwo, heightThree, $elmOne, $elmTwo, $elmThree,
                $listItem=$('.post-body'),
                $popItem=$('#popular-post-list').find('.col-md-4'),
                i, l=$listItem.length,
                theHeight;
            for(i=0;i<l;i+=3) {
                $elmOne=$($listItem.eq(i));
                $elmTwo=$($listItem.eq(i+1));
                $elmThree=$($listItem.eq(i+2));
                if($elmOne && $elmTwo && $elmThree) {
                    heightOne = $elmOne.length ? parseInt($elmOne.height(), 10) : 0;
                    heightTwo = $elmTwo.length ? parseInt($elmTwo.height(), 10) : 0;
                    heightThree = $elmThree.length ? parseInt($elmThree.height(), 10) : 0;
                    if(heightOne && heightTwo && heightThree) {
                        var theHeight = Math.max(heightOne, heightTwo, heightThree)+ADJUST_BOTTOM;
                        $elmOne.height(theHeight);
                        $elmTwo.height(theHeight);
                        $elmThree.height(theHeight);
                    }
                    else {
                        heightOne = heightTwo = heightThree = 0;
                    }
                }
            }
        }
    }

//    if(!isMobileDevice()) {
//        var
//            ADJUST_BOTTOM=8,
//            heightOne, heightTwo, heightThree, $elmOne, $elmTwo, $elmThree,
//            $listItem=$('.post-body'),
//            $popItem=$('#popular-post-list').find('.col-md-4'),
//            i, l=$listItem.length,
//            theHeight;
//        for(i=0,l=$popItem.length;i<l;i+=3) {
//            $elmOne=$($popItem.eq(i));
//            $elmTwo=$($popItem.eq(i+1));
//            $elmThree=$($popItem.eq(i+2));
//            if($elmOne && $elmTwo && $elmThree) {
//                heightOne = $elmOne.length ? parseInt($elmOne.height(), 10) : 0;
//                heightTwo = $elmTwo.length ? parseInt($elmTwo.height(), 10) : 0;
//                heightThree = $elmThree.length ? parseInt($elmThree.height(), 10) : 0;
//                if(heightOne && heightTwo && heightThree) {
//                    theHeight = Math.max(heightOne, heightTwo, heightThree)+ADJUST_BOTTOM;
//                    $elmOne.height(theHeight);
//                    $elmTwo.height(theHeight);
//                    $elmThree.height(theHeight);
//                }
//                else {
//                    heightOne = heightTwo = heightThree = 0;
//                }
//            }
//        }
//    }

})(jQuery);
