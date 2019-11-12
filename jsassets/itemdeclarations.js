/*
Table of contents
  1. devmode items: line 94
	- blanktestcommon           : 95
	- blanktestuncommon         : 108
	- blanktestvery_uncommon    : 121
	- blanktestrare             : 134
	- blanktestvery_rare        : 147
	- blanktestextremely_rare   : 160
	- blanktestlegendary        : 173
	- blanktestmythical         : 186
  2. In-game items: line 200
    -Coin Potion: line 200               | -! : line | -! : line |
    -Exp Potion: line 213                | -! : line | -! : line |
    -Health Potion: line 226             | -! : line | -! : line |
    -Insight Potion: line 239            | -! : line | -! : line |
    -Iron Dagger: line 252               | -! : line | -! : line |
    -Iron Sword: line 265                | -! : line | -! : line |
    -Iron Armor: line 278                | -! : line | -! : line |
    -Iron Ring: line 291                 | -! : line | -! : line |
    -Ammo Box: line 304                  | -! : line | -! : line |
    -Blowtorch: line 317                 | -! : line | -! : line |
    -Cake: line 330                      | -! : line | -! : line |
    -Potato: line 343                    | -! : line | -! : line |
    -Counterfeit Currency: line 356      | -! : line | -! : line |
    -Leek: line 369                      | -! : line | -! : line |
    -Butter: line 382                    | -! : line | -! : line |
    -Eyesight Potion: line 395           | -! : line | -! : line |
    -Slime: line 408                     | -! : line | -! : line |
    -Laser sword: line 421               | -! : line | -! : line |
    -Baked potato: line 434              | -! : line | -! : line |
    -Eye: line 447                       | -! : line | -! : line |
    -Sandvich: line 460                  | -! : line | -! : line |
    -Croissant: line 473                 | -! : line | -! : line |
    -Notch: line 486                     | -! : line | -! : line |
    -Gambler's Notch: line 499           | -! : line | -! : line |
    -High Roller's Notch: line 512       | -! : line | -! : line |
    -Notch of The Soothsayer: line 525   | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
    -!: line | -! : line | -! : line |
*/
// TEST ITEMS
if (devmode == true) {
	blanktestcommon = new Item(15, "imgassets/blankicon.gif")
	blanktestcommon.rarity = common
	blanktestcommon.craftable = no
	blanktestcommon.description = "A common item used to clear your vicinity of bullets!"
	blanktestcommon.shop_description = "A common item used to blank bullets!"
	blanktestcommon.stackable = no
	blanktestcommon.type = consumable
	blanktestcommon.name = "Common blank"
	blanktestcommon.use = function(){devlog("yeet I am a(n) "+ blanktestcommon.name)}
	blanktestcommon.doiaddtoitempools = yes
	dootheritemstuff(blanktestcommon)
	blanktestcommon.addtoitempools()
	//uncommon
	blanktestuncommon = new Item(15, "imgassets/blankicon.gif")
	blanktestuncommon.rarity = uncommon
	blanktestuncommon.craftable = no
	blanktestuncommon.description = "An uncommon item used to clear your vicinity of bullets!"
	blanktestuncommon.shop_description = "An uncommon item used to blank bullets!"
	blanktestuncommon.stackable = no
	blanktestuncommon.type = consumable
	blanktestuncommon.name = "Uncommon blank"
	blanktestuncommon.use = function(){devlog("yeet I am a(n) "+ blanktestuncommon.name)}
	blanktestuncommon.doiaddtoitempools = yes
	dootheritemstuff(blanktestuncommon)
	blanktestuncommon.addtoitempools()
	//very uncommon
	blanktestvery_uncommon = new Item(15, "imgassets/blankicon.gif")
	blanktestvery_uncommon.rarity = very_uncommon
	blanktestvery_uncommon.craftable = no
	blanktestvery_uncommon.description = "A Very Uncommon item used to clear your vicinity of bullets!"
	blanktestvery_uncommon.shop_description = "A Very Uncommon item used to blank bullets!"
	blanktestvery_uncommon.stackable = no
	blanktestvery_uncommon.type = consumable
	blanktestvery_uncommon.name = "Very Uncommon blank"
	blanktestvery_uncommon.use = function(){devlog("yeet I am a(n) "+ blanktestvery_uncommon.name)}
	blanktestvery_uncommon.doiaddtoitempools = yes
	dootheritemstuff(blanktestvery_uncommon)
	blanktestvery_uncommon.addtoitempools()
	//rare
	blanktestrare = new Item(15, "imgassets/blankicon.gif")
	blanktestrare.rarity = rare
	blanktestrare.craftable = no
	blanktestrare.description = "A rare item used to clear your vicinity of bullets!"
	blanktestrare.shop_description = "A rare item used to blank bullets!"
	blanktestrare.stackable = no
	blanktestrare.type = consumable
	blanktestrare.name = "Rare blank"
	blanktestrare.use = function(){devlog("yeet I am a(n) "+ blanktestrare.name)}
	blanktestrare.doiaddtoitempools = yes
	dootheritemstuff(blanktestrare)
	blanktestrare.addtoitempools()
	//very rare
	blanktestvery_rare = new Item(15, "imgassets/blankicon.gif")
	blanktestvery_rare.rarity = very_rare
	blanktestvery_rare.craftable = no
	blanktestvery_rare.description = "A very rare item used to clear your vicinity of bullets!"
	blanktestvery_rare.shop_description = "A very rare item used to blank bullets!"
	blanktestvery_rare.stackable = no
	blanktestvery_rare.type = consumable
	blanktestvery_rare.name = "Very Rare blank"
	blanktestvery_rare.use = function(){devlog("yeet I am a(n) "+ blanktestvery_rare.name)}
	blanktestvery_rare.doiaddtoitempools = yes
	dootheritemstuff(blanktestvery_rare)
	blanktestvery_rare.addtoitempools()
	//extremely rare
	blanktestextremely_rare = new Item(15, "imgassets/blankicon.gif")
	blanktestextremely_rare.rarity = extremely_rare
	blanktestextremely_rare.craftable = no
	blanktestextremely_rare.description = "An extremely rare item used to clear your vicinity of bullets!"
	blanktestextremely_rare.shop_description = "An extremely rare item used to blank bullets!"
	blanktestextremely_rare.stackable = no
	blanktestextremely_rare.type = consumable
	blanktestextremely_rare.name = "Extremely Rare blank"
	blanktestextremely_rare.use = function(){devlog("yeet I am a(n) "+ blanktestextremely_rare.name)}
	blanktestextremely_rare.doiaddtoitempools = yes
	dootheritemstuff(blanktestextremely_rare)
	blanktestextremely_rare.addtoitempools()
	//legendary
	blanktestlegendary = new Item(15, "imgassets/blankicon.gif")
	blanktestlegendary.rarity = legendary
	blanktestlegendary.craftable = no
	blanktestlegendary.description = "A legendary item used to clear your vicinity of bullets!"
	blanktestlegendary.shop_description = "A legendary item used to blank bullets!"
	blanktestlegendary.stackable = no
	blanktestlegendary.type = consumable
	blanktestlegendary.name = "Legendary blank"
	blanktestlegendary.use = function(){devlog("yeet I am a(n) "+ blanktestlegendary.name)}
	blanktestlegendary.doiaddtoitempools = yes
	dootheritemstuff(blanktestlegendary)
	blanktestlegendary.addtoitempools()
	//mythical
	blanktestmythical = new Item(15, "imgassets/blankicon.gif")
	blanktestmythical.rarity = mythical
	blanktestmythical.craftable = no
	blanktestmythical.description = "A mythical item used to clear your vicinity of bullets!"
	blanktestmythical.shop_description = "A mythical item used to blank bullets!"
	blanktestmythical.stackable = no
	blanktestmythical.type = consumable
	blanktestmythical.name = "Mythical blank"
	blanktestmythical.use = function(){devlog("yeet I am a(n) "+ blanktestmythical.name)}
	blanktestmythical.doiaddtoitempools = yes
	dootheritemstuff(blanktestmythical)
	blanktestmythical.addtoitempools()
}

