
function stats(){
    console.log("Wins: " + win);
    console.log("Losses: " + loss);
    console.log("Guesses: " + lives);
    console.log("Wrong Answers: "+ wrongArr);
}

function scoreBoard(){
    document.getElementById("wins").innerHTML = "Wins: " + win;
    document.getElementById("loss").innerHTML = "Losses: " + loss;
    document.getElementById("guess").innerHTML = "Letters you have guessed: " + wrongArr;
    document.getElementById("lives").innerHTML = "Guesses Left: " + lives;
}

function reset(){
    var compChoice = wordBox[Math.floor(Math.random() * wordBox.length)];
    console.log("CPU Choice " + compChoice);

}


var l = 5
var win = 0;
var loss = 0;
var lives = l;

var wrongArr = [];

wordBox = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compChoice = wordBox[Math.floor(Math.random() * wordBox.length)];
console.log("CPU Choice " + compChoice);


document.onkeyup = function(event){

    var userChoice = event.key.toLowerCase();
    console.log("User Choice " + userChoice);
    console.log("**********************");

    if (lives > 0){
            if (userChoice === compChoice) {
                win++;
                lives = l;
                alert("You win!!!")
                wrongArr = [];
                scoreBoard();
                
            }

            else if (userChoice != compChoice) {
                lives--;
                // alert("WRONG! Guess again!")
                wrongArr.push(userChoice);
                scoreBoard();

                 if (lives === 0){
                     loss++;
                     wrongArr = [];
                     lives = l;
                     scoreBoard();
                     alert("You ran out of guesses! Start over!");


                 }

                }
            
            }

    
    stats();



}//onkeyup Function