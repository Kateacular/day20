
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
var playerPenguin = [];

var simpleAddition = ["1+34=","2+5"];

var penguinPebbles = [];

var exit = function(){
	console.log("See you next time, Space Cowboy.");
	process.exit();
};


var penguinData = function(name,gender,type){
	this.name = name;
	this.gender = gender;
	this.type = type;
};


var createPenguin = function(){
	var penguinName = sget("What is the name of your penguin, "+playerName+"? ").trim();
	penguinCalled = penguinName
	var penguinGender;
	var penguinType;
	var genderAnswer = sget("What gender is your penguin?\n Select 1 for Female, 2 for Male.").trim();
		if (genderAnswer == 1){
			penguinGender = "Female";
		}else if (genderAnswer == 2){
			penguinGender = "Male";
		}
		else {
			console.log("I get it. It's hard to tell. Penguins.\nTry again.");
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
			createPenguin();
		}

	var newPenguin = new  penguinData(penguinName,penguinGender,penguinType);
	playerPenguin.push(newPenguin);

};

var modifyPenguin = function(){

	console.log("Okay, "+playerName+": Time to use your brains to level up "+penguinCalled+"! ");
	var option = sget("Select 1 for addition problems.\nSelect 4 to exit").trim();
	if (option == 1){
		additionProblems();
	}
	else if (option == 4) {
	exit();
	}
	else{
		console.log("Just the two options. \nThis is a new company, "+playerName+". \nTry again.");
		modifyPenguin();
	}
};

var additionProblems = function(){
	var problem = simpleAddition[Math.floor(Math.random() * simpleAddition.length)];
	console.log(problem);
	var answer = sget("What's the answer?").trim();
		if (problem == simpleAddition[0] && answer == "35"){
			console.log("Nice job! "+penguinCalled+" gets 5 PenguinPebbles!");
			modifyPenguin();
		}
		else if (problem == simpleAddition[1] && answer == "7"){
			console.log("Nice job! "+penguinCalled+" gets 5 PenguinPebbles!");
			modifyPenguin();
		}
		else {
			console.log("That seems wrong. Could be me. Let's go back to the menu.\nMaybe time to quit.");
			modifyPenguin();
		}
};





var namePlayer = function(){
	console.log("Welcome to Pretty Penguin Pamper Programs!\nThe Place to Polish your Penguin!\n");
	playerName = sget("Please enter your name, Player: ").trim();
	console.log("Nice to meet you, "+playerName+"!");
};



var run = function(){
	namePlayer();
	createPenguin();
	console.log(playerPenguin);
	modifyPenguin();

};

run();
