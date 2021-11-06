const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');
const Manager = require('./manager');
const Employee = require('./employee'); 
const Engineer = require('./engineer');
const Intern = require('./intern');

const managerQuestions = [{
  type: 'input',
  message: 'Hello Manager! What is your name?',
  name: 'name',
},
{
  type: 'input',
  message: 'What is your employee ID number?',
  name: 'id',
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email',
},
{
  type: 'input',
  message: 'Please enter your office number:',
  name: 'officeNumber',
}];

const engineerQuestions = [{
  type: 'input',
  message: 'Hello Engineer! What is your name?',
  name: 'name',
},
{
  type: 'input',
  message: 'What is your employee ID number?',
  name: 'id',
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email',
},
{
  type: 'input',
  message: 'Please enter your github username:',
  name: 'github',
}];

const internQuestions = [{
  type: 'input',
  message: 'Hello Intern! What is your name?',
  name: 'name',
},
{
  type: 'input',
  message: 'What is your employee ID number?',
  name: 'id',
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email',
},
{
  type: 'input',
  message: 'Please enter your school',
  name: 'school',
}];
// Create an array of questions for each position function

const start = () => {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
       askUser();
    })
    
}

function askUser() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'userselect',
      message: 'Would you like to add a team member?',
      choices: ['engineer', 'intern', 'no thanks']
    }
  ])
  .then ((choices) => {
    if (choices.userselect === 'engineer') {
      engineerQs();
    } else if (choices.userselect === 'intern') {
      internQs();
    } else {
      return console.log('Your profile is complete!')
  } 
  })
}

function engineerQs () {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github) 
       askUser();
    })
}

function internQs () {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      const intern = new Intern (answers.name, answers.id, answers.email, answers.school) 
       askUser();
    })
}
start();

