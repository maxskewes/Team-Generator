const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const generateHtml = require("./output/generateHtml");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Initial Prompt
function menu() {
    inquirer.prompt({
       type: "list",
       name: "choices",
       message: "What would you like to do?",
       choices: ["Add a manager", "Add an intern", "Add an engineer", "Exit and write HTML"]
    }).then(answers => {
        if (answers.choices === "Add a manager") {
            promptManager()
        };
        if (answers.choices === "Add an intern") {
            promptIntern()
        };
        if (answers.choices === "Add an engineer")  {
            promptEngineer() 
        };
        if (answers.choices === "Exit and write HTML")  {
            exit()
        };
    });
};

//Manager Questions
promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hello, manager. Please enter your name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office Number."
        },
    ]).then(answers => {
        let managerHtml = `<div class="card"><div class="container"><h3>Manager</h3><h4><b>${answers.name}</b></h4><p>${answers.email}</p><p>${answers.officeNumber}</p></div>`;
        
            fs.appendFile("index.html", managerHtml, (err) => {
                if (err) throw err;
                console.log("manager added");
                menu();
            });
        });          
};

//Intern Questions
promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email."
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school."
        },
    ]).then(answers => {
        let internHtml = `<div class="card"><div class="container"><h3>Intern</h3><h4><b>${answers.name}</b></h4><p>${answers.id}</p></h4><p>${answers.email}</p><p>${answers.school}</p></div>`;
        fs.appendFile("./index.html", internHtml, 'utf8', (err) => {
            if (err) throw err;
            console.log("intern added");
            menu();
        });
    });        
};

//Engineer Questions
promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the engineer's GitHub profile."
        },
    ]).then(answers => {
        let engineerHtml = `<div class="card"><div class="container"><h3>Engineer</h3><h4><b>${answers.name}</b></h4><p>${answers.id}</p></h4><p>${answers.email}</p><p>${answers.github}</p></div>`;
        
            fs.appendFile("index.html", engineerHtml, (err) => {
                if (err) throw err;
                console.log("engineer added");
                menu();
            });
        });         
};


//Exit and write HTML
exit = () =>    {

}

menu();