coinpotion = new Item(60, "imgassets/coinpotion.png")
coinpotion.rarity = extremely_rare
coinpotion.craftable = no
coinpotion.description = "This odd concotion of melted gold-plated cheap metals inflates your wallet slightly. It does what you'd expect; you become more fiscally attractive, and the money you've earned is multiplied slightly."
coinpotion.shop_description = "This <i>interesting</i> drink will cause you to become richer! It's pretty hard to come by, considering it's pure gold in there."
coinpotion.stackable = yes
coinpotion.type = consumable
coinpotion.name = "Coin Potion"
coinpotion.use = function(){devlog("I still need a use!")}
coinpotion.doiaddtoitempools = yes
dootheritemstuff(coinpotion)
coinpotion.addtoitempools()

exppotion = new Item(15, "imgassets/exppotion.png")
exppotion.rarity = rare
exppotion.craftable = no
exppotion.description = "Experience Potion", "This blue brew contains a small dose of a drug called 'experience'. It will cause you to become more knowlegable quickly, and is commonly used by interplanetary politcians to make themselves have some semblance of a brain right before running for an office they realize they don't want after growing a noodle and a moral compass."
exppotion.shop_description = "My good sir! Have you ever wanted to not work so hard to become a more powerful being? If so, we have the perfect beverage for you! Take a sip of this  <i><b>AMAZING</b></i> potion and become more intelligent!"
exppotion.stackable = yes
exppotion.type = consumable
exppotion.name = "Exp Potion"
exppotion.use = function(){devlog("I still need a use!")}
exppotion.doiaddtoitempools = yes
dootheritemstuff(exppotion)
exppotion.addtoitempools()

