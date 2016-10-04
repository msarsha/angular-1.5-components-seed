function AuthService() {
  this.isAuthenticated = function(){
    return true;
  }
};

angular
  .module('auth')
  .service('AuthService', AuthService);