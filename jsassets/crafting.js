allrecipes = []
recipverify = []
recipe = []
addnew = true
function craftingrecipe(item, p1, p2, p3) {
	/*
		The item argument is for the attachment of the recipe to the item; such as connecting a recipe to the baked potato. This is also the primary output
		The p* arguments are for each 'p'art of the recipe; continuing our example from above: p1: leek, p2: butter, p3: potato
	*/
	item.recipe = [p1]
	if (p2 != no) {
		item.recipe.push(p2)
	}
	if (p3 != no) {
		item.recipe.push(p3)
	}
	item.recipe.sort()
	item.craft = function() {
		craft(item)
	}
}
let chec = []
let check = []
let good;
let alreadydone;
function craft(whatitem) {
	//STEP ONE: TEST IF PLAYER HAS THE ITEMS REQUIRED TO CRAFT SAID ITEM
		// Filter the players inventory to check:
		alreadydone = no
		check = []
		chec = []
		for (i=0; i < whatitem.recipe.length; i++) {
			chec = player.inventory.filter(slot => slot.item.name == whatitem.recipe[i].item.name)
			if (chec[0] != null) {
				devlog("pushing " + chec[0].item.name + " to check!")
				check.push(chec[0])
			}
		}
		good = yes
		// Check if the player has enough of the said items
		if (check.length == whatitem.recipe.length) {
			for (e=0; e < whatitem.recipe.length; e++) {
				console.log('Checking part ' + e)
				if (check[e].item.name != whatitem.recipe[e].item.name || check[e].amount < whatitem.recipe[e].amount) {
					good = no
					narrator.say("You cant craft this because you dont have the necessary materials!")
				}
			}
		} else {
			good = no
			narrator.say("You cant craft this because you dont have the necessary materials!")
		}
		// Check if player has enough inventory space
		if (whatitem.stackable == true) {
			chec = player.inventory.filter(slot => slot.item.name == whatitem.name)
			if (chec.length != 0 && good == yes) {
				player.inventory[player.inventory.indexOf(chec[0])].amount += 1
				alreadydone = yes
			} else if (chec.length == 0 && good == yes) {
				if (player.inventory.length >= 10) {
					good = no
				}
			}
		} else if (whatitem.stackable == false) {
			if (player.inventory.length >= 10) {
				narrator.say("you dont have enough space to craft this!")
				good = no
			}
		} else {
			console.error("ERROR: ERRORCODE: INVALID STACKABILITY")
		}
	//STEP TWO: IF YES ('good' is our variable for 'yes'), THEN TAKE AWAY THE ITEMS FROM THE PLAYER. IF NO, THEN TELL THE PLAYER THAT THEY CANT CRAFT THAT ITEM YET
	if (good == yes) {
		for (i=0; i < whatitem.recipe.length; i++) {
			player.inventory[player.inventory.indexOf(check[i])].amount -= whatitem.recipe[i].amount
		}
	}
	//FINALLY, GIVE THE CRAFTED ITEM TO THE PLAYER IF THEY WERE ABLE TO CRAFT IT
	if (good == yes && alreadydone == no) {
		player.inventory.push({item: whatitem, amount: 1})
	}
	// then clean up
	player.inventory = player.inventory.filter(slot => slot.amount > 0)
	updateinventorydisplay()
}
