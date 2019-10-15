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
//ITEM CONSTRUCTOR
function Item(shop_price, name, description, shop_description, stackable, icon, rarity, type, damagedefense, use) {
	this.shop_price = shop_price             // an integer
	this.name = name                         // a string
	this.description = description           // a string
	this.shop_description = shop_description // a string
	this.stackable = stackable               // a boolean
	this.icon = icon                         // a path to an image asset
	this.rarity = rarity                     // a string
	this.type = type                         // a string
	this.damagedefense = damagedefense       // an integer
	this.use = use                           // a function describing the use of the item
	if (this.name != "No Item") {
		allitems.push(this)
	}
	switch(this.rarity) {
		case "common":
			commonitems.push(this)
			this.color = dispcolorcommon
		break;
		case "uncommon":
			uncommonitems.push(this)
			this.color = dispcoloruncommon
		break;
		case "very_uncommon":
			veryuncommonitems.push(this)
			this.color = dispcolorveryuncommon
		break;
		case "rare":
			rareitems.push(this)
			this.color = dispcolorrare
		break;
		case "very_rare":
			veryrareitems.push(this)
			this.color = dispcolorveryrare
		break;
		case "extremely_rare":
			extremelyrareitems.push(this)
			this.color = dispcolorextremelyrare
		break;
		case "legendary":
			legendaryitems.push(this)
			this.color = dispcolorlegendary
		break;
		case "mythical":
			mythicalitems.push(this)
			this.color = dispcolormythical
		break;
		default:
			possiblybuggeditems.push(this)
	}
	if (devmode == true) {
		tier = "<br/><p class="+this.rarity+">"+this.rarity+"</p>"
	} else { 
		tier = ''
	}
	this.tooltip = "<h3 class="+this.rarity+">"+this.name+"</h3><p>"+this.description+"</p>"+tier
	this.shoptooltip = "<h3 class="+this.rarity+">"+this.name+"</h3><p>"+this.shop_description+"</p><p>price: "+this.shop_price+"</p>"+tier
	itemid++
	this.internalid = itemid
	devlog("Initialized the "+this.name+" item!")
} 

