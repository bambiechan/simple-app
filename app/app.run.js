(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .run(me);

    me.$inject = [
        'Values',
        'appSettingsService',
        '$rootScope',
        '$state'
    ];

    function me(
        Values,
        appSettingsService,
        $rootScope,
        $state) {

        activate();
console.log('hee')
        function activate() {
            $rootScope.$state = $state;
            getAppSettings();
        }

        // App Settings Funcs
        function getAppSettings() {
            return appSettingsService
                .get(onGetAppSettingsSuccess, onGetAppSettingsError);
        }

        function onGetAppSettingsSuccess(response) {
            Values.appSettings = response;
            console.log(Values)
        }

        function onGetAppSettingsError(response) {
            throw response;
        }
    }
})();