angular
    .module('ehikeApp')
    .controller('MainController', ['$scope', function ($scope) {

        $scope.lake = {
            img: 'img/move.jpg',
            title: 'A title',
            descript: 'Description',
        }, {
            img: '',
            title: '',
            descript: '',
        };


}]);