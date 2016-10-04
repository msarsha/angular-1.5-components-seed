var dashboard = {
  templateUrl: './dashboard.component.html'
};

angular
  .module('dashboard')
  .component('dashboard', dashboard)
  .config(function($stateProvider){
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        component: 'dashboard'
      })
  });