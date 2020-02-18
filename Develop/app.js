const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
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
            message: "Please enter the manager's name."
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
    ]).then(manager => {
      let managerHtml = `<div class="card"><h3><i class="fas fa-teeth-open"></i>&ensp;Manager</h3><h4>${manager.name}</h4><p>${manager.id}</p><p>${manager.email}</p><p>${manager.officeNumber}</p></div>`;
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
    ]).then(intern => {
        let internHtml = `<div class="card"><h3><i class="fas fa-graduation-cap"></i>&ensp;Intern</h3><h4>${intern.name}</h4><p>${intern.id}</p><p>${intern.email}</p><p>${intern.school}</p></div>`;
        fs.appendFile("index.html", internHtml, 'utf8', (err) => {
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
    ]).then(engineer => {
        let engineerHtml = `<div class="card"><h3><i class="fas fa-pencil-alt"></i>&ensp;Engineer</h3><h4>${engineer.name}</h4><p>${engineer.id}</p><p>${engineer.email}</p><p>${engineer.github}</p></div>`;
        
            fs.appendFile("index.html", engineerHtml, (err) => {
                if (err) throw err;
                console.log("engineer added");
                menu();
            });
        });         
};


//Exit and write HTML
exit = () =>    {
    let footer = `</div> </html>`;
    fs.appendFile("index.html", footer, (err) => {
        if (err) throw err;
                console.log("html ended");
    })
}

menu();