healthpotion = new Item(10, "imgassets/healthpotion.png")
healthpotion.rarity = very_uncommon
healthpotion.craftable = no
healthpotion.description = "Health Potion", "A flask of a crimson liquid known simply as '<b>Health</b>'. Downing this potation makes your body heal very quickly. This drink was outlawed in many planets due to its high use in gangs trying to storm places like area 51 without suffering many casualties. However, they soon realized if you die too fast, you can't drink the brew."
healthpotion.shop_description = "This cool and epic dink you've never seen anywhere before will blow your mind! When you drink this epic thirst quencher, you will <i>immediately</i> feel better! Immediately!"
healthpotion.stackable = yes
healthpotion.type = consumable
healthpotion.name = "Health Potion"
healthpotion.use = function(){devlog("I still need a use!")}
healthpotion.doiaddtoitempools = yes
dootheritemstuff(healthpotion)
healthpotion.addtoitempools()

insightpotion = new Item(100, "imgassets/insightpotion.png")
insightpotion.rarity = mythical
insightpotion.craftable = no
insightpotion.description = "A glass flask filled to the 3/4 point with liquefied <i class='insightful'>Insight</i>, an extremely rare substance that grants the user a minor step towards omnipotence. Ingesting this will lead to a minor increase to one's <i class='insightful'>Insight</i>."
insightpotion.shop_description = "Wowee, do I have a deal for you! This medium-sized glass jar-looking thing has contents that will allow the user to become smarter, but also wiser! Sound strange? It is! It is also very, very rare, so I'll have to charge big for it."
insightpotion.stackable = yes
insightpotion.type = consumable
insightpotion.name = "Insight Potion"
insightpotion.use = function(){devlog("I still need a use!")}
insightpotion.doiaddtoitempools = yes
dootheritemstuff(insightpotion)
insightpotion.addtoitempools()

irondagger = new Item(25, "imgassets/irondagger.png")
irondagger.rarity = uncommon
irondagger.craftable = no
irondagger.description = "A small, versatile blade composed of, mostly, iron. Iron cannot be sharpened as well as many other materials, resulting in an edge capable of inflicting medium-lethality wounds."
irondagger.shop_description = "This awesome little knife is just what you'd need in order to defend yourself from.. uhh something! Something that will hurt you! And it's probably not that big.."
irondagger.stackable = no
irondagger.type = weapon
irondagger.name = "Iron Dagger"
irondagger.use = function(){devlog("I still need a use!")}
irondagger.doiaddtoitempools = yes
dootheritemstuff(irondagger)
irondagger.addtoitempools()

