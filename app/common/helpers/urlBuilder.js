(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .factory('urlBuilder', urlBuilder);

    urlBuilder.$inject = [
        'Constants',
        'Values'
    ];

    function urlBuilder(
        Constants,
        Values) {

        return {
            getSongs: getSongs,
        };

        function getSongs() {
            var baseUrl = Values.appSettings.API_URL;
            return baseUrl + Constants.api.GET_SONGS;
        }
    }
})();