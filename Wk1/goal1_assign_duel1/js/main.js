
/*

Name: Ashley Kodya
Date: 11/02/2014
Assignment: Goal1: Assignment: Duel1

 */

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;



    // function to randomize damage taken of both players
    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++){
            //Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //damage taken of both players
            playerOneHealth-=f1;
            playerTwoHealth-=f2;


            //shows in the console log what health each player has at the end of each round
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            // check if there is a winner
            var result = winnerCheck();
            console.log(result);


            //if there is no winner, alert the user the score(health) of each player at the end of each round
            //until there is a winner or till both players die
            if (result==="no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(result);
                break;
            };
        };
    };


    // function at end of game either one player wins or both players die
    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die :(";
        }else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        }else if (playerTwoHealth<1){
            result = playerOneName+" WINS!!!"
        };
        return result;
    };



    //**** The program gets started below ****
//returns the results
    fight();



})();