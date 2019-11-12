var showntab = 'none!??!'
function showshoptab() {
	$("#shop").show()
	showntab = 'shop'
	devlog('shown the shop tab')
}
function hideshoptab() {
	$("#shop").hide()
	devlog('hid the shop tab')
}
function showachievementstab() {
	$("#achievements").show()
	showntab = 'achievements'
	devlog('shown the achievements tab')
}
function hideachievementstab() {
	$("#achievements").hide()
	devlog('hid the achievements tab')
}
function showcraftingtab() {
	$("#crafting").show()
	showntab = 'crafting'
	devlog('shown the crafting tab')
}
function hidecraftingtab() {
	$("#crafting").hide()
	devlog('hid the crafting tab')
}
function showonlyshoptab() {
	if (showntab !== 'shop') {
		hideachievementstab()
		hidecraftingtab()
		showshoptab()
		if (devmode == true) {
			return devlogcount
		}
	} else {
		devlog('this tab (' + showntab + ') is already being shown! To prevent lag spike on super potato machines, the function will not be called again!')
	}
}
function showonlyachievementstab() {
	if (showntab !== 'achievements') {
		hideshoptab()
		hidecraftingtab()
		showachievementstab()
		if (devmode == true) {
			return devlogcount
		}
	} else {
		devlog('this tab (' + showntab + ') is already being shown! To prevent lag spike on super potato machines, the function will not be called again!')
	}
}
function showonlycraftingtab() {
	if (showntab !== 'crafting') {
		hideachievementstab()
		hideshoptab()
		showcraftingtab()
		if (devmode == true) {
			return devlogcount
		}
	} else {
		devlog('this tab (' + showntab + ') is already being shown! To prevent lag spike on super potato machines, the function will not be called again!')
	}
}
$("#shoptab").click(function(){
	showonlyshoptab()
})
$("#achievementstab").click(function(){
	showonlyachievementstab()
})
$("#craftingtab").click(function(){
	showonlycraftingtab()
})
showonlyshoptab()

//shopkeep display js
function getinnerwidthminusthegifwidth() {
	halfshopwidth = $("#shop").width()/2
	halfshopkeepgifwidth = $("#shopkeepgif").width()/2
	return halfshopwidth-$("#shopkeepgif").width()+halfshopkeepgifwidth
}
$("#shopkeepgif").css("left", getinnerwidthminusthegifwidth())



devlog("ui script ran!")
