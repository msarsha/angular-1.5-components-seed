angular
  .module('auth')
  .config(function ($stateProvider) {
    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>'
      })
      .state('auth.login', {
        url: '/login',
        component: 'login'
      })
      .state('auth.register', {
        url: '/register',
        component: 'register'
      })
  })
  .run(function ($transitions, $state, AuthService) {

    // when navigating to state that require auth and user is NOT authenticated
    // redirect to login state
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requireAuth);
      }
    }, function () {
      if (!AuthService.isAuthenticated())
        return $state.target('auth.login');
    })

    // when navigating to auth state and user already authenticated
    // redirect to app state
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated())
        return $state.target('app');
    })
  });