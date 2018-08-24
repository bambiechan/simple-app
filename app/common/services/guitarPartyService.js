(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .service('guitarPartyService', guitarPartyService);

        guitarPartyService.$inject = [
        '$resource',
        '$http',
        '$log',
        '$q',
        '$cookies',
        'urlBuilder',
        'Constants',
        'Values'
    ];

    function guitarPartyService(
        $resource,
        $http,
        $log,
        $q,
        $cookies,
        urlBuilder,
        Constants,
        Values) {

        this.getSongs = getSongs;
        this.getSongById = getSongById;
        this.getArtists = getArtists;
        this.getArtistById = getArtistById;

        var headers = {
            'Guitarparty-Api-Key': Values.appSettings.GUITAR_KEY,
            'Accept': 'application/json'
        };
        var actions = {
            'get': {
                method: 'GET',
                headers: headers
            },
            'save': {
                method: 'POST',
                isArray: false,
                headers: headers
            },
            'query': {
                isArray: true,
                headers: headers
            },
            'delete': {
                method: 'DELETE',
                headers: headers,
                hasBody: true
            },
            'update': {
                method: 'POST',
                headers: headers
            },
            'put': {
                method: 'PUT',
                headers: headers
            },
            'patch': {
                method: 'PATCH',
                headers: headers
            }
        };

        function getSongs(q){
            var url = Values.appSettings.API_URL + Constants.API.GET_SONGS + '?query=' + q;
            return $resource(url, {}, actions).get().$promise;
        }

        function getSongById(id){
            var url = Values.appSettings.API_URL + Constants.API.GET_SONGS + id + '/ ';
            return $resource(url, {}, actions).get().$promise;
        }

        function getArtists(params){
            var url = Values.appSettings.API_URL + 'artists/?query=' + params;
            return $resource(url, {}, actions).get().$promise;
        }

        function getArtistById(uri){
            var url = Values.appSettings.API_URL + uri;
            return $resource(url, {}, actions).get().$promise;
        }

    }
})();