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
            numLoadings++;
            $rootScope.$broadcast(Constants.LOADER_SHOW);

            return config || $q.when(config);
        }

        function response(data) {
            if ((--numLoadings) === 0) {
                $rootScope.$broadcast(Constants.LOADER_HIDE);
            }
            return data || $q.when(data);
        }

        function responseError(error) {
            if (!(--numLoadings)) {
                $rootScope.$broadcast(Constants.LOADER_HIDE);
            }
            return $q.reject(error);
        }
    }

    function HttpConfig($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
        //$httpProvider.defaults.withCredentials = true; !temp

        // delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }
})();