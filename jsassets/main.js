var devmode = true
var devlogcount = 0
var possrandomnum = 0
// a variable telling the game to run in developer mode; letting extra log 
// statements pass, and a couple of functions are allowed to run 
hintsmode = true //a variable telling the game to add extra elements to certain parts of the game informing the player of the actions they can take
//SEPARATE FROM THE TUTORIAL
dispcolorcommon = "#ACBED8"
dispcoloruncommon = "#568259"
dispcolorveryuncommon = "#8DB48F"
dispcolorrare = "#3185FC"
dispcolorveryrare = "#EFBCD5"
dispcolorextremelyrare = "#F374AE"
dispcolorlegendary = "#E5B25D"
dispcolormythical = "#9A031E"
function randomnumber(min, max) {
	return Math.floor((Math.random() * max) + min);
}
var coin;
function flipacoin() {
	coin = randomnumber(1,2)
	return coin
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
function devlog(logme, important) {
	if (devmode == true){
		if (important == true) {
			console.log('%c ' + logme, "color:orange; font-weight: bold;")
		} else {
			console.log(logme)
		}
		devlogcount++
		return devlogcount
	}
}
function devwarn(logme){
	if (devmode == true){
		console.warn(logme)
		devlogcount++
		return devlogcount
	}
}
function deverror(logme){
	if (devmode == true){
		console.error(logme)
		devlogcount++
		return devlogcount
	}
}
function returndevlogcount() {
	if (devmode == true) {
		return devlogcount
	}
}
function isOdd(num){
	return num % 2 == 0
}
function isEven(num){ //thanks user 'Steve Mayne' on stackoverflow for these!
	return Math.abs(num % 2) == 1
}
devlog("main script ran!")
