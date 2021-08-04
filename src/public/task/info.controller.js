(function(){

    "use strict";

    angular.module('public')
    .controller('infoController', infoController);
    
    infoController.$inject = ['TaskService', 'menuItems']
    function infoController(TaskService, menuItems) {
      var reg = this;

      reg.registered = TaskService.isRegistered();
      if (reg.registered){
        reg.user = TaskService.getUser();
        for (const item of menuItems.menu_items){
          if (item.short_name === reg.user.menu){
            reg.item = item;
          }
        }
      }
    }
    
    

})();