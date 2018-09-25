$(document).ready(function () {

    var trivia = [
        {
                    question: "What is Cartman's first name?",
    
                    answers: [
                        "Aaron",
                        "Jimmy",
                        "Eric",
                        "Clyde"
                    ],
    
                    correctAnswer: "Eric"
    
                },
    
                {
                    question: "What color is Kyle's hair?",
    
                    answers: [
                        "Red",
                        "Brown",
                        "Blonde",
                        "Black"
                    ],
    
                    correctAnswer: "Red"
                },
    
                {
                    question: "What is Butter's full name?",
    
                    answers: [
                        "Scott Peterson",
                        "Jeremy 'Butters' Kulinski",
                        "Craig Thomas Roberts",
                        "Butters Leopold Stotch"
                    ],
    
                    correctAnswer: "Butters Leopold Stotch"
    
                },
    
                {
                    question: "What is Mr. Garrison's first name?",
    
                    answers: [
                        "Jerry",
                        "Jimbo",
                        "Randy",
                        "Herbert"
                    ],
    
                    correctAnswer: "Herbert"
                }

    ];

console.log("Link successful")

let questionInterval;
let questionTimeout;
let time = 5;
let count = 0;
let numCorrect = 0;
let incorrect = 0;

function startScreen(){
    $("#timer").empty();
    $("#questions").empty();
    $("#results").empty();
    $("#buttonStart").html("<button class='start btn-info'><h2>Start</h2></button>");
    $("#buttonReplay").empty();
}

startScreen();

$("#buttonStart").on("click", function () {
    console.log("click successful");
    $("#button").empty();
    questionPage();
});

correct = trivia[count].correctAnswer;

function startTimer(){
    questionInterval = setInterval(function () {countdown();}, 1 * 1000);
}



function countdown() {
    time--;
    console.log("time left: " + time);
    $("#timer").html("<p class='card-header'>Seconds: " + time + "</p>");

    if (time === 0) {
        clearInterval(questionInterval);
    }
}



function questionPage(){
    $("#buttonReplay").hide();
    $(".intro").hide();
    if (count === 4) {
        gameOver();
        return;
    }
    else {
        correct = trivia[count].correctAnswer;
    }

    startTimer();
    questionTimeout = setTimeout(noAnswerScreen, 10 * 1000);

    $("#buttonStart").empty();
    $("#timer").html("<p class='card-header'> Seconds Left: " + time + "</p>");
    $("#questions").html("<p class='card-header'>" + trivia[count].question + "</p>");
    $("#results").empty();
    $("#choice1").html("<p class='btn-success'>" + trivia[count].answers[0] + "</p>");
    $("#choice2").html("<p class='btn-success'>" + trivia[count].answers[1] + "</p>");
    $("#choice3").html("<p class='btn-success'>" + trivia[count].answers[2] + "</p>");
    $("#choice4").html("<p class='btn-success'>" + trivia[count].answers[3] + "</p>");

    console.log("Question: " + count + " Correct Answer: " + correct);
}

$("#choice1").on("click", function() {
    console.log("Choice 1 clicked");
    if ( trivia[count].answers[0]  === trivia[count].correctAnswer) {
        correctAnswerPage();
    }
    else {
        wrongAnswerPage();
    }
});

$("#choice2").on("click", function() {
    console.log("Choice 2 clicked");
    if ( trivia[count].answers[1]  === trivia[count].correctAnswer) {
        correctAnswerPage();
    }
    else {
        wrongAnswerPage();
    }
});

$("#choice3").on("click", function() {
    console.log("Choice 3 clicked");
    if ( trivia[count].answers[2]  === trivia[count].correctAnswer) {
        correctAnswerPage();
    }
    else {
        wrongAnswerPage();
    }
});

$("#choice4").on("click", function() {
    console.log("Choice 4 clicked");
    if ( trivia[count].answers[3]  === trivia[count].correctAnswer) {
        correctAnswerPage();
    }
    else {
        wrongAnswerPage();
    }
});


function correctAnswerPage() {
    $("#questions").html("<p class='card-header'>Good Job Dude!</p>");
    $("#results").html("<img src='assets/images/correct.gif'>");
    $("#choice1, #choice2, #choice3, #choice4").empty();
    numCorrect++;
    nextQuestion();
}

function wrongAnswerPage() {
    $("#questions").html("<p class='card-header'>Wrong!</p>");
    $("#results").html("<img src='assets/images/wrong.gif'>");
    $("#choice1, #choice2, #choice3, #choice4").empty();
    incorrect++;
    nextQuestion();
}

function noAnswerScreen() {
    console.log("times up" + correct);
    $("#questions").html("<p class='card-header'>Where'd ya go dude?</p>");
    $("#results").html("<img src='assets/images/facepalm.gif'>");
    $("#choice1, #choice2, #choice3, #choice4").empty();
    incorrect++;
    nextQuestion();

}

function nextQuestion() {
    resultTimeout = setTimeout(questionPage, 4 * 1000);
    clearInterval(questionInterval);
    clearTimeout(questionTimeout);
    count++;
    time = 5;
}


function gameOver(){
    $("#timer").empty();
    $("#questions").html("<p class='card-header'> Game Over!<br> Results:</p>");
    $("#results").html("<p class='card-header'> Correct: " + numCorrect + "</p>").append("<p class='card-header'>Wrong: " + incorrect + "</p>");

    $("#buttonReplay").html("<button id='restart' class='replay btn-success'><h2>Replay?</h2></button>");
    $("#buttonReplay").show();

}


$("#buttonReplay").on("click", function (){
    console.log("replay clicked");
    time = 5;
    count = 0;
    numCorrect = 0;
    incorrect = 0;
    questionPage();
    
});

});
