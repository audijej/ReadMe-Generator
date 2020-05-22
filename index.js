const questions = [

    "What is your GitHub username?",
    "What is the title of your project?",
    "Give a brief description of your project",
    "List a table of contents",
    "How to install this application",
    "What is the usuage of this application?",
    "License",
    "Contributing information",
    

];

var inquirer = require("inquirer");
var fs = require("fs");

inquirer
    .prompt ([
    {
        type: "input",
        message: "What is you GitHub username?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the name of your project",
        name: "project"
    },

    {
        type: "input",
        message:"Description of your project",
        name: "description",
    },

    {
        type: "input",
        message:"Table of contents",
        name: "contents",
    },

    {
        type: "input",
        message:"How to install this application",
        name: "application-instructions",
    },

    {
        type: "input",
        message:"How to use this application",
        name: "usage",
    },

    {
        type: "input",
        message:"Contributions",
        name: "contributions",
    },

    {
        type: "input",
        message: "License",
        name: "license",
    },

    ])

    

function writeToFile(fileName, data) {
}

function init() {

}

init();
