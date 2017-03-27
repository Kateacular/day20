
// 1.) Enter his/her name
// 2.) Name his/her penguin
// 3.) Decide if the penguin is male or female
// 4.) Decide if the penguin is an Emperor, Gentoo, or rockhopper penguin

// The user's penguin should be represented by an object.


// Once the player has entered his/her name, 
// the program should address him/her by name in all future prompts, 
// and should refer to his/her penguin by name as well.

// - In the game, the user should have to answer simple math questions 
// (for Version 1 of your game, you can use addition problems only) 
// to earn a virtual currency known as PenguinPebbles
// - For each correct answer, the user should get 5 PenguinPebbles
// - For each incorrect answer, the user should lose 5 PenguinPebbles
// - When the user gets 20 or more pebbles, 
// they can "spend" their PenguinPebbles to make their penguin do a trick
// - The penguin should be able to do at least (3) different tricks, 
// each of which costs a different number of PenguinPebbles

// ***********

var sget = require("sget");

var playerName;
var penguinCalled;
var heShe;

var playerPenguin = [];

var min = 1;
var max = 50;
var numOne;
var numTwo;

var penguinPebbles =[];

var exit = function(){
	console.log("See you next time, Space Cowboy.");
	process.exit();
};

var generateNumOne = function () {
    var generate = Math.floor(Math.random() * 50);
    numOne = parseInt(generate, 10);
};

var generateNumTwo = function (min,max) {
    var generate = Math.floor(Math.random() * 50);
    numTwo = parseInt(generate, 10);
};

var penguinData = function(name,gender,type){
	this.name = name;
	this.gender = gender;
	this.type = type;
};

var createPenguin = function(){
	var penguinName = sget("What is the name of your penguin, "+playerName+"? ").trim();
	penguinCalled = penguinName;
	var penguinGender;
	var penguinType;
	var genderAnswer = sget("What gender is your penguin?\n Select 1 for Female, 2 for Male.").trim();
		if (genderAnswer == 1){
			penguinGender = "Female";
			heShe= "she";
		}else if (genderAnswer == 2){
			penguinGender = "Male";
			heShe = "he";
		}
		else {
			console.log("I get it. It's hard to tell. Penguins.\nTry again.");
			penguinGender = "";
			createPenguin();
		}
	var typeAnswer = sget("What type of pengin have you adopted, "+playerName+"?\nSelect 1 for Rockhopper\nSelect 2 for Gentoo\nSelect 3 for Emperor.").trim();
		if (typeAnswer == 1){
			penguinType = "Rockhopper";
		}else if (typeAnswer == 2){
			penguinType = "Gentoo";
		}else if (typeAnswer == 3){
			penguinType = "Emperor";
		} else {
			console.log("Just those 3. Start over, Fancy Pants.");
			penguinType =";"
			createPenguin();
		}
	var newPenguin = new  penguinData(penguinName,penguinGender,penguinType);
	playerPenguin.push(newPenguin);

};

var modifyPenguin = function(){
	console.log("Okay, "+playerName+": Time to use your brains to level up "+penguinCalled+"! ");
	var option = sget("Select 1 for addition problems.\nSelect 2 for subtraction problems.\nSelect 4 to exit").trim();
	if (option == 1){
		additionProblems();
	} else if (option == 2){
		subtractionProblems();
	} else if (option == 4) {
	exit();
	}
	else{
		console.log("Just the two options. \nThis is a new company, "+playerName+". \nTry again.");
		modifyPenguin();
	}
};

var additionProblems = function(){
	generateNumOne();
	generateNumTwo();
	var compare = numOne+numTwo;
	console.log(compare);
	var mathAnswer = sget(" "+numOne+ " + "+numTwo+" =").trim();
	var answer = parseInt(mathAnswer, 10);
		if (answer == compare) {
			console.log("Nice job! "+penguinCalled+" gets 5 PenguinPebbles!");
			addPebbles();
		}
		else if (answer !== compare) {
			console.log("Oh no! the answer was "+compare+". \n"+penguinCalled+" loses 5 PenguinPebbles!");
			subtractPebbles();
		}
		else {
			console.log("That seems wrong. Could be me. Let's go back to the menu.\nMaybe time to quit.");
			modifyPenguin();
		}
};


var subtractionProblems = function(){
	generateNumOne();
	generateNumTwo();
	var compare = numOne-numTwo;
	console.log(compare);
	var mathAnswer = sget(" "+numOne+ " - "+numTwo+" =").trim();
	var answer = parseInt(mathAnswer, 10);
		if (answer == compare) {
			console.log("Nice job! "+penguinCalled+" gets 5 PenguinPebbles!");
			addPebbles();
		}
		else if (answer !== compare) {
			console.log("Oh no! the answer was "+compare+". \n"+penguinCalled+" loses 5 PenguinPebbles!");
			subtractPebbles();
		}
		else {
			console.log("That seems wrong. Could be me. Let's go back to the menu.\nMaybe time to quit.");
			modifyPenguin();
		}
};


var addPebbles = function(){
	penguinPebbles.push(5);
	displayPebbles();
};

var subtractPebbles = function(){
	penguinPebbles.push(-5);
	displayPebbles();
};

var displayPebbles = function(){
	var pointSum =0;
	for (var index=0; index < penguinPebbles.length; index++){
			var currentValue= penguinPebbles[index];
			pointSum = pointSum + currentValue;
	}
	console.log("Your total points are: " +pointSum);
	if (pointSum >= 20){
		penguinDance();
	}
	else {
		modifyPenguin();
	}
	
};


var penguinDance = function(){
	console.log("You have earned enough points for penguin to do a trick!");
	var trick = sget("List of tasks that "+penguinCalled+" can do: \n1 Feed "+penguinCalled+" 10 points and "+heShe+" will dance.\n2 Feed "+penguinCalled+" 15 points and "+heShe+" will sing. \n3 Feed "+penguinCalled+" 50 points and "+heShe+" will do your laundry and put it away for you.\n You may select 4 to exit to the Main Menu.").trim();
	if (trick == 1 && penguinPebbles >= 10){
		penguinPebbles = penguinPebbles-10;
		console.log("Hula break! Werkit, "+penguinCalled+"! ");
	} else if (trick ==2 && penguinPebbles>= 15){
		penguinPebbles = penguinPebbles-15;
		console.log(penguinCalled+" begins a serenade!");
	} else if (trick ==3 && penguinPebbles>=50){
		penguinPebbles = penguinPebbles-50;
		console.log(penguinCalled+" is getting to work.");
	} else if (trick == 4) {
		modifyPenguin();
	} else {
		console.log("It appears you are not ready for "+penguinCalled+"'s fabulousness. Back to the menu.");
	}
	modifyPenguin();
};

var namePlayer = function(){
	console.log("Welcome to Pretty Penguin Pamper Programs!\nThe Place to Polish your Penguin!\n");
	playerName = sget("Please enter your name, Player: ").trim();
	console.log("Nice to meet you, "+playerName+"!");
};

var seePenguin = function() {
	playerPenguin.forEach(function(penguinData){
	console.log("Your new friend is:\nA " +penguinData.gender+ " " +penguinData.type+" penguin named "+penguinData.name+" \n");
});
};	

var run = function(){
	namePlayer();
	createPenguin();
	seePenguin();
	modifyPenguin();
};

run();
