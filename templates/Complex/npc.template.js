/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
	    <basic-nav></basic-nav> \
	    <!-- -------------------- --> \
	    <!-- View NPC --> \
	    <!-- -------------------- --> \
	    <div class="col-sm-9"> \
    		<div class="col-sm-12"> \
		        <div class="form-group"> <!-- Select Entity --> \
			        <label for="selEntity" class="control-label col-sm-4">Choose:</label> \
					<div class="col-sm-8"> \
			        	<select class="form-control" name="selEntity" id="selEntity" ng-model="entitySelect" ng-options="entity as entity.name | uppercase for entity in entities track by entity.id"> \
			            	<option value="">---Please select---</option> <!-- not selected / blank option --> \
			        	</select> \
					</div> \
				</div> \
    		</div> \
		    <!-- -------------------- --> \
		    <!-- NAME --> \
		    <!-- -------------------- --> \
    		<div class="col-sm-8"> \
    			<div class="section-header"> \
    				<label>Name</label> \
    			</div> \
    			<div class="section-content"> \
    				<div class="control-group"> \
    					<div class="fg-line"> \
    						<input class="input-lg form-control" ng-model="entitySelect.name" disabled> \
    					</div> \
    				</div> \
    			</div> \
    		</div> \
		    <!-- -------------------- --> \
		    <!-- SEX --> \
		    <!-- -------------------- --> \
			<div class="col-sm-4"> \
				<div class="section-header"> \
					<label>Sex</label> \
				</div> \
				<div class="section-content"> \
					<div class="control-group"> \
						<div class="fg-line"> \
							<input class="input-lg form-control" ng-model="entitySelect.gender.name" disabled> \
						</div> \
					</div> \
				</div> \
			</div> \
		    <!-- -------------------- --> \
		    <!-- CLASS/LEVEL --> \
		    <!-- -------------------- --> \
			<div class="col-sm-8"> \
				<div class="section-header"> \
					<label>Class/Level</label> \
				</div> \
				<div class="section-content"> \
	    			<div class="row"> \
						<div class="col-sm-6"> \
							<strong><small>Class</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.profession" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-6"> \
							<strong><small>Level</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.level" disabled> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div> \
			</div> \
		    <!-- -------------------- --> \
		    <!-- ALIGNMENT --> \
		    <!-- -------------------- --> \
			<div class="col-sm-4"> \
				<div class="section-header"> \
					<label>Alignment</label> \
				</div> \
				<div class="section-content"> \
					<div class="control-group"> \
						<div class="fg-line"> \
							<input class="input-lg form-control" ng-model="entitySelect.alignment" disabled> \
						</div> \
					</div> \
				</div> \
			</div> \
		    <!-- -------------------- --> \
		    <!-- ABILITIES --> \
		    <!-- -------------------- --> \
			<div class="col-sm-6"> \
				<div class="section-header"> \
					<label>Abilities</label> \
				</div> \
				<div class="section-content"> \
					<div class="row"> \
						<div class="col-sm-4"> \
							<strong><small>STR</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.attributes.STR" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-4"> \
							<strong><small>DEX</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.attributes.DEX" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-4"> \
							<strong><small>CON</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.attributes.CON" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-4"> \
							<strong><small>INT</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.attributes.INT" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-4"> \
							<strong><small>WIS</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.attributes.WIS" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-4"> \
							<strong><small>CHA</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="entitySelect.attributes.CHA" disabled> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div> \
			</div> \
		    <!-- -------------------- --> \
		    <!-- HIT POINTS --> \
		    <!-- -------------------- --> \
			<div class="col-sm-2"> \
				<div class="section-header"> \
					<label>Hit Points</label> \
				</div> \
				<div class="section-content"> \
					<strong><small>Current/Max</small></strong> \
					<div class="control-group"> \
						<div class="fg-line"> \
							<input class="input-lg form-control" \
    							ng-value=\'(entitySelect.attributes.HP + "/" + entitySelect.attributes.MHP)\' \
    							disabled> \
						</div> \
					</div> \
				</div> \
			</div> \
			<div class="col-sm-8">&nbsp;</div>\
		    <!-- -------------------- --> \
		    <!-- Armor --> \
		    <!-- -------------------- --> \
			<div class="col-sm-6"> \
				<div class="section-header"> \
					<label>Armor</label> \
				</div> \
				<div class="section-content"> \
    				<h5>Armor</h5> \
					<div class="row" \
    					ng-repeat="(key,value) in entitySelect.equipped_items" ng-if="key==\'EQUIP_SLOT_TORSO\'"> \
						<div class="col-sm-9"> \
							<strong><small>Name</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="value.title" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-3"> \
							<strong><small>Base AC</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-value="(9 + value.modifiers.ELEMENT_ARMOR_CLASS.value)" disabled> \
								</div> \
							</div> \
						</div> \
					</div> \
					<h5>Shield</h5> \
					<div class="row" \
						ng-repeat="(key,value) in entitySelect.equipped_items" ng-if="key==\'EQUIP_SLOT_SHIELD\'"> \
						<div class="col-sm-9"> \
							<strong><small>Name</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="value.title" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-3"> \
							<strong><small>Base AC</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-value="(9 + value.modifiers.ELEMENT_ARMOR_CLASS.value)" disabled> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div> \
			</div> \
		    <!-- -------------------- --> \
		    <!-- Weapons --> \
		    <!-- -------------------- --> \
			<div class="col-sm-6"> \
				<div class="section-header"> \
					<label>Weapons</label> \
				</div> \
				<div class="section-content"> \
					<h5>Armor</h5> \
					<div class="row" \
						ng-repeat="item in entitySelect.inventory_items" ng-show="item.hasOwnProperty(\'damages\')"> \
						<div class="col-sm-9"> \
							<strong><small>Name</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-model="item.title" disabled> \
								</div> \
							</div> \
						</div> \
						<div class="col-sm-3"> \
							<strong><small>Damage</small></strong> \
							<div class="control-group"> \
								<div class="fg-line"> \
									<input class="input-lg form-control" ng-value="((item.damages.number + item.damages.plus) + \'-\' + ((item.damages.number * item.damages.die.value) + item.damages.plus))" disabled> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div> \
			</div> \
    	\
	    </div> \
    </div> \
    ';
    $templateCache.put('npcs', multiStr);
});