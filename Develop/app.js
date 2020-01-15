const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const generateHtml = require("./output/generateHtml");


//Employee Prompts
    // promptEmployee = () => {
    //     return inquirer.prompt([
    //         {
    //             type: "input",
    //             name: "name",
    //             message: "Enter your name."
    //         },
    //         {
    //             type: "input",
    //             name: "id",
    //             message: "Enter your ID."
    //         },
    //         {
    //             type: "input",
    //             name: "email",
    //             message: "Enter your email."
    //         }
    //     ]);
    // };

    // //Engineer Prompts
    // promptEngineer = () => {
    //     return inquirer.prompt([
    //         {
    //             type: "input",
    //             name: "name",
    //             message: "Enter your name."
    //         },
    //         {
    //             type: "input",
    //             name: "id",
    //             message: "Enter your ID."
    //         },
    //         {
    //             type: "input",
    //             name: "email",
    //             message: "Enter your email."
    //         },
    //         {
    //             type: "input",
    //             name: "github",
    //             message: "Enter your GitHub username."
    //         }
    //     ])
    // };

    // //Intern Prompts
    // promptIntern = () => {
    //     return inquirer.prompt([
    //         {
    //             type: "input",
    //             name: "name",
    //             message: "Enter your name."
    //         },
    //         {
    //             type: "input",
    //             name: "id",
    //             message: "Enter your ID."
    //         },
    //         {
    //             type: "input",
    //             name: "email",
    //             message: "Enter your email."
    //         },
    //         {
    //             type: "input",
    //             name: "school",
    //             message: "Enter your school."
    //         }
    //     ])
    // };

    //Manager Prompts
    promptManager = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter your name."
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
            }
        ]);
    };

// promptEmployee()
// .then(function(employee) {
// console.log("prompt employee done")
//     const employeeName = employee.name;
//     const employeeId = employee.id;
//     const employeeEmail = employee.email;
//     const employeeObj = {
//         name: employeeName, 
//         id: employeeId, 
//         email: employeeEmail
//     }
// console.log(employeeObj)
// //generate HTML here
// var html = generateHtml(employeeObj)
// console.log(html)
// //
// writeFileAsync
// })

// promptEngineer()
// .then(function(engineer) {
// console.log("prompt engineer done")
//     const engineerName = engineer.name;
//     const engineerId = engineer.id;
//     const engineerEmail = engineer.email;
//     const engineerGithub = engineer.github;
//     const engineerObj = {
//         name: engineerName, 
//         id: engineerId, 
//         email: engineerEmail,
//         github = engineerGithub
//     }
// console.log(engineerObj)
// //generate HTML here
// var html = generateHtml(engineerObj)
// console.log(html)
// //
// writeFileAsync
// })

// promptIntern()
// .then(function(intern) {
// console.log("prompt intern done")
//     const internName = intern.name;
//     const ˆnternId = intern.id;
//     const internEmail = intern.email;
//     const internSchool = intern.school;
//     const internObj = {
//         name: internName, 
//         id: internId, 
//         email: internEmail,
//         school: internSchool
//     }
// console.log(engineerObj)
// //generate HTML here
// var html = generateHtml(engineerObj)
// console.log(html)
// //
// writeFileAsync
// })

promptManager()
.then(function(manager) {
console.log("prompt manager done")
    const managerName = manager.name;
    const managerId = manager.id;
    const managerEmail = manager.email;
    const managerOfficeNumber = manager.officeNumber;
    //add employeeObj
    const managerObj = {
        name: managerName, 
        id: managerId, 
        email: managerEmail, 
        //add employee key
        officeNumber: managerOfficeNumber
    }
console.log(managerObj)
//use generate HTML here
var html = generateHtml(managerObj)
console.log(html)
//
writeFileAsync
})

