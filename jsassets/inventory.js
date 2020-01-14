for (i=0; i < player.inventory.length; i++) {
	$("#inventorymain").append("<img src="+player.inventory[i].item.icon+" width=48px />")
}
function updateinventorydisplay() {
	$("#inventorymain").html('')
	$("#inventorymain").append('<div id=inventorydivider1></div>')
	$("#inventorymain").append('<div id=inventorydivider2></div>')
	$("#inventorymain").append('<div id=inventorydivider3></div>')
	$("#inventorymain").append('<div id=inventorydivider4></div>')
	$("#inventorymain").append('<div id=inventorydivider5></div>')
	for (i=0; i < player.inventory.length; i++) {
		if (i <= 10) {
			$("#inventorydivider1").append("<div style='border: 1px solid "+player.inventory[i].item.color+"' class='inventoryslots' id=inventoryslot"+i+" ><span class='itemamount'>"+player.inventory[i].amount+"</span><span class='tooltip'><img src="+player.inventory[i].item.icon+" width=48px /><span id='inventorytooltip' class='tooltiptext'>"+player.inventory[i].item.tooltip+"</span></span></div>")
		} else if(i >= 11 && i <= 22) {
			$("#inventorydivider2").append("<div style='border: 1px solid "+player.inventory[i].item.color+"' class='inventoryslots' id=inventoryslot"+i+" ><span class='itemamount'>"+player.inventory[i].amount+"</span><span class='tooltip'><img src="+player.inventory[i].item.icon+" width=48px /><span id='inventorytooltip' class='tooltiptext'>"+player.inventory[i].item.tooltip+"</span></span></div>")
		} else if(i >= 23 && i <= 34) {
			$("#inventorydivider3").append("<div style='border: 1px solid "+player.inventory[i].item.color+"' class='inventoryslots' id=inventoryslot"+i+" ><span class='itemamount'>"+player.inventory[i].amount+"</span><span class='tooltip'><img src="+player.inventory[i].item.icon+" width=48px /><span id='inventorytooltip' class='tooltiptext'>"+player.inventory[i].item.tooltip+"</span></span></div>")
		} else if(i >= 35 && i <= 46) {
			$("#inventorydivider4").append("<div style='border: 1px solid "+player.inventory[i].item.color+"' class='inventoryslots' id=inventoryslot"+i+" ><span class='itemamount'>"+player.inventory[i].amount+"</span><span class='tooltip'><img src="+player.inventory[i].item.icon+" width=48px /><span id='inventorytooltip' class='tooltiptext'>"+player.inventory[i].item.tooltip+"</span></span></div>")
		}
		createclickableinvslot(i)
	}
}
          
function createclickableinvslot(e) {
	$("#inventoryslot"+e).unbind("click")
	$("#inventoryslot"+e).click(function() {
		if (terminalcooldown == false) {
			player.inventory[e].item.use(e)
			updateinventorydisplay()
		}
	})
	devlog("added clickability for inventory slot #" + e)
}                                                                                    //thanks user LogicalBranch on stack overflow for help with this
