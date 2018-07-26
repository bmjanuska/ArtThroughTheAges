// What to do 
// Have a start screen and a button to initialize the timer and set of questions

// Timer starts and calls the following 
// Make an array for questions
// Variable for wins 
// Variable for loss
// Variable for incomplete
// Variable for timer

// Call length of questions 
// Use if and else to determine correct or incorrect value ( or even if it is unanswered) 

// Have a screen that prints out the final score and a message! 




//======== Variables =========

	//======== Scores =========
	// win = 0,
	// loss = 0; 
	// unanswer = 0;
	
	//======== Timers =========

	//======== Questions =========



//======== Functions =========


//======== Variables =========

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var empty = false;

	if (question1 == "Leonardo Da Vinci") {
		correct++;
	}
	if (question1 == "Pablo Ruiz Picasso" || "Leonardo DiCaprio" || "Andrea Salai"){	
	incorrect++;
	} else {
		empty = "" ? true : empty;
		unanswered++;
	}

	if (question2 == "Michelangelo") {
		correct++;
	}else {

	incorrect++;
	}

	if (question3 == "Post-Impressionist") {
		correct++;
	}else {
	incorrect++;
	}

	if (question3 == "Andy Warhol") {
		correct++;
	}else {
	incorrect++;
	}
	

	// var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	// var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	// if (correct == 0) {
	// 	score = 2;
	// }

	// if (correct > 0 && correct < 3) {
	// 	score = 1;
	// }

	// if (correct == 3) {
	// 	score = 0;
	// }

	document.getElementById("after_submit").style.visibility = "visible";
	$("#number_correct").text("You scored this many correct: " + correct );
	$("#wrong").text("You got this many wrong: " + incorrect );
	$("#incomplete").text("You did not answer this many questions: " + unanswered);
	// document.getElementById("message").innerHTML = messages[score];
	// document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	// document.getElementById("picture").src = pictures[score];
	}
	
