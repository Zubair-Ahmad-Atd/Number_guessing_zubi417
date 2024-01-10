'#!/usr/bin/env node';
import inquirer from 'inquirer';
for (let i = 0; i <= 4; i++) {
    let computerNumber = Math.floor(Math.random() * 11);
    // console.log(computerNumber)
    let userNumber = await inquirer.prompt({
        type: "number",
        name: "userNumber",
        message: "Enter the number"
    });
    if (userNumber.userNumber === computerNumber) {
        console.log('Great! You win the Game!');
        break;
    }
    else if ((4 - i) === 0) {
        console.log("Sorry, You lose the Game!");
    }
    else
        console.log(`You have ${4 - i} tries more.`);
}
