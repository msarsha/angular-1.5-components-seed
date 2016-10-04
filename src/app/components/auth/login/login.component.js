var login = {
  templateUrl: './login.component.html',
  controller: 'LoginController'
};

angular
  .module('auth')
  .component('login', login);