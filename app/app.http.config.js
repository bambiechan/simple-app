(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .factory('HttpInterceptor', HttpInterceptor)
        .config(HttpConfig);

    HttpInterceptor.$inject = ['$q', '$rootScope', '$cookies', 'Constants'];
    HttpConfig.$inject = ['$httpProvider'];

    function HttpInterceptor($q, $rootScope, $cookies, Constants) {
        var numLoadings = 0;
        var exports = {
            request: request,
            response: response,
            responseError: responseError
        };

        return exports;

        function request(config) {
            return config || $q.when(config);
        }

        function response(data) {
            return data || $q.when(data);
        }

        function responseError(error) {
			alert('API error');
            return $q.reject(error);
        }
    }

    function HttpConfig($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    }
})();