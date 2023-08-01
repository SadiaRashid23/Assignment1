"use strict";
/* Ex:23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = __importStar(require("prompt-sync"));
const prompt = promptSync();
console.log("Is Car subaru? I predict true");
let car = prompt("Enter your car name=");
if (car === "subaru") {
    console.log("car== 'subaru'");
}
//test 2
let age = parseInt(prompt("enter your age"));
if (age < 17) {
    console.log("You are a minor");
}
else
    console.log("You are eligible for the interview");
//test 3
let marks = 70;
if (marks > 50) {
    console.log("You have passed the test with marks greater than 50");
}
//test 4
let city = "Lahore";
if (city == "Lahore") {
    console.log("Your city is Lahore");
}
// Test 5
let book = "The Alchemist";
if (book === "The Alchemist") {
    console.log("The writer is Paulo Coelho");
}
//Test 6 that evaluates false
let stu_grade = "B";
if (stu_grade == "A" || stu_grade == "a") {
    console.log("You are awarded with scholarship");
}
//Test 7 
let luckynum = 2;
if (luckynum == 7) {
    console.log("Your lucky number is 7");
}
//Test 8
let response = "N";
if (response == "Y") {
    console.log("You have earned a membership card");
}
//Test 9
let num1 = 12;
if (num1 < 0) {
    console.log("The number is negative");
}
// Test 10
let hour = 13;
if (hour < 12) {
    console.log("Its a.m.");
}