ironsword = new Item(30, "imgassets/ironsword.png")
ironsword.rarity = rare
ironsword.craftable = no
ironsword.description = "A new weapon of old times, the swords of old were the weapons of choice for the knights of earth. Being made of iron makes this weapon magnetic, a trait no longer common in the newer weapons of today, as a magnetic blade might go flying at your refridgerator when you try to get a snack."
ironsword.shop_description = "This great edge is the perfect thing to use when a beast of old is attempting to dispatch you! It's fairly cheap, too!"
ironsword.stackable = no
ironsword.type = weapon
ironsword.name = "Iron Sword"
ironsword.use = function(){devlog("I still need a use!")}
ironsword.doiaddtoitempools = yes
dootheritemstuff(ironsword)
ironsword.addtoitempools()

ironarmor = new Item(40, "imgassets/ironarmor.png")
ironarmor.rarity = rare
ironarmor.craftable = no
ironarmor.description = "A full set of Iron protection (not the sexual kind) to protect your mortal body from wounds. Covers your <b>torso</b>, <b>legs</b>, <b>feet</b>, <b>arms</b>, and your <b>entire head</b> except for your face. This set is extremely heavy, as it is pure Fe. Take care while wearing it, as you will be prone to overheating."
ironarmor.shop_description = "This plate armor is made of Iron! It will protect you very well, so long as your enemy is not trying to blow you up! (but what are the chances of that?)"
ironarmor.stackable = no
ironarmor.type = consumable
ironarmor.name = "Iron Armor"
ironarmor.use = function(){devlog("I still need a use!")}
ironarmor.doiaddtoitempools = yes
dootheritemstuff(ironarmor)
ironarmor.addtoitempools()

ironring = new Item(15, "imgassets/ironring.gif")
ironring.rarity = uncommon
ironring.craftable = yes
ironring.description = "A small ring forged of iron (of course), with the added benefit of new technology, allowing this ring to fit any finger size. Some say that rings add a certain charm to one's being, however, this is mostly superstition, as people who have rings on are mostly either married or pimps; both of which are not very charming."
ironring.shop_description = "This small metal piece of ironry (jewelry with no jewels and made of iron) is just what you need to be even classier than your current appearance! Also, it's pretty cheap, too, so don't go worrying about the price of this fine ware."
ironring.stackable = no
ironring.type = ring
ironring.name = "Iron Ring"
ironring.use = function(){devlog("I still need a use!")}
ironring.doiaddtoitempools = yes
dootheritemstuff(ironring)
ironring.addtoitempools()

ammobox = new Item(30, "imgassets/ammobox.png")
ammobox.rarity = very_rare
ammobox.craftable = no
ammobox.description = "A heavy box of ammuntion, army green and rusted on the outside. The inside, however, <b>has exactly the type of ammo you need</b> whenever you open it! If that isn't innovation (or lazy programming), then I don't know what is!"
ammobox.shop_description = "You good sir! You look like you could use some ammo! Well fear not, this amazing box has the ammo you need at a price you can (most likely) afford!"
ammobox.stackable = no
ammobox.type = consumable
ammobox.name = "Ammo Box"
ammobox.use = function(){devlog("I still need a use!")}
ammobox.doiaddtoitempools = yes
dootheritemstuff(ammobox)
ammobox.addtoitempools()

blowtorch = new Item(60, "imgassets/blowtorch.png")
blowtorch.rarity = rare
blowtorch.craftable = no
blowtorch.description = "A pressurized bottle of highly flammable gas, StarFuel&#153;. (not propane, as the man on the hill might have you believe) This fuel can burn up to 10,000&#176; Celsius, you think this is a bit overkill, and a tad dangerous. There is a warning symbol on its side, and it reads, 'do not use in open areas. do not use to light fires. do not store in areas less than 10&#176; Celsius. do not use without eye, ear, face, and body protection. StarFuel Inc. and its subsidiaries are not responsible for any blindness, burns, injuries, or death related to the use of this product. Thanks for choosing StarFuel&#153;, the only one for everyone!' "
blowtorch.shop_description = "This AMAZING welder of unimaginable temperature can get to temperatures of over 500 degrees! I tested it myself!"
blowtorch.stackable = no
blowtorch.type = consumable
blowtorch.name = "Blowtorch"
blowtorch.use = function(){devlog("I still need a use!")}
blowtorch.doiaddtoitempools = yes
dootheritemstuff(blowtorch)
blowtorch.addtoitempools()

