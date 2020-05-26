const questions = [

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

];

const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {

inquirer
    .prompt (questions)

}

promptUser ();

function writeToFile(fileName, data) {

    fs.writeFile(fileName,data, "utf8", function(err) {
        if(err) throw err;
    });
        console.log("Success!!!!")
    
}

writeToFile()

function init() {

}

init();
