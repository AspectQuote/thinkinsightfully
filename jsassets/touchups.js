initializeshop(8, 6)

if (devmode == true) {
	user = 'developer'
} else {
	user = 'player'
}
player.inventory.push({item: potato, amount: 2})
player.inventory.push({item: greenonion, amount: 2})
player.inventory.push({item: butter, amount: 2})
updateinventorydisplay()
updateallinventoryclickables()
showcraftingtab()
devlog("touchups script ran!")
devlog("All done after "+devlogcount+" notes!")
