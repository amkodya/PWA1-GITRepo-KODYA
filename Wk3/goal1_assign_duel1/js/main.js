
/*

Name: Ashley Kodya
Date: 11/07/2014
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

    //initiate round                       //starts first round
    var round=0;



                                          // function to randomize damage taken of both players
    function fight(){
        alert(playerOne.name+":"+playerOne.health+"  *START*  "+ playerTwo.name+":"+playerTwo.health);  //changed to object variables
        for (var i = 0; i < 10; i++){
            //Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne.damage * .5;       //change to object variable
            var minDamage2 = playerTwo.damage * .5;      //change to object variable
            var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1);   //changed to object variable
            var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);   //changed to object variable

                                        //damage taken of both players for each round
            playerOne.health-=f1;            //changed to object variable
            playerTwo.health-=f2;            //changed to object variable


           //shows in the console log what health each player has at the end of each round
            console.log(playerOne.name+": "+playerOne.health + " " + playerTwo.name+":"+playerTwo.health);   //changed to object variables

            // check if there is a winner
            var result = winnerCheck();         //variable function winnercheck()
            console.log(result);            //shows in the console log result of the round


            //if there is no winner, alert the user the score(health) of each player at the end of each round
            //until there is a winner or till both players die
            if (result==="no winner"){                            // result of round - no winner
                round++;                                          //advanced to next round
                alert(playerOne.name+":"+playerOne.health+"  *ROUND "+round+" OVER* "+playerTwo.name+":"+playerTwo.health);  //changed to object variables
            }else{                           // ^^ alert for player's score at the end of each round
                alert(result);    //result of game given in alert from winnercheck function
                break;            //breaks from loop
            };
        };
    };


    // function at end of game either one player wins or both players die
    function winnerCheck(){           //invokes winnercheck function
        var result="no winner";             //result no winner
        if (playerOne[2]<1 && playerTwo[2]<1){   // if both players damage is under 1, both players die    //changed to array variable
            result = "You Both Die :(";            //sends "you both die" to alert
        }else if(playerOne[2]<1){                //if player1 health is under 1                           //changed to array  variable
            result =playerTwo[0]+" WINS!!!";     //then player 2 wins - put out to alert box              //changed to array  variable
        }else if (playerTwo[2]<1){              // if player2 health under 1                               //changed to array variable
            result = playerOne[0]+" WINS!!!";     //then player 2 wins and result is put into alert          //changed to array variable
        };
        return result;                     //returns result out of function
    };



    //**** The program gets started below ****
//returns the results
    fight();               //fight function



})();     //closing of self-executing function