//set global variables

//create a variable to hold the magic number-a random number between 19 & 120
var magicNumber = (Math.floor(Math.random()*102)+19);
//create variables to hold each gem's number-a random number between 1 & 12
var gem1number = (Math.floor(Math.random()*12)+1);
var gem2number = (Math.floor(Math.random()*12)+1);
var gem3number = (Math.floor(Math.random()*12)+1);
var gem4number = (Math.floor(Math.random()*12)+1);
//create variables to hold a random number between 0 & 11 that will assign the gem image
//this will stop the user knowing the number based only on the gem image
var img1number = (Math.floor(Math.random()*12));
var img2number = (Math.floor(Math.random()*12));
var img3number = (Math.floor(Math.random()*12));
var img4number = (Math.floor(Math.random()*12));
//array that holds the gem image for each possible value
var gemImages = ["assets/images/amazonite.png", "assets/images/amethyst.png", 
                 "assets/images/calcite.png", "assets/images/dioptase.png", 
                 "assets/images/flameQuartz.png", "assets/images/flouride.png", 
                 "assets/images/lapis.png", "assets/images/malachite.png", 
                 "assets/images/pyrite.png", "assets/images/rhodochrosite.png", 
                 "assets/images/topaz.png", "assets/images/tourmaline.png"] 
//variables to hold the number of each gem won
var amazonite = 0;
var amethyst = 0;
var calcite = 0;
var dioptase = 0;
var flameQuartz = 0;
var flouride = 0;
var lapis = 0;
var malachite = 0;
var pyrite = 0;
var rhodochrosite = 0;
var topaz = 0;
var tourmaline = 0;
//array to hold win totals
var gemTotals = [0,0,0,0,0,0,0,0,0,0,0,0]
//variables to hold click counts each gem button
var click1 = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;


//run initialView when the page loads to set the initial game board
window.onload = function() {
    initialView();
}

//create variable to hold the user's score
var userscore = 0;
//create variable to hold the number of wins
var wins = 0;
//create variable to hold the number of losses
var losses = 0;

//create variables to hold event related music
var winMusic = new Audio("assets/images/winner.wav");
var lossMusic = new Audio("assets/images/lose.wav");
var gemMusic = new Audio("assets/images/crystal.wav");
var revealMusic = new Audio("assets/images/reveal.wav");
var hideMusic = new Audio("assets/images/hide.wav");

//create a function called initialView to set the initial game board
var initialView = function(){
    /*if there are any duplicate gem values, reset random gem values, and run the initialView function again
    this prevents duplicate gem values*/
    if ((gem1number==gem2number)||(gem1number==gem3number)||(gem1number==gem4number)||(gem2number==gem3number)||(gem2number==gem4number)||(gem3number==gem4number)){
        gem1number = (Math.floor(Math.random()*12)+1);
        gem2number = (Math.floor(Math.random()*12)+1);
        gem3number = (Math.floor(Math.random()*12)+1);
        gem4number = (Math.floor(Math.random()*12)+1);
        initialView();
    }
    /*similar process as above to prevent duplicate gem images*/
    else if ((img1number==img2number)||(img1number==img3number)||(img1number==img4number)||(img2number==img3number)||(img2number==img4number)||(img3number==img4number)){
        img1number = (Math.floor(Math.random()*12));
        img2number = (Math.floor(Math.random()*12));
        img3number = (Math.floor(Math.random()*12));
        img4number = (Math.floor(Math.random()*12));
        initialView();
    }
    else {
        //set random gem images for each gem button
        $("#b1Img").attr("src", gemImages[img1number]);
        $("#b2Img").attr("src", gemImages[img2number]);
        $("#b3Img").attr("src", gemImages[img3number]);
        $("#b4Img").attr("src", gemImages[img4number]);
        //display game instructions
        $("#instructions").html("<p>i have assigned a random value between 1 & 12 to each of the crystals below. when you click on a crystal, i will add it's value to your score.  if you can match my magic number, you can keep all the crystals that you clicked. beware, though, if you overshoot the magic number, i will take up to five of every type of crystal in your collection. click on any crystal to begin the game-let's play!</p>");
        //set initial game display
        $("#targetNumber").html("THE MAGIC NUMBER IS: <br><br>" + magicNumber);
        $("#yourNumber").html("YOUR TOTAL: <br><br>" + userscore);
        $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
        //set initial button configuration and make sure instructions are initially visible
        $("#insButtonH").html("HIDE MESSAGE");
        $("#insButtonH").show();
        $("#insButtonD").html("REVEAL MESSAGE");
        $("#insButtonD").hide();
        $("#colButtonD").show();
        $("#colButtonD").html("VIEW YOUR COLLECTION");
        $("#colButtonH").hide();
        $("#colButtonH").html("HIDE YOUR COLLECTION");
        $("#instructions").css("display", "inherit");
        $(".collectionHolder").css("display", "none");
        //display collection stats
        $("#g1").html("AMAZONITE: <br><br>" + amazonite);
        $("#g2").html("AMETHYST: <br><br>" + amethyst);
        $("#g3").html("CALCITE: <br><br>" + calcite);
        $("#g4").html("DIOPTASE: <br><br>" + dioptase);
        $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
        $("#g6").html("FLOURIDE: <br><br>" + flouride);
        $("#g7").html("LAPIS: <br><br>" + lapis);
        $("#g8").html("MALACHITE: <br><br>" + malachite);
        $("#g9").html("PYRITE: <br><br>" + pyrite);
        $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
        $("#g11").html("TOPAZ: <br><br>" + topaz);
        $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
    }
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
        img1number = (Math.floor(Math.random()*12));
        img2number = (Math.floor(Math.random()*12));
        img3number = (Math.floor(Math.random()*12));
        img4number = (Math.floor(Math.random()*12));
        click1 = 0;
        click2 = 0;
        click3 = 0;
        click4 = 0;
        initialView();
    }
})
});