cake = new Item(1, "imgassets/cake.png")
cake.rarity = very_uncommon
cake.craftable = no
cake.description = "A vanilla cake with chocolate frosting layers on the inside. Baked to perfection, this Cake seems special; even the perfect little red cherries on the top of this baked good make it seem masterfully made. This seems like the Cake at the end of another challenge. (you can't quite recall it; but it had something to do with ellipses of <span id='blueportal'>contrasting</span> <span id='orangeportal'>colors </span>.) Thankfully, this Cake came in a white, circular box to protect it from adventurers like you from ruining it."
cake.shop_description = "Buy this delicious Cake now! It's really good!"
cake.stackable = no
cake.type = consumable
cake.name = "Cake"
cake.use = function(){devlog("I still need a use!")}
cake.doiaddtoitempools = yes
dootheritemstuff(cake)
cake.addtoitempools()

potato = new Item(10, "imgassets/potato.png")
potato.rarity = common
potato.craftable = yes
potato.description = "A spud of undescribable origin, probably Idaho, or Ireland, some place that starts with an I. You think this because there is an uppercase 'I' carved into the back of the tater."
potato.shop_description = "This is a potato! versatile in many foods! Very nice for cooking with food!"
potato.stackable = yes
potato.type = consumable
potato.name = "Potato"
potato.use = function(){devlog("I still need a use!")}
potato.doiaddtoitempools = yes
dootheritemstuff(potato)
potato.addtoitempools()

counterfeitcurrency = new Item(9999, "imgassets/counterfeitcurrency.png")
counterfeitcurrency.rarity = very_rare
counterfeitcurrency.craftable = no
counterfeitcurrency.description = "A fake UC (universal credit). Often used in criminal organizations to do exactly what you'd expect, buy things. This credit in particular is a 100 credit voucher; use it wisely. There are some eyes that can spot the inconsistencies with this credit and the legal medium."
counterfeitcurrency.shop_description = "You shouldn't be seeing this."
counterfeitcurrency.stackable = no
counterfeitcurrency.type = consumable
counterfeitcurrency.name = "Counterfeit Currency"
counterfeitcurrency.use = function(){devlog("I still need a use!")}
counterfeitcurrency.doiaddtoitempools = yes
dootheritemstuff(counterfeitcurrency)
counterfeitcurrency.addtoitempools()

greenonion = new Item(1, "imgassets/leek.png") //girls wanna drink wine
greenonion.rarity = uncommon
greenonion.craftable = yes
greenonion.description = "A bunch of small green onions bundled together with a rubber band. These shallots are one of the best ingredients to anything that has a weak or bland flavor; providing optimal spice and crunch to your dish."
greenonion.shop_description = "Buy the Leek now. Very delicious, very crumch, very epic"
greenonion.stackable = yes
greenonion.type = consumable
greenonion.name = "Leek"
greenonion.use = function(){devlog("I still need a use!")}
greenonion.doiaddtoitempools = yes
dootheritemstuff(greenonion)
greenonion.addtoitempools()

butter = new Item(1, "imgassets/butter.png")
butter.rarity = common
butter.craftable = yes
butter.description = "A stick of Buther's Butter. The wrapping is semi-transparent with the nutritional facts on the side. It is not up to code, saying that it contains the 30 percent recommended daily value of butter, and the only ingredient is salted butter."
butter.shop_description = "Hmm yes. Butter. Buy now pleas."
butter.stackable = yes
butter.type = consumable
butter.name = "Butter"
butter.use = function(){devlog("I still need a use!")}
butter.doiaddtoitempools = yes
dootheritemstuff(butter)
butter.addtoitempools()

