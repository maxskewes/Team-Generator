const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile);

//Employee Prompts
promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name."
        },
        {
            type: "input",
            id: "id",
            message: "Enter your ID."
        },
        {
            type: "input",
            email: "email",
            message: "Enter your email."
        }
    ]);
};

//Engineer Prompts
promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name."
        },
        {
            type: "input",
            id: "id",
            message: "Enter your ID."
        },
        {
            type: "input",
            email: "email",
            message: "Enter your email."
        },
        {
            type: "input",
            github: "github",
            message: "Enter your GitHub username."
        }
    ])
};

//Intern Prompts
promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name."
        },
        {
            type: "input",
            id: "id",
            message: "Enter your ID."
        },
        {
            type: "input",
            email: "email",
            message: "Enter your email."
        },
        {
            type: "input",
            school: "school",
            message: "Enter your school."
        }
    ])
};

//Manager Prompts
promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name."
        },
        {
            type: "input",
            id: "id",
            message: "Enter your ID."
        },
        {
            type: "input",
            email: "email",
            message: "Enter your email."
        },
        {
            type: "input",
            officeNumber: "officeNumber",
            message: "Enter your office Number."
        }
    ]);
};
