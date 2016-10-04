var root = {
    templateUrl: './root.component.html'
}

angular
    .module('root')
    .component('root', root)
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('auth/login');
    });