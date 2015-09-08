selectnav = function ( ) {
    return function ( p, q ) {
        var a, h = function ( b ) {
            var c;
            b || ( b = window.event );
            b.target ? c = b.target : b.srcElement && ( c = b.srcElement );
            3 === c.nodeType && ( c = c.parentNode );
            c.value && ( window.location.href = c.value );
        },
            k = function ( b ) {
                b = b.nodeName.toLowerCase( );
                return"ul" === b || "ol" === b;
            },
            l = function ( b ) {
                for ( var c = 1; document.getElementById( "selectnav" + c ); c ++ ) {
                }
                return b ? "selectnav" + c : "selectnav" + ( c - 1 );
            },
            n = function ( b ) {
                g ++;
                var c = b.children.length,
                    a = "",
                    d = "",
                    f = g - 1;
                if ( c ) {
                    if ( f ) {
                        for ( ; f --; ) {
                            d += r;
                        }
                        d += " ";
                    }
                    for ( f = 0; f < c; f ++ ) {
                        var e = b.children[f].children[0];
                        if ( "undefined" !== typeof e ) {
                            var h = e.innerText || e.textContent, i = "";
                            j && ( i = - 1 !== e.className.search( j ) || - 1 !== e.parentElement.className.search( j ) ? m : "" );
                            s && ! i && ( i = e.href === document.URL ? m : "" );
                            a += '<option value="' + e.href + '" ' + i + ">" + d + h + "</option>";
                            t && ( e = b.children[f].children[1] ) && k( e ) && ( a += n( e ) );
                        }
                    }
                    1 === g && o && ( a = '<option value="">' + o + "</option>" + a );
                    1 === g && ( a = '<select class="selectnav" id="' + l( ! 0 ) + '">' + a + "</select>" );
                    g --;
                    return a;
                }
            };
        if ( ( a === document.getElementById( p ) ) && k( a ) ) {
            document.documentElement.className += " js";
            var d = q || { }, j = d.activeclass || "active1",
                s = "boolean" === typeof d.autoselect ? d.autoselect : ! 0,
                t = "boolean" === typeof d.nested ? d.nested : ! 0,
                r = d.indent || "\u2192",
                o = d.label || "- Navigation -", g = 0, m = " selected ";
            a.insertAdjacentHTML( "afterend", n( a ) );
            a = document.getElementById( l( ) );
            a.addEventListener && a.addEventListener( "change", h );
            a.attachEvent && a.attachEvent( "onchange", h );
        }
    };
}( );

var relatedTitles = new Array( );
var relatedTitlesNum = 0;
var relatedUrls = new Array( );
var thumburl = new Array( );
function related_results_labels_thumbs( json ) {
    for ( var i = 0; i < json.feed.entry.length; i ++ ) {
        var entry = json.feed.entry[i];
        relatedTitles[relatedTitlesNum] = entry.title.$t;
        try {
            thumburl[relatedTitlesNum] = entry.gform_foot.url;
        } catch ( error ) {
            s = entry.content.$t;
            a = s.indexOf( "<img" );
            b = s.indexOf( "src=\"", a );
            c = s.indexOf( "\"", b + 5 );
            d = s.substr( b + 5, c - b - 5 );
            if ( ( a !== - 1 ) && ( b !== - 1 ) && ( c !== - 1 ) && ( d !== "" ) ) {
                thumburl[relatedTitlesNum] = d;
            } else
                thumburl[relatedTitlesNum] = 'http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png';
        }
        if ( relatedTitles[relatedTitlesNum].length > 35 )
            relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring( 0, 35 ) + "...";
        for ( var k = 0; k < entry.link.length; k ++ ) {
            if ( entry.link[k].rel === 'alternate' ) {
                relatedUrls[relatedTitlesNum] = entry.link[k].href;
                relatedTitlesNum ++;
            }
        }
    }
}

