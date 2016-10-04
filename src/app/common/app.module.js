angular
  .module('app', [
    'components',
    'templates',

    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app',
        redirectTo:'app.dashboard',
        data: {
          requireAuth: true
        }
      });
  })