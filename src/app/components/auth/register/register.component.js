var register = {
  templateUrl: './register.component.html',
  controller: 'RegisterController'
};

angular
  .module('auth')
  .component('register', register);