noitem = new Item(0, 'No Item', '', '', false, 'imgassets/X.png', '', '')
noitem.tooltip = ''
noitem.shoptooltip = ''
noinvitem = new Item(0, 'No Item', '', '', false, 'imgassets/nunfing.png', '', '')
noinvitem.tooltip = ''
noinvitem.shoptooltip = ''
// ! = new Item(price, name, description, shop description, stackable, icon (path), rarity, type, damage/defense, use function)
// TEST ITEMS
if (devmode == true) {
	blanktestcommon = new Item(10, "common blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "common", "consumable", 0, function(){devlog(this.name);})
	blanktestuncommon = new Item(10, "uncommon blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "uncommon", "consumable", 0, function(){devlog(this.name);})
	blanktestveryuncommon = new Item(10, "very uncommon blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "very_uncommon", "consumable", 0, function(){devlog(this.name);})
	blanktestrare = new Item(10, "rare blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "rare", "consumable", 0, function(){devlog(this.name);})
	blanktestveryrare = new Item(10, "very rare blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "very_rare", "consumable", 0, function(){devlog(this.name);})
	blanktestextremelyrare = new Item(10, "extremely rare blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "extremely_rare", "consumable", 0, function(){devlog(this.name);})
	blanktestlegendary = new Item(10, "legendary blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "legendary", "consumable", 0, function(){devlog(this.name);})
	blanktestmythical = new Item(10, "mythical blank", "an item used to clear your vicinity of bullets", "This AMAZING item is used to get rid of enemy bullets! I retrieved this one myself from a 'gun dungeon'!", true, "imgassets/blankicon.gif", "mythical", "consumable", 0, function(){devlog(this.name);})
}
// IN GAME ITEMS
coinpotion = new Item(15, "Coin Potion", "This odd concotion of melted gold-plated cheap metals inflates your wallet slightly. It does what you'd expect; you become more fiscally attractive, and the money you've earned is multiplied slightly.", "This <i>interesting</i> drink will cause you to become richer! It's pretty hard to come by, considering it's pure gold in there.", true, "imgassets/coinpotion.png", "extremely_rare", "consumable", 0, function(){devlog(this.name)})
exppotion = new Item(15, "Experience Potion", "This blue brew contains a small dose of a drug called 'experience'. It will cause you to become more knowlegable quickly, and is commonly used by interplanetary politcians to make themselves have some semblance of a brain right before running for an office they realize they don't want after growing a noodle and a moral compass.", "My good sir! Have you ever wanted to not work so hard to become a more powerful being? If so, we have the perfect beverage for you! Take a sip of this  <i><b>AMAZING</b></i> potion and become more intelligent!", true, "imgassets/exppotion.png", "rare", "consumable", 0, function(){devlog(this.name);})
healthpotion = new Item(25, "Health Potion", "A flask of a crimson liquid known simply as '<b>Health</b>'. Downing this potation makes your body heal very quickly. This drink was outlawed in many planets due to its high use in gangs trying to storm places like area 51 without suffering many casualties. However, they soon realized if you die too fast, you can't drink the brew.", "This cool and epic dink you've never seen anywhere before will blow your mind! When you drink this epic thirst quencher, you will <i>immediately</i> feel better! Immediately!", true, "imgassets/healthpotion.png", "very_uncommon", "consumable", 0, function(){devlog(this.name);}) 
insightpotion = new Item(100, "Insight Potion", "A glass flask filled to the 3/4 point with liquefied <i class='insightful'>Insight</i>, an extremely rare substance that grants the user a minor step towards omnipotence. Ingesting this will lead to a minor increase to one's <i class='insightful'>Insight</i>.", "Wowee, do I have a deal for you! This medium-sized glass jar-looking thing has contents that will allow the user to become smarter, but also wiser! Sound strange? It is! It is also very, very rare, so I'll have to charge big for it.", true, "imgassets/insightpotion.png", "mythical", "consumable", 0, function(){devlog(this.name);}) 
irondagger = new Item(25, "Iron Dagger", "A small, versatile blade composed of, mostly, iron. Iron cannot be sharpened as well as many other materials, resulting in an edge capable of inflicting medium-lethality wounds.", "This awesome little knife is just what you'd need in order to defend yourself from.. uhh something! Something that will hurt you! And it's probably not that big..", false, "imgassets/irondagger.png", "uncommon", "weapon", 0, function(){devlog(this.name);})
ironsword = new Item(35, "Iron Sword", "A new weapon of old times, the swords of old were the weapons of choice for the knights of earth. Being made of iron makes this weapon magnetic, a trait no longer common in the newer weapons of today, as a magnetic blade might go flying at your refridgerator when you try to get a snack.", "This great edge is the perfect thing to use when a beast of old is attempting to dispatch you! It's fairly cheap, too!", false, "imgassets/ironsword.png", "rare", "weapon", 15, function(){devlog(this.name);})
ironarmor = new Item(40, "Iron Armor", "A full set of Iron protection (not the sexual kind) to protect your mortal body from wounds. Covers your <b>torso</b>, <b>legs</b>, <b>feet</b>, <b>arms</b>, and your <b>entire head</b> except for your face. This set is extremely heavy, as it is pure Fe. Take care while wearing it, as you will be prone to overheating.", "This plate armor is made of Iron! It will protect you very well, so long as your enemy is not trying to blow you up! (but what are the chances of that?)", false, "imgassets/ironarmor.png", "rare", "armor", 5, function(){devlog(this.name);})
ironring = new Item(20, "Iron Ring", "A small ring forged of iron (of course), with the added benefit of new technology, allowing this ring to fit any finger size. Some say that rings add a certain charm to one's being, however, this is mostly superstition, as people who have rings on are mostly either married or pimps; both of which are not very charming.", "This small metal piece of ironry (jewelry with no jewels and made of iron) is just what you need to be even classier than your current appearance! Also, it's pretty cheap, too, so don't go worrying about the price of this fine ware.", false, "imgassets/ironring.gif", "uncommon", "ring", 0, function(){devlog(this.name);}) 
ammobox = new Item(30, "Ammo Box", "A heavy box of ammuntion, army green and rusted on the outside. The inside, however, <b>has exactly the type of ammo you need</b> whenever you open it! If that isn't innovation (or lazy programming), then I don't know what is!", "You good sir! You look like you could use some ammo! Well fear not, this amazing box has the ammo you need at a price you can (most likely) afford!", false, "imgassets/ammobox.png", "very_rare", "consumable", 0, function(){devlog("this still needs a use!");})
blowtorch = new Item(60, "Blowtorch", "A pressurized bottle of highly flammable gas, StarFuel&#153;. (not propane, as the man on the hill might have you believe) This fuel can burn up to 10,000&#176; Celsius, you think this is a bit overkill, and a tad dangerous. There is a warning symbol on its side, and it reads, 'do not use in open areas. do not use to light fires. do not store in areas less than 10&#176; Celsius. do not use without eye, ear, face, and body protection. StarFuel Inc. and its subsidiaries are not responsible for any blindness, burns, injuries, or death related to the use of this product. Thanks for choosing StarFuel&#153;, the only one for everyone!' ", "This AMAZING welder of unimaginable temperature can get to temperatures of over 500 degrees! I tested it myself!", false, "imgassets/blowtorch.png", "rare", "consumable", 5, function(){devlog("this item still needs a function!");})
cake = new Item(50, "Cake", "A vanilla cake with chocolate frosting layers on the inside. Baked to perfection, this Cake seems special; even the perfect little red cherries on the top of this baked good make it seem masterfully made. This seems like the Cake at the end of another challenge. (you can't quite recall it; but it had something to do with ellipses of <span id='blueportal'>contrasting</span> <span id='orangeportal'>colors </span>.) Thankfully, this Cake came in a white, circular box to protect it from adventurers like you from ruining it.", "Buy this delicious Cake now! It's really good!", false, "imgassets/cake.png", "very_uncommon", "consumable", 20, function(){devlog("this item still needs a function!");})
potato = new Item(10, "Potato", "A spud of undescribable origin, probably Idaho, or Ireland, some place that starts with an I. You think this because there is an uppercase 'I' carved into the back of the tater.", "This is a potato! versatile in many foods! Very nice for cooking with food!", true, "imgassets/potato.png", "common", "consumable", 0, function(){devlog("this still needs a use!");})
counterfeitcurrency = new Item(0, "Counterfeit Currency", "A fake UC (universal credit). Often used in criminal organizations to do exactly what you'd expect, buy things. This credit in particular is a 100 credit voucher; use it wisely. There are some eyes that can spot the inconsistencies with this credit and the legal medium.", "You shouldn't be seeing this.", false, "imgassets/counterfeitcurrency.png", "very_rare", "consumable", 100, function(){devlog("this still needs a use!");})
greenonion = new Item(15, "Leek", "A bunch of small green onions bundled together with a rubber band. These shallots are on of the best ingredients to anything that has a weak or bland flavor; providing optimal spice and crunch to your dish.", "Buy the Leek now. Very delicious, very crumch, very epic", true, "imgassets/leek.png", "uncommon", "consumable", 0, function(){devlog("this still needs a use!");})
butter = new Item(5, "Butter", "A stick of Buther's Butter. The wrapping is semi-transparent with the nutritional facts on the side. It is not up to code, saying that it contains the 30 percent recommended daily value of butter, and the only ingredient is salted butter.", "Hmm yes. Butter. Buy now pleas.", true, "imgassets/butter.png", "common", "consumable", 0,  function(){devlog("this still needs a use!");})

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
		for (i=0; i < player.inventory.length; i++) {
			if (player.inventory[i].item.name == item.name) {
					if (player.inventory[i].amount-1 >= 1) {
						newinventory.push({item: player.inventory[i].item, amount: player.inventory[i].amount-1})
						player.inventory[i].item.use()
					} else {
						player.inventory[i].item.use()
					}
			} else {
				newinventory.push(player.inventory[i])
			}
		}
		player.inventory = []
		for (i=0; i < newinventory.length; i++) {
			player.inventory.push(newinventory[i])
		}
		updateinventorydisplay()
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
