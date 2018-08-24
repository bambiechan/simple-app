(function () {
    'use strict';

    // Setup app routing configuration
    angular
        .module('guitarMaster')
        .config(RouteConfig);

    RouteConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];

    function RouteConfig($stateProvider,
        $urlRouterProvider,
        $locationProvider) {

        $locationProvider.hashPrefix('');
        $stateProvider
            .state('main', {
                abstract: true,
                url: '/',
                cache: false,
                controller: 'MainController',
                controllerAs: 'mainCtrl',
                templateUrl: 'app/main/views/main.view.html?v=' + Date.now().toString()
            })
            .state('main.home', {
                url: 'main',
                controller: 'MainController',
                controllerAs: 'mainCtrl',
                templateUrl: 'app/main.home/views/main-home.view.html?v=' + Date.now().toString()
            })

            .state('main.artist', {
                url: 'main/artist',
                controller: 'ArtistController',
                controllerAs: 'artistCtrl',
                templateUrl: 'app/main.artist/views/main-artist.view.html?v=' + Date.now().toString(),
                params: {
                    id: ''
                }
            })

            .state('main.title', {
                url: 'main/title',
                controller: 'TitleController',
                controllerAs: 'titleCtrl',
                templateUrl: 'app/main.title/views/main-title.view.html?v=' + Date.now().toString(),
                params: {
                    id: ''
                }
            })

            // .state('main.users', {
            //     url: 'main/users',
            //     controller: 'UsersController',
            //     controllerAs: 'usersCtrl',
            //     templateUrl: 'app/main.user-management.users/views/users.view.html?v=' + Date.now().toString(),
            //     params: {
            //         loadUsers: false,
            //         userList: null
            //     }
            // })
            // .state('main.users-details', {
            //     url: 'main/users/details/:keycloakUserId',
            //     controller: 'UserDetailsController',
            //     controllerAs: 'detailCtrl',
            //     templateUrl: 'app/main.user-management.users.details/views/users-detail.view.html?v=' + Date.now().toString(),
            //     params: {
            //         keycloakUserId: '',
            //         hasLoadedUsers: false,
            //         userList: null
            //     }
            // })
            // .state('main.permissions', {
            //     url: 'main/permissions',
            //     controller: 'PermissionsController',
            //     controllerAs: 'permCtrl',
            //     templateUrl: 'app/main.user-management.permissions/views/permissions.view.html?v=' + Date.now().toString()
            // })
            // .state('main.security-group', {
            //     url: 'main/securitygroups',
            //     controller: 'SecurityGroupsController',
            //     controllerAs: 'securityGroupsCtrl',
            //     templateUrl: 'app/main.security-group/views/security-groups.view.html?v=' + Date.now().toString()
            // })
            // .state('main.security-group-details', {
            //     url: 'main/securitygroups/details/:id',
            //     controller: 'SecurityGroupDetailsController',
            //     controllerAs: 'securityGroupDetailsCtrl',
            //     templateUrl: 'app/main.security-group.details/views/security-group-details.view.html?v=' + Date.now().toString(),
            //     params: {
            //         id: ''
            //     }
            // });

        // Redirect to default page(Main)
        $urlRouterProvider.otherwise('/main');
    }
})();