function Character(name, color, gender, race, idleimg, talkimg) {
	this.name = name
	this.color = color
	this.gender = gender
	this.race = race
	this.say = function(dialogue){
		terminal.add(this, this.color, dialogue)
		return dialogue
	}
	this.idleimg = idleimg
	this.talkimg = talkimg
}
