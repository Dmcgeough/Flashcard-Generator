var inquirer = require("inquirer");



    inquirer.prompt([{
        type:"list",
        name: "Q1",
        message: "What type of flashcards would you like?",
        choices: ["ClozeCards", "BasicCards"]
    }])
    .then(function (answers) {
        console.log(answers.Q1)
    })


