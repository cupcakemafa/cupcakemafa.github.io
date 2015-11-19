var selectnav = function ( ) {
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
        d.element = b;
        d.$element = a( b );
        d.tabs = d.$element.children( );
        d.options = a.extend( { }, a.fn.mtabs.defaults, c );
        d.current_tab = 0;
        d.init( );
    };
    b.prototype = { init: function ( ) {
            var a = this;
            a.tabs.length && ( a.build( ), a.buildTabMenu( ) );
        }, build: function ( ) {
            var b = this, c = b.options, d = c.tab_text_el, e = c.container_class;
            b.tab_names = [ ], b.$wrapper = b.$element.wrapInner( '<div class="' + e + '" />' ).find( "." + e ), b.tabs.wrapAll( '<div class="' + c.tabs_container_class + '" />' ), b.tabs.each( function ( c, e ) {
                var f, g = a( e ), h = d;
                f = g.find( h ).filter( ":first" ).hide( ).text( ), b.tab_names.push( f );
            } ), a.isFunction( c.onReady ) && c.onReady.call( b.element );
        }, buildTabMenu: function ( ) {
            for ( var b, c = this, d = c.options, e = d.tabsmenu_el, f = c.tab_names, g = "<" + e + ' class="' + d.tabsmenu_class + '">', h = 0, i = f.length, j = function ( ) {
                var a = arguments;
                return d.tmpl.tabsmenu_tab.replace( /\{[0-9]\}/g, function ( b ) {
                    var c = Number( b.replace( /\D/g, "" ) );
                    return a[c] || "";
                } );
            }; i > h; h++ )
                g += j( h + 1, f[h] );
            g += "</" + e + ">", c.$tabs_menu = a( g ).prependTo( c.$wrapper ), b = c.$tabs_menu.find( ":first" )[0].nodeName.toLowerCase( ), c.$tabs_menu.on( "click", b, function ( b ) {
                var d = a( this ), e = d.index( );
                c.show( e ), b.preventDefault( );
            } ).find( ":first" ).trigger( "click" );
        }, show: function ( b ) {
            var c = this, d = c.options, e = d.active_tab_class;
            c.tabs.hide( ).filter( ":eq(" + b + ")" ).show( ),
                c.$tabs_menu.children( ).removeClass( e ).filter( ":eq(" + b + ")" ).addClass( e ),
                a.isFunction( d.onTabSelect ) && b !== c.current_tab && d.onTabSelect.call( c.element, b ),
                c.current_tab = b;
        }, destroy: function ( ) {
            var a = this, b = a.options.tab_text_el;
            a.$tabs_menu.remove( ),
                a.tabs.unwrap( ).unwrap( ),
                a.tabs.removeAttr( "style" ),
                a.tabs.children( b + ":first" ).removeAttr( "style" ),
                a.$element.removeData( "mtabs" );
        } }, a.fn.mtabs = function ( c, d ) {
        return this.each( function ( ) {
            var e, f = a( this ), g = f.data( "mtabs" );
            e = "object" === typeof c && c,
                g || f.data( "mtabs", g = new b( this, e ) ),
                "string" === typeof c && g[c]( d );
        } );
    }, a.fn.mtabs.defaults = {
        container_class: "tabs",
        tabs_container_class: "tabs-content",
        active_tab_class: "active-tab",
        tab_text_el: "h1, h2, h3, h4, h5, h6",
        tabsmenu_class: "tabs-menu",
        tabsmenu_el: "ul",
        tmpl: { tabsmenu_tab: '<li class="tab-{0}"><span>{1}</span></li>' },
        onTabSelect: null
    };
}( window.jQuery, window, document );

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
 * @param window
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
                        event.returnValue = false;
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.stopPropagation = function ( ) {
                        event.cancelBubble = true;
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
                if ( registry[index].target === this
                    && registry[index].type === type
                    && registry[index].listener === listener ) {
                    return this.detachEvent( "on" + type, registry.splice( index, 1 )[0].__listener );
                }
            }
        } );
        addToPrototype( "dispatchEvent", function ( eventObject ) {
            try {
                return this.fireEvent( "on" + eventObject.type, eventObject );
            } catch ( error ) {
                for ( var index = 0, length = registry.length; index < length; ++ index ) {
                    if ( registry[index].target === this && registry[index].type == eventObject.type ) {
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
                check = true;
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
    };

    // add to global namespace
    window.UISearch = UISearch;
} )( window );

/**
 * author Remy Sharp
 * @param $
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
( function ( $ ) {
    function getViewportHeight( ) {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;
        if ( ( mode || ! $.support.boxModel ) ) { // IE, Gecko
            height = ( mode === 'CSS1Compat' ) ?
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
        b.hasClass( "inview" ) && (
            b.css( { backgroundPosition: f( 0, d, e, 500, 0 ) } ),
            c.css( { backgroundPosition: f( 50, d, e, 400, .2 ) } ) ),
            $( "#pixels" ).html( e );
    }
    var a = $( window ), b = $( "#intro" ), c = $( "#intro .bg1" ), d = a.height( );
    $( "#intro" ).bind( "inview", function ( a, b ) {
        1 === b ? $( this ).addClass( "inview" ) : $( this ).removeClass( "inview" );
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
    // default settings object.
    var defaults = {
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
        prefix = 'slicknav'
        ;

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

        if ( settings.parentTag === 'a' ) {
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
            if ( ev.keyCode === 13 ) {
                e.preventDefault( );
                $this._menuToggle( );
            }
        } );
        $this.mobileNav.on( 'keydown', '.' + prefix + '_item', function ( e ) {
            var ev = e || event;
            if ( ev.keyCode === 13 ) {
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
                else if ( trigger === 'init' )
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
        return 0 === b ? c : d * Math.pow( 2, 10 * ( b / e - 1 ) ) + c;
    }, easeOutExpo: function ( a, b, c, d, e ) {
        return b === e ? c + d : d * ( - Math.pow( 2, - 10 * b / e ) + 1 ) + c;
    }, easeInOutExpo: function ( a, b, c, d, e ) {
        return 0 === b ? c : b === e ? c + d : ( b /= e / 2 ) < 1 ? d / 2 * Math.pow( 2, 10 * ( b - 1 ) ) + c : d / 2 * ( - Math.pow( 2, - 10 * -- b ) + 2 ) + c;
    }, easeInCirc: function ( a, b, c, d, e ) {
        return - d * ( Math.sqrt( 1 - ( b /= e ) * b ) - 1 ) + c;
    }, easeOutCirc: function ( a, b, c, d, e ) {
        return d * Math.sqrt( 1 - ( b = b / e - 1 ) * b ) + c;
    }, easeInOutCirc: function ( a, b, c, d, e ) {
        return( b /= e / 2 ) < 1 ? - d / 2 * ( Math.sqrt( 1 - b * b ) - 1 ) + c : d / 2 * ( Math.sqrt( 1 - ( b -= 2 ) * b ) + 1 ) + c;
    }, easeInElastic: function ( a, b, c, d, e ) {
        var f = 1.70158, g = 0, h = d;
        if ( 0 === b )
            return c;
        if ( 1 === ( b /= e ) )
            return c + d;
        if ( g || ( g = .3 * e ), h < Math.abs( d ) ) {
            h = d;
            var f = g / 4;
        } else
            var f = g / ( 2 * Math.PI ) * Math.asin( d / h );
        return - ( h * Math.pow( 2, 10 * ( b -= 1 ) ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) ) + c;
    }, easeOutElastic: function ( a, b, c, d, e ) {
        var f = 1.70158, g = 0, h = d;
        if ( 0 === b )
            return c;
        if ( 1 === ( b /= e ) )
            return c + d;
        if ( g || ( g = .3 * e ), h < Math.abs( d ) ) {
            h = d;
            var f = g / 4;
        } else
            var f = g / ( 2 * Math.PI ) * Math.asin( d / h );
        return h * Math.pow( 2, - 10 * b ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) + d + c;
    }, easeInOutElastic: function ( a, b, c, d, e ) {
        var f = 1.70158, g = 0, h = d;
        if ( 0 === b )
            return c;
        if ( 2 === ( b /= e / 2 ) )
            return c + d;
        if ( g || ( g = e * .3 * 1.5 ), h < Math.abs( d ) ) {
            h = d;
            var f = g / 4;
        } else
            var f = g / ( 2 * Math.PI ) * Math.asin( d / h );
        return 1 > b ? - .5 * h * Math.pow( 2, 10 * ( b -= 1 ) ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) + c : .5 * h * Math.pow( 2, - 10 * ( b -= 1 ) ) * Math.sin( ( b * e - f ) * 2 * Math.PI / g ) + d + c;
    }, easeInBack: function ( a, b, c, d, e, f ) {
        return void 0 === f && ( f = 1.70158 ), d * ( b /= e ) * b * ( ( f + 1 ) * b - f ) + c;
    }, easeOutBack: function ( a, b, c, d, e, f ) {
        return void 0 === f && ( f = 1.70158 ), d * ( ( b = b / e - 1 ) * b * ( ( f + 1 ) * b + f ) + 1 ) + c;
    }, easeInOutBack: function ( a, b, c, d, e, f ) {
        return void 0 === f && ( f = 1.70158 ), ( b /= e / 2 ) < 1 ? d / 2 * b * b * ( ( ( f *= 1.525 ) + 1 ) * b - f ) + c : d / 2 * ( ( b -= 2 ) * b * ( ( ( f *= 1.525 ) + 1 ) * b + f ) + 2 ) + c;
    }, easeInBounce: function ( a, b, c, d, e ) {
        return d - jQuery.easing.easeOutBounce( a, e - b, 0, d, e ) + c;
    }, easeOutBounce: function ( a, b, c, d, e ) {
        return( b /= e ) < 1 / 2.75 ? d * 7.5625 * b * b + c : 2 / 2.75 > b ? d * ( 7.5625 * ( b -= 1.5 / 2.75 ) * b + .75 ) + c : 2.5 / 2.75 > b ? d * ( 7.5625 * ( b -= 2.25 / 2.75 ) * b + .9375 ) + c : d * ( 7.5625 * ( b -= 2.625 / 2.75 ) * b + .984375 ) + c;
    }, easeInOutBounce: function ( a, b, c, d, e ) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce( a, 2 * b, 0, d, e ) + c : .5 * jQuery.easing.easeOutBounce( a, 2 * b - e, 0, d, e ) + .5 * d + c;
    }
} );

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

    // top の投稿サムネイル画像を整列
    $( ".colorboxEx" )
        .justifiedGallery( {
            rowHeight: 165,
            //maxRowHeight: 0,
            margins: 5,
            //rel: 'colorboxEx',
            lastRow: 'justify',
            fixedHeight: false,
            captions: false
                //randomize: false
        } ).on( 'jg.complete', function ( e ) {
        $( this ).show();
    } );

    // メニューナビゲーション
    $( '#navigation' ).slicknav( {
        prependTo: '.main-content-wrapper'
    } );
    // 画面サイズがタブレットより大きい場合は slicknav を非表示にします。
    // bootstrap.css を使用
    $( '.slicknav_menu' ).eq( 0 ).addClass( 'hidden-sm hidden-md hidden-lg' );

    // 外部リンクに_blank, class, 属性付与
    // 2015/8/25追加
    // http://datsugoku.hatenablog.jp/entry/2014/05/11/205638
    $( "a[href^=http]" )
        .not( '.external' )
        .not( '[href*="' + location.hostname + '"]' )
        //.not( ":has(img)" )
        .attr( { target: "_blank", rel: "nofollow" } )
        .addClass( "exLink" );

    // ページトップへ戻るボタンの表示ロジック
    // 2015/8/25追加
    $( window ).scroll( function ( ) {
        var s = $( this ).scrollTop( );
        var m = 300;
        if ( s > m ) {
            $( "#scroll-top" ).fadeIn( 'slow' );
        } else if ( s < m ) {
            $( "#scroll-top" ).fadeOut( 'slow' );
        }
    } );

    // オーバーレイ広告がある場合のページトップボタンの位置制御
    if ( $( '#nend_adspace_160521_434944' ).length ) {
        $( "#scroll-top" ).css( 'bottom', '60px' );
    }

    // 投稿シングルページの前次ページナビ
    // 2015/9/8 テンプレートから抜粋
//    var newerLink = $( 'a.newer-link' );
//    if ( newerLink.length ) {
//        $.get( newerLink.eq(0).attr( 'href' ), function ( newer_data ) {
//            newerLink.html( '<strong>Next</strong> <span>' + $( newer_data ).find( '.post h1.post-title' ).text( ) + '</span>' );
//        }, "html" );
//    }
//    var olderLink = $( 'a.older-link' );
//    if ( olderLink.length ) {
//        $.get( olderLink.eq(0).attr( 'href' ), function ( older_data ) {
//            olderLink.html( '<strong>Previous</strong> <span>' + $( older_data ).find( '.post h1.post-title' ).text( ) + '</span>' );
//        }, "html" );
//    }

    // トップページ以外はヘッダーメニューを隠します。
    var path = $( '<a>', { href: location.href } )[0].pathname,
        $nav = $( 'nav' ),
        $header = $nav.find('#header'),
        $search = $('#sb-search');
        
    if ( path === '/' ) {
        if ( $nav.hasClass( 'no-padding' ) ) {
            $nav.removeClass( 'no-padding' );
            $header.removeClass('hide');
            $search.removeClass('hide');
        }
    }
    else {
        if ( !$nav.hasClass( 'no-padding' ) ) {
            $nav.addClass( 'no-padding' );
            $header.addClass('hide');
            $search.addClass('hide');
        }
    }
} );
