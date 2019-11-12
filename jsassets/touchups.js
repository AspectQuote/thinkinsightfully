initializeshop(8, 6)

if (devmode == true) {
	user = 'developer'
} else {
	user = 'player'
}
give("item", 2, greenonion)
give("item", 2, potato)
give("item", 2, butter)
give("item", 27, notch)
give("item", 1, sandvich)
updateinventorydisplay()
updateallinventoryclickables()
showcraftingtab()
updatecraftingdisplay()
devlog("touchups script ran!")
devlog("All done after "+devlogcount+" notes!")