function removeRelatedDuplicates_thumbs( ) {
    var tmp = new Array( 0 );
    var tmp2 = new Array( 0 );
    var tmp3 = new Array( 0 );
    for ( var i = 0; i < relatedUrls.length; i ++ ) {
        if ( ! contains_thumbs( tmp, relatedUrls[i] ) ) {
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
function contains_thumbs( a, e ) {
    for ( var j = 0; j < a.length; j++ )
        if ( a[j] === e )
            return true;
    return false;
}

function printRelatedLabels_thumbs( ) {
    for ( var i = 0; i < relatedUrls.length; i ++ ) {
        if ( ( relatedUrls[i] === currentposturl ) || ( ! ( relatedTitles[i] ) ) ) {
            relatedUrls.splice( i, 1 );
            relatedTitles.splice( i, 1 );
            thumburl.splice( i, 1 );
            i --;
        }
    }
    var r = Math.floor( ( relatedTitles.length - 1 ) * Math.random( ) );
    var i = 0;
    if ( relatedTitles.length > 0 )
        document.write( '<h1>' + relatedpoststitle + '</h1>' );
    document.write( '<div style="clear: both;"/>' );
    while ( i < relatedTitles.length && i < 20 && i < maxresults ) {
        document.write( '<a style="text-decoration:none;margin:0 2px 0px 0;float:left;' );
        if ( i !== 0 )
            document.write( '"' );
        else
            document.write( '"' );
        document.write( ' href="' + relatedUrls[r] + '"><img class="related_img" src="' + thumburl[r] + '"/><br/><div class="related_title">' + relatedTitles[r] + '</div></a>' );
        if ( r < relatedTitles.length - 1 ) {
            r ++;
        } else {
            r = 0;
        }
        i ++;
    }
    document.write( '</div>' );
    relatedUrls.splice( 0, relatedUrls.length );
    thumburl.splice( 0, thumburl.length );
    relatedTitles.splice( 0, relatedTitles.length );
}

//クレジット表示確認処理
//var _0x5ef5 = [
//    "\x6F\x6E\x6C\x6F\x61\x64",
//    "\x62\x6C\x6F\x67\x67",
//    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
//    "\x68\x72\x65\x66",
//    "\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
//    "\x68\x74\x74\x70\x3A\x2F\x2F\x6F\x64\x64\x74\x68\x65\x6D\x65\x73\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D",
//    "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6F\x64\x64\x74\x68\x65\x6D\x65\x73\x2E\x63\x6F\x6D\x2F",
//    "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65",
//    "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
//    "\x4F\x64\x64\x54\x68\x65\x6D\x65\x73",
//    "\x72\x65\x6C",
//    "\x64\x6F\x66\x6F\x6C\x6C\x6F\x77" ];
//window[_0x5ef5[0]] = function () {
//    var _0x2b7dx1 = document[_0x5ef5[2]]( _0x5ef5[1] );
//    if ( _0x2b7dx1 === null ) {
//        window[_0x5ef5[4]][_0x5ef5[3]] = _0x5ef5[5];
//    }
//    _0x2b7dx1[_0x5ef5[7]]( _0x5ef5[3], _0x5ef5[6] );
//    _0x2b7dx1[_0x5ef5[8]] = _0x5ef5[9];
//    _0x2b7dx1[_0x5ef5[7]]( _0x5ef5[10], _0x5ef5[11] );
//};

//クレジット表示確認処理
//var _0xc1e6 = [
//    "\x6F\x6E\x6C\x6F\x61\x64",
//    "\x62\x6C\x6F\x67\x67",
//    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
//    "\x68\x72\x65\x66",
//    "\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
//    "\x68\x74\x74\x70\x3A\x2F\x2F\x6F\x64\x64\x74\x68\x65\x6D\x65\x73\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D",
//    "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6F\x64\x64\x74\x68\x65\x6D\x65\x73\x2E\x63\x6F\x6D\x2F",
//    "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
//    "\x4F\x64\x64\x54\x68\x65\x6D\x65\x73",
//    "\x72\x65\x6C",
//    "\x64\x6F\x66\x6F\x6C\x6C\x6F\x77",
//    "\x73\x74\x79\x6C\x65",
//    "\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B"
//];
//window[_0xc1e6[0]] = function ( ) {
//    var _0xe840x1 = document[_0xc1e6[2]]( _0xc1e6[1] );
//    if ( _0xe840x1 === null ) {
//        window[_0xc1e6[4]][_0xc1e6[3]] = _0xc1e6[5];
//    }
//    ;
//    _0xe840x1[_0xc1e6[7]]( _0xc1e6[3], _0xc1e6[6] );
//    _0xe840x1[_0xc1e6[8]] = _0xc1e6[9];
//    _0xe840x1[_0xc1e6[7]]( _0xc1e6[10], _0xc1e6[11] );
//    _0xe840x1[_0xc1e6[7]]( _0xc1e6[12], _0xc1e6[13] );
//};

function authorshow( data ) {
    for ( var i = 0; i < 1; i ++ ) {
        var entry = data.feed.entry[i];
        var avtr = entry.author[0].gd$image.src;
        document.write( '<img width="96" height="96" src="' + avtr + '"/>' );
    }
}

function setAttributeOnload( object, attribute, val ) {
    if ( window.addEventListener ) {
        window.addEventListener( 'load',
            function () {
                object[attribute] = val;
            }, false );
    } else {
        window.attachEvent( 'onload', function () {
            object[attribute] = val;
        } );
    }
}

/*! 
 * Matt Tabs v2.2.1 | https://github.com/matthewhall/matt-tabs 
 */
! function ( a ) {
    "use strict";
    var b = function ( b, c ) {
        var d = this;
        d.element = b, d.$element = a( b ), d.tabs = d.$element.children( ), d.options = a.extend( { }, a.fn.mtabs.defaults, c ), d.current_tab = 0, d.init( )
    };
    b.prototype = { init: function ( ) {
            var a = this;
            a.tabs.length && ( a.build( ), a.buildTabMenu( ) )
        }, build: function ( ) {
            var b = this, c = b.options, d = c.tab_text_el, e = c.container_class;
            b.tab_names = [ ], b.$wrapper = b.$element.wrapInner( '<div class="' + e + '" />' ).find( "." + e ), b.tabs.wrapAll( '<div class="' + c.tabs_container_class + '" />' ), b.tabs.each( function ( c, e ) {
                var f, g = a( e ), h = d;
                f = g.find( h ).filter( ":first" ).hide( ).text( ), b.tab_names.push( f )
            } ), a.isFunction( c.onReady ) && c.onReady.call( b.element )
        }, buildTabMenu: function ( ) {
            for ( var b, c = this, d = c.options, e = d.tabsmenu_el, f = c.tab_names, g = "<" + e + ' class="' + d.tabsmenu_class + '">', h = 0, i = f.length, j = function ( ) {
                var a = arguments;
                return d.tmpl.tabsmenu_tab.replace( /\{[0-9]\}/g, function ( b ) {
                    var c = Number( b.replace( /\D/g, "" ) );
                    return a[c] || ""
                } )
            }; i > h; h++ )
                g += j( h + 1, f[h] );
            g += "</" + e + ">", c.$tabs_menu = a( g ).prependTo( c.$wrapper ), b = c.$tabs_menu.find( ":first" )[0].nodeName.toLowerCase( ), c.$tabs_menu.on( "click", b, function ( b ) {
                var d = a( this ), e = d.index( );
                c.show( e ), b.preventDefault( )
            } ).find( ":first" ).trigger( "click" )
        }, show: function ( b ) {
            var c = this, d = c.options, e = d.active_tab_class;
            c.tabs.hide( ).filter( ":eq(" + b + ")" ).show( ), c.$tabs_menu.children( ).removeClass( e ).filter( ":eq(" + b + ")" ).addClass( e ), a.isFunction( d.onTabSelect ) && b !== c.current_tab && d.onTabSelect.call( c.element, b ), c.current_tab = b
        }, destroy: function ( ) {
            var a = this, b = a.options.tab_text_el;
            a.$tabs_menu.remove( ), a.tabs.unwrap( ).unwrap( ), a.tabs.removeAttr( "style" ), a.tabs.children( b + ":first" ).removeAttr( "style" ), a.$element.removeData( "mtabs" )
        } }, a.fn.mtabs = function ( c, d ) {
        return this.each( function ( ) {
            var e, f = a( this ), g = f.data( "mtabs" );
            e = "object" == typeof c && c, g || f.data( "mtabs", g = new b( this, e ) ), "string" == typeof c && g[c]( d )
        } );
    }, a.fn.mtabs.defaults = { container_class: "tabs", tabs_container_class: "tabs-content", active_tab_class: "active-tab", tab_text_el: "h1, h2, h3, h4, h5, h6", tabsmenu_class: "tabs-menu", tabsmenu_el: "ul", tmpl: { tabsmenu_tab: '<li class="tab-{0}"><span>{1}</span></li>' }, onTabSelect: null }
}( window.jQuery, window, document );

//gapi.load( 'gapi.iframes:gapi.iframes.style.bubble', function () {
//    if ( gapi.iframes && gapi.iframes.getContext ) {
//        gapi.iframes.getContext().openChild( {
//            url: 'https://www.blogger.com/navbar.g?targetBlogID\0753433832823245712384\46blogName\75Cupcakemafa\46publishMode\75PUBLISH_MODE_HOSTED\46navbarType\75LIGHT\46layoutType\75LAYOUTS\46searchRoot\75http://www.cupcakemafa.com/search\46blogLocale\75ja\46v\0752\46homepageUrl\75http://www.cupcakemafa.com/\46vt\0752779607091542423318',
//            where: document.getElementById( 'navbar-iframe-container' ),
//            id: 'navbar-iframe'
//        } );
//    }
//} );

/*! Magnific Popup - v0.9.9 - 2014-09-06
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2014 Dmitry Semenov; 
 */
( function ( e ) {
    var t, n, i, o, r, a, s, l = "Close", c = "BeforeClose", d = "AfterClose", u = "BeforeAppend", p = "MarkupParse", f = "Open", m = "Change", g = "mfp", h = "." + g, v = "mfp-ready", C = "mfp-removing", y = "mfp-prevent-close", w = function ( ) {
    }, b = ! ! window.jQuery, I = e( window ), x = function ( e, n ) {
        t.ev.on( g + e + h, n )
    }, k = function ( t, n, i, o ) {
        var r = document.createElement( "div" );
        return r.className = "mfp-" + t, i && ( r.innerHTML = i ), o ? n && n.appendChild( r ) : ( r = e( r ), n && r.appendTo( n ) ), r
    }, T = function ( n, i ) {
        t.ev.triggerHandler( g + n, i ), t.st.callbacks && ( n = n.charAt( 0 ).toLowerCase( ) + n.slice( 1 ), t.st.callbacks[n] && t.st.callbacks[n].apply( t, e.isArray( i ) ? i : [ i ] ) )
    }, E = function ( n ) {
        return n === s && t.currTemplate.closeBtn || ( t.currTemplate.closeBtn = e( t.st.closeMarkup.replace( "%title%", t.st.tClose ) ), s = n ), t.currTemplate.closeBtn
    }, _ = function ( ) {
        e.magnificPopup.instance || ( t = new w, t.init( ), e.magnificPopup.instance = t )
    }, S = function ( ) {
        var e = document.createElement( "p" ).style, t = [ "ms", "O", "Moz", "Webkit" ];
        if ( void 0 !== e.transition )
            return! 0;
        for ( ; t.length; )
            if ( t.pop( ) + "Transition"in e )
                return! 0;
        return! 1
    };
    w.prototype = { constructor: w, init: function ( ) {
            var n = navigator.appVersion;
            t.isIE7 = - 1 !== n.indexOf( "MSIE 7." ), t.isIE8 = - 1 !== n.indexOf( "MSIE 8." ), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test( n ), t.isIOS = /iphone|ipad|ipod/gi.test( n ), t.supportsTransition = S( ), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test( navigator.userAgent ), o = e( document ), t.popupsCache = { }
        }, open: function ( n ) {
            i || ( i = e( document.body ) );
            var r;
            if ( n.isObj === ! 1 ) {
                t.items = n.items.toArray( ), t.index = 0;
                var s, l = n.items;
                for ( r = 0; l.length > r; r++ )
                    if ( s = l[r], s.parsed && ( s = s.el[0] ), s === n.el[0] ) {
                        t.index = r;
                        break
                    }
            } else
                t.items = e.isArray( n.items ) ? n.items : [ n.items ], t.index = n.index || 0;
            if ( t.isOpen )
                return t.updateItemHTML( ), void 0;
            t.types = [ ], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq( 0 ) : o, n.key ? ( t.popupsCache[n.key] || ( t.popupsCache[n.key] = { } ), t.currTemplate = t.popupsCache[n.key] ) : t.currTemplate = { }, t.st = e.extend( ! 0, { }, e.magnificPopup.defaults, n ), t.fixedContentPos = "auto" === t.st.fixedContentPos ? ! t.probablyMobile : t.st.fixedContentPos, t.st.modal && ( t.st.closeOnContentClick = ! 1, t.st.closeOnBgClick = ! 1, t.st.showCloseBtn = ! 1, t.st.enableEscapeKey = ! 1 ), t.bgOverlay || ( t.bgOverlay = k( "bg" ).on( "click" + h, function ( ) {
                t.close( )
            } ), t.wrap = k( "wrap" ).attr( "tabindex", - 1 ).on( "click" + h, function ( e ) {
                t._checkIfClose( e.target ) && t.close( )
            } ), t.container = k( "container", t.wrap ) ), t.contentContainer = k( "content" ), t.st.preloader && ( t.preloader = k( "preloader", t.container, t.st.tLoading ) );
            var c = e.magnificPopup.modules;
            for ( r = 0; c.length > r; r ++ ) {
                var d = c[r];
                d = d.charAt( 0 ).toUpperCase( ) + d.slice( 1 ), t["init" + d].call( t )
            }
            T( "BeforeOpen" ), t.st.showCloseBtn && ( t.st.closeBtnInside ? ( x( p, function ( e, t, n, i ) {
                n.close_replaceWith = E( i.type )
            } ), a += " mfp-close-btn-in" ) : t.wrap.append( E( ) ) ), t.st.alignTop && ( a += " mfp-align-top" ), t.fixedContentPos ? t.wrap.css( { overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY } ) : t.wrap.css( { top: I.scrollTop( ), position: "absolute" } ), ( t.st.fixedBgPos === ! 1 || "auto" === t.st.fixedBgPos && ! t.fixedContentPos ) && t.bgOverlay.css( { height: o.height( ), position: "absolute" } ), t.st.enableEscapeKey && o.on( "keyup" + h, function ( e ) {
                27 === e.keyCode && t.close( )
            } ), I.on( "resize" + h, function ( ) {
                t.updateSize( )
            } ), t.st.closeOnContentClick || ( a += " mfp-auto-cursor" ), a && t.wrap.addClass( a );
            var u = t.wH = I.height( ), m = { };
            if ( t.fixedContentPos && t._hasScrollBar( u ) ) {
                var g = t._getScrollbarSize( );
                g && ( m.marginRight = g )
            }
            t.fixedContentPos && ( t.isIE7 ? e( "body, html" ).css( "overflow", "hidden" ) : m.overflow = "hidden" );
            var C = t.st.mainClass;
            return t.isIE7 && ( C += " mfp-ie7" ), C && t._addClassToMFP( C ), t.updateItemHTML( ), T( "BuildControls" ), e( "html" ).css( m ), t.bgOverlay.add( t.wrap ).prependTo( t.st.prependTo || i ), t._lastFocusedEl = document.activeElement, setTimeout( function ( ) {
                t.content ? ( t._addClassToMFP( v ), t._setFocus( ) ) : t.bgOverlay.addClass( v ), o.on( "focusin" + h, t._onFocusIn )
            }, 16 ), t.isOpen = ! 0, t.updateSize( u ), T( f ), n
        }, close: function ( ) {
            t.isOpen && ( T( c ), t.isOpen = ! 1, t.st.removalDelay && ! t.isLowIE && t.supportsTransition ? ( t._addClassToMFP( C ), setTimeout( function ( ) {
                t._close( )
            }, t.st.removalDelay ) ) : t._close( ) )
        }, _close: function ( ) {
            T( l );
            var n = C + " " + v + " ";
            if ( t.bgOverlay.detach( ), t.wrap.detach( ), t.container.empty( ), t.st.mainClass && ( n += t.st.mainClass + " " ), t._removeClassFromMFP( n ), t.fixedContentPos ) {
                var i = { marginRight: "" };
                t.isIE7 ? e( "body, html" ).css( "overflow", "" ) : i.overflow = "", e( "html" ).css( i )
            }
            o.off( "keyup" + h + " focusin" + h ), t.ev.off( h ), t.wrap.attr( "class", "mfp-wrap" ).removeAttr( "style" ), t.bgOverlay.attr( "class", "mfp-bg" ), t.container.attr( "class", "mfp-container" ), ! t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== ! 0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach( ), t._lastFocusedEl && e( t._lastFocusedEl ).focus( ), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T( d )
        }, updateSize: function ( e ) {
            if ( t.isIOS ) {
                var n = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * n;
                t.wrap.css( "height", i ), t.wH = i
            } else
                t.wH = e || I.height( );
            t.fixedContentPos || t.wrap.css( "height", t.wH ), T( "Resize" )
        }, updateItemHTML: function ( ) {
            var n = t.items[t.index];
            t.contentContainer.detach( ), t.content && t.content.detach( ), n.parsed || ( n = t.parseEl( t.index ) );
            var i = n.type;
            if ( T( "BeforeChange", [ t.currItem ? t.currItem.type : "", i ] ), t.currItem = n, ! t.currTemplate[i] ) {
                var o = t.st[i] ? t.st[i].markup : ! 1;
                T( "FirstMarkupParse", o ), t.currTemplate[i] = o ? e( o ) : ! 0
            }
            r && r !== n.type && t.container.removeClass( "mfp-" + r + "-holder" );
            var a = t["get" + i.charAt( 0 ).toUpperCase( ) + i.slice( 1 )]( n, t.currTemplate[i] );
            t.appendContent( a, i ), n.preloaded = ! 0, T( m, n ), r = n.type, t.container.prepend( t.contentContainer ), T( "AfterChange" )
        }, appendContent: function ( e, n ) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === ! 0 ? t.content.find( ".mfp-close" ).length || t.content.append( E( ) ) : t.content = e : t.content = "", T( u ), t.container.addClass( "mfp-" + n + "-holder" ), t.contentContainer.append( t.content )
        }, parseEl: function ( n ) {
            var i, o = t.items[n];
            if ( o.tagName ? o = { el: e( o ) } : ( i = o.type, o = { data: o, src: o.src } ), o.el ) {
                for ( var r = t.types, a = 0; r.length > a; a++ )
                    if ( o.el.hasClass( "mfp-" + r[a] ) ) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr( "data-mfp-src" ), o.src || ( o.src = o.el.attr( "href" ) )
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = ! 0, t.items[n] = o, T( "ElementParse", o ), t.items[n]
        }, addGroup: function ( e, n ) {
            var i = function ( i ) {
                i.mfpEl = this, t._openClick( i, e, n )
            };
            n || ( n = { } );
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? ( n.isObj = ! 0, e.off( o ).on( o, i ) ) : ( n.isObj = ! 1, n.delegate ? e.off( o ).on( o, n.delegate, i ) : ( n.items = e, e.off( o ).on( o, i ) ) )
        }, _openClick: function ( n, i, o ) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if ( r || 2 !== n.which && ! n.ctrlKey && ! n.metaKey ) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if ( a )
                    if ( e.isFunction( a ) ) {
                        if ( ! a.call( t ) )
                            return! 0
                    } else if ( a > I.width( ) )
                        return! 0;
                n.type && ( n.preventDefault( ), t.isOpen && n.stopPropagation( ) ), o.el = e( n.mfpEl ), o.delegate && ( o.items = i.find( o.delegate ) ), t.open( o )
            }
        }, updateStatus: function ( e, i ) {
            if ( t.preloader ) {
                n !== e && t.container.removeClass( "mfp-s-" + n ), i || "loading" !== e || ( i = t.st.tLoading );
                var o = { status: e, text: i };
                T( "UpdateStatus", o ), e = o.status, i = o.text, t.preloader.html( i ), t.preloader.find( "a" ).on( "click", function ( e ) {
                    e.stopImmediatePropagation( )
                } ), t.container.addClass( "mfp-s-" + e ), n = e
            }
        }, _checkIfClose: function ( n ) {
            if ( ! e( n ).hasClass( y ) ) {
                var i = t.st.closeOnContentClick, o = t.st.closeOnBgClick;
                if ( i && o )
                    return! 0;
                if ( ! t.content || e( n ).hasClass( "mfp-close" ) || t.preloader && n === t.preloader[0] )
                    return! 0;
                if ( n === t.content[0] || e.contains( t.content[0], n ) ) {
                    if ( i )
                        return! 0
                } else if ( o && e.contains( document, n ) )
                    return! 0;
                return! 1
            }
        }, _addClassToMFP: function ( e ) {
            t.bgOverlay.addClass( e ), t.wrap.addClass( e )
        }, _removeClassFromMFP: function ( e ) {
            this.bgOverlay.removeClass( e ), t.wrap.removeClass( e )
        }, _hasScrollBar: function ( e ) {
            return( t.isIE7 ? o.height( ) : document.body.scrollHeight ) > ( e || I.height( ) )
        }, _setFocus: function ( ) {
            ( t.st.focus ? t.content.find( t.st.focus ).eq( 0 ) : t.wrap ).focus( )
        }, _onFocusIn: function ( n ) {
            return n.target === t.wrap[0] || e.contains( t.wrap[0], n.target ) ? void 0 : ( t._setFocus( ), ! 1 )
        }, _parseMarkup: function ( t, n, i ) {
            var o;
            i.data && ( n = e.extend( i.data, n ) ), T( p, [ t, n, i ] ), e.each( n, function ( e, n ) {
                if ( void 0 === n || n === ! 1 )
                    return! 0;
                if ( o = e.split( "_" ), o.length > 1 ) {
                    var i = t.find( h + "-" + o[0] );
                    if ( i.length > 0 ) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith( n ) : "img" === r ? i.is( "img" ) ? i.attr( "src", n ) : i.replaceWith( '<img src="' + n + '" class="' + i.attr( "class" ) + '" />' ) : i.attr( o[1], n )
                    }
                } else
                    t.find( h + "-" + e ).html( n )
            } )
        }, _getScrollbarSize: function ( ) {
            if ( void 0 === t.scrollbarSize ) {
                var e = document.createElement( "div" );
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild( e ), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild( e )
            }
            return t.scrollbarSize
        } }, e.magnificPopup = { instance: null, proto: w.prototype, modules: [ ], open: function ( t, n ) {
            return _( ), t = t ? e.extend( ! 0, { }, t ) : { }, t.isObj = ! 0, t.index = n || 0, this.instance.open( t )
        }, close: function ( ) {
            return e.magnificPopup.instance && e.magnificPopup.instance.close( )
        }, registerModule: function ( t, n ) {
            n.options && ( e.magnificPopup.defaults[t] = n.options ), e.extend( this.proto, n.proto ), this.modules.push( t )
        }, defaults: { disableOn: 0, key: null, midClick: ! 1, mainClass: "", preloader: ! 0, focus: "", closeOnContentClick: ! 1, closeOnBgClick: ! 0, closeBtnInside: ! 0, showCloseBtn: ! 0, enableEscapeKey: ! 0, modal: ! 1, alignTop: ! 1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, e.fn.magnificPopup = function ( n ) {
        _( );
        var i = e( this );
        if ( "string" == typeof n )
            if ( "open" === n ) {
                var o, r = b ? i.data( "magnificPopup" ) : i[0].magnificPopup, a = parseInt( arguments[1], 10 ) || 0;
                r.items ? o = r.items[a] : ( o = i, r.delegate && ( o = o.find( r.delegate ) ), o = o.eq( a ) ), t._openClick( { mfpEl: o }, i, r )
            } else
                t.isOpen && t[n].apply( t, Array.prototype.slice.call( arguments, 1 ) );
        else
            n = e.extend( ! 0, { }, n ), b ? i.data( "magnificPopup", n ) : i[0].magnificPopup = n, t.addGroup( i, n );
        return i
    };
    var P, O, z, M = "inline", B = function ( ) {
        z && ( O.after( z.addClass( P ) ).detach( ), z = null )
    };
    e.magnificPopup.registerModule( M, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function ( ) {
                t.types.push( M ), x( l + "." + M, function ( ) {
                    B( )
                } )
            }, getInline: function ( n, i ) {
                if ( B( ), n.src ) {
                    var o = t.st.inline, r = e( n.src );
                    if ( r.length ) {
                        var a = r[0].parentNode;
                        a && a.tagName && ( O || ( P = o.hiddenClass, O = k( P ), P = "mfp-" + P ), z = r.after( O ).detach( ).removeClass( P ) ), t.updateStatus( "ready" )
                    } else
                        t.updateStatus( "error", o.tNotFound ), r = e( "<div>" );
                    return n.inlineElement = r, r
                }
                return t.updateStatus( "ready" ), t._parseMarkup( i, { }, n ), i
            } } } );
    var F, H = "ajax", L = function ( ) {
        F && i.removeClass( F )
    }, A = function ( ) {
        L( ), t.req && t.req.abort( )
    };
    e.magnificPopup.registerModule( H, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function ( ) {
                t.types.push( H ), F = t.st.ajax.cursor, x( l + "." + H, A ), x( "BeforeChange." + H, A )
            }, getAjax: function ( n ) {
                F && i.addClass( F ), t.updateStatus( "loading" );
                var o = e.extend( { url: n.src, success: function ( i, o, r ) {
                        var a = { data: i, xhr: r };
                        T( "ParseAjax", a ), t.appendContent( e( a.data ), H ), n.finished = ! 0, L( ), t._setFocus( ), setTimeout( function ( ) {
                            t.wrap.addClass( v )
                        }, 16 ), t.updateStatus( "ready" ), T( "AjaxContentAdded" )
                    }, error: function ( ) {
                        L( ), n.finished = n.loadError = ! 0, t.updateStatus( "error", t.st.ajax.tError.replace( "%url%", n.src ) )
                    } }, t.st.ajax.settings );
                return t.req = e.ajax( o ), ""
            } } } );
    var j, N = function ( n ) {
        if ( n.data && void 0 !== n.data.title )
            return n.data.title;
        var i = t.st.image.titleSrc;
        if ( i ) {
            if ( e.isFunction( i ) )
                return i.call( t, n );
            if ( n.el )
                return n.el.attr( i ) || ""
        }
        return""
    };
    e.magnificPopup.registerModule( "image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: ! 0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function ( ) {
                var e = t.st.image, n = ".image";
                t.types.push( "image" ), x( f + n, function ( ) {
                    "image" === t.currItem.type && e.cursor && i.addClass( e.cursor )
                } ), x( l + n, function ( ) {
                    e.cursor && i.removeClass( e.cursor ), I.off( "resize" + h )
                } ), x( "Resize" + n, t.resizeImage ), t.isLowIE && x( "AfterChange", t.resizeImage )
            }, resizeImage: function ( ) {
                var e = t.currItem;
                if ( e && e.img && t.st.image.verticalFit ) {
                    var n = 0;
                    t.isLowIE && ( n = parseInt( e.img.css( "padding-top" ), 10 ) + parseInt( e.img.css( "padding-bottom" ), 10 ) ), e.img.css( "max-height", t.wH - n )
                }
            }, _onImageHasSize: function ( e ) {
                e.img && ( e.hasSize = ! 0, j && clearInterval( j ), e.isCheckingImgSize = ! 1, T( "ImageHasSize", e ), e.imgHidden && ( t.content && t.content.removeClass( "mfp-loading" ), e.imgHidden = ! 1 ) )
            }, findImageSize: function ( e ) {
                var n = 0, i = e.img[0], o = function ( r ) {
                    j && clearInterval( j ), j = setInterval( function ( ) {
                        return i.naturalWidth > 0 ? ( t._onImageHasSize( e ), void 0 ) : ( n > 200 && clearInterval( j ), n ++, 3 === n ? o( 10 ) : 40 === n ? o( 50 ) : 100 === n && o( 500 ), void 0 )
                    }, r )
                };
                o( 1 )
            }, getImage: function ( n, i ) {
                var o = 0, r = function ( ) {
                    n && ( n.img[0].complete ? ( n.img.off( ".mfploader" ), n === t.currItem && ( t._onImageHasSize( n ), t.updateStatus( "ready" ) ), n.hasSize = ! 0, n.loaded = ! 0, T( "ImageLoadComplete" ) ) : ( o ++, 200 > o ? setTimeout( r, 100 ) : a( ) ) )
                }, a = function ( ) {
                    n && ( n.img.off( ".mfploader" ), n === t.currItem && ( t._onImageHasSize( n ), t.updateStatus( "error", s.tError.replace( "%url%", n.src ) ) ), n.hasSize = ! 0, n.loaded = ! 0, n.loadError = ! 0 )
                }, s = t.st.image, l = i.find( ".mfp-img" );
                if ( l.length ) {
                    var c = document.createElement( "img" );
                    c.className = "mfp-img", n.img = e( c ).on( "load.mfploader", r ).on( "error.mfploader", a ), c.src = n.src, l.is( "img" ) && ( n.img = n.img.clone( ) ), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = ! 0 : c.width || ( n.hasSize = ! 1 )
                }
                return t._parseMarkup( i, { title: N( n ), img_replaceWith: n.img }, n ), t.resizeImage( ), n.hasSize ? ( j && clearInterval( j ), n.loadError ? ( i.addClass( "mfp-loading" ), t.updateStatus( "error", s.tError.replace( "%url%", n.src ) ) ) : ( i.removeClass( "mfp-loading" ), t.updateStatus( "ready" ) ), i ) : ( t.updateStatus( "loading" ), n.loading = ! 0, n.hasSize || ( n.imgHidden = ! 0, i.addClass( "mfp-loading" ), t.findImageSize( n ) ), i )
            } } } );
    var W, R = function ( ) {
        return void 0 === W && ( W = void 0 !== document.createElement( "p" ).style.MozTransform ), W
    };
    e.magnificPopup.registerModule( "zoom", { options: { enabled: ! 1, easing: "ease-in-out", duration: 300, opener: function ( e ) {
                return e.is( "img" ) ? e : e.find( "img" )
            } }, proto: { initZoom: function ( ) {
                var e, n = t.st.zoom, i = ".zoom";
                if ( n.enabled && t.supportsTransition ) {
                    var o, r, a = n.duration, s = function ( e ) {
                        var t = e.clone( ).removeAttr( "style" ).removeAttr( "class" ).addClass( "mfp-animated-image" ), i = "all " + n.duration / 1e3 + "s " + n.easing, o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, r = "transition";
                        return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css( o ), t
                    }, d = function ( ) {
                        t.content.css( "visibility", "visible" )
                    };
                    x( "BuildControls" + i, function ( ) {
                        if ( t._allowZoom( ) ) {
                            if ( clearTimeout( o ), t.content.css( "visibility", "hidden" ), e = t._getItemToZoom( ), ! e )
                                return d( ), void 0;
                            r = s( e ), r.css( t._getOffset( ) ), t.wrap.append( r ), o = setTimeout( function ( ) {
                                r.css( t._getOffset( ! 0 ) ), o = setTimeout( function ( ) {
                                    d( ), setTimeout( function ( ) {
                                        r.remove( ), e = r = null, T( "ZoomAnimationEnded" )
                                    }, 16 )
                                }, a )
                            }, 16 )
                        }
                    } ), x( c + i, function ( ) {
                        if ( t._allowZoom( ) ) {
                            if ( clearTimeout( o ), t.st.removalDelay = a, ! e ) {
                                if ( e = t._getItemToZoom( ), ! e )
                                    return;
                                r = s( e )
                            }
                            r.css( t._getOffset( ! 0 ) ), t.wrap.append( r ), t.content.css( "visibility", "hidden" ), setTimeout( function ( ) {
                                r.css( t._getOffset( ) )
                            }, 16 )
                        }
                    } ), x( l + i, function ( ) {
                        t._allowZoom( ) && ( d( ), r && r.remove( ), e = null )
                    } )
                }
            }, _allowZoom: function ( ) {
                return"image" === t.currItem.type
            }, _getItemToZoom: function ( ) {
                return t.currItem.hasSize ? t.currItem.img : ! 1
            }, _getOffset: function ( n ) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener( t.currItem.el || t.currItem );
                var o = i.offset( ), r = parseInt( i.css( "padding-top" ), 10 ), a = parseInt( i.css( "padding-bottom" ), 10 );
                o.top -= e( window ).scrollTop( ) - r;
                var s = { width: i.width( ), height: ( b ? i.innerHeight( ) : i[0].offsetHeight ) - a - r };
                return R( ) ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : ( s.left = o.left, s.top = o.top ), s
            } } } );
    var Z = "iframe", q = "//about:blank", D = function ( e ) {
        if ( t.currTemplate[Z] ) {
            var n = t.currTemplate[Z].find( "iframe" );
            n.length && ( e || ( n[0].src = q ), t.isIE8 && n.css( "display", e ? "block" : "none" ) )
        }
    };
    e.magnificPopup.registerModule( Z, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function ( ) {
                t.types.push( Z ), x( "BeforeChange", function ( e, t, n ) {
                    t !== n && ( t === Z ? D( ) : n === Z && D( ! 0 ) )
                } ), x( l + "." + Z, function ( ) {
                    D( )
                } )
            }, getIframe: function ( n, i ) {
                var o = n.src, r = t.st.iframe;
                e.each( r.patterns, function ( ) {
                    return o.indexOf( this.index ) > - 1 ? ( this.id && ( o = "string" == typeof this.id ? o.substr( o.lastIndexOf( this.id ) + this.id.length, o.length ) : this.id.call( this, o ) ), o = this.src.replace( "%id%", o ), ! 1 ) : void 0
                } );
                var a = { };
                return r.srcAction && ( a[r.srcAction] = o ), t._parseMarkup( i, a, n ), t.updateStatus( "ready" ), i
            } } } );
    var K = function ( e ) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    }, Y = function ( e, t, n ) {
        return e.replace( /%curr%/gi, t + 1 ).replace( /%total%/gi, n )
    };
    e.magnificPopup.registerModule( "gallery", { options: { enabled: ! 1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [ 0, 2 ], navigateByImgClick: ! 0, arrows: ! 0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function ( ) {
                var n = t.st.gallery, i = ".mfp-gallery", r = Boolean( e.fn.mfpFastClick );
                return t.direction = ! 0, n && n.enabled ? ( a += " mfp-gallery", x( f + i, function ( ) {
                    n.navigateByImgClick && t.wrap.on( "click" + i, ".mfp-img", function ( ) {
                        return t.items.length > 1 ? ( t.next( ), ! 1 ) : void 0
                    } ), o.on( "keydown" + i, function ( e ) {
                        37 === e.keyCode ? t.prev( ) : 39 === e.keyCode && t.next( )
                    } )
                } ), x( "UpdateStatus" + i, function ( e, n ) {
                    n.text && ( n.text = Y( n.text, t.currItem.index, t.items.length ) )
                } ), x( p + i, function ( e, i, o, r ) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y( n.tCounter, r.index, a ) : ""
                } ), x( "BuildControls" + i, function ( ) {
                    if ( t.items.length > 1 && n.arrows && ! t.arrowLeft ) {
                        var i = n.arrowMarkup, o = t.arrowLeft = e( i.replace( /%title%/gi, n.tPrev ).replace( /%dir%/gi, "left" ) ).addClass( y ), a = t.arrowRight = e( i.replace( /%title%/gi, n.tNext ).replace( /%dir%/gi, "right" ) ).addClass( y ), s = r ? "mfpFastClick" : "click";
                        o[s]( function ( ) {
                            t.prev( )
                        } ), a[s]( function ( ) {
                            t.next( )
                        } ), t.isIE7 && ( k( "b", o[0], ! 1, ! 0 ), k( "a", o[0], ! 1, ! 0 ), k( "b", a[0], ! 1, ! 0 ), k( "a", a[0], ! 1, ! 0 ) ), t.container.append( o.add( a ) )
                    }
                } ), x( m + i, function ( ) {
                    t._preloadTimeout && clearTimeout( t._preloadTimeout ), t._preloadTimeout = setTimeout( function ( ) {
                        t.preloadNearbyImages( ), t._preloadTimeout = null
                    }, 16 )
                } ), x( l + i, function ( ) {
                    o.off( i ), t.wrap.off( "click" + i ), t.arrowLeft && r && t.arrowLeft.add( t.arrowRight ).destroyMfpFastClick( ), t.arrowRight = t.arrowLeft = null
                } ), void 0 ) : ! 1
            }, next: function ( ) {
                t.direction = ! 0, t.index = K( t.index + 1 ), t.updateItemHTML( )
            }, prev: function ( ) {
                t.direction = ! 1, t.index = K( t.index - 1 ), t.updateItemHTML( )
            }, goTo: function ( e ) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML( )
            }, preloadNearbyImages: function ( ) {
                var e, n = t.st.gallery.preload, i = Math.min( n[0], t.items.length ), o = Math.min( n[1], t.items.length );
                for ( e = 1; ( t.direction?o:i ) >= e; e++ )
                    t._preloadItem( t.index + e );
                for ( e = 1; ( t.direction?i:o ) >= e; e++ )
                    t._preloadItem( t.index - e )
            }, _preloadItem: function ( n ) {
                if ( n = K( n ), ! t.items[n].preloaded ) {
                    var i = t.items[n];
                    i.parsed || ( i = t.parseEl( n ) ), T( "LazyLoad", i ), "image" === i.type && ( i.img = e( '<img class="mfp-img" />' ).on( "load.mfploader", function ( ) {
                        i.hasSize = ! 0
                    } ).on( "error.mfploader", function ( ) {
                        i.hasSize = ! 0, i.loadError = ! 0, T( "LazyLoadError", i )
                    } ).attr( "src", i.src ) ), i.preloaded = ! 0
                }
            } } } );
    var U = "retina";
    e.magnificPopup.registerModule( U, { options: { replaceSrc: function ( e ) {
                return e.src.replace( /\.\w+$/, function ( e ) {
                    return"@2x" + e
                } )
            }, ratio: 1 }, proto: { initRetina: function ( ) {
                if ( window.devicePixelRatio > 1 ) {
                    var e = t.st.retina, n = e.ratio;
                    n = isNaN( n ) ? n( ) : n, n > 1 && ( x( "ImageHasSize." + U, function ( e, t ) {
                        t.img.css( { "max-width": t.img[0].naturalWidth / n, width: "100%" } )
                    } ), x( "ElementParse." + U, function ( t, i ) {
                        i.src = e.replaceSrc( i, n )
                    } ) )
                }
            } } } ), function ( ) {
        var t = 1e3, n = "ontouchstart"in window, i = function ( ) {
            I.off( "touchmove" + r + " touchend" + r )
        }, o = "mfpFastClick", r = "." + o;
        e.fn.mfpFastClick = function ( o ) {
            return e( this ).each( function ( ) {
                var a, s = e( this );
                if ( n ) {
                    var l, c, d, u, p, f;
                    s.on( "touchstart" + r, function ( e ) {
                        u = ! 1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on( "touchmove" + r, function ( e ) {
                            p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], ( Math.abs( p.clientX - c ) > 10 || Math.abs( p.clientY - d ) > 10 ) && ( u = ! 0, i( ) )
                        } ).on( "touchend" + r, function ( e ) {
                            i( ), u || f > 1 || ( a = ! 0, e.preventDefault( ), clearTimeout( l ), l = setTimeout( function ( ) {
                                a = ! 1
                            }, t ), o( ) )
                        } )
                    } )
                }
                s.on( "click" + r, function ( ) {
                    a || o( )
                } )
            } )
        }, e.fn.destroyMfpFastClick = function ( ) {
            e( this ).off( "touchstart" + r + " click" + r ), n && I.off( "touchmove" + r + " touchend" + r )
        }
    }( ), _( )
} )( window.jQuery || window.Zepto );
/*!
 * Justified Gallery - v3.5.1
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2015 Miro Mannino
 * Licensed under the MIT license.
 */
