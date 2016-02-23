angular.module('ehikeApp', ['ui.router',]);

angular
    .module('ehikeApp')
    .config(function ($stateProvider,$urlRouterProvider){
   
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    
        .state('home',{
            url:'/home',
            views:{
                'content':{templateUrl:'views/home-template.html'},
            }
        })

        .state('ehike',{
            url:'/ehike',
            views:{
                'content@':{templateUrl:'views/eHike-template.html'},
            }
        })

        .state('ehike.map', {
            url: '/map',
            views:{
                'content@':{templateUrl: 'views/map-template.html'},
            }
        })

        .state('ehike.map.disp', {
            url: '/disp',
            views:{
                'content@':{template: '<disp-box></disp-box>',
                            directive:'directive.js'},
            }
        })  
                   
});