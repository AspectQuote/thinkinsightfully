function updatecraftingdisplay() {
	$("#craftingpossibilities").html('')
	for (i=0; i < allrecipes.length; i++) {
		$("#craftingpossibilities").append("<span class='craftingthumbs' id='craftingthumb"+i+"'> <img  src='"+allrecipes[i].item.icon+"' width=64px /> </span><br />")
		$("#craftingthumb"+i).css("border", "1px solid "+allrecipes[i].item.color)
		$("#craftingthumb"+i).append("<span class='craftingtooltip' id='craftingtooltip"+i+"'>"+allrecipes[i].item.name+" <img src=imgassets/nunfing.png height=1px width=40px /> Recipe: </span>")
		for (e=0; e < allrecipes[i].recipe.length; e++) {
			if (allrecipes[i].recipe[e].item != noitem) {
				$("#craftingtooltip"+i).append("<img src='"+allrecipes[i].recipe[e].item.icon+"' width=32px/>x"+allrecipes[i].recipe[e].amount+"")
			}
		}
		createclickablecraftable(i)
	}
}

function createclickablecraftable(e) {
	$("#craftingthumb"+e).click(function() {allrecipes[e].item.craft();})
	devlog("added clickability for crafting slot #" + e)
}

devlog("Crafting Display Script ran!")