eyesightpotion = new Item(20, "imgassets/eyesightpotion.png")
eyesightpotion.rarity = very_rare
eyesightpotion.craftable = no
eyesightpotion.description = "A bottle that is awkward to fit inside of your oversize pockets. Increases visibility under unfavorable conditions; however, it does not grant X-ray vision."
eyesightpotion.shop_description = "This is a bottle that is very hard to fit inside of my shop. Please just buy it so I can get rid of it; I honestly don't know or care what it does."
eyesightpotion.stackable = yes
eyesightpotion.type = consumable
eyesightpotion.name = "Eyesight Potion"
eyesightpotion.use = function(){devlog("I still need a use!")}
eyesightpotion.doiaddtoitempools = yes
dootheritemstuff(eyesightpotion)
eyesightpotion.addtoitempools()

slime = new Item(30, "imgassets/slime.gif")
slime.rarity = rare
slime.craftable = yes
slime.description = "This is a piece of slime; commonly mistaken for jello or a bit of gelatin (there's a difference, I think.) These are found in abundance from little, tiny slimes. This is not cruelty-free, however; it was harvested from the slaughter of a slime. There is a popular use of this, justifying its harvesting. Slime (and its live counterpart) are very flammable."
slime.shop_description = "This is a small piece of jelly, commonly associated with tiny, little gooey things. You should buy it. It's kinda sticky."
slime.stackable = yes
slime.type = consumable
slime.name = "Slime"
slime.use = function(){devlog("I still need a use!")}
slime.doiaddtoitempools = yes
dootheritemstuff(slime)
slime.addtoitempools()

lasersword = new Item(1, "imgassets/lasersword.png")
lasersword.rarity = extremely_rare
lasersword.craftable = no
lasersword.description = "This is a laser sword. These have become exceedingly rare, as they have stopped being manufactured about 30 years ago. Why, you ask? Well, because a deadly blade made for children are apparently 'unsafe' and 'full of bad judgement.' Needless to say, this is a pretty lethal blade; having one edge lined with a laser. Also, laser guns have been banned for being 'blinding', and 'dangerous.' Kids these days.. they just need to stop being such weenies and learn to shoot an eye out."
lasersword.shop_description = "This is a laser-sword. It is no longer manufactured; meaning these are in limited supply; so I have to charge farily big for it. "
lasersword.stackable = no
lasersword.type = weapon
lasersword.name = "Laser Sword"
lasersword.use = function(){devlog("I still need a use!")}
lasersword.doiaddtoitempools = yes
dootheritemstuff(lasersword)
lasersword.addtoitempools()

bakedpotato = new Item(1, "imgassets/bakedpotato.png")
bakedpotato.rarity = very_uncommon
bakedpotato.craftable = no
bakedpotato.description = "This baked potato is made perfectly cooked, and has lots of butter and chopped green onions on it. It would seem as if consuming it would be a bit of a waste of a piece of art."
bakedpotato.shop_description = "You shouldn't be seeing this."
bakedpotato.stackable = yes
bakedpotato.type = consumable
bakedpotato.name = "Baked Potato"
bakedpotato.use = function(){devlog("I still need a use!")}
bakedpotato.doiaddtoitempools = yes
dootheritemstuff(bakedpotato)
bakedpotato.addtoitempools()

eye = new Item(1, "imgassets/eye.png")
eye.rarity = extremely_rare
eye.craftable = yes
eye.description = "It's an eyeball, perfectly preserved. But why tho?"
eye.shop_description = "You shouldn't be seeing this."
eye.stackable = yes
eye.type = consumable
eye.name = "Eyeball"
eye.use = function(){devlog("I still need a use!")}
eye.doiaddtoitempools = yes
dootheritemstuff(eye)
eye.addtoitempools()