! function ( a ) {
    a.fn.justifiedGallery = function ( b ) {
        function c( a, b, c ) {
            var d;
            return d = a > b ? a : b, 100 >= d ? c.settings.sizeRangeSuffixes.lt100 : 240 >= d ? c.settings.sizeRangeSuffixes.lt240 : 320 >= d ? c.settings.sizeRangeSuffixes.lt320 : 500 >= d ? c.settings.sizeRangeSuffixes.lt500 : 640 >= d ? c.settings.sizeRangeSuffixes.lt640 : c.settings.sizeRangeSuffixes.lt1024
        }
        function d( a, b ) {
            return - 1 !== a.indexOf( b, a.length - b.length )
        }
        function e( a, b ) {
            return a.substring( 0, a.length - b.length )
        }
        function f( a, b ) {
            var c = ! 1;
            for ( var e in b.settings.sizeRangeSuffixes )
                if ( 0 !== b.settings.sizeRangeSuffixes[e].length ) {
                    if ( d( a, b.settings.sizeRangeSuffixes[e] ) )
                        return b.settings.sizeRangeSuffixes[e]
                } else
                    c = ! 0;
            if ( c )
                return"";
            throw"unknown suffix for " + a
        }
        function g( a, b, d, g ) {
            var h = a.match( g.settings.extension ), i = null != h ? h[0] : "", j = a.replace( g.settings.extension, "" );
            return j = e( j, f( j, g ) ), j += c( b, d, g ) + i
        }
        function h( b ) {
            var c = a( b.currentTarget ).find( ".caption" );
            b.data.settings.cssAnimation ? c.addClass( "caption-visible" ).removeClass( "caption-hidden" ) : c.stop( ).fadeTo( b.data.settings.captionSettings.animationDuration, b.data.settings.captionSettings.visibleOpacity )
        }
        function i( b ) {
            var c = a( b.currentTarget ).find( ".caption" );
            b.data.settings.cssAnimation ? c.removeClass( "caption-visible" ).removeClass( "caption-hidden" ) : c.stop( ).fadeTo( b.data.settings.captionSettings.animationDuration, b.data.settings.captionSettings.nonVisibleOpacity )
        }
        function j( a, b, c ) {
            c.settings.cssAnimation ? ( a.addClass( "entry-visible" ), b( ) ) : a.stop( ).fadeTo( c.settings.imagesAnimationDuration, 1, b )
        }
        function k( a, b ) {
            b.settings.cssAnimation ? a.removeClass( "entry-visible" ) : a.stop( ).fadeTo( 0, 0 )
        }
        function l( a ) {
            var b = a.find( "> img" );
            return 0 === b.length && ( b = a.find( "> a > img" ) ), b
        }
        function m( b, c, d, e, f, k, m ) {
            function n( ) {
                p !== q && o.attr( "src", q )
            }
            var o = l( b );
            o.css( "width", e ), o.css( "height", f ), o.css( "margin-left", - e / 2 ), o.css( "margin-top", - f / 2 ), b.width( e ), b.height( k ), b.css( "top", d ), b.css( "left", c );
            var p = o.attr( "src" ), q = g( p, e, f, m );
            o.one( "error", function ( ) {
                o.attr( "src", o.data( "jg.originalSrc" ) )
            } ), "skipped" === o.data( "jg.loaded" ) ? o.one( "load", function ( ) {
                j( b, n, m ), o.data( "jg.loaded", ! 0 )
            } ) : j( b, n, m );
            var r = b.data( "jg.captionMouseEvents" );
            if ( m.settings.captions === ! 0 ) {
                var s = b.find( ".caption" );
                if ( 0 === s.length ) {
                    var t = o.attr( "alt" );
                    "undefined" == typeof t && ( t = b.attr( "title" ) ), "undefined" != typeof t && ( s = a( '<div class="caption">' + t + "</div>" ), b.append( s ) )
                }
                0 !== s.length && ( m.settings.cssAnimation || s.stop( ).fadeTo( m.settings.imagesAnimationDuration, m.settings.captionSettings.nonVisibleOpacity ), "undefined" == typeof r && ( r = { mouseenter: h, mouseleave: i }, b.on( "mouseenter", void 0, m, r.mouseenter ), b.on( "mouseleave", void 0, m, r.mouseleave ), b.data( "jg.captionMouseEvents", r ) ) )
            } else
                "undefined" != typeof r && ( b.off( "mouseenter", void 0, m, r.mouseenter ), b.off( "mouseleave", void 0, m, r.mouseleave ), b.removeData( "jg.captionMouseEvents" ) )
        }
        function n( a, b ) {
            var c, d, e, f, g, h, i = a.settings, j = ! 0, k = 0, m = a.galleryWidth - ( a.buildingRow.entriesBuff.length + 1 ) * i.margins, n = m / a.buildingRow.aspectRatio, o = a.buildingRow.width / m > i.justifyThreshold;
            if ( b && "hide" === i.lastRow && ! o ) {
                for ( c = 0; c < a.buildingRow.entriesBuff.length; c++ )
                    d = a.buildingRow.entriesBuff[c], i.cssAnimation ? d.removeClass( "entry-visible" ) : d.stop( ).fadeTo( 0, 0 );
                return - 1
            }
            for ( b && !o && "nojustify" === i.lastRow && ( j = !1 ), c = 0; c < a.buildingRow.entriesBuff.length; c++ )
                e = l( a.buildingRow.entriesBuff[c] ), f = e.data( "jg.imgw" ) / e.data( "jg.imgh" ), j ? ( g = c === a.buildingRow.entriesBuff.length - 1 ? m : n * f, h = n ) : ( g = i.rowHeight * f, h = i.rowHeight ), m -= Math.round( g ), e.data( "jg.jimgw", Math.round( g ) ), e.data( "jg.jimgh", Math.ceil( h ) ), ( 0 === c || k > h ) && ( k = h );
            return i.fixedHeight && k > i.rowHeight && ( k = i.rowHeight ), { minHeight: k, justify: j }
        }
        function o( a ) {
            a.lastAnalyzedIndex = - 1, a.buildingRow.entriesBuff = [ ], a.buildingRow.aspectRatio = 0, a.buildingRow.width = 0, a.offY = a.settings.margins
        }
        function p( a, b ) {
            var c, d, e, f, g = a.settings, h = g.margins;
            if ( f = n( a, b ), e = f.minHeight, b && "hide" === g.lastRow && - 1 === e )
                return a.buildingRow.entriesBuff = [ ], a.buildingRow.aspectRatio = 0, void( a.buildingRow.width = 0 );
            g.maxRowHeight > 0 && g.maxRowHeight < e ? e = g.maxRowHeight : 0 === g.maxRowHeight && 1.5 * g.rowHeight < e && ( e = 1.5 * g.rowHeight );
            for ( var i = 0; i < a.buildingRow.entriesBuff.length; i++ )
                c = a.buildingRow.entriesBuff[i], d = l( c ), m( c, h, a.offY, d.data( "jg.jimgw" ), d.data( "jg.jimgh" ), e, a ), h += d.data( "jg.jimgw" ) + g.margins;
            a.$gallery.height( a.offY + e + g.margins + ( a.spinner.active ? a.spinner.$el.innerHeight( ) : 0 ) ), ( ! b || e <= a.settings.rowHeight && f.justify ) && ( a.offY += e + a.settings.margins, a.buildingRow.entriesBuff = [ ], a.buildingRow.aspectRatio = 0, a.buildingRow.width = 0, a.$gallery.trigger( "jg.rowflush" ) )
        }
        function q( a ) {
            a.checkWidthIntervalId = setInterval( function ( ) {
                var b = parseInt( a.$gallery.width( ), 10 );
                a.galleryWidth !== b && ( a.galleryWidth = b, o( a ), u( a, ! 0 ) )
            }, a.settings.refreshTime )
        }
        function r( a ) {
            clearInterval( a.intervalId ), a.intervalId = setInterval( function ( ) {
                a.phase < a.$points.length ? a.$points.eq( a.phase ).fadeTo( a.timeslot, 1 ) : a.$points.eq( a.phase - a.$points.length ).fadeTo( a.timeslot, 0 ), a.phase = ( a.phase + 1 ) % ( 2 * a.$points.length )
            }, a.timeslot )
        }
        function s( a ) {
            clearInterval( a.intervalId ), a.intervalId = null
        }
        function t( a ) {
            a.yield.flushed = 0, null !== a.imgAnalyzerTimeout && clearTimeout( a.imgAnalyzerTimeout )
        }
        function u( a, b ) {
            t( a ), a.imgAnalyzerTimeout = setTimeout( function ( ) {
                v( a, b )
            }, .001 ), v( a, b )
        }
        function v( b, c ) {
            for ( var d, e = b.settings, f = b.lastAnalyzedIndex + 1; f < b.entries.length; f ++ ) {
                var g = a( b.entries[f] ), h = l( g );
                if ( h.data( "jg.loaded" ) === ! 0 || "skipped" === h.data( "jg.loaded" ) ) {
                    d = f >= b.entries.length - 1;
                    var i = b.galleryWidth - ( b.buildingRow.entriesBuff.length - 1 ) * e.margins, j = h.data( "jg.imgw" ) / h.data( "jg.imgh" );
                    if ( i / ( b.buildingRow.aspectRatio + j ) < e.rowHeight && ( p( b, d ), ++ b.yield.flushed >= b.yield.every ) )
                        return void u( b, c );
                    b.buildingRow.entriesBuff.push( g ), b.buildingRow.aspectRatio += j, b.buildingRow.width += j * e.rowHeight, b.lastAnalyzedIndex = f
                } else if ( "error" !== h.data( "jg.loaded" ) )
                    return
            }
            b.buildingRow.entriesBuff.length > 0 && p( b, ! 0 ), b.spinner.active && ( b.spinner.active = ! 1, b.$gallery.height( b.$gallery.height( ) - b.spinner.$el.innerHeight( ) ), b.spinner.$el.detach( ), s( b.spinner ) ), t( b ), b.$gallery.trigger( c ? "jg.resize" : "jg.complete" )
        }
        function w( a ) {
            function b( a ) {
                if ( "string" != typeof d.sizeRangeSuffixes[a] )
                    throw"sizeRangeSuffixes." + a + " must be a string"
            }
            function c( a, b ) {
                if ( "string" == typeof a[b] ) {
                    if ( a[b] = parseFloat( a[b], 10 ), isNaN( a[b] ) )
                        throw"invalid number for " + b
                } else {
                    if ( "number" != typeof a[b] )
                        throw b + " must be a number";
                    if ( isNaN( a[b] ) )
                        throw"invalid number for " + b
                }
            }
            var d = a.settings;
            if ( "object" != typeof d.sizeRangeSuffixes )
                throw"sizeRangeSuffixes must be defined and must be an object";
            if ( b( "lt100" ), b( "lt240" ), b( "lt320" ), b( "lt500" ), b( "lt640" ), b( "lt1024" ), c( d, "rowHeight" ), c( d, "maxRowHeight" ), d.maxRowHeight > 0 && d.maxRowHeight < d.rowHeight && ( d.maxRowHeight = d.rowHeight ), c( d, "margins" ), "nojustify" !== d.lastRow && "justify" !== d.lastRow && "hide" !== d.lastRow )
                throw'lastRow must be "nojustify", "justify" or "hide"';
            if ( c( d, "justifyThreshold" ), d.justifyThreshold < 0 || d.justifyThreshold > 1 )
                throw"justifyThreshold must be in the interval [0,1]";
            if ( "boolean" != typeof d.cssAnimation )
                throw"cssAnimation must be a boolean";
            if ( c( d.captionSettings, "animationDuration" ), c( d, "imagesAnimationDuration" ), c( d.captionSettings, "visibleOpacity" ), d.captionSettings.visibleOpacity < 0 || d.captionSettings.visibleOpacity > 1 )
                throw"captionSettings.visibleOpacity must be in the interval [0, 1]";
            if ( c( d.captionSettings, "nonVisibleOpacity" ), d.captionSettings.visibleOpacity < 0 || d.captionSettings.visibleOpacity > 1 )
                throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
            if ( "boolean" != typeof d.fixedHeight )
                throw"fixedHeight must be a boolean";
            if ( "boolean" != typeof d.captions )
                throw"captions must be a boolean";
            if ( c( d, "refreshTime" ), "boolean" != typeof d.randomize )
                throw"randomize must be a boolean"
        }
        var x = { sizeRangeSuffixes: { lt100: "", lt240: "", lt320: "", lt500: "", lt640: "", lt1024: "" }, rowHeight: 120, maxRowHeight: 0, margins: 1, lastRow: "nojustify", justifyThreshold: .75, fixedHeight: ! 1, waitThumbnailsLoad: ! 0, captions: ! 0, cssAnimation: ! 1, imagesAnimationDuration: 500, captionSettings: { animationDuration: 500, visibleOpacity: .7, nonVisibleOpacity: 0 }, rel: null, target: null, extension: /\.[^.\\/]+$/, refreshTime: 100, randomize: ! 1 };
        return this.each( function ( c, d ) {
            var e = a( d );
            e.addClass( "justified-gallery" );
            var f = e.data( "jg.context" );
            if ( "undefined" == typeof f ) {
                if ( "undefined" != typeof b && null !== b && "object" != typeof b )
                    throw"The argument must be an object";
                var g = a( '<div class="spinner"><span></span><span></span><span></span></div>' ), h = a.extend( { }, x, b );
                f = { settings: h, imgAnalyzerTimeout: null, entries: null, buildingRow: { entriesBuff: [ ], width: 0, aspectRatio: 0 }, lastAnalyzedIndex: - 1, "yield": { every: 2, flushed: 0 }, offY: h.margins, spinner: { active: ! 1, phase: 0, timeslot: 150, $el: g, $points: g.find( "span" ), intervalId: null }, checkWidthIntervalId: null, galleryWidth: e.width( ), $gallery: e }, e.data( "jg.context", f )
            } else if ( "norewind" === b )
                for ( var i = 0; i < f.buildingRow.entriesBuff.length; i++ )
                    k( f.buildingRow.entriesBuff[i], f );
            else
                f.settings = a.extend( { }, f.settings, b ), o( f );
            if ( w( f ), f.entries = e.find( "> a, > div:not(.spinner)" ).toArray( ), 0 !== f.entries.length ) {
                f.settings.randomize && ( f.entries.sort( function ( ) {
                    return 2 * Math.random( ) - 1;
                } ), a.each( f.entries, function ( ) {
                    a( this ).appendTo( e );
                } ) );
                var j = ! 1, m = ! 1;
                a.each( f.entries, function ( b, c ) {
                    var d = a( c ), g = l( d );
                    if ( d.addClass( "jg-entry" ), g.data( "jg.loaded" ) !== ! 0 && "skipped" !== g.data( "jg.loaded" ) ) {
                        null !== f.settings.rel && d.attr( "rel", f.settings.rel ), null !== f.settings.target && d.attr( "target", f.settings.target );
                        var h = "undefined" != typeof g.data( "safe-src" ) ? g.data( "safe-src" ) : g.attr( "src" );
                        g.data( "jg.originalSrc", h ), g.attr( "src", h );
                        var i = parseInt( g.attr( "width" ), 10 ), k = parseInt( g.attr( "height" ), 10 );
                        if ( f.settings.waitThumbnailsLoad !== ! 0 && ! isNaN( i ) && ! isNaN( k ) )
                            return g.data( "jg.imgw", i ), g.data( "jg.imgh", k ), g.data( "jg.loaded", "skipped" ), m = ! 0, u( f, ! 1 ), ! 0;
                        g.data( "jg.loaded", ! 1 ), j = ! 0, f.spinner.active === ! 1 && ( f.spinner.active = ! 0, e.append( f.spinner.$el ), e.height( f.offY + f.spinner.$el.innerHeight( ) ), r( f.spinner ) );
                        var n = new Image, o = a( n );
                        o.one( "load", function ( ) {
                            g.off( "load error" ), g.data( "jg.imgw", n.width ), g.data( "jg.imgh", n.height ), g.data( "jg.loaded", ! 0 ), u( f, ! 1 );
                        } ), o.one( "error", function ( ) {
                            g.off( "load error" ), g.data( "jg.loaded", "error" ), u( f, ! 1 );
                        } ), n.src = h;
                    }
                } ), j || m || u( f, ! 1 ), q( f );
            }
        } );
    };
}( jQuery );

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
/*
 * jshint browser: true, strict: true, undef: true */
