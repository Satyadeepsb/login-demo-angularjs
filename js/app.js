var app = angular.module("myApp",[ "ui.router"]);
app.config(function ($urlRouterProvider, $stateProvider,$httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.put = {'Content-Type':'application/json'};
    //default page
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: 'html/login.html',
            controller: 'LoginController',
            controllerAs: 'ctrl',
        })
        .state('welcome', {
            url: "/welcome",
            templateUrl: 'html/welcome.html',
            controller: 'WelcomeController',
            controllerAs: 'ctrl',
        });
});