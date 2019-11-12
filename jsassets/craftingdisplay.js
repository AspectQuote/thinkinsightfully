function updatecraftingdisplay() {
	$("#craftingpossibilities").html('')
	for (i=0; i < allrecipes.length; i++) {
		$("#craftingpossibilities").append("<img class='craftingthumbs' id='craftingthumb"+i+"' src='"+allrecipes[i].item.icon+"' width=64px />")
		$("#craftingthumb"+i).css("border", "1px solid "+allrecipes[i].item.color)
		createclickablecraftable(i)
	}
}

function createclickablecraftable(e) {
	$("#craftingthumb"+e).click(function() {allrecipes[e].item.craft();})
	devlog("added clickability for crafting slot #" + e)
}

devlog("Crafting Display Script ran!")
