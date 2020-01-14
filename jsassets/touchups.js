if (devmode == true) {
	user = 'developer'
} else {
	user = 'player'
}
give("item", 2, greenonion)
give("item", 2, potato)
give("item", 2, butter)
give("item", 27, notch)
for(i=0; i < 18; i++) {
give("item", 1, allitems[i])	
}
updateinventorydisplay()
updatecraftingdisplay()
//exppotion.description = "Experience Potion", "This blue brew contains a small dose of a drug called 'experience'. It will cause you to become more knowlegable quickly, and is commonly used by interplanetary politcians to make themselves have some semblance of a brain right before running for an office they realize they don't want after growing a noodle and a moral compass.""
devlog("touchups script ran!")
devlog("All done after "+devlogcount+" notes!")
