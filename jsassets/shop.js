var i;
var e;
var a;
var sellables = []
var cannotaddtosellables = false;
var possiblesellable;
// GENERATE SELLABLES
function getsellables(howmany) {
	if (howmany < allitems.length+1) {                                                          // make sure the program doesn't crash the app because someone was messing around too much
		sellables = []                                                                          // reset the sellables
		alreadyaddedtosellables = []                                                            // reset the sellable additions (both for reusability
		for (i = 0; i < howmany; i++) {                                                         // loop for each item
			possiblesellable = allitems[randomnumber(allitems.length)]                          // get first sellable to check
			devlog("Possible sellable #"+i+" is "+possiblesellable.name+"!")                    // log its name for debugging
			for (e = 0; e < alreadyaddedtosellables.length; e++) {                              // second loop to check to see if it was already added
				if (possiblesellable.name === alreadyaddedtosellables[e]) {                     // check the possible name against the 'already added' array        
					cannotaddtosellables = true;                                                // if true, then tell the item 'no', you cannot be sold twice.
					devlog("Possible sellable '"+possiblesellable.name+"' is already added!")   // if true, log that the item was told to fuck off
				} else {                                                                        // if it was not in the 'added' array, then it's all good
					// do nothing                                                               // so do nothing
				}                                                                               // ...
			}                                                                                   // ...
			if (cannotaddtosellables == false) {                                                // If it passed all it's tests, the possible item is ready to be added
				sellables.push(possiblesellable)                                                // add it to the sellable array
				alreadyaddedtosellables.push(possiblesellable.name)                             // add it to the added to sellable array
			} else {                                                                            // if it didn't, then...
				devlog("failed to add " + possiblesellable.name + " to the sellables array!")   // log that it was failed to be added because it was already added
				cannotaddtosellables = false                                                    // reset the loop
				i--                                                                             // run the master loop again so that we will always return the same amount of items as described in the howmany argument of the function
			}                                                                                   // ...
		}  
		devlog("logging sellables at line #32...")                                                                                     // ...
		devlog(sellables)                                                                       // return the sellables to ensure accuracy
	} else {                                                                                    // if the user decided to try and mess stuff up, tell them they failed, and that they should be doing more exciting things
		devlog("woah there, pardner! you could've crashed everything! I stopped you, but you should be more careful next time!") // ^^^
	}                                                                                           // ...
}                                                                                               // ...
//var sellables = ["hamburger","cheeseburger","big mac","whopper"]
//GENERATE STOCK OF THE STORE, 6 ITEMS MAX
var addedtostock;
var stock;
var possiblestock;
var cannotaddtostock;

