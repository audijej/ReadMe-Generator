const inquirer = require("inquirer");
const fs = require("fs");
const markdownForm = require("./utils/generateMarkdown.js");

const questions = [

    {
        type: "input",
        message: "What is you GitHub username?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the name of your project",
        name: "title"
    },

    {
        type: "input",
        message: "Description of your project",
        name: "description",
    },

    {
        type: "input",
        message: "Table of contents",
        name: "contents",
    },

    {
        type: "input",
        message: "How to install this application",
        name: "application-instructions",
    },

    {
        type: "input",
        message: "How to use this application",
        name: "usage",
    },

    {
        type: "input",
        message: "Contributions",
        name: "contributions",
    },

    {
        type: "input",
        message: "License",
        name: "license",
    },

];


function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, "utf8", function (err) {
      if (err) throw err;
    });
    console.log("Success!");
  }

// function promptUser() {

//     inquirer
//         .prompt(questions)

// }


function init() {


    inquirer
        .prompt(questions) 
        .then(function (data) {


            var fileName = 'README.md';

            let readme = markdownForm(data);

            writeToFile(fileName, readme);


        });


}

init();

