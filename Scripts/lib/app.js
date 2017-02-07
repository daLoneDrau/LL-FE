/*jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp', ["ngRoute"]);

angular.module('restApp').config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'main'
    }).when("/basic", {
        templateUrl: 'basic_main'
    })
    // ATTRIBUTES
    .when("/attributes", {
        controller: "BasicAttributeController",
        templateUrl: 'attributes'
    })
    // CURRENCIES
    .when("/currencies", {
        controller: "BasicCurrencyController",
        templateUrl: 'currencies'
    })
    // DIE
    .when("/die", {
        controller: "BasicDieController",
        templateUrl: 'die'
    })
    // DICE ROLLS
    .when("/dice", {
        controller: "BasicDiceController",
        templateUrl: 'dice'
    })
    // EQUIPMENT ELEMENT TYPES
    .when("/elements", {
        controller: "BasicElementController",
        templateUrl: 'elements'
    })
    // EQUIPMENT ITEM MODIFIERS
    .when("/modifiers", {
        controller: "BasicModifierController",
        templateUrl: 'modifiers'
    })
    // EQUIPMENT SLOTS
    .when("/equipment_slots", {
        controller: "BasicEquipmentSlotController",
        templateUrl: 'equipment_slots'
    })
    // GENDERS
    .when("/genders", {
        controller: "BasicGenderController",
        templateUrl: 'genders'
    })
    // GROUPS
    .when("/groups", {
        controller: "BasicGroupController",
        templateUrl: 'groups'
    })
    // OBJECT TYPES
    .when("/object_types", {
        controller: "BasicObjectTypeController",
        templateUrl: 'object_types'
    })
    // WEAPONS
    .when("/weapons", {
        controller: "BasicWeaponController",
        templateUrl: 'weapons'
    })
    // ARMORS
    .when("/armors", {
        controller: "BasicArmorController",
        templateUrl: 'armors'
    })
    // ITEMS
    .when("/items", {
        controller: "BasicItemController",
        templateUrl: 'items'
    })
    // NPCS
    .when("/npcs", {
        controller: "BasicNpcController",
        templateUrl: 'npcs'
    });                                 
});

angular.module('restApp').directive('powerOfTwo', function() {
    return {
        // limit usage to argument only
        restrict: 'A',

        // require NgModelController, i.e. require a controller of ngModel directive
        require: 'ngModel',

        // create linking function and pass in our NgModelController as a 4th argument
        link: function(scope, element, attr, ctrl) {
            // please note you can name your function & argument anything you like
            ctrl.$validators.power_of_2 = function(ngModelValue) {
                if (typeof ngModelValue !== 'number') {
                    return 'Not a number';   
                }  
                return ngModelValue && (ngModelValue & (ngModelValue - 1)) === 0;
            };
        }
    };
});
angular.module('restApp').directive('basicNav', function() {
    return {
        // limit usage to element only
        restrict: 'E',
        templateUrl: 'basic_nav',
        controller: function($scope) {
        }
    };
});
