/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
<!-- this menu will only be visible when screen is large. --> \
<div class="col-md-2 col-md-offset-1 visible-lg"> \
    <h2>Menu Item</h2> \
    <ul class="nav"> \
        <li class="nav-item"><a class="nav-link active" href="#!attributes">Attributes</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!currencies">Currencies</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!die">Die</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!dice">Dice Rolls</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!elements">Equipment Element Types</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!modifiers">Equipment Item Modifiers</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!equipment_slots">Equipment Slots</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!genders">Genders</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!groups">IO Groups</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!object_types">Object Types</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!weapons">Weapons</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!armors">Armors</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!items">Items</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!npcs">NPCs</a></li> \
    </ul> \
</div> \
<!-- this menu will only be visible when screen is medium or small. extra small has no menu. --> \
<div class="col-xs-2 col-xs-offset-1 visible-md visible-sm"> \
    <h3>Short Menu</h3> \
    <ol> \
        <li class="nav-item"><a class="nav-link active" href="#!attributes">Attributes</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!currencies">Currencies</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!die">Die</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!dice">Dice Rolls</a></li> \
    </ol> \
</div> \
    ';
    $templateCache.put('basic_nav', multiStr);
});