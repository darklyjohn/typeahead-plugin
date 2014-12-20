angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'igTypeahead']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function ($scope, $http) {

    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    $scope.dataListObject = [
        {
            name:"New York",
            label:"NY"
        },
        {
            name:"Los Angeles",
            label:"LA"
        },
        {
            name:"Alabama",
            label:"AL"
        }
    ];

});
//Manu has joined the project

angular.module('ui.bootstrap.demo').directive('magicDropDown', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/magigDropDownTemplate.html',
        link: function (scope, element, attribut) {
            var div = element.find('div')[0].children[0].attributes['aria-expanded'];
            var descendant = element.find('div')[0].children[0];
            var descendantValue = descendant.attributes['aria-activedescendant'];
            var showButton = false;
            var hasSelectedItem = false;
            var $input = element.find('input');

            scope.onSelect = function () {
                showButton = false;
                hasSelectedItem = true;
            };

            scope.showingButton = function () {
                showButton = (div.value == 'true' || scope.selected == undefined ||scope.selected == '' || hasSelectedItem) ? false : true;
                            //showButton = (div.value === 'false' && scope.selected !== undefined && !hasSelectedItem) ? true : false;
                return showButton;
            };

            scope.doSomething = function(){
                console.log('open popup');
            };

            $input.bind('keydown', function(e) {
                if(div.value == 'true' && e.code == 27){
                    
                }

            });

        }
    }

});