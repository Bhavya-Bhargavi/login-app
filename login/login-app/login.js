angular.module("login", []);

angular.module("login")
        .controller("loginCtrl",["$scope", function($scope){
            $scope.loginTemplate="login/login.tpl.html";
            console.log("iam login controller");
   
}]);