function stockthestore(stocknumber) {
	i = 0;                                                                                  //reset I & E in order to ensure the accuracy of the loop
	e = 0;                                                                                  //   ^    ^    ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^ 
	addedtostock = [];                                                                      // reset added to stock array to prevent stock stacking
	stock = [];                                                                             // reset stock array to prevent stock stacking
	for (i=0; i < stocknumber; i++) {                                                       // master loop(i), bröther
		possiblestock = sellables[randomnumber(sellables.length)]                           // gets a random item from the sellables array
		devlog("Possible item to be added to stock space #"+i+" is "+possiblestock.name+"!")// logs it, for debugging
		for (e = 0; e < addedtostock.length; e++) {                                         // beta loop(e), bröther
			if (possiblestock.name === addedtostock[e]) {                                   // checks whether the item was already added to the stock 
				cannotaddtostock = true;                                                    // if so, then it prevents the item from being added by changing a variable
				devlog("Possible stock item '"+possiblestock.name+"' is already added!")    // logs it, for debugging
			} else {                                                                        // otherwise,
																							// do nothing, again.
			}                                                                               
		}                                                                                   
		if (cannotaddtostock == false) {                                                    // if it was able to be added, then 
			stock.push(possiblestock)                                                       // add the item
			addedtostock.push(possiblestock.name)                                           // add it to the 'added' array
			devlog("added " + possiblestock.name + " to the stock array!")                  // log it, for debugging
		} else {                                                                            // otherwise
			devlog("failed to add " + possiblestock.name + " to the store's stock array!")  // log the failure
			cannotaddtostock = false                                                        // reset the variable so future items have a shot at getting added
			flipacoin()                                                                     // flip a coin (50/50)
			if (coin == true) {                                                             // if heads,
				i--                                                                         // i goes back down, allowing another item to be added in place of the failed one
				// BELOW: log the outcome for debugging
				devlog("didn't add the " + possiblestock.name + " to the array, and was able to add another item possibility, a generous coin flip")
			} else {                                                                        // if tails, 
				// BELOW: log the outcome for debugging
				devlog("didn't add the " + possiblestock.name + " to the array, and was not able to add another item possibility, a weak coin flip")
			}
		}
	}
	devlog("logging stock at line #79...")
	devlog(stock)                                                                           // log the stock to ensure accuracy and debugging
}
// DISPLAY THE STOCK OF THE STORE
function displayshopstock() {
	$("#shopcontent").html('')
	devlog("cleared the shop's html!")
	while (stock.length < 6) {
		stock.push(noitem)
	}
	for (i=0; i < stock.length; i++) {
		if (i == 3) {
			$("#shopcontent").append("<br/>")
		}
		if (stock[i] != noitem) {
			$("#shopcontent").append("<div id='shopstock"+i+"' class='shopstockdata'><img width='64px' src='"+stock[i].icon+"'/><span class='shopstocktooltiptext'>"+stock[i].shoptooltip+"</span></div>")
		} else {
			$("#shopcontent").append("<div class='shopstockdata'><img width='64px' src='"+stock[i].icon+"'/></div>")
		}
	}
}
//PURCHASING
function applyclickpurchase() {
	for (i=0; i < stock.length; i++) {                                                // master loop to apply the click to purchase to all elements
		switch(i) {                                                                   // switch statement that half-defeats the purpose of the loop in order to apply the click compactly
			case 0:                                                                   // each of the possibilities are zero-indexed, like the array and the i-loop
				$("#shopstock"+i).click(function(){purchase(0, 'player'); devlog("attempted to purchase from stock slot #0")})// apply the click to the FIRST slot
				break;                                                                // breaks the statement in order to not let errors exacerbate
			case 1:                                                                   // case of i being 1 in the loop
				$("#shopstock"+i).click(function(){purchase(1, 'player'); devlog("attempted to purchase from stock slot #1")})// apply the click to the SECOND slot
				break;                                                                // breaks the statement in order to not let errors exacerbate
			case 2:                                                                   // case of i being 2 in the loop
				$("#shopstock"+i).click(function(){purchase(2, 'player'); devlog("attempted to purchase from stock slot #2")})// apply the click to the THIRD slot
				break;                                                                // breaks the statement in order to not let errors exacerbate
			case 3:                                                                   // case of i being 3 in the loop
				$("#shopstock"+i).click(function(){purchase(3, 'player'); devlog("attempted to purchase from stock slot #3")})// apply the click to the FOURTH slot
				break;                                                                // breaks the statement in order to not let errors exacerbate
			case 4:                                                                   // case of i being 4 in the loop
				$("#shopstock"+i).click(function(){purchase(4, 'player'); devlog("attempted to purchase from stock slot #4")})// apply the click to the FIFTH slot
				break;                                                                // breaks the statement in order to not let errors exacerbate
			case 5:                                                                   // case of i being 5 in the loop
				$("#shopstock"+i).click(function(){purchase(5, 'player'); devlog("attempted to purchase from stock slot #5")})// apply the click to the SIXTH slot
				break;                                                                // breaks the statement in order to not let errors exacerbate
			default:                                                                  // defaults to an error message, because there should be no way for i to exceed 5
				devlog("ERROR: applyclickpurchase() master loop exceeded parameters!")// error message
		}
	}
	devlog("applied the click to purchase!")
}
//PURCHASE FUNCTION
var dontaddinv;
var noitemsleft;
var noitemcounter;
function purchase(index, whom) {                                                                            // at last, the purchsing function
	newstock = []                                                                                           // reset the new stock variable (it's a surprise tool that will help us later)
	if (whom == 'player') {                                                                                 // checks who's buying an item (in this case, the player is) as described in one of the function's arguments
		if (player.money >= stock[index].shop_price) {                                                      // checks if the player is able to afford the item in question
			for (i = 0; i < stock.length; i++) {                                                            // loop again, brother
				if (index == i){                                                                            // checks if the item is the bought item
					devlog("ladies and gentlemen. We got 'em. "+stock[i].name+" was bought by the player.") // logs the item in question
					newstock.push(noitem)                                                                   // indirectly removes the item from the shop pool by adding no item to the shop instead of the item
					dontaddinv = false;
					for (o=0; o < player.inventory.length; o++) {
						if (player.inventory[o].item.name == stock[i].name){
							dontaddinv = true
						}
					}
					if (dontaddinv == false) {
						player.inventory.push({item: stock[i], amount: 1})                              // adds the item to the player's inventory
						devlog("added the "+stock[i].name)
					} else if (dontaddinv == true) {
						for (o=0; o < player.inventory.length; o++) {
							if (player.inventory[o].item.name == stock[i].name){
								player.inventory[o].amount += 1
							}
						}
					}
					player.money -= stock[i].shop_price                                                     // takes the player's money in exchange
					devlog("added the purchased item to the player's inventory!")                           // logs it for debugging
					//add update inventory display function here
				} else {                                                                                    // if it isn't the bought item, 
					newstock.push(stock[i])                                                                 // add the nonpurchased item to the shop pool, in it's exact position, due to the nature of the loop
					devlog("added "+stock[i].name+" to the new shop. It wasn't purchased.")                 // log it, for debugging
				}                                                                                           
			}                                                                                               
			stock = newstock                                                                                // set the stock to the new stock, removing the purchased item
			displayshopstock()                                                                              // update the stock's display
			applyclickpurchase() 
			updateinventorydisplay()
			updateallinventoryclickables()                                                                           // re-add the purchasing jquery
		} else {                                                                                            // if the player doesn't have enough money,
			devlog("not enough money on the player's part! (add this to the terminal later!)")              // log it
			//Add flavor text in the terminal for this, from the shopkeep
		}                                                                                                   
	} else if (whom == 'developer') {                                                                       // if the patron is the developer,
		player.inventory.push(stock[index])                                                                 // give the dev the item, without money or removing it from the pool
		devlog('Your ' +stock[index].name+ ', my good sir.')                                                // Thank you, my good man
	} else if (whom == 'playtester') {                                                                      // if the patron is a playtester,
		if (player.money >= stock[index].shop_price) {                                                      // check for money
			player.money -= stock[index].shop_price                                                         // take the money, if he has it
			player.inventory.push(stock[index])                                                             // give him the item
		} else {                                                                                            // if he does not have the money,
			devlog('well shit my guy. no moneys.')                                                          // log it to tell him he is poor (and irish)
		}                                                                                                   
	} else {                                                                                                // if we don't know who they are, tell them
		devlog("Wait a minute...")                                                                          // TELLING THEM
		devlog("Who ARE you?")                                                                              // TELLING THEM
	}
	noitemcounter = 0                                                                                       // resets the counter
	for (i = 0; i < stock.length; i++) {                                                                    // checks if the stock has no items left
		if (stock[i] != noitem) {                                                                           // if an item is noitem
			noitemcounter++                                                                                 // add 1 to the counter
		}
	}
	if (noitemcounter == 6) {                                                                               // if the counter reaches 6 (same as shopkeep's stock amount)
		// add the shopkeep's dialogue into the terminal!
	}
}
//ALL TOGETHER NOW
function initializeshop(howmanysellables, howmuchstock) {
	getsellables(howmanysellables)
	devlog("got sellables!")
	stockthestore(howmuchstock)
	devlog("stocked the store!")
	displayshopstock()
	devlog("displayed shop stock!")
	applyclickpurchase()
	devlog("applied click to purchase!")
}
devlog("shop script ran!")
