
/*

Name: Ashley Kodya
Date: 11/12/2014
Assignment: Goal1: Assignment: Duel1

 */

// self-executing function
(function(){

    console.log("FIGHT!!!");              //prints "FIGHT" to console.log
                                          //variables named and set
    //player name
    var playerOne = {name:'Spiderman', damage:20, health:100};  //changed to object
    var playerTwo = {name:'Batman', damage:20, health:100};     //changed to object

    /*player damage
    var player1Damage = 20;                       //player1 max damage taken per round variable
    var player2Damage = 20;                       //player2 max damage taken per round variable

    //player health
    var playerOneHealth = 100;                   //player1 starting damage variable
    var playerTwoHealth = 100;*/                //player2 starting damage variable

    //initiate round
    var round=0;                        //starts first round


    var currentScore1 = document.getElementById("kabal");
    currentScore1.innerHTML = playerOne.name + ":" + playerOne.health;      // changed to getElementById to access DOM

    var currentScore2 = document.getElementById("kratos");
    currentScore2.innerHTML = playerTwo.name + ":" + playerTwo.health;     // changed to getElementById to access DOM

    var introMsg = document.getElementById("round_number");
    introMsg.innerHTML = "Click below to begin!!!";     // changed to getElementById to access DOM



        // function to randomize damage taken of both players
    var clickButton = document.getElementById('fight_btn');   //click object FIGHT box to begin function
    clickButton.onclick = function fight(){





            //for (var i = 0; i < 10; i++){
            //Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne.damage * .5;       //change to object variable
            var minDamage2 = playerTwo.damage * .5;      //change to object variable
            var f1 = Math.floor(Math.random() * (playerOne.damage - minDamage1) + minDamage1);   //changed to object variable
            var f2 = Math.floor(Math.random() * (playerTwo.damage - minDamage2) + minDamage2);   //changed to object variable

            //damage taken of both players for each round
            playerOne.health -= f1;            //changed to object variable
            playerTwo.health -= f2;            //changed to object variable


            //shows in the console log what health each player has at the end of each round
            console.log(playerOne.name + ": " + playerOne.health + " " + playerTwo.name + ":" + playerTwo.health);   //changed to object variables

            // check if there is a winner
            var result = winnerCheck();         //variable function winnercheck()
            console.log(result);            //shows in the console log result of the round


            var currentScore1 = document.getElementById("kabal");
            currentScore1.innerHTML = playerOne.name + ":" + playerOne.health;      // changed to getElementById to access DOM

            var currentScore2 = document.getElementById("kratos");
            currentScore2.innerHTML = playerTwo.name + ":" + playerTwo.health;     // changed to getElementById to access DOM

            //if there is no winner, alert the user the score(health) of each player at the end of each round
            //until there is a winner or till both players die
            if (result === "no winner") {                            // result of round - no winner
                round++;


                // changed to getElementById to access DOM
                var roundScore1 = document.getElementById("round_number");
                roundScore1.innerHTML = "ROUND " + round;      // changed to getElementById to access DOM

                //changed to object variables
            } else {                           // ^^ alert for player's score at the end of each round
                 var showResults = document.getElementById('scores');   //displays scores at the end of game
                showResults.innerHTML = result;                         //shows scores at end of game

                   //result of game given in alert from winnercheck function // changed to getElementById to access DOM
                //break;            //breaks from loop
                // };
            };    //close if else statement
        };        //close fight()


    // function at end of game either one player wins or both players die
    function winnerCheck(){           //invokes winnercheck function



        var result="no winner";             //result no winner
        if (playerOne.health<1 && playerTwo.health<1){   // if both players damage is under 1, both players die    //changed to object variable
            result = "You Both Die :(";            //sends "you both die" to alert
            document.getElementById('fight_btn').style.pointerEvents = 'none';
        }else if(playerOne.health<1){                //if player1 health is under 1                           //changed to object  variable
            result =playerTwo.name+" WINS!!!";     //then player 2 wins - put out to alert box              //changed to object  variable
            document.getElementById('fight_btn').style.pointerEvents = 'none';
        }else if (playerTwo.health<1){              // if player2 health under 1                               //changed to object variable
            result = playerOne.name+" WINS!!!";     //then player 2 wins and result is put into alert          //changed to object variable
            document.getElementById('fight_btn').style.pointerEvents = 'none';
        };
        return result;                     //returns result out of function

    };



    //**** The program gets started below ****
//returns the results

  //  fight();               //fight function



})();     //closing of self-executing function