/* global define: false */
( function ( window ) {

    'use strict';
    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp( "(^|\\s+)" + className + "(\\s+|$)" );
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    if ( 'classList' in document.documentElement ) {
        hasClass = function ( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function ( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function ( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function ( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function ( elem, c ) {
            if ( ! hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function ( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    // transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

} )( window );

/**
 * uisearch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
( function ( window ) {

    'use strict';
    // EventListener | @jon_neal | //github.com/jonathantneal/EventListener
    ! window.addEventListener && window.Element && ( function ( ) {
        function addToPrototype( name, method ) {
            Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
        }

        var registry = [ ];
        addToPrototype( "addEventListener", function ( type, listener ) {
            var target = this;
            registry.unshift( {
                __listener: function ( event ) {
                    event.currentTarget = target;
                    event.pageX = event.clientX + document.documentElement.scrollLeft;
                    event.pageY = event.clientY + document.documentElement.scrollTop;
                    event.preventDefault = function ( ) {
                        event.returnValue = false
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.stopPropagation = function ( ) {
                        event.cancelBubble = true
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.target = event.srcElement || target;
                    event.timeStamp = + new Date;
                    listener.call( target, event );
                },
                listener: listener,
                target: target,
                type: type
            } );
            this.attachEvent( "on" + type, registry[0].__listener );
        } );
        addToPrototype( "removeEventListener", function ( type, listener ) {
            for ( var index = 0, length = registry.length; index < length; ++ index ) {
                if ( registry[index].target == this && registry[index].type == type && registry[index].listener == listener ) {
                    return this.detachEvent( "on" + type, registry.splice( index, 1 )[0].__listener );
                }
            }
        } );
        addToPrototype( "dispatchEvent", function ( eventObject ) {
            try {
                return this.fireEvent( "on" + eventObject.type, eventObject );
            } catch ( error ) {
                for ( var index = 0, length = registry.length; index < length; ++ index ) {
                    if ( registry[index].target == this && registry[index].type == eventObject.type ) {
                        registry[index].call( this, eventObject );
                    }
                }
            }
        } );
    } )( );
    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck( ) {
        var check = false;
        ( function ( a ) {
            if ( /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test( a ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( a.substr( 0, 4 ) ) )
                check = true
        } )( navigator.userAgent || navigator.vendor || window.opera );
        return check;
    }

    // http://www.jonathantneal.com/blog/polyfills-and-prototypes/
    ! String.prototype.trim && ( String.prototype.trim = function ( ) {
        return this.replace( /^\s+|\s+$/g, '' );
    } );
    function UISearch( el, options ) {
        this.el = el;
        this.inputEl = el.querySelector( 'form > input.sb-search-input' );
        this._initEvents( );
    }

    UISearch.prototype = {
        _initEvents: function ( ) {
            var self = this,
                initSearchFn = function ( ev ) {
                    ev.stopPropagation( );
                    // trim its value
                    self.inputEl.value = self.inputEl.value.trim( );
                    if ( ! classie.has( self.el, 'sb-search-open' ) ) { // open it
                        ev.preventDefault( );
                        self.open( );
                    }
                    else if ( classie.has( self.el, 'sb-search-open' ) && /^\s*$/.test( self.inputEl.value ) ) { // close it
                        ev.preventDefault( );
                        self.close( );
                    }
                }

            this.el.addEventListener( 'click', initSearchFn );
            this.el.addEventListener( 'touchstart', initSearchFn );
            this.inputEl.addEventListener( 'click', function ( ev ) {
                ev.stopPropagation( );
            } );
            this.inputEl.addEventListener( 'touchstart', function ( ev ) {
                ev.stopPropagation( );
            } );
        },
        open: function ( ) {
            var self = this;
            classie.add( this.el, 'sb-search-open' );
            // focus the input
            if ( ! mobilecheck( ) ) {
                this.inputEl.focus( );
            }
            // close the search input if body is clicked
            var bodyFn = function ( ev ) {
                self.close( );
                this.removeEventListener( 'click', bodyFn );
                this.removeEventListener( 'touchstart', bodyFn );
            };
            document.addEventListener( 'click', bodyFn );
            document.addEventListener( 'touchstart', bodyFn );
        },
        close: function ( ) {
            this.inputEl.blur( );
            classie.remove( this.el, 'sb-search-open' );
        }
    }

    // add to global namespace
    window.UISearch = UISearch;
} )( window );

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
( function ( $ ) {
    function getViewportHeight( ) {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;
        if ( ( mode || ! $.support.boxModel ) ) { // IE, Gecko
            height = ( mode == 'CSS1Compat' ) ?
                document.documentElement.clientHeight : // Standards
                document.body.clientHeight; // Quirks
        }

        return height;
    }

    $( window ).scroll( function ( ) {
        var vpH = getViewportHeight( ),
            scrolltop = ( document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop ),
            elems = [ ];
        // naughty, but this is how it knows which elements to check for
        $.each( $.cache, function ( ) {
            if ( this.events && this.events.inview ) {
                elems.push( this.handle.elem );
            }
        } );
        if ( elems.length ) {
            $( elems ).each( function ( ) {
                var $el = $( this ),
                    top = $el.offset( ).top,
                    height = $el.height( ),
                    inview = $el.data( 'inview' ) || false;
                if ( scrolltop > ( top + height ) || scrolltop + vpH < top ) {
                    if ( inview ) {
                        $el.data( 'inview', false );
                        $el.trigger( 'inview', [ false ] );
                    }
                } else if ( scrolltop < ( top + height ) ) {
                    if ( ! inview ) {
                        $el.data( 'inview', true );
                        $el.trigger( 'inview', [ true ] );
                    }
                }
            } );
        }
    } );
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $( function ( ) {
        $( window ).scroll( );
    } );
} )( jQuery );
$( document ).ready( function ( ) {
    function e( ) {
        var b = a.height( ), c = $( "#nav" ).height( ) / 2, d = b / 2, e = d - c;
        $( "#nav" ).css( { top: e } );
    }
    function f( a, b, c, d, e ) {
        return a + "% " + - ( b + c - d ) * e + "px";
    }
    function g( ) {
        var e = a.scrollTop( );
        b.hasClass( "inview" ) && ( b.css( { backgroundPosition: f( 0, d, e, 500, 0 ) } ), c.css( { backgroundPosition: f( 50, d, e, 400, .2 ) } ) ), $( "#pixels" ).html( e )
    }
    var a = $( window ), b = $( "#intro" ), c = $( "#intro .bg1" ), d = a.height( );
    $( "#intro" ).bind( "inview", function ( a, b ) {
        1 == b ? $( this ).addClass( "inview" ) : $( this ).removeClass( "inview" )
    } ), e( ), a.resize( function ( ) {
        g( ), e( );
    } ), a.bind( "scroll", function ( ) {
        g( );
    } );
} );



/*!
 *  SlickNav Responsive Mobile Menu v1.0.0
 *  (c) 2014 Josh Cope
 *  licensed under MIT
 */
( function ( $, document, window ) {
    var
        // default settings object.
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            init: function ( ) {
            },
            open: function ( ) {
            },
            close: function ( ) {
            }
        },
    mobileMenu = 'slicknav',
        prefix = 'slicknav';
    function Plugin( element, options ) {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend( { }, defaults, options );
        this._defaults = defaults;
        this._name = mobileMenu;
        this.init( );
    }

    Plugin.prototype.init = function ( ) {
        var $this = this;
        var menu = $( this.element );
        var settings = this.settings;
        // clone menu if needed
        if ( settings.duplicate ) {
            $this.mobileNav = menu.clone( );
            //remove ids from clone to prevent css issues
            $this.mobileNav.removeAttr( 'id' );
            $this.mobileNav.find( '*' ).each( function ( i, e ) {
                $( e ).removeAttr( 'id' );
            } );
        }
        else
            $this.mobileNav = menu;
        // styling class for the button
        var iconClass = prefix + '_icon';
        if ( settings.label === '' ) {
            iconClass += ' ' + prefix + '_no-text';
        }

        if ( settings.parentTag == 'a' ) {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        $this.mobileNav.attr( 'class', prefix + '_nav' );
        var menuBar = $( '<div class="' + prefix + '_menu"></div>' );
        $this.btn = $( '<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed"><span class="' + prefix + '_menutxt">' + settings.label + '</span><span class="' + iconClass + '"><span class="' + prefix + '_icon-bar"></span><span class="' + prefix + '_icon-bar"></span><span class="' + prefix + '_icon-bar"></span></span></a>' );
        $( menuBar ).append( $this.btn );
        $( settings.prependTo ).prepend( menuBar );
        menuBar.append( $this.mobileNav );
        // iterate over structure adding additional structure
        var items = $this.mobileNav.find( 'li' );
        $( items ).each( function ( ) {
            var item = $( this );
            var data = { };
            data.children = item.children( 'ul' ).attr( 'role', 'menu' );
            item.data( "menu", data );
            // if a list item has a nested menu
            if ( data.children.length > 0 ) {

                // select all text before the child menu
                // check for anchors

                var a = item.contents( );
                var containsAnchor = false;
                var nodes = [ ];
                $( a ).each( function ( ) {
                    if ( ! $( this ).is( "ul" ) ) {
                        nodes.push( this );
                    }
                    else {
                        return false;
                    }

                    if ( $( this ).is( "a" ) ) {
                        containsAnchor = true;
                    }
                } );
                var wrapElement = $( '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>' );
                // wrap item text with tag and add classes unless we are separating parent links
                if ( ( ! settings.allowParentLinks || settings.nestedParentLinks ) || ! containsAnchor ) {
                    var $wrap = $( nodes ).wrapAll( wrapElement ).parent( );
                    $wrap.addClass( prefix + '_row' );
                } else
                    $( nodes ).wrapAll( '<span class="' + prefix + '_parent-link ' + prefix + '_row"/>' ).parent( );
                item.addClass( prefix + '_collapsed' );
                item.addClass( prefix + '_parent' );
                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = $( '<span class="' + prefix + '_arrow">' + settings.closedSymbol + '</span>' );
                if ( settings.allowParentLinks && ! settings.nestedParentLinks && containsAnchor )
                    arrowElement = arrowElement.wrap( wrapElement ).parent( );
                //append arrow
                $( nodes ).last( ).after( arrowElement );
            } else if ( item.children( ).length === 0 ) {
                item.addClass( prefix + '_txtnode' );
            }

            // accessibility for links
            item.children( 'a' ).attr( 'role', 'menuitem' ).click( function ( event ) {
                //Emulate menu close if set
                //Ensure that it's not a parent
                if ( settings.closeOnClick && ! $( event.target ).parent( ).closest( 'li' ).hasClass( prefix + '_parent' ) )
                    $( $this.btn ).click( );
            } );
            //also close on click if parent links are set
            if ( settings.closeOnClick && settings.allowParentLinks ) {
                item.children( 'a' ).children( 'a' ).click( function ( event ) {
                    //Emulate menu close
                    $( $this.btn ).click( );
                } );
                item.find( '.' + prefix + '_parent-link a:not(.' + prefix + '_item)' ).click( function ( event ) {
                    //Emulate menu close
                    $( $this.btn ).click( );
                } );
            }
        } );
        // structure is in place, now hide appropriate items
        $( items ).each( function ( ) {
            var data = $( this ).data( "menu" );
            if ( ! settings.showChildren ) {
                $this._visibilityToggle( data.children, null, false, null, true );
            }
        } );
        // finally toggle entire menu
        $this._visibilityToggle( $this.mobileNav, null, false, 'init', true );
        // accessibility for menu button
        $this.mobileNav.attr( 'role', 'menu' );
        // outline prevention when using mouse
        $( document ).mousedown( function ( ) {
            $this._outlines( false );
        } );
        $( document ).keyup( function ( ) {
            $this._outlines( true );
        } );
        // menu button click
        $( $this.btn ).click( function ( e ) {
            e.preventDefault( );
            $this._menuToggle( );
        } );
        // click on menu parent
        $this.mobileNav.on( 'click', '.' + prefix + '_item', function ( e ) {
            e.preventDefault( );
            $this._itemClick( $( this ) );
        } );
        // check for enter key on menu button and menu parents
        $( $this.btn ).keydown( function ( e ) {
            var ev = e || event;
            if ( ev.keyCode == 13 ) {
                e.preventDefault( );
                $this._menuToggle( );
            }
        } );
        $this.mobileNav.on( 'keydown', '.' + prefix + '_item', function ( e ) {
            var ev = e || event;
            if ( ev.keyCode == 13 ) {
                e.preventDefault( );
                $this._itemClick( $( e.target ) );
            }
        } );
        // allow links clickable within parent tags if set
        if ( settings.allowParentLinks && settings.nestedParentLinks ) {
            $( '.' + prefix + '_item a' ).click( function ( e ) {
                e.stopImmediatePropagation( );
            } );
        }
    };
    //toggle menu
    Plugin.prototype._menuToggle = function ( el ) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;
        if ( btn.hasClass( prefix + '_collapsed' ) ) {
            btn.removeClass( prefix + '_collapsed' );
            btn.addClass( prefix + '_open' );
        } else {
            btn.removeClass( prefix + '_open' );
            btn.addClass( prefix + '_collapsed' );
        }
        btn.addClass( prefix + '_animating' );
        $this._visibilityToggle( mobileNav, btn.parent( ), true, btn );
    };
    // toggle clicked items
    Plugin.prototype._itemClick = function ( el ) {
        var $this = this;
        var settings = $this.settings;
        var data = el.data( "menu" );
        if ( ! data ) {
            data = { };
            data.arrow = el.children( '.' + prefix + '_arrow' );
            data.ul = el.next( 'ul' );
            data.parent = el.parent( );
            //Separated parent link structure
            if ( data.parent.hasClass( prefix + '_parent-link' ) ) {
                data.parent = el.parent( ).parent( );
                data.ul = el.parent( ).next( 'ul' );
            }
            el.data( "menu", data );
        }
        if ( data.parent.hasClass( prefix + '_collapsed' ) ) {
            data.arrow.html( settings.openedSymbol );
            data.parent.removeClass( prefix + '_collapsed' );
            data.parent.addClass( prefix + '_open' );
            data.parent.addClass( prefix + '_animating' );
            $this._visibilityToggle( data.ul, data.parent, true, el );
        } else {
            data.arrow.html( settings.closedSymbol );
            data.parent.addClass( prefix + '_collapsed' );
            data.parent.removeClass( prefix + '_open' );
            data.parent.addClass( prefix + '_animating' );
            $this._visibilityToggle( data.ul, data.parent, true, el );
        }
    };
    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function ( el, parent, animate, trigger, init ) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems( el );
        var duration = 0;
        if ( animate )
            duration = settings.duration;
        if ( el.hasClass( prefix + '_hidden' ) ) {
            el.removeClass( prefix + '_hidden' );
            el.slideDown( duration, settings.easingOpen, function ( ) {

                $( trigger ).removeClass( prefix + '_animating' );
                $( parent ).removeClass( prefix + '_animating' );
                //Fire open callback
                if ( ! init ) {
                    settings.open( trigger );
                }
            } );
            el.attr( 'aria-hidden', 'false' );
            items.attr( 'tabindex', '0' );
            $this._setVisAttr( el, false );
        } else {
            el.addClass( prefix + '_hidden' );
            el.slideUp( duration, this.settings.easingClose, function ( ) {
                el.attr( 'aria-hidden', 'true' );
                items.attr( 'tabindex', '-1' );
                $this._setVisAttr( el, true );
                el.hide( ); //jQuery 1.7 bug fix

                $( trigger ).removeClass( prefix + '_animating' );
                $( parent ).removeClass( prefix + '_animating' );
                //Fire init or close callback
                if ( ! init )
                    settings.close( trigger );
                else if ( trigger == 'init' )
                    settings.init( );
            } );
        }
    };
    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function ( el, hidden ) {
        var $this = this;
        // select all parents that aren't hidden
        var nonHidden = el.children( 'li' ).children( 'ul' ).not( '.' + prefix + '_hidden' );
        // iterate over all items setting appropriate tags
        if ( ! hidden ) {
            nonHidden.each( function ( ) {
                var ul = $( this );
                ul.attr( 'aria-hidden', 'false' );
                var items = $this._getActionItems( ul );
                items.attr( 'tabindex', '0' );
                $this._setVisAttr( ul, hidden );
            } );
        } else {
            nonHidden.each( function ( ) {
                var ul = $( this );
                ul.attr( 'aria-hidden', 'true' );
                var items = $this._getActionItems( ul );
                items.attr( 'tabindex', '-1' );
                $this._setVisAttr( ul, hidden );
            } );
        }
    };
    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function ( el ) {
        var data = el.data( "menu" );
        if ( ! data ) {
            data = { };
            var items = el.children( 'li' );
            var anchors = items.find( 'a' );
            data.links = anchors.add( items.find( '.' + prefix + '_item' ) );
            el.data( "menu", data );
        }
        return data.links;
    };
    Plugin.prototype._outlines = function ( state ) {
        if ( ! state ) {
            $( '.' + prefix + '_item, .' + prefix + '_btn' ).css( 'outline', 'none' );
        } else {
            $( '.' + prefix + '_item, .' + prefix + '_btn' ).css( 'outline', '' );
        }
    };
    Plugin.prototype.toggle = function ( ) {
        var $this = this;
        $this._menuToggle( );
    };
    Plugin.prototype.open = function ( ) {
        var $this = this;
        if ( $this.btn.hasClass( prefix + '_collapsed' ) ) {
            $this._menuToggle( );
        }
    };
    Plugin.prototype.close = function ( ) {
        var $this = this;
        if ( $this.btn.hasClass( prefix + '_open' ) ) {
            $this._menuToggle( );
        }
    };
    $.fn[mobileMenu] = function ( options ) {
        var args = arguments;
        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if ( options === undefined || typeof options === 'object' ) {
            return this.each( function ( ) {

                // Only allow the plugin to be instantiated once due to methods
                if ( ! $.data( this, 'plugin_' + mobileMenu ) ) {

                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    $.data( this, 'plugin_' + mobileMenu, new Plugin( this, options ) );
                }
            } );
            // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if ( typeof options === 'string' && options[0] !== '_' && options !== 'init' ) {

            // Cache the method call to make it possible to return a value
            var returns;
            this.each( function ( ) {
                var instance = $.data( this, 'plugin_' + mobileMenu );
                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if ( instance instanceof Plugin && typeof instance[options] === 'function' ) {

                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            } );
            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
}( jQuery, document, window ) );

var ww;
var adjustMenu = function ( ) {
    ww = document.body.clientWidth || 0;
    if ( ww < 768 ) {
        $( ".toggleMenu" ).css( "display", "inline-block" );
        if ( ! $( ".toggleMenu" ).hasClass( "active" ) ) {
            $( ".nav" ).hide( );
        } else {
            $( ".nav" ).show( );
        }
        $( ".nav li" ).unbind( "mouseenter mouseleave" );
        $( ".nav li a.parent" ).unbind( "click" ).bind( "click", function ( e ) {
            e.preventDefault( );
            $( this ).parent( "li" ).toggleClass( "hover" );
        } );
    } else if ( ww >= 768 ) {
        $( ".toggleMenu" ).css( "display", "none" );
        $( ".nav" ).show( );
        $( ".nav li" ).removeClass( "hover" );
        $( ".nav li a" ).unbind( "click" );
        $( ".nav li" ).unbind( "mouseenter mouseleave" ).bind( "mouseenter mouseleave", function ( ) {
            $( this ).toggleClass( "hover" );
        } );
    }
};

jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend( jQuery.easing, { def: "easeOutQuad", swing: function ( a, b, c, d, e ) {
        return jQuery.easing[jQuery.easing.def]( a, b, c, d, e );
    }, easeInQuad: function ( a, b, c, d, e ) {
        return d * ( b /= e ) * b + c;
    }, easeOutQuad: function ( a, b, c, d, e ) {
        return - d * ( b /= e ) * ( b - 2 ) + c;
    }, easeInOutQuad: function ( a, b, c, d, e ) {
        return( b /= e / 2 ) < 1 ? d / 2 * b * b + c : - d / 2 * ( -- b * ( b - 2 ) - 1 ) + c;
    }, easeInCubic: function ( a, b, c, d, e ) {
        return d * ( b /= e ) * b * b + c;
    }, easeOutCubic: function ( a, b, c, d, e ) {
        return d * ( ( b = b / e - 1 ) * b * b + 1 ) + c;
    }, easeInOutCubic: function ( a, b, c, d, e ) {
        return( b /= e / 2 ) < 1 ? d / 2 * b * b * b + c : d / 2 * ( ( b -= 2 ) * b * b + 2 ) + c;
    }, easeInQuart: function ( a, b, c, d, e ) {
        return d * ( b /= e ) * b * b * b + c;
    }, easeOutQuart: function ( a, b, c, d, e ) {
        return - d * ( ( b = b / e - 1 ) * b * b * b - 1 ) + c;
    }, easeInOutQuart: function ( a, b, c, d, e ) {
        return( b /= e / 2 ) < 1 ? d / 2 * b * b * b * b + c : - d / 2 * ( ( b -= 2 ) * b * b * b - 2 ) + c;
    }, easeInQuint: function ( a, b, c, d, e ) {
        return d * ( b /= e ) * b * b * b * b + c;
    }, easeOutQuint: function ( a, b, c, d, e ) {
        return d * ( ( b = b / e - 1 ) * b * b * b * b + 1 ) + c;
    }, easeInOutQuint: function ( a, b, c, d, e ) {
        return( b /= e / 2 ) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ( ( b -= 2 ) * b * b * b * b + 2 ) + c;
    }, easeInSine: function ( a, b, c, d, e ) {
        return - d * Math.cos( b / e * ( Math.PI / 2 ) ) + d + c;
    }, easeOutSine: function ( a, b, c, d, e ) {
        return d * Math.sin( b / e * ( Math.PI / 2 ) ) + c;
    }, easeInOutSine: function ( a, b, c, d, e ) {
        return - d / 2 * ( Math.cos( Math.PI * b / e ) - 1 ) + c;
    }, easeInExpo: function ( a, b, c, d, e ) {
        return 0 == b ? c : d * Math.pow( 2, 10 * ( b / e - 1 ) ) + c;
    }, easeOutExpo: function ( a, b, c, d, e ) {
        return b == e ? c + d : d * ( - Math.pow( 2, - 10 * b / e ) + 1 ) + c;
    }, easeInOutExpo: function ( a, b, c, d, e ) {
        return 0 == b ? c : b == e ? c + d : ( b /= e / 2 ) < 1 ? d / 2 * Math.pow( 2, 10 * ( b - 1 ) ) + c : d / 2 * ( - Math.pow( 2, - 10 * -- b ) + 2 ) + c;
    }, easeInCirc: function ( a, b, c, d, e ) {
        return - d * ( Math.sqrt( 1 - ( b /= e ) * b ) - 1 ) + c;
    }, easeOutCirc: function ( a, b, c, d, e ) {
        return d * Math.sqrt( 1 - ( b = b / e - 1 ) * b ) + c;
    }, easeInOutCirc: function ( a, b, c, d, e ) {
        return( b /= e / 2 ) < 1 ? - d / 2 * ( Math.sqrt( 1 - b * b ) - 1 ) + c : d / 2 * ( Math.sqrt( 1 - ( b -= 2 ) * b ) + 1 ) + c;
    }, easeInElastic: function ( a, b, c, d, e ) {
        var f = 1.70158, g = 0, h = d;
        if ( 0 == b )
            return c;
        if ( 1 == ( b /= e ) )
            return c + d;
        if ( g || ( g = .3 * e ), h < Math.abs( d ) ) {
            h = d;
            var f = g / 4
        } else
            var f = g / ( 2 * Math.PI ) * Math.asin( d / h );
        return - ( h * Math.pow( 2, 10 * ( b -= 1 ) ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) ) + c
    }, easeOutElastic: function ( a, b, c, d, e ) {
        var f = 1.70158, g = 0, h = d;
        if ( 0 == b )
            return c;
        if ( 1 == ( b /= e ) )
            return c + d;
        if ( g || ( g = .3 * e ), h < Math.abs( d ) ) {
            h = d;
            var f = g / 4
        } else
            var f = g / ( 2 * Math.PI ) * Math.asin( d / h );
        return h * Math.pow( 2, - 10 * b ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) + d + c
    }, easeInOutElastic: function ( a, b, c, d, e ) {
        var f = 1.70158, g = 0, h = d;
        if ( 0 == b )
            return c;
        if ( 2 == ( b /= e / 2 ) )
            return c + d;
        if ( g || ( g = e * .3 * 1.5 ), h < Math.abs( d ) ) {
            h = d;
            var f = g / 4
        } else
            var f = g / ( 2 * Math.PI ) * Math.asin( d / h );
        return 1 > b ? - .5 * h * Math.pow( 2, 10 * ( b -= 1 ) ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) + c : .5 * h * Math.pow( 2, - 10 * ( b -= 1 ) ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) + d + c;
    }, easeInBack: function ( a, b, c, d, e, f ) {
        return void 0 == f && ( f = 1.70158 ), d * ( b /= e ) * b * ( ( f + 1 ) * b - f ) + c;
    }, easeOutBack: function ( a, b, c, d, e, f ) {
        return void 0 == f && ( f = 1.70158 ), d * ( ( b = b / e - 1 ) * b * ( ( f + 1 ) * b + f ) + 1 ) + c;
    }, easeInOutBack: function ( a, b, c, d, e, f ) {
        return void 0 == f && ( f = 1.70158 ), ( b /= e / 2 ) < 1 ? d / 2 * b * b * ( ( ( f *= 1.525 ) + 1 ) * b - f ) + c : d / 2 * ( ( b -= 2 ) * b * ( ( ( f *= 1.525 ) + 1 ) * b + f ) + 2 ) + c;
    }, easeInBounce: function ( a, b, c, d, e ) {
        return d - jQuery.easing.easeOutBounce( a, e - b, 0, d, e ) + c;
    }, easeOutBounce: function ( a, b, c, d, e ) {
        return( b /= e ) < 1 / 2.75 ? d * 7.5625 * b * b + c : 2 / 2.75 > b ? d * ( 7.5625 * ( b -= 1.5 / 2.75 ) * b + .75 ) + c : 2.5 / 2.75 > b ? d * ( 7.5625 * ( b -= 2.25 / 2.75 ) * b + .9375 ) + c : d * ( 7.5625 * ( b -= 2.625 / 2.75 ) * b + .984375 ) + c;
    }, easeInOutBounce: function ( a, b, c, d, e ) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce( a, 2 * b, 0, d, e ) + c : .5 * jQuery.easing.easeOutBounce( a, 2 * b - e, 0, d, e ) + .5 * d + c;
    } } );

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

    // 検索用UI
    new UISearch( document.getElementById( 'sb-search' ) );

    // @todo delete
    $( ".colorboxEx" ).justifiedGallery( {
        rowHeight: 165,
        maxRowHeight: 0,
        margins: 5,
        rel: 'colorboxEx',
        lastRow: 'nojustify',
        fixedHeight: false,
        captions: true,
        randomize: false
    } )
//    .magnificPopup( {
//        delegate: 'a',
//        type: 'image',
//        closeOnContentClick: false,
//        closeBtnInside: false,
//        mainClass: 'mfp-with-zoom mfp-img-mobile',
//        gallery: {
//            enabled: true
//        },
//        zoom: {
//            enabled: true,
//            duration: 300, // don't forget to change the duration also in CSS
//            opener: function ( element ) {
//                return element.find( 'img' );
//            }
//        }
//    } )
        ;
    // #delete

    // メニューナビゲーション
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

    // @todo delete
    // lightbox2 用処理
    // ページ内のすべてのaタグに繰り返し処理
//    $('.post-entry').find("a[href$='.jpg']").each(function() {
//        //aタグ内にimgタグがあるか？
//        var $this = $(this);
//        var href = $this.attr("href");
//        
//        if( $this.find('img').length && href.match(/(\.)(gif|jpg|jpeg|png)/g)) {
//            $this.attr( "data-lightbox", "image-1" ); // 画像リンクの場合だけ属性を追加する
//        }
//    });
    // #delete
} );
