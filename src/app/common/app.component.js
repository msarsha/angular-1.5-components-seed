var app = {
  templateUrl: './app.component.html'
}

angular
  .module('app')
  .component('app', app)
  .config(function($stateProvider){
    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app',
        data:{
          requireAuth: true
        }
      })
  })