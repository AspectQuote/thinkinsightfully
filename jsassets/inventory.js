for (i=0; i < 10; i++) {
	$("#inventorymain").append("<div id='inventoryslot"+i+"' class='inventoryslot' styles='top: 0px;'><img src='imgassets/blankicon.gif' width='64px' height='64px' /></div>")
}
var dispinventory;
function updateinventorydisplay() {                               // updating the inventory html
	dispinventory = []                                            // reset the display inventory (includes empty spaces)
	$("#inventorymain").html('')                                  // reset the inventory container so that we can keep 
	for (i=0; i < player.inventory.length; i++) {                 // loop
		dispinventory.push(player.inventory[i])                   // adds all the contents of the players inventory into the display one
	}
	if (dispinventory.length < 10) {                              // checks whether the display inventory has less than ten items 
		loopdisp = 10-dispinventory.length                        // determine how many less
		for (i=0; i < loopdisp; i++) {                            // loop until the display inventory has 10 items
			dispinventory.push({item: noinvitem, amount:1})       // add 'noitem' to that slot for display reasons
		} 
	} 
	for (i=0; i < 10; i++) {                                      // loop again, brother
		// BELOW: add the image to the inventory container
		$("#inventorymain").append("<div id='inventoryslot"+i+"' class='inventoryslot' styles='top: 0px;'><img src='"+dispinventory[i].item.icon+"' width='64px' height='64px' /><span class='inventorytooltiptext' id='inventorytooltiptext"+i+"'>"+dispinventory[i].item.tooltip+"</span></div>")
		// BELOW: adds the 'count' to each of the items in the display, but not if the item is not stackable or not a consumable
		if (dispinventory[i].item.name != "No Item" && dispinventory[i].item.type != "weapon" && dispinventory[i].item.type != "armor" && dispinventory[i].item.type != "ring" && dispinventory[i].item.type != 'noitem') {
			$("#inventoryslot"+i).append("<span class='inventoryamountdisplay'>"+dispinventory[i].amount+"</span>")
		}
		if (hintsmode == true) {                                  // adds extra stuff into the tooltip to make sure the player knows what to do
			if(dispinventory[i].item.type == 'consumable'){       
				$("#inventorytooltiptext"+i).append("LEFT CLICK to use")
			} else if (dispinventory[i].item.type == 'armor') {   
				$("#inventorytooltiptext"+i).append("LEFT CLICK to EQUIP in the ARMOR slot")
			} else if (dispinventory[i].item.type == 'weapon') {  
				$("#inventorytooltiptext"+i).append("LEFT CLICK to EQUIP in the WEAPON slot")
			} else if (dispinventory[i].item.type == 'ring') {    
				$("#inventorytooltiptext"+i).append("LEFT CLICK to EQUIP in the LEFT HAND RING slot, RIGHT CLICK to EQUIP in the RIGHT HAND RING slot")
			} else {                                              
				devlog("couldn't add a hint to slot #"+i+" because its type was not recognized!")
			}
		}                                                         //adds a border around every item based on its rarity
		$("#inventoryslot"+i).css("border", "1px solid "+dispinventory[i].item.color)
	}
	
}
function createclickableequipable(e) {
	$("#inventoryslot"+e).click(function() {equip(player.inventory[e].item);})
	devlog("added clickability for an equipable at inventory slot #" + e)
}                                                                                    //thanks user LogicalBranch on stack overflow for help with this!
function createclickableconsumable(e) {
	$("#inventoryslot"+e).click(function() {consumableuse(player.inventory[e].item);})
	devlog("added clickability for a consumable at inventory slot #" + e)
}
function updateallinventoryclickables() {                          // updates the clickables based on what type of item it is
	for (i=0; i < player.inventory.length; i++) {                  // loop
		if(dispinventory[i] != noinvitem) {                        // checks whether the item according to the display inventory is no inventory item (to prevent extra lag)
			if (player.inventory[i].item.type === 'weapon' || 'ring' || 'armor' && player.inventory[i].item.type !== 'consumable') {
				devlog("the item is " + player.inventory[i].item.name + " with type " + player.inventory[i].item.type)
				createclickableequipable(i)                        // creates the clickable in the other function, due to 'i' not saving to the function
			}
			if (player.inventory[i].item.type == 'consumable' ) {  
				devlog("the item is " + player.inventory[i].item.name + " with type " + player.inventory[i].item.type)
				createclickableconsumable(i)                       // creates the clickable in the other function, due to 'i' not saving to the function
			} else {                                                                                             
				devlog("unable to attach clickability to slot #" + i + " because the item had an invalid type!") // error message
			}
		} else {                                                                                            
			devlog("didn't add clickability to inventory slot #" + i + " because there was no item there!") // error message
		}
	}
}
function updateequipableinventoryclickable(e) {
	$("#inventoryslot"+e).click(function() {equip(player.inventory[e].item); updateallinventoryclickables();})
	devlog("added clickability for an equipable at inventory slot #" + e)
}
function updateconsumableinventoryclickable(e) {
	$("#inventoryslot"+e).click(function() {consumableuse(player.inventory[e].item); updateallinventoryclickables();})
	devlog("added clickability for an equipable at inventory slot #" + e)
}
