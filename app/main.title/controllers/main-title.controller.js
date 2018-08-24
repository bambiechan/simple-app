(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .controller('TitleController', TitleController);

    TitleController.$inject = [
        'Constants',
        'Values',
        'guitarPartyService',
        '$log',
        '$rootScope',
        '$scope',
        '$filter',
        '$q',
        '$state',
        '$uibModal',
        '$window'
    ];

    function TitleController(
        Constants,
        Values,
        guitarPartyService,
        $log,
        $rootScope,
        $scope,
        $filter,
        $q,
        $state,
        $uibModal,
        $window) {

        // VM
        var vm = this;

        // Local Variables
        var userClient = {};

        // View Model Variables
        vm.searchBox = '';
        vm.result = ''

        // View Model Methods
        vm.search = search;
        vm.openSong = openSong;

        // Activates controller
        activate();

        // Methods declaration //
        // Activates controller
        function activate() {
            // openSong();
        }


        function openSong(id) {
            guitarPartyService.getSongById(id).then(function (response) {
                vm.result = [];
                vm.song = response;
            });
        }

        function search(params) {
            guitarPartyService.getSongs(params).then(function (response) {
                vm.result = response.objects;
            });
        }
    }
})();