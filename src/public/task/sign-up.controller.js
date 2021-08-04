(function(){

    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['TaskService', 'items']
    function SignUpController(TaskService, items) {
      var reg = this;
      reg.user = {'Firstname': '', 'Lastname': '', 
      'email': '',
      'phone': '', 'menu': ''};

      reg.submit = function () {
        reg.registered = true;
        TaskService.registerUser(reg.user); 
      };

      reg.isValidMenu = function() {
        for (const item of items.menu_items){
          if (item.short_name === reg.user.menu){
            return true;
          }
        }
        return false;
      }
    }
    
    

})();