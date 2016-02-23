angular
    .module('ehikeApp')
    .directive('dispBox', function () {
        return {
            restrict: 'E',
            scope: {
                ////     info: '=' 
            },
            //    template: function(elem,attrs){
            //        return '<div class=box>"Show Something"</div><div> <img class= "img" ng-src="{{ }}"> </div><div><h2 class="title">{{lake.title}}</h2><p class="descript">{{lake.descript}}</p></div>' 
            templateUrl: 'views/directive-template.html'
        }
    });