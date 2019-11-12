allrecipes = []
recipverify = []
recipe = []
addnew = true
function craftingrecipe(item, p1, p2, p3, ooutputs) {
	/*
		The item argument is for the attachment of the recipe to the item; such as connecting a recipe to the baked potato. This is also the primary output
		The p* arguments are for each 'p'art of the recipe; continuing our example from above: p1: leek, p2: butter, p3: potato
		The ooutputs argument is for the 'o'outputs (other) They are for recipes that have more than one output; and are listed so.
	*/
	item.recipe = [p1, p2, p3]
	item.recipe.sort()
	item.craft = function() {
		recipverify = []
		recipe = []
		reciptocheck = item.recipe
		recipverify = player.inventory.filter(craftingrunthrough)
		condenserecipe(reciptocheck)
		verifycrafting()
		finishthejob(item)
		cleanupcrafting()
		// NEXT is to add a function to run through the final crafting steps; checking for the finishcrafting var to be TRUE
		// create a new craft() that uses the .filter function to run through the player's inventory'
		// perhaps each time you need to craft something new, the function called by the filter would grab other variables changed or editedd in the craft()
		// make sure the callback function used in the .filter() is ended with a 'return' statement!
	}
}
var rerun;
function craftingrunthrough(value) {
	devlog(value.name, 1)
	if (reciptocheck.length == 1){
		rerun = value.item.name == reciptocheck[0].item.name
	} else if (reciptocheck.length == 2) {
		rerun = value.item.name == reciptocheck[0].item.name || value.item.name == reciptocheck[1].item.name
	} else if (reciptocheck.length == 3) {
		rerun = value.item.name == reciptocheck[0].item.name || value.item.name == reciptocheck[1].item.name || value.item.name == reciptocheck[2].item.name
	} else {
		devlog("the given crafting recipe is out of bounds!")
	}
	return rerun
}
idx = 0
function condenserecipe(arr) {
	if (arr.length == 3) {
		devlog(arr)
		if (arr[1].amount == 0) {
			arr.splice(1,1)
		}
		if (arr[1].amount == 0) {
			arr.splice(1,1)
		}
	} else {
		devlog("the recipe was already reduced!")
	}
}
let checkstr = []
let verifystr = []
let finishcrafting;
function verifycrafting() {
	getstrings()
	switch (reciptocheck.length) {
		case 1:
			if (verifystr.includes(checkstr[0])) {
				if (recipverify[0].amount >= reciptocheck[0].amount) {
					finishcrafting = true
				} else {
					finishcrafting = false
				}
			} else {
				finishcrafting = false
			}
		break;
		case 2:
			if (verifystr.includes(checkstr[0]) && verifystr.includes(checkstr[1])) {
				if (recipverify[0].amount >= reciptocheck[0].amount && recipverify[1].amount >= reciptocheck[1].amount) {
					finishcrafting = true
				} else {
					finishcrafting = false
				}
			} else {
				finishcrafting = false
			}
		break;
		case 3:
			if (verifystr.includes(checkstr[0]) && verifystr.includes(checkstr[1]) && verifystr.includes(checkstr[2])) {
				if (recipverify[0].amount >= reciptocheck[0].amount && recipverify[1].amount >= reciptocheck[1].amount && recipverify[2].amount >= reciptocheck[2].amount) {
					finishcrafting = true
				} else {
					finishcrafting = false
				}
			} else {
				finishcrafting = false
			}
		break;
	}
}
var addme;
function finishthejob(item) {
	if (finishcrafting == true) {
		newinventory = []
		for (i=0; i < player.inventory.length; i++) {
			if (checkstr.includes(player.inventory[i].item.name)) {
				if (player.inventory[i].amount-reciptocheck[checkstr.indexOf(player.inventory[i].item.name)].amount < 1) {
					//push nothing
					devlog("pushed nothing!")
				} else {
					newinventory.push({item: reciptocheck[checkstr.indexOf(player.inventory[i].item.name)].item, amount: player.inventory[i].amount-reciptocheck[checkstr.indexOf(player.inventory[i].item.name)].amount})
				}
			} else {
				if (player.inventory[i].item.name != item.name) {
					newinventory.push(player.inventory[i])
					devlog("pushed "+player.inventory[i].name)
				} else {
					devlog("didnt push this one because it was the crafted item!")
				}
			}
		}
		addme = true
		for (i=0; i < player.inventory.length; i++) {
			if (player.inventory[i].item == item) {
				newinventory.push({item: item, amount: player.inventory[i].amount+1})
				addme = false
				break;
			}
		}
		if (addme == true) {
			newinventory.push({item: item, amount: 1})
		} else {
			addme = true
		}
		if (newinventory.length > 10) {
			devlog("crafting FAILED due to an inept amount of inventory space!")
			//terminal shit here
		} else {
			devlog("crafting succeeded!")
			player.inventory = newinventory
			updateinventorydisplay()
			updateallinventoryclickables()
			//terminal shit here
		}
	} else {
		devlog('The Crafting could not go through because the finishcrafting var is FALSE')
		//terminalshithere
	}
}
function getstrings() {
	checkstr = []
	verifystr = []
	for (i=0; i < reciptocheck.length; i++) {
		checkstr.push(reciptocheck[i].item.name)
	}
	for (i=0; i < recipverify.length; i++) {
		verifystr.push(recipverify[i].item.name)
	}
}
function logallcraftingvars() {
	devlog(recipverify ,1)
	devlog(reciptocheck ,1)
	devlog(checkstr ,1)
	devlog(verifystr ,1)
	//devlog( ,1)
}
function cleanupcrafting(){
	updatecraftingdisplay()
}
// JS MDN's Example for search filtering:
/*
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

Filter array items based on search criteria (query)
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
* */
