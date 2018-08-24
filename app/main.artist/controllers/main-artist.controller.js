(function () {
    'use strict';

    angular
        .module('guitarMaster')
        .controller('ArtistController', ArtistController);

        ArtistController.$inject = [
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

    function ArtistController(
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
        vm.getArtist = getArtist;
        vm.search = search;

        // Activates controller
        activate();

        // Methods declaration //
        // Activates controller
        function activate() {
            // openSong();
        }

       
        function getArtist(uri){
            guitarPartyService.getArtistById(uri).then(function (response) {
                console.log(response)
            });
        }

        function search(){
            var params = vm.searchBox;
            guitarPartyService.getArtists(params).then(function (response) {
                vm.result = response.objects;
             });
        }
    }
})();