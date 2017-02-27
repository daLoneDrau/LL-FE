/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
    <basic-nav></basic-nav> \
    <div class="col-sm-9"> \
	    <div class="col-sm-12"> \
	    	<table class="table"> \
    			<thead> \
		    	    <tr> \
						<th class="head">Armor</th> \
						<th class="head text-center">Cost</th> \
					    <th class="head text-center">Armor Class</th> \
					    <th class="head text-center">Weight</th> \
		    	    </tr> \
	    	  	</thead> \
			  	<tbody> \
			    	<tr ng-repeat="entity in entities | orderBy:[\'id\']"> \
				        <td ng-class="{section:$first, last:$last}">{{entity.name}}</td> \
        				<td ng-class="{section:$first, last:$last}" class="text-center">{{entity.price}} gp</td> \
				        <td ng-class="{section:$first, last:$last}" class="text-center">{{9+entity.modifiers.ELEMENT_ARMOR_CLASS.value}}</td> \
				       	<td ng-class="{section:$first, last:$last}" class="text-center">{{entity.weight}} lb.</td> \
        			</tr> \
			  	</tbody> \
	  		</table> \
	    </div> \
    </div> \
    ';
    $templateCache.put('armors', multiStr);
});