const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const generateHtml = require("./output/generateHtml");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Manager Prompts
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
    ]);
    
};

promptManager()
.then(function(manager) {
console.log("prompt manager done")
    const managerName = manager.name;
    const managerId = manager.id;
    const managerEmail = manager.email;
    const managerOfficeNumber = manager.officeNumber;
    const managerObj = {
        name: managerName, 
        id: managerId, 
        email: managerEmail, 
        officeNumber: managerOfficeNumber,
    }
    const html = generateHtml(managerObj)
    fs.writeFileSync("index.html", html)
    console.log(html) 

////////////CANNOT FIGURE OUT HOW TO GET THESE PROMPTS TO PROMPT////////////////
// promptIntern = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "Now enter the name of your intern."
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Enter their ID."
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Enter their email."
//         },
//         {
//             type: "input",
//             name: "school",
//             message: "Enter the school they attended."
//         }
//     ])
// };

//Intern Prompts


// // //Employee Prompts
// // promptEmployee = () => {
// //         return inquirer.prompt([
// //             {
// //                 type: "input",
// //                 name: "name",
// //                 message: "Enter the name of your employee."
// //             },
// //             {
// //                 type: "input",
// //                 name: "id",
// //                 message: "Enter their ID."
// //             },
// //             {
// //                 type: "input",
// //                 name: "email",
// //                 message: "Enter their email."
// //             }
// //         ]);
// //     };
 
// //     //Engineer Prompts
// //     promptEngineer = () => {
// //         return inquirer.prompt([
// //             {
// //                 type: "input",
// //                 name: "name",
// //                 message: "Enter the name of your engineer."
// //             },
// //             {
// //                 type: "input",
// //                 name: "id",
// //                 message: "Enter their ID."
// //             },
// //             {
// //                 type: "input",
// //                 name: "email",
// //                 message: "Enter their email."
// //             },
// //             {
// //                 type: "input",
// //                 name: "github",
//                 message: "Enter their GitHub username."
//             }
//         ])
//     };

    


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

console.log(managerObj)
//use generate HTML here

//
})