(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .controller('MainController', MainController);

    MainController.$inject = [
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

    function MainController(
        Constants,
        Values,
        guitarPartyService) {

        // VM
        var vm = this;

        // View Model Methods
        vm.search = search;

        // Activates controller
        // activate();

        // Methods declaration //
        // Activates controller
        // function activate() {

        // }

        function search() {
            var params = vm.searchBox;

            guitarPartyService.getSongs(params).then(function (response) {
                vm.result = response.objects;
             });
        }

        // function getSong(params) {
        //     guitarPartyService.getSongs(params).then(function (response) {
        //         vm.result = response.objects;
        //      });
        // }

        // function openSong(id) {
        //     guitarPartyService.getSongById(id).then(function (response) {
        //         vm.result = response.objects;
        //      });
        // } 
    }
})();