sandvich = new Item(1, "imgassets/Sandvich.png")
sandvich.rarity = legendary
sandvich.craftable = no
sandvich.description = "This is a <i>sandvich</i>; not to be confused with sand<b>WICH</b>. This has bologna, lettuce and white bread held together by an olive on a toothpick. Sandviches are a fabled food which have been theorized to restore the strength of ten men with one bite. However, they are in limited supply. The only man who knew how to make these things died 300 years ago in a war about crushed rocks or something."
sandvich.shop_description = "This is one of the <i>limited</i> sandviches left in the universe. This is the most perfect bread-including food item <b>ever</b>. It has the perfect ratio of ingredients. It'll cost you, though."
sandvich.stackable = no
sandvich.type = consumable
sandvich.name = "Sandvich"
sandvich.use = function(){devlog("I still need a use!")} //heals the player for 300 hp
sandvich.doiaddtoitempools = yes
dootheritemstuff(sandvich)
sandvich.addtoitempools()

croissant = new Item(1, "imgassets/croissant.png")
croissant.rarity = very_rare
croissant.craftable = no
croissant.description = "This croissant has been dry-aged for 300 years. It has become as hard as granite, but is now the perfect size to be worn as a bracelet. For some reason, it reeks of spiders. (You question how you know what a copious amount of arachnids smell like.)"
croissant.shop_description = "This is a croissant. It expired a REALLY REALLY long time ago. It's hard as a rock, and has no mold! ...it's a collector's item? maybe?"
croissant.stackable = no
croissant.type = ring
croissant.name = "Croissant"
croissant.use = function(){devlog("I still need a use!")} // a bracelet. increases defense slightly (the only thing in the ring slot that can do this.)
croissant.doiaddtoitempools = yes
dootheritemstuff(croissant)
croissant.addtoitempools()

notch = new Item(1, "imgassets/notch.png")
notch.rarity = very_uncommon
notch.craftable = yes
notch.description = "A small pin that is commonly used by soothsayers to use charms to help them see the future. It's obviously a fake thing, because they obviously would've bet on sports and gambling if they could really tell the future. This notch probably does nothing, but it might do something."
notch.shop_description = "I don't know what this is. Just buy it."
notch.stackable = yes
notch.type = consumable
notch.name = "Notch"
notch.use = function(){devlog("I still need a use!")} // rolls randomly for a random effect. 
notch.doiaddtoitempools = yes
dootheritemstuff(notch)
notch.addtoitempools()

gamblersnotch = new Item(1, "imgassets/notch2.png")
gamblersnotch.rarity = rare
gamblersnotch.craftable = yes
gamblersnotch.description = "A bigger pin that you made by smashing three notches together. It pulses with a strange energy."
gamblersnotch.shop_description = "You shouldn't be seeing this."
gamblersnotch.stackable = yes
gamblersnotch.type = consumable
gamblersnotch.name = "Gambler's Notch"
gamblersnotch.use = function(){devlog("I still need a use!")} // rolls randomly for a random effect. 
gamblersnotch.doiaddtoitempools = yes
dootheritemstuff(gamblersnotch)
gamblersnotch.addtoitempools()

highrollersnotch = new Item(1, "imgassets/notch3.png")
highrollersnotch.rarity = extremely_rare
highrollersnotch.craftable = yes
highrollersnotch.description = "An even larger pin that you made by smashing three gambler's notches together. It emanates a strange energy."
highrollersnotch.shop_description = "You shouldn't be seeing this."
highrollersnotch.stackable = yes
highrollersnotch.type = consumable
highrollersnotch.name = "High Roller's Notch"
highrollersnotch.use = function(){devlog("I still need a use!")} // rolls randomly for a random effect. 
highrollersnotch.doiaddtoitempools = yes
dootheritemstuff(highrollersnotch)
highrollersnotch.addtoitempools()

notchofthesoothsayer = new Item(1, "imgassets/notch4.gif")
notchofthesoothsayer.rarity = legendary
notchofthesoothsayer.craftable = yes
notchofthesoothsayer.description = "This is the ultimate form of chance and risk, created by combining a total of 27 notches. These used to be made commercially, before several people died from it's effects. It <i>radiates</i> the energy of the gambling gods."
notchofthesoothsayer.shop_description = "You shouldn't be seeing this."
notchofthesoothsayer.stackable = yes
notchofthesoothsayer.type = consumable
notchofthesoothsayer.name = "Notch of The Soothsayer"
notchofthesoothsayer.use = function(){devlog("I still need a use!")} // rolls randomly for a random effect. 
notchofthesoothsayer.doiaddtoitempools = yes
dootheritemstuff(notchofthesoothsayer)
notchofthesoothsayer.addtoitempools()

