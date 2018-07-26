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
	// unanswer = 0;
	
	//======== Timers =========

	//======== Questions =========



//======== Functions =========



function check(){
	//======== Variables =========
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	// correct score variable
	var correct = 0;
	// incorrect score variable
	var incorrect = 0;
	// unanswered score variable
	var unanswered = 0;

	if (question1 == "correct") {
		correct++;
	}
	else if (question1 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}

	if (question2 == "correct") {
		correct++;
	}
	else if (question2 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}

	if (question3 == "correct") {
		correct++;
	}
	else if (question3 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}

	if (question4 == "correct") {
		correct++;
	}
	else if (question4 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}







	// var score;

	
	document.getElementById("after_submit").style.visibility = "visible";
	$("#number_correct").text("You scored this many correct: " + correct );
	$("#wrong").text("You got this many wrong: " + incorrect );
	$("#incomplete").text("You did not answer this many questions: " + unanswered);
	};
	
