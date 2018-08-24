(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .service('appSettingsService', appSettingsService);

    appSettingsService
        .$inject = ['$resource'];

    function appSettingsService($resource) {
        return $resource('config/app.config.json?v=' + Date.now().toString());
    }
})();