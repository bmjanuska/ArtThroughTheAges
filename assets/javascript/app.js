// What to do 
// Have a start screen and a button to initialize the timer and set of questions

// Timer starts and calls the following 

// Variable for timer

// Call length of questions 
// Use if and else to determine correct or incorrect value ( or even if it is unanswered) 

// Have a screen that prints out the final score and a message! 




//======== Global Variables =========


	//======== Timers =========
	var time;
	var counter = 5;


	function reduceTime(){
		counter--; 
		$("#time-left").text(counter + " seconds remaining");
		if (counter === 0){
			check();

		}


	}

	// reduceTime();

//======== Game Start =======
function gameStart() {

	time = setInterval(reduceTime, 1000);
	$("#start").remove();

}



//======== Functions =========

//This func will run to check the answers pickedo on screen
function check(){

	clearInterval(time);

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

	// q.1
	if (question1 == "correct") {
		correct++;
	}
	else if (question1 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}

	// q.2
	if (question2 == "correct") {
		correct++;
	}
	else if (question2 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}

	// q.3
	if (question3 == "correct") {
		correct++;
	}
	else if (question3 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}

	// q.4
	if (question4 == "correct") {
		correct++;
	}
	else if (question4 == "incorrect"){	
	incorrect++;
	} else {
		unanswered++;
	}

	
	document.getElementById("after_submit").style.visibility = "visible";
	$("#number_correct").text("You scored this many correct: " + correct );
	$("#wrong").text("You got this many wrong: " + incorrect );
	$("#incomplete").text("You did not answer this many questions: " + unanswered);
};

$(document).on("click", "#start", function() {
	gameStart();
	document.getElementById("quiz").style.visibility = "visible";

});	
