$( function ( ) {
    $( "html" ).niceScroll( );
    $( ".set-1" ).mtabs( );
    //Menu To Drop Down Started
    selectnav( 'navigation', {
        label: 'Select Here ',
        nested: true,
        autoselect: false,
        indent: '-'
    } );
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = '//pagead2.googlesyndication.com/pagead/js/google_top_exp.js';
    var head = document.getElementsByTagName( 'head' )[0];
    if ( head ) {
        head.appendChild( script );
    }

    $( window ).bind( "resize orientationchange", function ( ) {
        ww = document.body.clientWidth;
        adjustMenu( );
    } );

    $( '#back-top' ).on( 'click', function ( ) {
        $( '.st-content' ).animate( { scrollTop: 0 }, 'slow' );
        $( 'html, body' ).animate( { scrollTop: 0 }, 'slow' );
        return false;
    } );


    $( ".nav li a" ).each( function ( ) {
        if ( $( this ).next( ).length > 0 ) {
            $( this ).addClass( "parent" );
        }
    } );

    $( ".toggleMenu" ).click( function ( e ) {
        e.preventDefault( );
        $( this ).toggleClass( "active" );
        $( ".nav" ).toggle( );
    } );

    adjustMenu( );

    // change the dimension variable below to be the pixel size you want
    var dimension = 300;
    // this identifies the PopularPosts1 div element, finds each image in it, and resizes it
    $( '#PopularPosts1' ).find( 'img' ).each( function ( n, image ) {
        var image = $( image );
        image.attr( { src: image.attr( 'src' ).replace( /s\B\d{2,4}/, 's' + dimension ) } );
        image.attr( 'width', dimension );
        image.attr( 'height', dimension );
    } );

    new UISearch( document.getElementById( 'sb-search' ) );
    $( ".colorboxEx" ).justifiedGallery( { rowHeight: 165,
        maxRowHeight: 0,
        margins: 5,
        rel: 'colorboxEx',
        lastRow: 'nojustify',
        fixedHeight: false,
        captions: true,
        randomize: false
    } ).magnificPopup( {
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't forget to change the duration also in CSS
            opener: function ( element ) {
                return element.find( 'img' );
            }
        }
    } );
    $( '#navigation' ).slicknav( {
        prependTo: '.main-content-wrapper'
    } );

    //外部リンクに_blank, class, 属性付与
    //2015/8/25追加
    //http://datsugoku.hatenablog.jp/entry/2014/05/11/205638
    $( "a[href^=http]" )
            .not( '[href*="' + location.hostname + '"]' )
            //.not( ":has(img)" )
            .attr( { target: "_blank", rel: "nofollow" } )
            .addClass( "exLink" );

    // ページトップへ戻るボタンの表示ロジック
    //2015/8/25追加
    $( window ).scroll( function ( ) {
        var s = $( this ).scrollTop( );
        var m = 300;
        if ( s > m ) {
            $( "#scroll-top" ).fadeIn( 'slow' );
        } else if ( s < m ) {
            $( "#scroll-top" ).fadeOut( 'slow' );
        }
    } );
    
    // lightbox2 用処理
    // ページ内のすべてのaタグに繰り返し処理
    $('.post-entry').find("a[href$='.jpg']").each(function() {
        //aタグ内にimgタグがあるか？
        var $this = $(this);
        var href = $this.attr("href");
        
        if( $this.find('img').length && href.match(/(\.)(gif|jpg|jpeg|png)/g)) {
            $this.attr( "data-lightbox", "image-1" ); // 画像リンクの場合だけ属性を追加する
        }
    });

} );
