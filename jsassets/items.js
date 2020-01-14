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
shop_pool = []
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
var cached_function
//ITEM CONSTRUCTOR
function Item(shop_price, icon) {
	this.icon = icon                         // a path to an image asset
	this.shop_price = shop_price             // an integer
} 
function dootheritemstuff(item){
	if (devmode == true) {
		item.tier = "<p class="+item.rarity+">"+item.rarity+"</p>"
	} else { 
		item.tier = ''
	}
	item.tooltip = "<p class="+item.rarity+">"+item.name+"</p><p>"+item.description+"</p>"+item.tier
	item.shoptooltip = "<p class="+item.rarity+">"+item.name+" <span style='color: white;'> ("+item.shop_price+" <img src='imgassets/coin16.png' width=16px />) </span></p><p class='descriptiontext'>"+item.shop_description+"</p>"+item.tier
	itemid++
	item.internalid = itemid
	devlog("Initialized the "+item.name+" item!")
	if (item.issoldinshop == yes) {
		shop_pool.push(item)
	}
	item.addtoitempools = function(){
	allitems.push(item)
	if (item.doiaddtoitempools == true) {
		switch(item.rarity) {
					case "common":
						commonitems.push(item)
						item.color = dispcolorcommon
					break;
					case "uncommon":
						uncommonitems.push(item)
						item.color = dispcoloruncommon
					break;
					case "very_uncommon":
						veryuncommonitems.push(item)
						item.color = dispcolorveryuncommon
					break;
					case "rare":
						rareitems.push(item)
						item.color = dispcolorrare
					break;
					case "very_rare":
						veryrareitems.push(item)
						item.color = dispcolorveryrare
					break;
					case "extremely_rare":
						extremelyrareitems.push(item)
						item.color = dispcolorextremelyrare
					break;
					case "legendary":
						legendaryitems.push(item)
						item.color = dispcolorlegendary
					break;
					case "mythical":
						mythicalitems.push(item)
						item.color = dispcolormythical
					break;
					default:
						possiblybuggeditems.push(item)
			}
		}
	}
	switch (item.type) {
		case 'consumable':
			// the function should be declared just fine
			// but dont forget to add the player.inventory.splice(e, 1)!
		break;
		case 'ring':
			item.use = function(e) {
				if(player.equippedring != false) {
					narrator.say("You equip your "+item.name+" and place your other ring gently back in your inventory.")
					player.inventory[e] = {item: player.equippedring, amount: 1}
					player.equippedring = item
				} else {
					player.inventory.splice(e, 1)
					player.equippedring = item
					narrator.say("You equip your "+item.name)
				}
			}
			item.takeoff = function() {
				if(player.inventory.length < 22 && terminalcooldown == false) {
					player.inventory.push({item: player.equippedring, amount: 1})
					player.equippedring == false
					narrator.say("You take off your ring.")
				} else if (terminalcooldown == false) {
					narrator.say("you would take off your ring, but you dont have enough space to carry it!")
				}
			}
		break;
		case 'weapon':
			item.use = function(e) {
				if(player.equippedweapon != false) {
					narrator.say("You equip your "+item.name+" and place your other weapon back in your inventory.")
					player.inventory[e] = {item: player.equippedweapon, amount: 1}
					player.equippedweapon = item
				} else {
					player.inventory.splice(e, 1)
					player.equippedweapon = item
					narrator.say("You equip your "+item.name)
				}
			}
			item.unequip = function() {
				if(player.inventory.length < 22 && terminalcooldown == false) {
					player.inventory.push({item: player.equippedweapon, amount: 1})
					player.equippedweapon == false
					narrator.say("You set aside your weapon.")
				} else if (terminalcooldown == false) {
					narrator.say("you would lay down your weapon, but you dont have enough space to carry it! (other than in your hand!)")
				}
			}
		break;
		case 'armor':
			item.use = function(e) {
				if(player.equippedarmor != false) {
					narrator.say("You equip your "+item.name+" and place your other piece of armor back in your inventory.")
					player.inventory[e] = {item: player.equippedarmor, amount: 1}
					player.equippedarmor = item
				} else {
					player.inventory.splice(e, 1)
					player.equippedarmor = item
					narrator.say("You equip your "+item.name)
				}
			}
			item.takeoff = function() {
				if(player.inventory.length < 22 && terminalcooldown == false) {
					player.inventory.push({item: player.equippedarmor, amount: 1})
					player.equippedarmor == false
					narrator.say("You take off your armor.")
				} else if (terminalcooldown == false) {
					narrator.say("you would take off your armor, but you dont have enough space to carry it!")
				}
			}
		break;
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
