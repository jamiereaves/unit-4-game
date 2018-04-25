//set global variables

//create a variable to hold the magic number-a random number between 19 & 120
var magicNumber = (Math.floor(Math.random()*102)+19);
//create a variable to hold each gem's number-a random number between 1 & 12
var gem1number = (Math.floor(Math.random()*12)+1);
var gem2number = (Math.floor(Math.random()*12)+1);
var gem3number = (Math.floor(Math.random()*12)+1);
var gem4number = (Math.floor(Math.random()*12)+1);

/*TEST*/
window.onload = function() {
    console.log(magicNumber);
    console.log(gem1number);
    console.log(gem2number);
    console.log(gem3number);
    console.log(gem4number);
    initialView();
}

//create variable to hold the user's score
var userscore = 0;
//create variable to hold the number of wins
var wins = 0;
//create variable to hold the number of losses
var losses = 0;

//create variables to hold event related music
var winMusic = new Audio("#");
var loseMusic = new Audio("#");
var gem1music = new Audio("#");
var gem2music = new Audio("#");
var gem3music = new Audio("#");
var gem4music = new Audio("#");

//create a function called initialView to set the initial game board
var initialView = function(){
    $("#instructions").html("<p>You will be given a random number at the start of the game. There are four Crystals below. By clicking on a crystal you will add a specific amount of points to your total score.  You win the game by matching your total score to random number, you lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time when the game starts, the game will change the values of each crystal.</p>");
    $("#targetNumber").html("the magic number is: <br><br>" + magicNumber);
    $("#yourNumber").html("your total is: <br><br>" + userscore);
    $("#gameStats").html("wins: " + wins + "<br><br> losses: " + losses);
};

//create a function to reset global variables and game board (but keep wins/losses) when escape key is pressed
$(document).ready(function() {
$(document).keyup(function(event) {
    if (event.keyCode == 27) {
       userscore =0;
       magicNumber = (Math.floor(Math.random()*102)+19);
       gem1number = (Math.floor(Math.random()*12)+1);
       gem2number = (Math.floor(Math.random()*12)+1);
       gem3number = (Math.floor(Math.random()*12)+1);
       gem4number = (Math.floor(Math.random()*12)+1); 
       initialView();
    }
})
});

//create a function that executes when the user clicks the first gem
$(document).ready(function() {
$("#gemButton1").click(function(){
    //prevent gameplay after win/loss
    if (userscore >= magicNumber){
        return;
    }
    //add the value of the gem to the user's score
    userscore = userscore + gem1number;
    //display new total in the div with id=yourNumber
    $("#yourNumber").html("your total is: <br><br>" + userscore);
    /*check if the winning conditions (userscore=magicNumber) are met-if
    they are, run the winning endgame*/
    if (userscore == magicNumber) {
        //increase wins by one
        wins++;
        //display win message
        $("#instructions").html("you win-congratulations! press the escape key to play again!");
        //winMusic.play();
        return;
    }
    else if (userscore > magicNumber) {
        //increase losses by one
        losses++;
        //display win message
        $("#instructions").html("better luck next time-press the escape key to play again!");
        //lossMusic.play();
        return;
    }

    else {
        //gem1music.play();
    }
})
});

//create a function that executes when the user clicks the second gem
$(document).ready(function() {
    $("#gemButton2").click(function(){
        //prevent gameplay after win/loss
        if (userscore >= magicNumber){
            return;
        }
        //add the value of the gem to the user's score
        userscore = userscore + gem2number;
        //display new total in the div with id=yourNumber
        $("#yourNumber").html("your total is: <br><br>" + userscore);
        /*check if the winning conditions (userscore=magicNumber) are met-if
        they are, run the winning endgame*/
        if (userscore == magicNumber) {
            //increase wins by one
            wins++;
            //display win message
            $("#instructions").html("you win-congratulations! press the escape key to play again!");
            //winMusic.play();
            return;
        }
        else if (userscore > magicNumber) {
            //increase losses by one
            losses++;
            //display win message
            $("#instructions").html("better luck next time-press the escape key to play again!");
            //lossMusic.play();
            return;
        }
    
        else {
            //gem2music.play();
        }
    })
    });

//create a function that executes when the user clicks the third gem
$(document).ready(function() {
    $("#gemButton3").click(function(){
        //prevent gameplay after win/loss
        if (userscore >= magicNumber){
            return;
        }
        //add the value of the gem to the user's score
        userscore = userscore + gem3number;
        //display new total in the div with id=yourNumber
        $("#yourNumber").html("your total is: <br><br>" + userscore);
        /*check if the winning conditions (userscore=magicNumber) are met-if
        they are, run the winning endgame*/
        if (userscore == magicNumber) {
            //increase wins by one
            wins++;
            //display win message
            $("#instructions").html("you win-congratulations! press the escape key to play again!");
            //winMusic.play();
            return;
        }
        else if (userscore > magicNumber) {
            //increase losses by one
            losses++;
            //display win message
            $("#instructions").html("better luck next time-press the escape key to play again!");
            //lossMusic.play();
            return;
        }
    
        else {
            //gem3music.play();
        }
    })
    });

//create a function that executes when the user clicks the fourth gem
$(document).ready(function() {
    $("#gemButton4").click(function(){
        //prevent gameplay after win/loss
        if (userscore >= magicNumber){
            return;
        }
        //add the value of the gem to the user's score
        userscore = userscore + gem4number;
        //display new total in the div with id=yourNumber
        $("#yourNumber").html("your total is: <br><br>" + userscore);
        /*check if the winning conditions (userscore=magicNumber) are met-if
        they are, run the winning endgame*/
        if (userscore == magicNumber) {
            //increase wins by one
            wins++;
            //display win message
            $("#instructions").html("you win-congratulations! press the escape key to play again!");
            //winMusic.play();
            return;
        }
        else if (userscore > magicNumber) {
            //increase losses by one
            losses++;
            //display win message
            $("#instructions").html("better luck next time-press the escape key to play again!");
            //lossMusic.play();
            return;
        }
    
        else {
            //gem4music.play();
        }
    })
    });

