var terminal = {};
terminal.add = function(who, color, dialogue) {
	if (terminal.history.length >= 50) {
		terminal.history.shift()
		terminal.history.push({who: who, color: color, dialogue: dialogue})
	} else {
		terminal.history.push({who: who, color: color, dialogue: dialogue})
	}
	terminal.update()
	$("#terminalcontent"+(terminal.history.length-1)).html('')
	terminal.saylastmessage()
}
terminal.update = function() {
	$("#terminalmain").html('')
	for (i = 0; i < terminal.history.length; i++) {
		$("#terminalmain").append("<div id='terminalline"+i+"'><img id='terminalimg"+i+"' width=64px src='"+terminal.history[i].who.idleimg+"'><span id='terminaltext"+i+"'><img src='imgassets/speech.png' height=64px>"+terminal.history[i].who.name+": <span id='terminalcontent"+i+"'>"+terminal.history[i].dialogue+"</span></span></div>")
		if (isEven(i)) {
			$("#terminalline"+i).css("background-color", "#9C9C9C")
		}
		$("#terminalline"+i).css("width", "100%")
		$("#terminaltext"+i).css("height", "100%")
		$("#terminaltext"+i).css("vertical-align", "top")
		$("#terminalcontent"+i).css("vertical-align", "top")
	}
	$('#terminalmain').animate({
        scrollTop: $('#terminalmain').get(0).scrollHeight //thanks StackOverflow user 'Manwal' for help with this!
    }, 1);
    
}
terminal.clear = function() {
	terminal.history = []
	terminal.update()
}

let terminalcooldown = no;
doneamount = 0
terminal.saylastmessage = function(){
	$("#terminalcontent"+(terminal.history.length-1)).append(terminal.history[terminal.history.length-1].dialogue[doneamount])
	if(isOdd(doneamount)) {
		$("#terminalimg"+(terminal.history.length-1)).attr("src", terminal.history[terminal.history.length-1].who.talkimg)
	} else if (isEven(doneamount)) {
		$("#terminalimg"+(terminal.history.length-1)).attr("src", terminal.history[terminal.history.length-1].who.idleimg)
	}
	if (doneamount < terminal.history[terminal.history.length-1].dialogue.length) {
		doneamount++
		setTimeout(function(){terminal.saylastmessage()}, 33)
		terminalcooldown = yes
	} else {
		$("#terminalimg"+(terminal.history.length-1)).attr("src", terminal.history[terminal.history.length-1].who.idleimg)
		doneamount = 0
		terminalcooldown = no 
	}
}
terminal.history = []
