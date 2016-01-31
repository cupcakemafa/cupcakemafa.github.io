// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module( 'starter', [ 'ionic', 'starter.controllers' ] )
    .constant( 'Const', {
        'RESOURCE_SERVER_URL': '//cupcakemafa.github.io/blogger-theme3/'
    } )

    .run( function ( $ionicPlatform ) {
        $ionicPlatform.ready( function () {
        } );
    } )

    .config( function ( $stateProvider, $urlRouterProvider, Const ) {

        //var resourceServerUrl = location.protocol + '//cupcakemafa.github.io/blogger-theme3/';
        var resourceServerUrl = location.protocol + Const.RESOURCE_SERVER_URL;

        $stateProvider

            .state( 'app', {
                url: '/app',
                abstract: true,
                templateUrl: resourceServerUrl + 'templates/menu.html',
                controller: 'AppCtrl'
            } )

            .state( 'app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: '/templates/search.html'
                    }
                }
            } )

            .state( 'app.browse', {
                url: '/browse',
                views: {
                    'menuContent': {
                        templateUrl: '/templates/browse.html'
                    }
                }
            } )
            .state( 'app.playlists', {
                url: '/playlists',
                views: {
                    'menuContent': {
                        templateUrl: '/templates/playlists.html',
                        controller: 'PlaylistsCtrl'
                    }
                }
            } )

            .state( 'app.single', {
                url: '/playlists/:playlistId',
                views: {
                    'menuContent': {
                        templateUrl: '/templates/playlist.html',
                        controller: 'PlaylistCtrl'
                    }
                }
            } );
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise( '/app/playlists' );
    } );
