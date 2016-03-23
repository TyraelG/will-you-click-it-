var buttonSetup = function() {
	document.getElementById('choice1').innerHTML = "<button onclick='bad1()'>You are the most powerful man alive, but all of your family members die.</button>";
	document.getElementById('choice2').innerHTML = "<button onclick='good1()'>You are poor but your family thrives</button>";
};

var bad1 = function(){
	console.log("bad");
	document.getElementById('answer').innerHTML = "<div>You did the bad thing</div>"
};

var good1 = function(){
	console.log("good");
	document.getElementById('answer').innerHTML = "<div>You did the good thing</div>"
};