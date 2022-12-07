// Required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import method for creating HTML in a template literal
const createHTML = require('./src/createHTML');

// An array for storing the created employee objects
const staff = [];

// Arrays of objects for inquirer
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


// A function that runs through adding a new employee, with options for engineer, intern, or finish.
// If engineer or intern is selected, it loads the appropriate questions, then pushes a new employee
// object to the staff array, then recursively calls the function again. If finish is selected, then
// the createHTML function is called with the staff array passed in, with the returned template literal
// written to dist/index.html.
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

// Begins the prompt with the manager questions, then calls the
// newEmployeePrompt function.
inquirer.prompt(managerQuestions).then((response) => {
    staff.push(new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice));
    newEmployeePrompt();
});
