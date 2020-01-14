function Player(health, maxhealth, insight, exp, maxexp, level, money, inventory) {
	this.health = health
	this.maxhealth = maxhealth
	this.insight = insight
	this.exp = exp
	this.maxexp = maxexp
	this.level = level
	this.money = money
	this.inventory = inventory
	this.equippedweapon = false;
	this.equippedring = false;
	this.equippedarmor = false;
}
var player = new Player(25, 25, 0, 0, 0, 1, 0, [])

function give(what, amount, which){
	if (devmode == true) {
		switch(what) {
			case "money":
				player.money += amount
				break;
			case "exp":
				player.exp += amount
				break;
			case "item":
				if (which) {
					if (which.stackable = true) {
						addthis = {item:which, amount:amount}
						player.inventory.push(addthis)
						addthis = ''
					} else {
						addthis = {item:which, amount:1}
						player.inventory.push(addthis)
						addthis = ''
					}
				} else {
					devlog("ERROR: item '" + which + "' does not exist!")
				}
				break;
			case "insight":
				player.insight += amount
				break;
			case "hp":
				player.hp += amount
				if (player.hp >= player.maxhp) {
					player.hp = player.maxhp
				}
				break;
			default:
				
		}
	} else {
		console.log("nice try, chief, but you haven't enabled developer mode, so no cheaty cheaty sneaky sneaky for you!")
	}
}
devlog("player script ran!")
