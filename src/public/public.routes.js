(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.sign-up', {
      url: '/sign-up',
      templateUrl: 'src/public/task/sign-up.template.html',
      controller: 'SignUpController',
      controllerAs: 'reg',
      resolve: {
        items: ['MenuService', function (MenuService) {
          return MenuService.getMenuItems();
        }]
      }
    })
    .state('public.info', {
      url: '/info',
      templateUrl: 'src/public/task/info.template.html',
      controller: 'infoController',
      controllerAs: 'reg',
      resolve: {
        menuItems: ['MenuService', function (MenuService) {
          return MenuService.getMenuItems();
        }]
      }
    });
}
})();