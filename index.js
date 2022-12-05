const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createHTML = requite('./src/createHTML')

const staff = [];

managerQuestions = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the manager's ID?",
        name: 'managerID'
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'managerOffice'
    }
];

engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'engineerID'
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'engineerGithub'
    }
];

internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'internID'
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'internSchool'
    }
];

function newEmployeePrompt() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'newEmployee',
            choices: ['Add new engineer', 'Add new intern', 'Finish']
        }
    ).then((response) => {
        switch (response.newEmployee) {
            case 'Add new engineer':
                inquirer.prompt(engineerQuestions).then((response) => {
                    staff.push(new Engineer(
                        response.engineerName,
                        response.engineerID,
                        response.engineerEmail,
                        response.engineerGithub));
                    newEmployeePrompt();
                });
                break;
            case 'Add new intern':
                inquirer.prompt(internQuestions).then((response) => {
                    staff.push(new Intern(
                        response.internName,
                        response.internID,
                        response.internEmail,
                        response.internSchool));
                    newEmployeePrompt();
                });
                break;
            default:
                fs.writeFile('./dist/index.html',createHTML(staff), (err) =>
                err ? console.error(err) : console.log('Team profile created!'));
        }
    })

}

inquirer.prompt(managerQuestions).then((response) => {
    staff.push(new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice));
    newEmployeePrompt();
});
