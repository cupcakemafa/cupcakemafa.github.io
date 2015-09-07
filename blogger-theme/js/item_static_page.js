var classicMode = false;
var summary = 20;
var indent = 3;
imgr = new Array();
imgr[0] = "http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif";
showRandomImg = true;
aBold = true;
summaryPost = 170;
summaryTitle = 25;
numposts1 = 6;
numposts2 = 8;
var classicMode = false;
var summary = 50;
var indent = 3;
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();

function stripHtmlTags( s, max ) {
    return s.replace( /<.*?>/ig, '' ).split( /\s+/ ).slice( 0, max - 1 ).join( ' ' )
}

function createSummaryAndThumb( pID, title, url, date, comment, author, tag, authurl ) {
    var posturl = url;
    var authorurl = authurl;
    var title = title;
    var date = date;
    var comment = comment;
    var tag = tag;
    var div = document.getElementById( pID );
    var img = div.getElementsByTagName( "img" );

    var content1 = div.innerHTML.replace( /<img.*?>/ig, '' ).replace( /<iframe.*?>/ig, '' );
    var arr = content1.split( /<br\s*\/?>/ );
    var content = arr[0] + arr.slice( 1, - 1 ).join( '<br>' ) + arr.slice( - 1 );


    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var n = month[date.split( '/' )[0]];
    var date1 = date.split( '/' )[1];
    var year = date.split( '/' )[2];
    var thumb1;

    if ( img.length == 1 ) {
        var imgurl = img[0].src;
        var thumb = '<div class="post-image"><a href="' + posturl + '"><img class="thumb" width="940" height="987" src="' + imgurl + '"></a></div>';
        var summary1 = '<header class="post-header"><div class="labelhome">' + tag + '</div><h2 class="entry-title"><a href=' + posturl + '>' + title + '</a></h2></header><div class="cen"><div class="post-details"><span class="auth"> <i class="fa fa-user"></i> &nbsp;&nbsp;<a href=' + authorurl + '>' + author + '</a></span> <span class="post-da"> <i class="fa fa-clock-o"></i> &nbsp;&nbsp;' + date + '</span><span class="post-com"> <i class="fa fa-comments-o"></i> &nbsp;&nbsp; ' + comment + ' Comments</span></div></div>' + thumb + '<div class="entry-content clear"><div class="intro-text">' + stripHtmlTags( content, 35 ) + ' </div><div class="post-footer"><div class="pull-left"><a class="read-more" href="' + posturl + '">つづきを読む</a></div><div class="pull-right"></div></div></div>';
    }
    else {
        if ( img.length > 1 ) {


            var thum = '';
            for ( var i = 0; i < img.length; i ++ ) {

                thum = thum + '<a class="colorboxEx" href="' + posturl + '"><img src="' + img[i].src + '"></a>';
            }

            var thumb = '<div class="colorboxEx">' + thum + '</div>';
            var summary1 = '<header class="post-header">' 
                + '<div class="labelhome">' + tag + '</div>' 
                + '<h2 class="entry-title">' 
                + '<a href=' + posturl + '>' + title + '</a>' 
                + '</h2>' 
                + '</header>' 
                + '<div class="cen">' 
                + '<div class="post-details">' 
                + '<span class="post-da"> <i class="fa fa-clock-o"></i> ' + date + '</span>' 
                //+ '<span class="post-com"> <i class="fa fa-comments-o"></i> ' + comment + ' Comments</span>' 
                + '</div>'
                + '</div>' 
                + thumb 
                + '<div class="entry-content clear">' 
                //+ '<div class="intro-text">' + stripHtmlTags( content, 35 ) + ' </div>' 
                + '<div class="intro-text"></div>' 
                + '<div class="post-footer">' 
                + '<div class="pull-left">' 
                + '<a class="read-more" href="' + posturl + '">つづきを読む</a>' 
                + '</div>' 
                + '<div class="pull-right"></div>' 
                + '</div>' 
                + '</div>';
        }
        else {
            var frame = div.getElementsByTagName( "iframe" );
            if ( frame.length >= 1 ) {
                var iframe1 = frame[0].src;
                var thumb = '<div class="post-image"><iframe width="100%" height="450" frameborder="no" src="' + iframe1 + '" scrolling="no"></iframe></div>';
                var summary1 = '<header class="post-header"><div class="labelhome">' + tag + '</div><h2 class="entry-title"><a href=' + posturl + '>' + title + '</a></h2></header><div class="cen"><div class="post-details"><!--<span class="auth"> <i class="fa fa-user"></i> &nbsp;&nbsp;<a href=' + authorurl + '>' + author + '</a></span> --><span class="post-da"> <i class="fa fa-clock-o"></i> &nbsp;&nbsp;' + date + '</span><span class="post-com"> <i class="fa fa-comments-o"></i> &nbsp;&nbsp; ' + comment + ' Comments</span></div></div>' + thumb + '<div class="entry-content clear"><div class="intro-text">' + stripHtmlTags( content, 35 ) + ' </div><div class="post-footer"><div class="pull-left"><a class="read-more" href="' + posturl + '">つづきを読む</a></div><div class="pull-right"</div></div></div>';
            }
            else {
                var summary1 = '<header class="post-header"><div class="labelhome">' + tag + '</div><h2 class="entry-title"><a href=' + posturl + '>' + title + '</a></h2></header><div class="cen"><div class="post-details"><!--<span class="auth"> <i class="fa fa-user"></i> &nbsp;&nbsp;<a href=' + authorurl + '>' + author + '</a></span> --><span class="post-da"> <i class="fa fa-clock-o"></i> &nbsp;&nbsp;' + date + '</span><span class="post-com">  <i class="fa fa-comments-o"></i>&nbsp;&nbsp; ' + comment + ' Comments</span></div></div><div class="entry-content clear"><div class="intro-text">' + stripHtmlTags( content, 35 ) + ' </div><div class="post-footer"><div class="pull-left"><a class="read-more" href="' + posturl + '">つづきを読む</a></div><div class="pull-right"></div></div></div>';
            }
        }
    }

    div.innerHTML = summary1;
    div.style.display = "block";
    var elem = document.getElementsByClassName( "separator" );
    for ( var i = 0; i < elem.length; i ++ ) {
        elem[i].innerHTML = '';
    }

}