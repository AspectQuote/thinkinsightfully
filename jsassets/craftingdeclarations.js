craftingrecipe(bakedpotato, {item: greenonion, amount: 1}, {item: butter, amount: 1}, {item: potato, amount: 1})
bakedpotato.recipe.sort()
allrecipes.push({item: bakedpotato, recipe: bakedpotato.recipe})

craftingrecipe(gamblersnotch, {item: notch, amount: 3}, {item: noitem, amount: 0}, {item: noitem, amount: 0})
gamblersnotch.recipe.sort()
allrecipes.push({item: gamblersnotch, recipe: gamblersnotch.recipe}) 

craftingrecipe(highrollersnotch, {item: gamblersnotch, amount: 3}, {item: noitem, amount: 0}, {item: noitem, amount: 0})
highrollersnotch.recipe.sort()
allrecipes.push({item: highrollersnotch, recipe: highrollersnotch.recipe}) 

craftingrecipe(notchofthesoothsayer, {item: highrollersnotch, amount: 3}, {item: noitem, amount: 0}, {item: noitem, amount: 0})
notchofthesoothsayer.recipe.sort()
allrecipes.push({item: notchofthesoothsayer, recipe: notchofthesoothsayer.recipe}) 

/*
craftingrecipe(.,{item: p1, amount: 1}, {item: p2, amount: 1}, {item: p3, amount: 1})
..recipe.sort()
allrecipes.push({item: ., recipe: ..recipe}) 
*/
