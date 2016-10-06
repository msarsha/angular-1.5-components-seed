function AuthService() {
  this.isAuthenticated = function(){
    return false;
  }
};

angular
  .module('auth')
  .service('AuthService', AuthService);