#!/usr/bin/env node

let inputArr = process.argv.slice(2);
const { dir } = require("console");
let fs = require("fs");
let path = require("path");
let treeObj = require("./commands/tree.js");
let organizeObj = require("./commands/organize.js");
let helpObj = require("./commands/help.js");

// console.log(inputArr);

let command = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archieves: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dng", "pkg", "deb"],
};
switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please 🙏 input the correct command");
        break;
}