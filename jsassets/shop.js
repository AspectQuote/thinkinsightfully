// what sellables do we start with?
let shopstock = []
for (i=0; i < 21; i++) {
	shopstock.push(shop_pool[randomnumber(0, shop_pool.length)])
}
for (i=0; i < shopstock.length; i++) {
	chec = shopstock.filter(item => item == shopstock[i])
	if (chec.length >= 2) {
		for (e=0; e < chec.length-1; e++) {
			shopstock.splice(shopstock.indexOf(chec[0]), 1)
		}
	}
}
// display those sellables
$("#shopcontent").append("<div id='shopdivider1'></div>")
$("#shopcontent").append("<div id='shopdivider2'></div>")
$("#shopcontent").append("<div id='shopdivider3'></div>")
for (i=0; i < shopstock.length; i++) {
	if (i < 7) {
		$("#shopdivider1").append("<div id='shopslot"+i+"' class='shopslots' style='border: 1px solid "+shopstock[i].color+"; margin: 3px;'><span class='tooltip'><img src='"+shopstock[i].icon+"' width=64px/><span class='tooltiptext'>"+shopstock[i].shoptooltip+"</span></span></div>")
	}
	if (i >= 7 && i < 14) {
		$("#shopdivider2").append("<div id='shopslot"+i+"' class='shopslots' style='border: 1px solid "+shopstock[i].color+"; margin: 3px;'><span class='tooltip'><img src='"+shopstock[i].icon+"' width=64px/><span class='tooltiptext'>"+shopstock[i].shoptooltip+"</span></span></div>")
	}
	if (i >= 14) {
		$("#shopdivider3").append("<div id='shopslot"+i+"' class='shopslots' style='border: 1px solid "+shopstock[i].color+"; margin: 3px;'><span class='tooltip'><img src='"+shopstock[i].icon+"' width=64px/><span class='tooltiptext'>"+shopstock[i].shoptooltip+"</span></span></div>")
	}
}
// add functionality to the sellables
for (i=0; i < shopstock.length; i++) {
	createclickablepurchasable(i)
}
function createclickablepurchasable(e) {
	if (shopstock[e] !== noitem) {
		$("#shopslot"+e).click(function() {purchase(e)})
		devlog("added purchasability for shop slot #" + e)
	} else {
		$("#shopslot"+e).unbind('click')
		devlog("didnt add clickability to shop slot number " + e + " because it's 'noitem!'")
	}
}
shopsuccesslines = [
	"Thank you for your patronage!",
	"Thank you for shopping at our general store!",
	"My thanks!",
	"Enjoy your goods!"
]
function purchase(itemindex) {
	if (player.money >= shopstock[itemindex].shop_price && terminalcooldown == no) {
		if (player.inventory.length < 24) {
			player.money -= shopstock[itemindex].shop_price
			chec = player.inventory.filter(slot => slot.item.name == shopstock[itemindex].name)
			if (chec.length != 0) {
				player.inventory[player.inventory.indexOf(chec[0])].amount += 1
			} else {                                                            // this makes sure the player gets their items in a stack, not another slot getting filled with shite
				player.inventory.push({item: shopstock[itemindex], amount: 1})
			}
			shopstock[itemindex] = noitem
			updateshopslotdisplay(itemindex)
			updateinventorydisplay()
			hamilton.say(shopsuccesslines[randomnumber(0, shopsuccesslines.length)])
		} else {
			random = randomnumber(1, 100)
			if (random <= 5) {
				hamilton.say("You simply do not have enough space for this item!")
			} else {
				whurmp.say("Don't waste my time. Your inventory is full!")
			}
		}
	} else if (player.money <= shopstock[itemindex].shop_price && terminalcooldown == no) {
		random = randomnumber(1, 100)
		if (random <= 5) {
			whurmp.say("You can't afford this item! You are too poor!")
		} else {
			hamilton.say("I apologize my good sir, but your wallet looks a bit thin for this item.")
		}
	}
}
function displayshop() {
	$("#shopdivider1").html('')
	$("#shopdivider2").html('')
	$("#shopdivider3").html('')
	for (i=0; i < shopstock.length; i++) {
		if (i < 7) {
			$("#shopdivider1").append("<div id='shopslot"+i+"' class='shopslots' style='border: 1px solid "+shopstock[i].color+"; margin: 3px;'><span class='tooltip'><img src='"+shopstock[i].icon+"' width=64px/><span class='tooltiptext'>"+shopstock[i].shoptooltip+"</span></span></div>")
		}
		if (i >= 7 && i < 14) {
			$("#shopdivider2").append("<div id='shopslot"+i+"' class='shopslots' style='border: 1px solid "+shopstock[i].color+"; margin: 3px;'><span class='tooltip'><img src='"+shopstock[i].icon+"' width=64px/><span class='tooltiptext'>"+shopstock[i].shoptooltip+"</span></span></div>")
		}
		if (i >= 14) {
			$("#shopdivider3").append("<div id='shopslot"+i+"' class='shopslots' style='border: 1px solid "+shopstock[i].color+"; margin: 3px;'><span class='tooltip'><img src='"+shopstock[i].icon+"' width=64px/><span class='tooltiptext'>"+shopstock[i].shoptooltip+"</span></span></div>")
		}
		createclickablepurchasable(i)
	}
}
function updateshopslotdisplay(slot) {
	$("#shopslot"+slot).css('border', '')
	$("#shopslot"+slot).html("<div id='shopslot"+slot+"' class='shopslots' margin: 3px;'><span class='tooltip'><img src='"+shopstock[slot].icon+"' width=64px/><span class='tooltiptext'>"+shopstock[slot].shoptooltip+"</span></span></div>")
	createclickablepurchasable(slot)
}
function refreshshop() {
	shopstock = []
	for (i=0; i < 21; i++) {
	shopstock.push(shop_pool[randomnumber(0, shop_pool.length)])
	}
	for (i=0; i < shopstock.length; i++) {
		chec = shopstock.filter(item => item == shopstock[i])
		if (chec.length >= 2) {
			for (e=0; e < chec.length-1; e++) {
				shopstock.splice(shopstock.indexOf(chec[0]), 1)
			}
		}
	}
	displayshop()
}

devlog("shop script ran!")
//started at 209 lines, now does much more and is more optimized and less buggy with only 112 counting this one
