allitems = []
commonitems = []
uncommonitems = []
veryuncommonitems = []
rareitems = []
veryrareitems = []
extremelyrareitems = []
legendaryitems = []
mythicalitems = []
possiblybuggeditems = []
itemid = 0;
common = "common"
uncommon = "uncommon"
very_uncommon = "very_uncommon"
rare = "rare"
very_rare = "very_rare"
extremely_rare = "extremely_rare"
legendary = "legendary"
mythical = "mythical"
yes = true
no = false
consumable = "consumable"
armor = "armor"
ring = "ring"
weapon = "weapon"
//ITEM CONSTRUCTOR
function Item(shop_price, icon) {
	this.icon = icon                         // a path to an image asset
	this.shop_price = shop_price             // an integer
} 
function dootheritemstuff(item){
	if (devmode == true) {
		item.tier = "<br/><p class="+item.rarity+">"+item.rarity+"</p>"
	} else { 
		item.tier = ''
	}
	item.tooltip = "<h3 class="+item.rarity+">"+item.name+"</h3><p>"+item.description+"</p>"+item.tier
	item.shoptooltip = "<h3 class="+item.rarity+">"+item.name+"</h3><p>"+item.shop_description+"</p><p>"+item.shop_price+" <img src='imgassets/coin16.png' width=16px /></p>"+item.tier
	itemid++
	item.internalid = itemid
	devlog("Initialized the "+item.name+" item!")
	item.addtoitempools = function(){
	allitems.push(item)
	if (item.doiaddtoitempools == true) {
		switch(this.rarity) {
					case "common":
						commonitems.push(item)
						this.color = dispcolorcommon
					break;
					case "uncommon":
						uncommonitems.push(item)
						this.color = dispcoloruncommon
					break;
					case "very_uncommon":
						veryuncommonitems.push(item)
						this.color = dispcolorveryuncommon
					break;
					case "rare":
						rareitems.push(item)
						this.color = dispcolorrare
					break;
					case "very_rare":
						veryrareitems.push(item)
						this.color = dispcolorveryrare
					break;
					case "extremely_rare":
						extremelyrareitems.push(item)
						this.color = dispcolorextremelyrare
					break;
					case "legendary":
						legendaryitems.push(item)
						this.color = dispcolorlegendary
					break;
					case "mythical":
						mythicalitems.push(item)
						this.color = dispcolormythical
					break;
					default:
						possiblybuggeditems.push(item)
			}
		}
	}
}

noitem = new Item(0, 'imgassets/X.png')
noitem.tooltip = ''
noitem.shoptooltip = ''
noitem.type = 'noitem'
noinvitem = new Item( 0, 'imgassets/nunfing.png')
noinvitem.tooltip = ''
noinvitem.shoptooltip = ''
noinvitem.type = 'noitem'

// Item declaration copypasta, going with this declaration style because it allows more malleability & readability to my items, and allows me to be able to add special attribute and not have to swim through a mile of code so I can edit a grammar mistake.
/*
 = new Item(1, "imgassets/")
.rarity = 
.craftable = 
.description = ""
.shop_description = ""
.stackable = 
.type = consumable
.name = ""
.use = function(){devlog("I still need a use!")}
.doiaddtoitempools = yes
dootheritemstuff()
.addtoitempools()
 */
// Copypasta end
// EQUIP FUNCTION
var newinventory;
function equip(item) {
	switch (item.type) {
		case "weapon":
			devlog("attempting to equip item "+ item.name + " with type weapon!")
			newinventory = []
			for (i=0; i < player.inventory.length; i++) {
				if (player.inventory[i].item.name != item.name) {
					newinventory.push(player.inventory[i])
				} else {
					if (player.equippedweapon != noinvitem) {
						newinventory.push(player.equippedweapon)
					}
					player.equippedweapon = player.inventory[i]
				}
			}
			player.inventory = []
			for (i=0; i < newinventory.length; i++) {
				player.inventory.push(newinventory[i])
			}
			updateinventorydisplay()
			updateallinventoryclickables()
		break;
		case "armor":
			devlog("attempting to equip item "+ item.name + " with type armor!")
			newinventory = []
			for (i=0; i < player.inventory.length; i++) {
				if (player.inventory[i].item.name != item.name) {
					newinventory.push(player.inventory[i])
				} else {
					if (player.equippedarmor != noinvitem) {
						newinventory.push(player.equippedarmor)
					}
					player.equippedarmor = player.inventory[i]
				}
			}
			player.inventory = []
			for (i=0; i < newinventory.length; i++) {
				player.inventory.push(newinventory[i])
			}
			updateinventorydisplay()
			updateallinventoryclickables()
		break;
		case "ring":
			devlog("attempting to equip item "+ item.name + " with type ring!")
			newinventory = []
			for (i=0; i < player.inventory.length; i++) {
				if (player.inventory[i].item.name != item.name) {
					newinventory.push(player.inventory[i])
				} else {
					if (player.equippedring != noinvitem) {
						newinventory.push(player.equippedring)
					}
					player.equippedring = player.inventory[i]
				}
			}
			player.inventory = []
			for (i=0; i < newinventory.length; i++) {
				player.inventory.push(newinventory[i])
			}
			updateinventorydisplay()
			updateallinventoryclickables()
		break;
		case "consumable":
			//consumableuse(item)
		break;
		default:
			deverror("uh ohhhh! you made an oopsie and the item you put into the function is unequipable!")
	}
}

//CONSUMABLE USE FUNCTION
function consumableuse(item) {
	newinventory = []
	if (item.type == "consumable") {
		for (i=0; i < player.inventory.length; i++){
			if (player.inventory[i].item.name != item.name){
				newinventory.push(player.inventory[i])
			} else {
				if (player.inventory[i].amount <= 1) {
					player.inventory[i].item.use()
					// dont push anything
				} else {
					player.inventory[i].item.use()
					newinventory.push({item: player.inventory[i].item, amount: player.inventory[i].amount-1})
				}
			}
		}
		player.inventory = newinventory
		updateinventorydisplay()
		updateallinventoryclickables()
	} else {
		deverror("Pardner.. the item you gave me to act for the consumable is.. not a consumable.")
	}	
}

//DEVELOPER USE/EQUIP FUNCTIONS
function forceuse(item) {
	if (devmode == true) {
		item.use()
	} else {
		console.log("developer mode is disabled. nice try, though.")
	}
}
function forceequip(item) {
	if (devmode == true) {
		switch (item.type) {
			case "armor":
				player.equippedarmor = {item: item, amount: 1}
			break;
			case "weapon":
				player.equippedweapon = {item: item, amount: 1}
			break;
			case "ring":
				player.equippedring = {item: item, amount: 1}
			break;
		}
	} else {
		console.log("developer mode is disabled. nice try, though.")
	}
}
devlog("item script ran!")
