var inquirer = require("inquirer");
var BasicCard = require("./basicConstructor");
var bquestions = require("./basicQuestions");

function startGame(){
    var cardArray = [];

    for(var i = 0; i < bquestions.length; i++){
        var currentQuestion = new BasicCard(bquestions[i][0], bquestions[i][1]);
        cardArray.push(currentQuestion);   
    }

    playGame(cardArray, 0)
};

function playGame(cardArray, idx){
 if(idx < cardArray.length){
    
    inquirer.prompt([{
        type:"input",
        name: "Q1",
        message: cardArray[idx].questions()
    }])
    .then(function (answers) {
    if (answers.Q1 === cardArray[idx].front){
            console.log("Correct!");
    } else {
        console.log("Wrong-O!");
        console.log(cardArray[idx].front)
    }
        idx++;
    playGame(cardArray, idx);
  
    });
 }else{
     console.log("Game Over!")
 }
}

startGame();