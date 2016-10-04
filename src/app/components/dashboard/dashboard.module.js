angular
  .module('dashboard', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        component: 'dashboard'
      })
  });