//create a function that hides instructions and hide button, displays reveal button, and
//play hide music when button is clicked.
$(document).ready(function() {
    $("#insButtonH").click(function(){
        $("#insButtonD").show();
        $("#instructions").css("display", "none");
        $("#insButtonH").hide();
        hideMusic.play();

    })
});

//create a function that hides display button, shows instructions and hide button, and
//plays reveal music when button is clicked
$(document).ready(function() {
    $("#insButtonD").click(function(){
        $("#insButtonH").show();
        $("#instructions").css("display", "inherit");
        $("#insButtonD").hide();
        revealMusic.play();

    })
});

//create a function that hides display button, shows collection and hide button, and 
//plays reveal music when button is clicked
$(document).ready(function() {
    $("#colButtonD").click(function(){
        $("#colButtonH").show();
        $(".collectionHolder").css("display", "inherit");
        $("#colButtonD").hide();
        revealMusic.play();
    })
});

//create a function that hides collection and hide button, displays reveal button, and
//plays hide music when button is clicked.
$(document).ready(function() {
    $("#colButtonH").click(function(){
        $("#colButtonD").show();
        $(".collectionHolder").css("display", "none");
        $("#colButtonH").hide();
        hideMusic.play();
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
    //add to click count
    click1++;
    //display new total in the div with id=yourNumber
    $("#yourNumber").html("YOUR TOTAL: <br><br>" + userscore);
    /*check if the winning conditions (userscore=magicNumber) are met-if
    they are, run the winning endgame*/
    if (userscore == magicNumber) {
        //increase wins by one
        wins++;
        //display win message, make sure hide button is visible and show
        //button is hidden
        $("#instructions").css("display", "inherit");
        $("#insButtonH").show();
        $("#insButtonD").hide();
        //display win message
        $("#instructions").html("you win-congratulations! press the escape key to play again!");
        //update win counter
        $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
        //add winnings to appropriate array element from gem totals
        gemTotals[img1number] = gemTotals[img1number] + click1;
        gemTotals[img2number] = gemTotals[img2number] + click2;
        gemTotals[img3number] = gemTotals[img3number] + click3;
        gemTotals[img4number] = gemTotals[img4number] + click4;
        //update gem winnings
        amazonite = gemTotals[0];
        amethyst = gemTotals[1];
        calcite = gemTotals[2];
        dioptase = gemTotals[3];
        flameQuartz = gemTotals[4];
        flouride = gemTotals[5];
        lapis = gemTotals[6];
        malachite = gemTotals[7];
        pyrite = gemTotals[8];
        rhodochrosite = gemTotals[9];
        topaz = gemTotals[10];
        tourmaline = gemTotals[11];
        //display collection stats
        $("#g1").html("AMAZONITE: <br><br>" + amazonite);
        $("#g2").html("AMETHYST: <br><br>" + amethyst);
        $("#g3").html("CALCITE: <br><br>" + calcite);
        $("#g4").html("DIOPTASE: <br><br>" + dioptase);
        $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
        $("#g6").html("FLOURIDE: <br><br>" + flouride);
        $("#g7").html("LAPIS: <br><br>" + lapis);
        $("#g8").html("MALACHITE: <br><br>" + malachite);
        $("#g9").html("PYRITE: <br><br>" + pyrite);
        $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
        $("#g11").html("TOPAZ: <br><br>" + topaz);
        $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
        //play win music
        winMusic.play();
        return;
    }
    else if (userscore > magicNumber) {
        //increase losses by one
        losses++;
        //display loss message, make sure hide button is visible and show
        //button is hidden
        $("#instructions").css("display", "inherit");
        $("#insButtonH").show();
        $("#insButtonD").hide();
        //display win message
        $("#instructions").html("better luck next time-press the escape key to play again!");
        //update loss counter
        $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
        //for loop that ensures that the user loses 5 of each gem (unless the user
        //has less than 5 gems, in which case the user loses all remaining gems).
        for (i=0; i<gemTotals.length; i++) {
            if (gemTotals[i]>4){
                gemTotals[i] = gemTotals[i]-5;
            }
            else if (gemTotals[i]>3){
                gemTotals[i] = gemTotals[i]-4;
            }
            else if (gemTotals[i]>2){
                gemTotals[i] = gemTotals[i]-3;
            }
            else if (gemTotals[i]>1){
                gemTotals[i] = gemTotals[i]-2;
            }
            else if (gemTotals[i]>0){
                gemTotals[i] = gemTotals[i]-1;
            }
            //update gem winnings
            amazonite = gemTotals[0];
            amethyst = gemTotals[1];
            calcite = gemTotals[2];
            dioptase = gemTotals[3];
            flameQuartz = gemTotals[4];
            flouride = gemTotals[5];
            lapis = gemTotals[6];
            malachite = gemTotals[7];
            pyrite = gemTotals[8];
            rhodochrosite = gemTotals[9];
            topaz = gemTotals[10];
            tourmaline = gemTotals[11];
        }
        //display collection stats
        $("#g1").html("AMAZONITE: <br><br>" + amazonite);
        $("#g2").html("AMETHYST: <br><br>" + amethyst);
        $("#g3").html("CALCITE: <br><br>" + calcite);
        $("#g4").html("DIOPTASE: <br><br>" + dioptase);
        $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
        $("#g6").html("FLOURIDE: <br><br>" + flouride);
        $("#g7").html("LAPIS: <br><br>" + lapis);
        $("#g8").html("MALACHITE: <br><br>" + malachite);
        $("#g9").html("PYRITE: <br><br>" + pyrite);
        $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
        $("#g11").html("TOPAZ: <br><br>" + topaz);
        $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
        //play loss music
        lossMusic.play();
        return;
    }

    else {
        //play gem music
        gemMusic.play();
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
        //add to click count
        click2++;
        //display new total in the div with id=yourNumber
        $("#yourNumber").html("YOUR TOTAL: <br><br>" + userscore);
        /*check if the winning conditions (userscore=magicNumber) are met-if
        they are, run the winning endgame*/
        if (userscore == magicNumber) {
            //increase wins by one
            wins++;
            //display win message, make sure hide button is visible and show
            //button is hidden
            $("#instructions").css("display", "inherit");
            $("#insButtonH").show();
            $("#insButtonD").hide();
            //display win message
            $("#instructions").html("you win-congratulations! press the escape key to play again!");
            //update win counter
            $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
            //add winnings to appropriate array element from gem totals
             gemTotals[img1number] = gemTotals[img1number] + click1;
             gemTotals[img2number] = gemTotals[img2number] + click2;
             gemTotals[img3number] = gemTotals[img3number] + click3;
             gemTotals[img4number] = gemTotals[img4number] + click4;
             //update gem winnings
            amazonite = gemTotals[0];
            amethyst = gemTotals[1];
            calcite = gemTotals[2];
            dioptase = gemTotals[3];
            flameQuartz = gemTotals[4];
            flouride = gemTotals[5];
            lapis = gemTotals[6];
            malachite = gemTotals[7];
            pyrite = gemTotals[8];
            rhodochrosite = gemTotals[9];
            topaz = gemTotals[10];
            tourmaline = gemTotals[11];
            //display collection stats
            $("#g1").html("AMAZONITE: <br><br>" + amazonite);
            $("#g2").html("AMETHYST: <br><br>" + amethyst);
            $("#g3").html("CALCITE: <br><br>" + calcite);
            $("#g4").html("DIOPTASE: <br><br>" + dioptase);
            $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
            $("#g6").html("FLOURIDE: <br><br>" + flouride);
            $("#g7").html("LAPIS: <br><br>" + lapis);
            $("#g8").html("MALACHITE: <br><br>" + malachite);
            $("#g9").html("PYRITE: <br><br>" + pyrite);
            $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
            $("#g11").html("TOPAZ: <br><br>" + topaz);
            $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
            //play win music
            winMusic.play();
            return;
        }
        /*if the winning condition isn't met, check if the losing condition is met (i.e.
        if the userscore is greater than the magic number)*/
        else if (userscore > magicNumber) {
            //increase losses by one
            losses++;
            //display loss message, make sure hide button is visible and show
            //button is hidden
            $("#instructions").css("display", "inherit");
            $("#insButtonH").show();
            $("#insButtonD").hide();
            //display win message
            $("#instructions").html("better luck next time-press the escape key to play again!");
            //update loss counter
            $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
            //for loop that ensures that the user loses 5 of each gem (unless the user
            //has less than 5 gems, in which case the user loses all remaining gems).
            for (i=0; i<gemTotals.length; i++) {
                if (gemTotals[i]>4){
                    gemTotals[i] = gemTotals[i]-5;
                }
                else if (gemTotals[i]>3){
                    gemTotals[i] = gemTotals[i]-4;
                }
                else if (gemTotals[i]>2){
                    gemTotals[i] = gemTotals[i]-3;
                }
                else if (gemTotals[i]>1){
                    gemTotals[i] = gemTotals[i]-2;
                }
                else if (gemTotals[i]>0){
                    gemTotals[i] = gemTotals[i]-1;
                }
                //update gem winnings
                amazonite = gemTotals[0];
                amethyst = gemTotals[1];
                calcite = gemTotals[2];
                dioptase = gemTotals[3];
                flameQuartz = gemTotals[4];
                flouride = gemTotals[5];
                lapis = gemTotals[6];
                malachite = gemTotals[7];
                pyrite = gemTotals[8];
                rhodochrosite = gemTotals[9];
                topaz = gemTotals[10];
                tourmaline = gemTotals[11];
            }
            //display collection stats
            $("#g1").html("AMAZONITE: <br><br>" + amazonite);
            $("#g2").html("AMETHYST: <br><br>" + amethyst);
            $("#g3").html("CALCITE: <br><br>" + calcite);
            $("#g4").html("DIOPTASE: <br><br>" + dioptase);
            $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
            $("#g6").html("FLOURIDE: <br><br>" + flouride);
            $("#g7").html("LAPIS: <br><br>" + lapis);
            $("#g8").html("MALACHITE: <br><br>" + malachite);
            $("#g9").html("PYRITE: <br><br>" + pyrite);
            $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
            $("#g11").html("TOPAZ: <br><br>" + topaz);
            $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
            //play loss music
            lossMusic.play();
            return;
        }
    
        else {
            //play gem music
            gemMusic.play();
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
        //add to click count
        click3++;
        //display new total in the div with id=yourNumber
        $("#yourNumber").html("YOUR TOTAL: <br><br>" + userscore);
        /*check if the winning conditions (userscore=magicNumber) are met-if
        they are, run the winning endgame*/
        if (userscore == magicNumber) {
            //increase wins by one
            wins++;
            //display win message, make sure hide button is visible and show
            //button is hidden
            $("#instructions").css("display", "inherit");
            $("#insButtonH").show();
            $("#insButtonD").hide();
            //display win message
            $("#instructions").html("you win-congratulations! press the escape key to play again!");
            //update win counter
            $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
            //add winnings to appropriate array element from gemTotals
            gemTotals[img1number] = gemTotals[img1number] + click1;
            gemTotals[img2number] = gemTotals[img2number] + click2;
            gemTotals[img3number] = gemTotals[img3number] + click3;
            gemTotals[img4number] = gemTotals[img4number] + click4;
            //update gem winnings
            amazonite = gemTotals[0];
            amethyst = gemTotals[1];
            calcite = gemTotals[2];
            dioptase = gemTotals[3];
            flameQuartz = gemTotals[4];
            flouride = gemTotals[5];
            lapis = gemTotals[6];
            malachite = gemTotals[7];
            pyrite = gemTotals[8];
            rhodochrosite = gemTotals[9];
            topaz = gemTotals[10];
            tourmaline = gemTotals[11];
            //display collection stats
            $("#g1").html("AMAZONITE: <br><br>" + amazonite);
            $("#g2").html("AMETHYST: <br><br>" + amethyst);
            $("#g3").html("CALCITE: <br><br>" + calcite);
            $("#g4").html("DIOPTASE: <br><br>" + dioptase);
            $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
            $("#g6").html("FLOURIDE: <br><br>" + flouride);
            $("#g7").html("LAPIS: <br><br>" + lapis);
            $("#g8").html("MALACHITE: <br><br>" + malachite);
            $("#g9").html("PYRITE: <br><br>" + pyrite);
            $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
            $("#g11").html("TOPAZ: <br><br>" + topaz);
            $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
            //play win music
            winMusic.play();
            return;
        }
        else if (userscore > magicNumber) {
            //increase losses by one
            losses++;
            //display loss message, make sure hide button is visible and show
            //button is hidden
            $("#instructions").css("display", "inherit");
            $("#insButtonH").show();
            $("#insButtonD").hide();
            //display win message
            $("#instructions").html("better luck next time-press the escape key to play again!");
            //update loss counter
            $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
            //for loop that ensures that the user loses 5 of each gem (unless the user
            //has less than 5 gems, in which case the user loses all remaining gems).
            for (i=0; i<gemTotals.length; i++) {
                if (gemTotals[i]>4){
                    gemTotals[i] = gemTotals[i]-5;
                }
                else if (gemTotals[i]>3){
                    gemTotals[i] = gemTotals[i]-4;
                }
                else if (gemTotals[i]>2){
                    gemTotals[i] = gemTotals[i]-3;
                }
                else if (gemTotals[i]>1){
                    gemTotals[i] = gemTotals[i]-2;
                }
                else if (gemTotals[i]>0){
                    gemTotals[i] = gemTotals[i]-1;
                }
                //update gem winnings
                amazonite = gemTotals[0];
                amethyst = gemTotals[1];
                calcite = gemTotals[2];
                dioptase = gemTotals[3];
                flameQuartz = gemTotals[4];
                flouride = gemTotals[5];
                lapis = gemTotals[6];
                malachite = gemTotals[7];
                pyrite = gemTotals[8];
                rhodochrosite = gemTotals[9];
                topaz = gemTotals[10];
                tourmaline = gemTotals[11];
            }
            //display collection stats
            $("#g1").html("AMAZONITE: <br><br>" + amazonite);
            $("#g2").html("AMETHYST: <br><br>" + amethyst);
            $("#g3").html("CALCITE: <br><br>" + calcite);
            $("#g4").html("DIOPTASE: <br><br>" + dioptase);
            $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
            $("#g6").html("FLOURIDE: <br><br>" + flouride);
            $("#g7").html("LAPIS: <br><br>" + lapis);
            $("#g8").html("MALACHITE: <br><br>" + malachite);
            $("#g9").html("PYRITE: <br><br>" + pyrite);
            $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
            $("#g11").html("TOPAZ: <br><br>" + topaz);
            $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
            //play loss music
            lossMusic.play();
            return;
        }
    
        else {
            //play gem music
            gemMusic.play();
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
        //add to click count
        click4++;
        //display new total in the div with id=yourNumber
        $("#yourNumber").html("YOUR TOTAL: <br><br>" + userscore);
        /*check if the winning conditions (userscore=magicNumber) are met-if
        they are, run the winning endgame*/
        if (userscore == magicNumber) {
            //increase wins by one
            wins++;
            //display win message, make sure hide button is visible and show
            //button is hidden
            $("#instructions").css("display", "inherit");
            $("#insButtonH").show();
            $("#insButtonD").hide();
            //display win message
            $("#instructions").html("you win-congratulations! press the escape key to play again!");
            //update win counter
            $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
            //add winnings to appropriate array element from gem totals
            gemTotals[img1number] = gemTotals[img1number] + click1;
            gemTotals[img2number] = gemTotals[img2number] + click2;
            gemTotals[img3number] = gemTotals[img3number] + click3;
            gemTotals[img4number] = gemTotals[img4number] + click4;
            //update gem winnings
            amazonite = gemTotals[0];
            amethyst = gemTotals[1];
            calcite = gemTotals[2];
            dioptase = gemTotals[3];
            flameQuartz = gemTotals[4];
            flouride = gemTotals[5];
            lapis = gemTotals[6];
            malachite = gemTotals[7];
            pyrite = gemTotals[8];
            rhodochrosite = gemTotals[9];
            topaz = gemTotals[10];
            tourmaline = gemTotals[11];
            //display collection stats
            $("#g1").html("AMAZONITE: <br><br>" + amazonite);
            $("#g2").html("AMETHYST: <br><br>" + amethyst);
            $("#g3").html("CALCITE: <br><br>" + calcite);
            $("#g4").html("DIOPTASE: <br><br>" + dioptase);
            $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
            $("#g6").html("FLOURIDE: <br><br>" + flouride);
            $("#g7").html("LAPIS: <br><br>" + lapis);
            $("#g8").html("MALACHITE: <br><br>" + malachite);
            $("#g9").html("PYRITE: <br><br>" + pyrite);
            $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
            $("#g11").html("TOPAZ: <br><br>" + topaz);
            $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
            //play win music
            winMusic.play();
            return;
        }
        else if (userscore > magicNumber) {
            //increase losses by one
            losses++;
            //display loss message, make sure hide button is visible and show
            //button is hidden
            $("#instructions").css("display", "inherit");
            $("#insButtonH").show();
            $("#insButtonD").hide();
            //display win message
            $("#instructions").html("better luck next time-press the escape key to play again!");
            //update loss counter
            $("#gameStats").html("WINS: " + wins + "<br><br> LOSSES: " + losses);
            //for loop that ensures that the user loses 5 of each gem (unless the user
            //has less than 5 gems, in which case the user loses all remaining gems).
            for (i=0; i<gemTotals.length; i++) {
                if (gemTotals[i]>4){
                    gemTotals[i] = gemTotals[i]-5;
                }
                else if (gemTotals[i]>3){
                    gemTotals[i] = gemTotals[i]-4;
                }
                else if (gemTotals[i]>2){
                    gemTotals[i] = gemTotals[i]-3;
                }
                else if (gemTotals[i]>1){
                    gemTotals[i] = gemTotals[i]-2;
                }
                else if (gemTotals[i]>0){
                    gemTotals[i] = gemTotals[i]-1;
                }
                //update gem winnings
                amazonite = gemTotals[0];
                amethyst = gemTotals[1];
                calcite = gemTotals[2];
                dioptase = gemTotals[3];
                flameQuartz = gemTotals[4];
                flouride = gemTotals[5];
                lapis = gemTotals[6];
                malachite = gemTotals[7];
                pyrite = gemTotals[8];
                rhodochrosite = gemTotals[9];
                topaz = gemTotals[10];
                tourmaline = gemTotals[11];
            }
            //display collection stats
            $("#g1").html("AMAZONITE: <br><br>" + amazonite);
            $("#g2").html("AMETHYST: <br><br>" + amethyst);
            $("#g3").html("CALCITE: <br><br>" + calcite);
            $("#g4").html("DIOPTASE: <br><br>" + dioptase);
            $("#g5").html("FLAME QUARTZ: <br><br>" + flameQuartz);
            $("#g6").html("FLOURIDE: <br><br>" + flouride);
            $("#g7").html("LAPIS: <br><br>" + lapis);
            $("#g8").html("MALACHITE: <br><br>" + malachite);
            $("#g9").html("PYRITE: <br><br>" + pyrite);
            $("#g10").html("RHODOCHROSITE: <br><br>" + rhodochrosite);
            $("#g11").html("TOPAZ: <br><br>" + topaz);
            $("#g12").html("TOURMALINE: <br><br>" + tourmaline);
            //play loss music
            lossMusic.play();
            return;
        }
    
        else {
            //play gem music
            gemMusic.play();
        }
    })
    });

