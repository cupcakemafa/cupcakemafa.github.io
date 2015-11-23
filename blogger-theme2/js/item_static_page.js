function stripHtmlTags(s, max) {
    return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0, max - 1).join(' ')
}

function createSummaryAndThumb(postId, title, postUrl, date, comment, author, tag, authorUrl) {

    var div = document.getElementById(postId),
        img = div.getElementsByTagName('img'),
        content1 = div.innerHTML.replace(/<img.*?>/ig, '').replace(/<iframe.*?>/ig, ''),
        arr = content1.split(/<br\s*\/?>/),
        content = arr[0] + arr.slice(1, -1).join('<br>') + arr.slice(-1);

    if (img.length === 1) {
        var imgurl = img[0].src;
        var thumb = '<div class="post-image">' + '<a href="' + postUrl + '">' + '<img class="thumb" width="940" height="987" src="' + imgurl + '">' + '</a>' + '</div>';
        var summary1 = '<header class="post-header">'
            //+'<div class="labelhome">' + tag + '</div>'
            + '<h2 class="entry-title"><a href=' + postUrl + '>' + title + '</a></h2>' + '</header>' + '<div class="cen">' + '<div class="post-details">' + '<span class="post-da"> <i class="fa fa-clock-o"></i> ' + date + '</span>'
            //+'<span class="post-com"> <i class="fa fa-comments-o"></i> ' + comment + ' Comments</span>'
            + '</div>' + '</div>' + thumb + '<div class="entry-content clear">' + '<div class="intro-text">' + stripHtmlTags(content, 35) + ' </div>' + '<div class="post-footer">' + '<div class="pull-left">' + '<a class="read-more" href="' + postUrl + '">つづきを読む</a>' + '</div>' + '<div class="pull-right"></div>' + '</div>' + '</div>';
    } else {
        if (img.length > 1) {
            var thum = '';
            for (var i = 0; i < img.length; i++) {
                //thum = thum + '<a class="colorboxEx" href="' + postUrl + '"><img src="' + img[i].src + '"></a>';
                thum = thum + '<a class="" href="' + postUrl + '"><img src="' + img[i].src + '"></a>';
            }

            var thumb = '<div class="colorboxEx">' + thum + '</div>';
            var summary1 = '<header class="post-header">'
                //+ '<div class="labelhome">' + tag + '</div>' 
                + '<h2 class="entry-title">' + '<a href=' + postUrl + '>' + title + '</a>' + '</h2>' + '</header>' + '<div class="cen">' + '<div class="post-details">' + '<span class="post-da"> <i class="fa fa-clock-o"></i> ' + date + '</span>'
                //+ '<span class="post-com"> <i class="fa fa-comments-o"></i> ' + comment + ' Comments</span>' 
                + '</div>' + '</div>' + thumb + '<div class="entry-content clear">' + '<div class="intro-text">' + stripHtmlTags(content, 35) + ' </div>' + '<div class="post-footer">' + '<div class="pull-left">' + '<a class="read-more" href="' + postUrl + '">つづきを読む</a>' + '</div>' + '<div class="pull-right"></div>' + '</div>' + '</div>';
        } else {
            var frame = div.getElementsByTagName("iframe");
            if (frame.length >= 1) {
                var iframe1 = frame[0].src;
                var thumb = '<div class="post-image">' + '<iframe width="100%" height="450" frameborder="no" src="' + iframe1 + '" scrolling="no"></iframe>' + '</div>';
                var summary1 = '<header class="post-header">'
                    //+'<div class="labelhome">' + tag + '</div>'
                    + '<h2 class="entry-title"><a href=' + postUrl + '>' + title + '</a></h2>' + '</header>' + '<div class="cen">' + '<div class="post-details">' + '<span class="post-da"> <i class="fa fa-clock-o"></i> ' + date + '</span>'
                    //+'<span class="post-com"> <i class="fa fa-comments-o"></i> ' + comment + ' Comments</span>'
                    + '</div>' + '</div>' + thumb + '<div class="entry-content clear">' + '<div class="intro-text">' + stripHtmlTags(content, 35) + ' </div>' + '<div class="post-footer">' + '<div class="pull-left">' + '<a class="read-more" href="' + postUrl + '">つづきを読む</a>' + '</div>' + '<div class="pull-right"</div>' + '</div>' + '</div>';
            } else {
                var summary1 = '<header class="post-header">' + '<div class="labelhome">' + tag + '</div>' + '<h2 class="entry-title"><a href=' + postUrl + '>' + title + '</a></h2>' + '</header>' + '<div class="cen">' + '<div class="post-details">' + '<span class="post-da"> <i class="fa fa-clock-o"></i> ' + date + '</span>' + '<span class="post-com"> <i class="fa fa-comments-o"></i> ' + comment + ' Comments</span>' + '</div>' + '</div>' + '<div class="entry-content clear">' + '<div class="intro-text">' + stripHtmlTags(content, 35) + ' </div>' + '<div class="post-footer">' + '<div class="pull-left">' + '<a class="read-more" href="' + postUrl + '">つづきを読む</a>' + '</div>' + '<div class="pull-right"></div>' + '</div>' + '</div>';
            }
        }
    }

    div.innerHTML = summary1;
    div.style.display = "block";
    var elem = document.getElementsByClassName("separator");
    for (var i = 0; i < elem.length; i++) {
        elem[i].innerHTML = '';
    }
}
