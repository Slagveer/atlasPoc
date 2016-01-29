'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router'
]).
config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'app.html',
            controller: function ($scope) {
                $scope.contacts = [{name: 'Alice'}, {name: 'Bob'}];
            }
        })
        .state('app.map', {
            url:'map',
            templateUrl: 'app.html',
            views: {
                "sidebar": {
                    templateUrl: "sidebar.html",
                    controller: function ($scope, $state) {
                        $scope.search = function() {
                            $state.go('app.sidebar.search');
                        },
                        $scope.searchItem = function() {
                            $state.go('app.sidebar.search');
                        }
                    }
                },
                "map": {
                    templateUrl: "map.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.map.search');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.map.search');
                        }
                    }
                }
            }
        })
        .state('app.map.search', {
            url:'search',
            templateUrl: 'app.html',
            views: {
                "sidebar": {
                    templateUrl: "sidebar.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.sidebar');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.sidebar.search');
                        }
                    }
                },
                "map": {
                    templateUrl: "map.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.map');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.map.search');
                        }
                    }
                }
            }
        })
        .state('app.sidebar', {
            url:'sidebar',
            templateUrl: 'app.html',
            views: {
                "sidebar": {
                    templateUrl: "sidebar.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            console.log($state.current.name);
                            $state.go('app.sidebar.search');
                        };
                        $scope.searchItem = function() {
                            console.log($state.current.name);
                            $state.go('app.sidebar.search.item');
                        }
                    }
                },
                "map": {
                    templateUrl: "map.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.map.search');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.map.search');
                        }
                    }
                }
            }
        })
        .state('app.sidebar.search', {
            url:'/search',
            templateUrl: 'app.html',
            views: {
                "sidebar": {
                    templateUrl: "sidebar.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.sidebar');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.sidebar.search.item');
                        }
                    }
                },
                "map": {
                    templateUrl: "map.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.map');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.map.search');
                        }
                    }
                }
            }
        })
        .state('app.sidebar.search.item', {
            url:'/item',
            templateUrl: 'app.html',
            views: {
                "details": {
                    templateUrl: "details.html",
                    controller: function ($scope, $state) {
                        //if($state.current.name === 'app.sidebar.search.item') {
                            console.log('details');
                        //}
                    }
                },
                "sidebar": {
                    templateUrl: "sidebar.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.sidebar');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.sidebar.search.item');
                        }
                    }
                },
                "map": {
                    templateUrl: "map.html",
                    controller: function ($scope, $state) {
                        console.log($state.current.name);
                        $scope.search = function() {
                            $state.go('app.map');
                        };
                        $scope.searchItem = function() {
                            $state.go('app.map.search');
                        }
                    }
                }
            }
        });
}]);
