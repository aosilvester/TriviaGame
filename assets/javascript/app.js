$(document).ready(function () {

    //starting with the numbers to keep track of. correct answers, incorrect answers, unanswered questions.

    var corrects = document.getElementsByClassName("correct");
    var incorrects = document.getElementsByClassName("incorrect");
    numCorrects = 0;
    numIncorrects = 0;
    numUnanswered = 0;

    var questionOptions = [{
            //question 1
            question: "What town is West Virginia University located?",
            choice: ["Clemson", "Tuscaloosa", "Morgantown", "Rocky Top"],
            answer: 2,
            photo: ""
        },
        //question 2
        {
            question: "How many teams are in the Big 12 Conference?",
            choice: ["10", "14", "11", "16"],
            answer: 0,
            photo: "assets/images/big12.jpeg"
        },
        //question 3
        {
            question: "How many college football national titles does the Big 12 Conference claim?",
            choice: ["10", "3", "0", "6"],
            answer: 1,
            photo: ""
        },
        //question 4
        {
            question: "Which school is NOT a member of the Big 12 Conference?",
            choice: ["Oklahoma University", "Iowa State University", "Texas Christian University", "University of Arkansas"],
            answer: 3,
            photo: ""
        },
        //question 5
        {
            question: "On what date was the Big 12 Conference founded?",
            choice: ["June 24, 1988", "February 25, 1994", "January 1, 1990", "July 1, 2002"],
            answer: 1,
            photo: ""
        },
        //question 6
        {
            question: "The Big 12 Conference was founded by the merging of what two defunct NCAA Athletic Conferences?",
            choice: ["Big Sky Conference and Southern Conference", "Sunbelt Conference and Big East Conference", "American Athletic Conference and Pac-12 Conference", "Southwest Conference and Big 8 Conference"],
            answer: 3,
            photo: ""
        },

    ]




    //start of activity once user clicks on the start button.

    $('#start').click(function () {
        console.log("the start button was clicked");
        //start button is hidden. Reset button, which was hidden by default at document ready, is revealed. functionality of reset button is below.
        $("#start").hide();
        $("#reset").css('display', 'block');
        $("#done").css('display', 'block');
        run();
        $("#questionBlock").css('display', 'block');


    });
    //begin correct answer event listening


    //begin timer functioning

    var number = 60;
    var intervalId;

    function run() {
        stop();
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        number--;

        $("#timer").html("<h3>Time remaining: " + number + "</h3>");
        // console.log("countdown: " + number);

        if (number === 0) {

            stop();

            alert("Time Up!");

            number = 10;

            $("#answerBlock").show();

            answerPage()

            //need to code in the results page transition stuff here.
        }
    }

    function stop() {

        clearInterval(intervalId);
    }
    $('#reset').click(function () {
        console.log("the reset button was clicked");
        //start button is hidden. Reset button, which was hidden by default at document ready, is revealed. functionality of reset button is below.
        $("#reset").hide();
        $("#start").show();
        stop();
        number = 60;
        numIncorrects = 0;
        numCorrects = 0;
        console.log("timer reset: " + number);
        $("#answerBlock").hide();
    });
    //end of timer function. 

    //transition from question portion to results portion

    $('#done').click(function () {
        console.log("the done button was clicked");
        // $("#reset").hide();
        $("#done").hide();
        // $("#start").show();
        stop();
        number = 60;
        console.log("timer reset: " + number);
        $("#answerBlock").show();

        answerPage();
        

    });



    function countCorrects() {
        console.log(corrects)
        for (var i = 0; i < corrects.length; i++) {
            console.log("correct check", corrects[i])
            if (corrects[i].checked) {
                numCorrects++
            }
        }

    };



    function countIncorrects() {
        for (var i = 0, length = incorrects.length; i < length; i++) {
            if (incorrects[i].checked) {
                numIncorrects++
                
            }
        }
        console.log("You got " + numIncorrects + " incorrect.");
    }





    function answerPage() {
        
        countCorrects();
        countIncorrects();
        $("#questionBlock").hide();
        $("answerBlock").css('display', 'block');

        $("#answerBlock").html(

            "correct answers = " + numCorrects +
            "<br>" + "<br>" +
            "incorrect answers = " + numIncorrects +
            "<br>" + "<br>" 

        );

        console.log("You got " + numIncorrects.length + " incorrect.");

        console.log("You got " + numCorrects.length + " correct.");
        console.log("numCorrects = " + numCorrects);
        console.log("numIncorrects = " + numIncorrects);
        console.log("incorrects = " + incorrects);
        console.log("corrects = " + corrects);
        console.log("incorrects length = " + incorrects.length);
        // console.log("corrects length = " + corrects.length);

    }
});