haybale = new Item(1, "imgassets/haybale.png")
haybale.rarity = uncommon
haybale.craftable = no
haybale.description = "It's a hay bale. Hopefully there's no needle for you to find."
haybale.shop_description = "You shouldn't be seeing this."
haybale.stackable = no
haybale.type = consumable // CHANGE TO 'QUEST' LATER
haybale.name = "Hay Bale"
haybale.use = function(){devlog("I still need a use!")}
haybale.doiaddtoitempools = no
dootheritemstuff(haybale)
haybale.addtoitempools()

tealeaves = new Item(20, "imgassets/tealeaves.png")
tealeaves.rarity = very_uncommon
tealeaves.craftable = yes
tealeaves.description = "A stack of tea leaves inside of a small paper box. You wonder why older folks keep these in their drawers; is it because they smell good? Do they use them? Do they just stay perpetually fresh?"
tealeaves.shop_description = "Some tea leaves; they re still very good, you want to try some?"
tealeaves.stackable = yes
tealeaves.type = consumable
tealeaves.name = "Tea Leaves"
tealeaves.use = function(){devlog("I still need a use!")}
tealeaves.doiaddtoitempools = yes
dootheritemstuff(tealeaves)
tealeaves.addtoitempools()

storminabottle = new Item(9999, "imgassets/storminabottle.gif")
storminabottle.rarity = legendary
storminabottle.craftable = yes
storminabottle.description = "This is a very special item, very rare; passed down through generations of magicians and sorcerers. These are also very useful, containing an infinite amount of water inside of it. There is a warning label on the underside. It reads, 'CAUTION. DO NOT BREAK. IF THERE IS ANY CRACK IN THIS VESSEL, RETURN TO VENDOR IMMEDIATELY.' The little storm cloud within seems so nice, almost serene."
storminabottle.shop_description = "you shouldnt be seeing this"
storminabottle.stackable = no
storminabottle.type = consumable
storminabottle.name = "Storm In A Bottle"
storminabottle.use = function(){devlog("I still need a use!")}
storminabottle.doiaddtoitempools = no
dootheritemstuff(storminabottle)
storminabottle.addtoitempools()

dust = new Item(25, "imgassets/dust.png")
dust.rarity = rare
dust.craftable = yes
dust.description = "This is a velvety pouch filled with the dustiest dust known to man. The fine particles from this baggie are known to make fine potion ingredients."
dust.shop_description = "This is the finest dust you will ever buy! So please, go on ahead! Buy it!"
dust.stackable = yes
dust.type = consumable
dust.name = "Dust"
dust.use = function(){devlog("I still need a use!")}
dust.doiaddtoitempools = yes
dootheritemstuff(dust)
dust.addtoitempools()

heartcrystal = new Item(1, "imgassets/crystalheart.png")
heartcrystal.rarity = extremely_rare
heartcrystal.craftable =
heartcrystal.description = "This is a crystal heart. These are very hard to come by, and have been know to have healthy properties; another great potion ingredient."
heartcrystal.shop_description = "This is a very interesting item; I'm not exactly sure what it does, but I'm sure it's really good!"
heartcrystal.stackable = yes
heartcrystal.type = consumable
heartcrystal.name = "Heart Crystal"
heartcrystal.use = function(){devlog("I still need a use!")}
heartcrystal.doiaddtoitempools = yes
dootheritemstuff(heartcrystal)
heartcrystal.addtoitempools()
/*
 = new Item(1, "imgassets/")
.rarity =
.craftable =
.description = ""
.shop_description = ""
.stackable =
.type = consumable
.name = ""
.use = function(){devlog("I still need a use!")}
.doiaddtoitempools = yes
dootheritemstuff()
.addtoitempools()
 */
