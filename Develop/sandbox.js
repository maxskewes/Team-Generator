const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFileSync);
const generateHtml = require("./output/generateHtml");

var something = fs.readFileSync('output/index.html', 'utf8');
console.log(something);

var another = 