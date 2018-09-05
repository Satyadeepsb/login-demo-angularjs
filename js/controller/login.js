app.controller('LoginController',function($scope,$rootScope,$state,$http,$stateParams) {
    console.log("IN CTRL");
    var ctrl = this;
    ctrl.login = function () {
        console.log("In login");
        console.log(ctrl.object);
        // Http Request
      /*  $http.post('/rest/api/login', ctrl.object).then(function (response) {

        });*/
            $state.go('welcome');
    }
});