#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.underline.bgCyan("\n\t***WellCome to CLI Based ATM***\n"));
let myBalance = 10000; //Dollar
let myPin = 1947;
let repeat:boolean = true;

let pinAnswer = await inquirer.prompt([
    {
    name:"pin",
    message:"Please input your pin code:",
    type: "password"
    }
])
    if (pinAnswer.pin == myPin) {
        console.log("Pin Code accepted");
        let transAns = await inquirer.prompt([
            {
                name:"transoperation",
                message:"please select option",
                type:"list",
                choices:["Current","Saving","Default"]
            }
        ])
        while(repeat == true){
        let operationAns = await inquirer.prompt([
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw","fast cash","fund transfer","balance enquiry"]
            }
            ])        
    if(operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
                {
                    name:"amount",
                    message:"enter your amount to withdraw",
                    type:"number"
                }
            ]);
            if (amountAns.amount > myBalance){
                console.log("You have insufficient balance to withdraw")
            } else {
            myBalance-=parseInt(amountAns.amount);
            console.log(`Take your cash\nYour remaining amount balance is: $${myBalance}`);
            }
    }    
            repeat == true;            
            if (operationAns.operation === "fast cash") {
            let fCashAns = await inquirer.prompt([
                {
                    name:"amount",
                    message:"please select your desired amount",
                    type:"list",
                    choices:[1000,2000,5000,10000,15000]
                }
                ]);
                if (fCashAns.amount > myBalance){
                    console.log("You have insufficient amount balance to withdraw")
                } else {
                myBalance-=parseInt(fCashAns.amount);
                console.log(`Take your cash\nYour remaining amount balance is: $${myBalance}`);
                }
            }
            repeat == true;    
        if(operationAns.operation === "fund transfer") {
                let bankDet = await inquirer.prompt([
                    {
                        name:"bankName",
                        message:"Select Bank Name of Account Holder",
                        type:"list",
                        choices:['HBL', 'BAHL', 'ABL']
                    },                        
                    {
                        name:"acctNum",
                        message:"Enter beneficiary Account Number",
                        type:"number",
                    },
                    {
                        name:"amount",
                        message:"Enter desired amount to transfer",
                        type:"number",
                    },
                ]);
                if (bankDet.amount > myBalance ){
                    console.log("You have insufficient balance to transfer")
                } else {
                    myBalance-=parseInt(bankDet.amount);
                    console.log(`Fund Transfer Successfully\nYour remaining amount balance is: $${myBalance}`);
                    }
        } 
            repeat == true;
            if (operationAns.operation === "balance enquiry") {
                    console.log(`Your current balance is:$${myBalance}`)
            }
                let toRepeat = await inquirer.prompt ([{
                    name:"repeat",
                    message:"Do yo want to make another transaction?",
                    type:"confirm",        
                }])
                if (toRepeat.repeat == true) {
                }
                else{
            repeat = false;
                }
        }
    }
            else {
            console.log ("Incorrect Pin Code\nRun Program and Try Again")      
            }
    