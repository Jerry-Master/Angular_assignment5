(function () {
    "use strict";
    
    angular.module('common')
    .service('TaskService', TaskService);
    
    function TaskService() {
      var service = this;

      var user;
      var registered = false;
      
    
      service.registerUser = function (_user) {
        user = _user;
        registered = true;
      };

      service.isRegistered = function() {
          return registered;
      };
    
      service.getUser = function () {
        return user;
      };
    
    }
})();
    