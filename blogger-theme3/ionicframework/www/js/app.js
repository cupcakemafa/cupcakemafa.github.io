// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module( 'starter', [ 'ionic', 'starter.services', 'starter.controllers' ] )
    .constant( 'Const', {
        'RESOURCE_SERVER_URL': '//cupcakemafa.github.io/blogger-theme3/'
    } )

    .run( function (
        $ionicPlatform,
        $rootScope,
        UtilService ) {
        'use strict';

        //デバイス初期化時
        $ionicPlatform.ready( function () {
        } );

        // ページ遷移時のチェックロジックはこちら
        $rootScope.$on( '$stateChangeStart', function ( e, toState, toParams, fromState, fromParams ) {

            $( document ).ready( function () {
                var $metaTag = $( '.meta-tag' ),
                    metaTag = '',
                    meta = [ ],
                    str = '',
                    arr = [ ],
                    i, j,
                    metaAttr,
                    setCnt = 0;
                $metaTag.each( function ( index, elm ) {
                    str = $( elm ).text();
                    //console.log( 'str[' + index + ']', str );

                    if ( str && UtilService.isJSON( str ) ) {
                        arr = JSON.parse( $( elm ).text() );
                        //console.log( 'arr', arr );
                        if ( arr.length ) {
                            for ( i = 0; i < arr.length; i ++ ) {
                                meta.push( arr[i] );
                            }
                        }
                    }

                    if ( index === ( $metaTag.length - 1 ) ) {
                        //console.log( 'meta parse finished.' );
                        //console.log( 'meta', meta );

                        if ( meta.length ) {
                            for ( i = 0; i < meta.length; i ++ ) {
                                //metaAttr = {};
                                metaAttr = '';
                                Object.keys( meta[i] ).forEach( function ( key, idx, keys ) {
                                    //console.log('meta[' + i + ']['+key+']', meta[i][key]);
                                    //metaAttr[key] = meta[i][key];
                                    if ( idx > 0 ) {
                                        metaAttr += ' ';
                                    }
                                    metaAttr += key + '="' + meta[i][key] + '"';
                                    if ( idx === ( keys.length - 1 ) ) {
                                        metaTag += '<meta ' + metaAttr + '/>';
                                        setCnt ++;
                                        if ( setCnt === meta.length ) {
                                            //console.log( 'about to set meta tag in the header' );
                                            //console.log( 'metaTag', metaTag );
                                            $( 'head' ).find( 'meta' ).last().after( metaTag );
                                            //console.log( 'check meta', $( 'head' ).html() );
                                        }
                                    }
                                } );
                            }
                        }
                    }
                } );
            } );


        } );

    } )

    .config( function ( $stateProvider, $urlRouterProvider, $locationProvider, Const ) {

        //var tplBaseUrl = location.protocol + Const.RESOURCE_SERVER_URL + 'templates/';
        var tplBaseUrl = 'templates/';

        $stateProvider
            .state( 'app', {
                url: '/app',
                abstract: true,
                templateUrl: tplBaseUrl + 'menu.html',
                controller: 'AppCtrl'
            } )
            .state( 'app.single', {
                url: '/single',
                views: {
                    'menuContent': {
                        templateUrl: tplBaseUrl + 'single.html',
                        controller: 'AppCtrl'
                    }
                }
            } );
        /*
         .state( 'app', {
         url: '/app',
         abstract: true,
         templateUrl: tplBaseUrl + 'menu.html',
         controller: 'AppCtrl'
         } )
         .state( 'app.playlists', {
         url: '/playlists',
         views: {
         'menuContent': {
         templateUrl: tplBaseUrl + 'playlists.html',
         controller: 'AppCtrl'
         }
         }
         } );
         */
//        $locationProvider.html5Mode( false ).hashPrefix( '!' );

        // if none of the above states are matched, use this as the fallback
        //$urlRouterProvider.otherwise( '/app/playlists' );
        $urlRouterProvider.otherwise( '/app/single' );
    } );
