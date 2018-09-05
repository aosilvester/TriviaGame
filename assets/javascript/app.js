$(document).ready(function () {

    //starting with the numbers to keep track of. correct answers, incorrect answers, unanswered questions.

    var corrects = document.getElementsByClassName("correct");
    var incorrects = document.getElementsByClassName("incorrect");
    var numCorrects = [];
    var numIncorrects = [];
    var intervalId;
    var checkTest = 0;


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

        $("#questionBlock").html(

            "1. " + questionOptions[0].question +
            "<br>" +
            "<input type='radio' class='incorrect' id='cor'>" +
            "<label>" + questionOptions[0].choice[0] + "</label>" +

            "<input type='radio' class='incorrect' id='question1'>" +
            "<label>" + questionOptions[0].choice[1] + "</label>" +

            // correct
            "<input type='radio' class='correct' id='correct'>" +
            "<label>" + questionOptions[0].choice[2] + "</label>" +
            // end of correct

            "<input type='radio' class='incorrect' id='question1'>" +
            "<label>" + questionOptions[0].choice[3] + "</label>" +
            "<br>" 
            +

            "2. " + questionOptions[1].question +
            "<br>" +
            // correct
            "<input type='radio' class='correct' id='question2'>" +
            "<label>" + questionOptions[1].choice[0] + "</label>" +
            //end of correct
            "<input type='radio' class='incorrect' id='question2'>" +
            "<label>" + questionOptions[1].choice[1] + "</label>" +
            "<input type='radio' class='incorrect' id='question2'>" +
            "<label>" + questionOptions[1].choice[2] + "</label>" +
            "<input type='radio' class='incorrect' id='question2'>" +
            "<label>" + questionOptions[1].choice[3] + "</label>" +
            "<br>" +

            "3. " + questionOptions[2].question +
            "<br>" +
            "<input type='radio' class='incorrect' id='question3' name='question3'>" +
            "<label for='huey'>" + questionOptions[2].choice[0] + "</label>" +
            //correct
            "<input type='radio' class='correct' id='question3' name='question3'>" +
            "<label for='huey'>" + questionOptions[2].choice[1] + "</label>" +
            //end of correct
            "<input type='radio' class='incorrect' id='question3' name='question3'>" +
            "<label for='huey'>" + questionOptions[2].choice[2] + "</label>" +
            "<input type='radio' class='incorrect' id='question3' name='question3'>" +
            "<label for='huey'>" + questionOptions[2].choice[3] + "</label>" +
            "<br>" +

            "4. " + questionOptions[3].question +
            "<br>" +
            "<input type='radio' class='incorrect' id='question4' name='question4'>" +
            "<label for='huey'>" + questionOptions[3].choice[0] + "</label>" +
            "<input type='radio' class='incorrect' id='question4' name='question4'>" +
            "<label for='huey'>" + questionOptions[3].choice[1] + "</label>" +
            "<input type='radio' class='incorrect' id='question4' name='question4'>" +
            "<label for='huey'>" + questionOptions[3].choice[2] + "</label>" +
            //correct
            "<input type='radio' class='correct' id='question4' name='question4'>" +
            "<label for='huey'>" + questionOptions[3].choice[3] + "</label>" +
            //end of correct
            "<br>" +
            "5. " + questionOptions[4].question +
            "<br>" +
            "<input type='radio' class='incorrect' id='question5' name='question5'>" +
            "<label for='huey'>" + questionOptions[4].choice[0] + "</label>" +
            //correct
            "<input type='radio' class='correct' id='correct' name='question5'>" +
            "<label for='huey'>" + questionOptions[4].choice[1] + "</label>" +
            //end of correct
            "<input type='radio' class='incorrect' id='question5' name='question5'>" +
            "<label for='huey'>" + questionOptions[4].choice[2] + "</label>" +
            "<input type='radio' class='incorrect' id='question5' name='question5'>" +
            "<label for='huey'>" + questionOptions[4].choice[3] + "</label>" +
            "<br>" +

            "6. " + questionOptions[5].question +
            "<br>" +
            "<input type='radio' class='incorrect' id='question6' name='question6'>" +
            "<label for='huey'>" + questionOptions[5].choice[0] + "</label>" +
            "<input type='radio' class='incorrect' id='question6' name='question6'>" +
            "<label for='huey'>" + questionOptions[5].choice[1] + "</label>" +
            "<input type='radio' class='incorrect' id='question6' name='question6'>" +
            "<label for='huey'>" + questionOptions[5].choice[2] + "</label>" +
            //correct
            "<input type='radio' class='correct' id='question6' name='question6'>" +
            "<label for='huey'>" + questionOptions[5].choice[3] + "</label>"
            //end of correct


        )

    });
    //begin correct answer event listening


    //begin timer functioning

    var number = 10;
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
            countCorrects();

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
        number = 10;
        console.log("timer reset: " + number);
    });
    //end of timer function. 



    //transition from question portion to results portion

    $('#done').click(function () {
        console.log("the done button was clicked");
        $("#reset").hide();
        $("#done").hide();
        $("#start").show();
        stop();
        number = 10;
        console.log("timer reset: " + number);
        countCorrects();

        answerPage();
    });


    // function countCorrects() {
    //     for (var i = 0, i = corrects.length; i < length; i++) {
    //         if (corrects[i].checked) {
    //             numCorrects.push(corrects[i]);
    //         }
    //     }

    // }; 

    //alternate method of countCorrects below

    function countCorrects() {
        for (var i = 0, i = 6; i < length; i++) {
            if (document.getElementsByClassName("correct").checked = true) {
                numCorrects.push(corrects[i]);
            }
        }

    };

    //end of alternate method of countCorrects

    function countIncorrects() {
        for (var i = 0, length = incorrects.length; i < length; i++) {
            if (incorrects[i].checked) {
                numIncorrects.push(incorrects[i]);
                console.log("incorrects.value = " + incorrects[i].value);

            }
        }
        console.log("You got " + numIncorrects.length + " incorrect.");
    };


    var corrects = document.getElementsByClassName("correct");
    var incorrects = document.getElementsByClassName("incorrect");



    function answerPage() {
        $("#questionBlock").html("correct answers = " + numCorrects);

        // $("answerBlock").html("this is where the answers will populate once i finish this part");

        // console.log("answer page will populate");

        // countCorrects();
        countIncorrects();

        console.log("You got " + numIncorrects.length + " incorrect.");

        console.log("You got " + numCorrects.length + " correct.");
        console.log("numCorrects = " + numCorrects);
        console.log("numIncorrects = " + numIncorrects);
        console.log("incorrects = " + incorrects);
        console.log("corrects = " + corrects);
        console.log("incorrects length = " + incorrects.length);
        console.log("corrects length = " + corrects.length);
        console.log("check test " + checkTest);
    }
});