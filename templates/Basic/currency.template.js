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
	    				<th class="head"></th> \
					    <th colspan=5 class="text-center">Exchange Value</th> \
		    	    </tr> \
				    <tr> \
						<th class="sub">Coins</th> \
					    <th class="sub text-center">CP</th> \
					    <th class="sub text-center">SP</th> \
					    <th class="sub text-center">EP</th> \
					    <th class="sub text-center">GP</th> \
					    <th class="sub text-center">PP</th> \
				    </tr> \
	    	  	</thead> \
			  	<tbody> \
			    	<tr ng-repeat="entity in entities | orderBy:[\'id\']"> \
				        <td ng-class="{section:$first, last:$last}">{{entity.name}} ({{entity.code.toLowerCase()}})=</td> \
        				<td ng-class="{section:$first, last:$last}" class="text-center">{{entity.exchange_rates.CP}}</td> \
				        <td ng-class="{section:$first, last:$last}" class="text-center">{{entity.exchange_rates.SP}}</td> \
				        <td ng-class="{section:$first, last:$last}" class="text-center">{{entity.exchange_rates.EP}}</td> \
				        <td ng-class="{section:$first, last:$last}" class="text-center">{{entity.exchange_rates.GP}}</td> \
				        <td ng-class="{section:$first, last:$last}" class="text-center">{{entity.exchange_rates.PP}}</td> \
        			</tr> \
			  	</tbody> \
	  		</table> \
	    </div> \
    </div> \
    ';
    $templateCache.put('currencies', multiStr);
});