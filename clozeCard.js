var inquirer = require('inquirer');
var ClozeCard = require("./clozeConstructor");
var questions = require("./clozeQuestions");

function startGame(){
    var cardArray = [];

    for(var i = 0; i < questions.length; i++){
        var currentQuestion = new ClozeCard(questions[i][0], questions[i][1]);
        cardArray.push(currentQuestion);   
    }

    playGame(cardArray, 0)
};

function playGame(cardArray, idx){
 if(idx < cardArray.length){
    
    inquirer.prompt([{
        type:"input",
        name: "Q1",
        message: cardArray[idx].partial()
    }])
    .then(function (answers) {
    if (answers.Q1 === cardArray[idx].cloze){
            console.log("Correct!");
    } else {
        console.log("You Idiot!");
        console.log(cardArray[idx].cloze);
    }
        idx++;
    playGame(cardArray, idx);
  
    });
 }else{
     console.log("Game Over!")
 }
}

startGame();


