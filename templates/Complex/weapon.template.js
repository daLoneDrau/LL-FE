/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
    <basic-nav></basic-nav> \
    <!-- -------------------- --> \
    <!-- View Entities Form --> \
    <!-- -------------------- --> \
    <div class="col-sm-9"> \
        <p class="text-muted">View Weapon</p> \
        <form name="updateForm" class="form-horizontal" ng-submit="update()" novalidate> \
            <div class="form-group"> <!-- Select Entity --> \
                <label for="selEntity" class="control-label col-sm-4">Choose:</label> \
				<div class="col-sm-8"> \
                	<select class="form-control" name="selEntity" id="selEntity" ng-model="entitySelect" ng-options="entity as entity.name | uppercase for entity in entities | orderBy:\'types[0].flag\' track by entity.id"> \
                    	<option value="">---Please select---</option> <!-- not selected / blank option --> \
                	</select> \
        		</div> \
        	</div> \
	        <!-- Update Name -->  \
	        <div class="form-group"> \
	            <label for="updName" class="control-label col-sm-4">Name</label> \
				<div class="col-sm-8"> \
	            	<input ng-model="entitySelect.name" type="text" class="form-control" id="updName" name="updName" disabled> \
				</div> \
	        </div> \
	        <!-- Update title -->  \
	        <div class="form-group"> \
	            <label for="updTitle" class="control-label col-sm-4">Title</label> \
				<div class="col-sm-8"> \
	            	<input ng-model="entitySelect.title" type="text" class="form-control" id="updTitle" name="updTitle" disabled> \
				</div> \
	        </div> \
	        <!-- Weapon Internal Script --> \
	        <div class="form-group"> \
	            <label for="updScript" class="control-label col-sm-4">Script</label> \
	            <div class="col-sm-8"> \
	                <input class="form-control" id="updScript" name="updScript" type="text" \
	                        ng-model="entitySelect.internal_script"  \
	                        required \
    						disabled/> \
	            </div> \
	        </div> \
	        <!-- Update Description -->  \
	        <div class="form-group"> \
	            <label for="updDesc" class="control-label col-sm-4">Description</label> \
				<div class="col-sm-8"> \
    				<textarea ng-model="entitySelect.description" cols="40" rows="5" class="form-control" id="updDesc" name="updDesc" required disabled ></textarea> \
				</div> \
	        </div> \
	        <!-- Update Price -->  \
	        <div class="form-group" name="divUpdPrice" > \
	            <label for="updPrice" class="control-label col-sm-4">Price</label> \
	            <div class="col-sm-8"> \
	                <input class="form-control" id="updPrice" name="updPrice" type="number" step="0.1"\
	                    ng-model="entitySelect.price" \
	                    disabled/> \
	            </div> \
	        </div> \
	        <!-- Update Weight -->  \
	        <div class="form-group" name="divUpdWeight" > \
	            <label for="updWeight" class="control-label col-sm-4">Weight</label> \
	            <div class="col-sm-8"> \
	                <input class="form-control" id="updWeight" name="updWeight" type="number" step="0.5"\
        				ng-model="entitySelect.weight" \
	                    disabled /> \
	            </div> \
	        </div> \
	        <!-- Update Type --> \
		    <div class="form-group"> \
		        <label for="updType" class="control-label col-sm-4">Type</label> \
		        <div class="col-sm-8"> \
					<input class="form-control" type="text" \
						ng-model="entitySelect.types.code" \
						disabled/> \
				</div> \
		    </div> \
	        <!-- Update Groups --> \
		    <div class="form-group"> \
		        <label for="updType" class="control-label col-sm-4">Groups</label> \
		        <div class="col-sm-8"> \
					<span ng-repeat="group in entitySelect.groups"><span ng-show="!$first">, </span>{{group.name}}</span> \
				</div> \
		    </div> \
	        <!-- Update Damage --> \
		    <div class="form-group"> \
		        <label for="updDmg" class="control-label col-sm-4">Damage</label> \
		        <div class="col-sm-8"> \
					<input class="form-control" type="text" disabled \
	    				ng-value=\'((entitySelect.damages.number + entitySelect.damages.plus) + "-" + ((entitySelect.damages.number * entitySelect.damages.die.value) + entitySelect.damages.plus))\' \
	    			/> \
				</div> \
		    </div> \
        </form> \
    </div> \
    </div> \
    ';
    $templateCache.put('weapons', multiStr);
});