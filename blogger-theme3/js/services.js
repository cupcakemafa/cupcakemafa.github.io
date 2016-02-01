angular.module( 'starter.services', [ ] )
    /**
     * アプリユーティリティ
     **/
    .factory( 'UtilService', function () {
        'use strict';

        // Prototype
        var is,
            isUrl,
            isJSON,
            getRand,
            findObj,
            openUrl,
            arrayShuffle,
            findArrayIndexById,
            scrollTop;

        /**
         * @link http://qiita.com/Layzie/items/465e715dae14e2f601de
         * @param {string} type チェックする型
         *        String, Number, Boolean, DateError,
         *        Array, Function, RegExp, Object
         * @param {mixed} obj チェック対象
         * @returns {Boolean}
         * is('String', 'hoge'); // true
         * is('String', new String('hoge')); // true
         **/
        is = function ( type, obj ) {
            var clas = Object.prototype.toString.call( obj ).slice( 8, - 1 );
            console.log( 'clas', clas );
            return obj !== undefined && obj !== null && clas === type;
        };

        /**
         * 文字列がURLかチェック
         * @param {string} urlStr
         * @returns {Boolean}
         */
        isUrl = function ( urlStr ) {
            if ( urlStr ) {
                if ( urlStr.lastIndexOf( 'http://', 0 ) === 0 ||
                    urlStr.lastIndexOf( 'https://', 0 ) === 0 ) {
                    return true;
                }
            }
            return false;
        };

        /**
         * 文字列がJSONかチェック
         * @param {string} str
         * @returns {Boolean}
         */
        isJSON = function ( str ) {
            try {
                JSON.parse( str );
            } catch ( e ) {
                return false;
            }
            return true;
        };

        /**
         * 最大, 最小の範囲内でランダム値を取得
         * @param {int|string} min
         * @param {int|string} max
         * @link https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
         **/
        getRand = function ( min, max ) {
            var _max = parseInt( max, 10 ),
                _min = parseInt( min, 10 );
            return Math.floor( Math.random() * ( _max - _min + 1 ) ) + _min;
        };

        /**
         * リスト配列内にセットされたオブジェクトの検索
         * @param array 検索対象配列
         * @param findKey 検索キー
         * @param value 検索する値
         **/
        findObj = function ( array, findKey, value ) {
            if ( this.is( 'Array', array ) ) {
                for ( var index = 0, l = array.length; index < l; index ++ ) {
                    if ( array[index][findKey] == value ) {
                        return index;
                    }
                }
            }
            return false;
        };

        /**
         * 配列のシャッフル処理
         * @param Array array
         **/
        arrayShuffle = function ( array ) {
            var m = array.length,
                t, i;
            // While there remain elements to shuffle…
            while ( m ) {

                // Pick a remaining element…
                i = Math.floor( Math.random() * m -- );

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        };

        /**
         * 配列内のIDに一致するアイテムを取得するコールバックメソッド
         * @param int|String id 検索対象ID
         * @param Array targetArray 検索対象配列
         **/
        findArrayIndexById = function ( id, targetArray ) {
            var i, l, checkId;
            if ( targetArray && is( 'Array', targetArray ) ) {
                for ( i = 0, l = targetArray.length; i < l; i ++ ) {
                    id = parseInt( id, 10 );
                    checkId = parseInt( targetArray[i].id, 10 );
                    console.log( 'id', id );
                    console.log( 'checkId', checkId );
                    if ( checkId === id ) {
                        return i;
                    }
                }
            }
            return false;
        };

        /**
         * ページトップにスクロールする処理
         **/
        scrollTop = function () {
            window.scrollTo( 0, 0 );
        };

        return {
            is: is,
            isUrl: isUrl,
            isJSON: isJSON,
            getRand: getRand,
            findObj: findObj,
            arrayShuffle: arrayShuffle,
            findArrayIndexById: findArrayIndexById,
            scrollTop: scrollTop
        };
    } );