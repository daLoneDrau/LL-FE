/*jshint multistr: true */
/* jshint node: true */
"use strict";

// scope syntax, not controller-as
angular.module('restApp').controller('BasicNpcController', function($scope, $window,
		basicDiceService, basicGroupService, basicItemService, basicObjectTypeService, basicModifierService, basicNpcService, $q, $http) {
    $scope.newEntity = {
    };
    var findEntity = function(entity, entities) {
    	var t = 0;
        var found = '';
        for (var i = entities.length - 1; i >= 0; i--) {
            if (entities[i].name === entity.name
            		&& entities[i].internal_script === entity.internal_script
            		&& entities[i].description === entity.description
            		&& entities[i].price === entity.price
            		&& entities[i].weight === entity.weight
            		&& entities[i].types.length === entity.types.length
            		&& entities[i].groups.length === entity.groups.length) {
            	var same = false;
            	for (var j = entities[i].types.length - 1; i >= 0; i--) {
            		if (entities[i].types[j] === entity.types[j]) {
            			same = true;
            			break;
            		}
            	}
            	if (!same) {
	            	for (var j = entities[i].groups.length - 1; i >= 0; i--) {
	            		if (entities[i].groups[j] === entity.groups[j]) {
	            			same = true;
	            			break;
	            		}
	            	}
            	}
            	if (same) {
                    found = "An armor with the same data already exists";
            	}
            }
        }
        return found;
    };
    var getAllDiceEntities = function() {
        var promise = basicDiceService.getEntities();
        promise.then(function(response) {
            if (response.status === 200) {
                $scope.dice_entities = response.data;
                for (var i = $scope.dice_entities.length - 1; i >= 0; i--) {
                    if (angular.isUndefined($scope.dice_entities[i].id)) {
                        $scope.dice_entities[i].id = 0;
                    }
                }
            }
        });
    };
    var getAllEntities = function() {
        var promise = basicNpcService.getEntities();
        promise.then(function(response) {
            if (response.status === 200) {
                $scope.entities = response.data;
                for (var i = $scope.entities.length - 1; i >= 0; i--) {
                	var entity = $scope.entities[i];
                	for (var j = entity.groups.length - 1; j >= 0; j--) {
                		if (entity.groups[j].name === "FIGHTER") {
                			entity.profession = "Fighter";
                			continue;
                		} else if (entity.groups[j].name === "CLERIC") {
                			entity.profession = "Cleric";
                			continue;
                		} else if (entity.groups[j].name === "DWARF") {
                			entity.profession = "Dwarf";
                			continue;
                		} else if (entity.groups[j].name === "ELF") {
                			entity.profession = "Elf";
                			continue;
                		} else if (entity.groups[j].name === "HALFLING") {
                			entity.profession = "Halfling";
                			continue;
                		} else if (entity.groups[j].name === "MAGE") {
                			entity.profession = "Mage";
                			continue;
                		} else if (entity.groups[j].name === "THIEF") {
                			entity.profession = "Thief";
                			continue;
                		} else if (entity.groups[j].name === "CHAOTIC") {
                			entity.alignment = "Chaotic";
                			continue;
                		} else if (entity.groups[j].name === "LAWFUL") {
                			entity.alignment = "Lawful";
                			continue;
                		} else if (entity.groups[j].name === "NEUTRAL") {
                			entity.alignment = "Neutral";
                			continue;
                		}
                	}
                    if (!angular.isUndefined(entity.types)) {
                    	entity.types = entity.types[0];
                    }
                    if (angular.isUndefined(entity.id)) {
                    	entity.id = 0;
                    }
                    if (angular.isUndefined(entity.weight)) {
                    	entity.weight = 0;
                    }
                    if (!angular.isUndefined(entity.equipped_items)) {
                    	for (var slot in entity.equipped_items) {
                    		(function(entity, slot) {
                    			basicItemService.getEntityByName(entity.equipped_items[slot])
                    			.then(function(response) {
                        			if (response.status === 200) {
                        				entity.equipped_items[slot] = response.data[0];
                        				var armor = entity.equipped_items[slot];
                                        if (!angular.isUndefined(armor.modifiers)) {
                                        	for (var mod in armor.modifiers) {
                                        		(function(armor, mod) {
                                        			basicModifierService.getEntityByCode(armor.modifiers[mod])
                                        			.then(function(response2) {
                                            			if (response2.status === 200) {
                                            				armor.modifiers[mod] = response2.data[0];
                                            			}
                                            		});
                                        		})(armor, mod);
                                        	}
                                        }
                        			}
                        		});
                    		})(entity, slot);
                    	}
                    }
                }
            }
        });
    };
    var postEntity = function() {
        var promise = basicItemService.insertEntity($scope.newEntity);
        promise.then(function(response) {
            if (response.status === 200) {
                $scope.newEntity.code = "";
                $scope.newEntity.die = {};
                $scope.newEntity.number = 0;
                getAllEntities();
            } else {
                console.error(response);
            }
        });
    };
    var putEntity = function() {
        var promise = basicItemService.updateEntity($scope.entitySelect);
            promise.then(function(response) {
            if (response.status === 200) {
                $scope.newEntity.code = "";
                $scope.newEntity.value = 0;
                getAllEntities();
            }
        });
    };
    $scope.create = function() {
        $scope.newEntity.types = [ $scope.newEntity.types ];
        console.log($scope.newEntity);
        var msg = validateGroups($scope.newEntity.groups);
        if (msg.length > 0) {
            $window.alert(msg);
        } else {
            if ($scope.entities.length > 0) {
                msg = findEntity($scope.newEntity, $scope.entities);
                if (msg.length > 0) {
                    $window.alert(msg);
                } else {
                    postEntity();
                }
            } else {
                postEntity();
            }            
        }
    };
    $scope.update = function() {
        $scope.entitySelect.types = [ $scope.entitySelect.types ];
        var msg = '';
        for (var i = $scope.entities.length - 1; i >= 0; i--) {
            if ($scope.entities[i].id === $scope.entitySelect.id) {
                continue;
            }
            for (var i = $scope.entities.length - 1; i >= 0; i--) {
                if ($scope.entities[i].name === $scope.entitySelect.name
                		&& $scope.entities[i].internal_script === $scope.entitySelect.internal_script
                		&& $scope.entities[i].description === $scope.entitySelect.description
                		&& $scope.entities[i].price === $scope.entitySelect.price
                		&& $scope.entities[i].weight === $scope.entitySelect.weight
                		&& $scope.entities[i].damages === $scope.entitySelect.damages
                		&& $scope.entities[i].types.length === $scope.entitySelect.types.length
                		&& $scope.entities[i].groups.length === $scope.entitySelect.groups.length) {
                	var same = false;
                	for (var j = $scope.entities[i].types.length - 1; i >= 0; i--) {
                		if ($scope.entities[i].types[j] === $scope.entitySelect.types[j]) {
                			same = true;
                			break;
                		}
                	}
                	if (!same) {
    	            	for (var j = $scope.entities[i].groups.length - 1; i >= 0; i--) {
    	            		if ($scope.entities[i].groups[j] === $scope.entitySelect.groups[j]) {
    	            			same = true;
    	            			break;
    	            		}
    	            	}
                	}
                	if (same) {
                        msg = "A weapon with the same data already exists";
                	}
                }
            }
        }
        if (msg.length > 0) {
            $window.alert(msg);
        } else {
            putEntity();
        }
    };
    getAllEntities();
});