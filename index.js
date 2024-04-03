#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let loop = true;
let msg = chalk.green("\t------------------------------------------\n\t  Welcome to Shayan's Currency Converter\n\t------------------------------------------");
console.log(msg);
//! Start the currency converter
while (loop) {
    let userInput = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            message: chalk.yellow("Which currency do you want to convert?"),
            choices: [
                "US Dollar",
                "Euro",
                "British Pound",
                "Pakistani Rupee",
                "Chinese Yuan",
            ],
        },
        {
            type: "number",
            name: "amountInput",
            message: chalk.yellow("How much do you want to convert?"),
        },
        {
            type: "list",
            name: "currencyOutput",
            message: chalk.yellow("What currency do you want to convert to?"),
            choices: [
                "US Dollar",
                "Euro",
                "British Pound",
                "Pakistani Rupee",
                "Chinese Yuan",
            ],
        },
    ]);
    //! Declaring variables
    const input = userInput.currencyInput;
    const amount = userInput.amountInput;
    const output = userInput.currencyOutput;
    let leave = userInput.quit;
    let result;
    //! IF Else Loops
    if (input == "Pakistani Rupee") {
        if (output == "US Dollar") {
            result = amount / 278;
            console.log(chalk.green("\n" + amount + " Pakistani Rupee = " + result + " US Dollar" + "\n"));
        }
        else if (output == "British Pound") {
            result = amount / 349;
            console.log(chalk.green("\n" +
                amount +
                " Pakistani Rupee = " +
                result +
                " British Pound" +
                "\n"));
        }
        else if (output == "Chinese Yen") {
            result = Math.round(amount / 1.83);
            console.log(chalk.green("\n" +
                amount +
                " Pakistani Rupee = " +
                result +
                " Chinese Yuan" +
                "\n"));
        }
        else if (output == "Euro") {
            result = amount / 299;
            console.log(chalk.green("\n" + amount + " Pakistani Rupee = " + result + " Euro" + "\n"));
        }
        else {
            console.log(`\tIt's just ${amount} Rupees.`);
        }
    }
    //! Euro Coversion
    if (input == "Euro") {
        if (output == "US Dollar") {
            result = amount * 1.07;
            console.log(chalk.green("\n" + amount + " Euro = " + result + " US Dollar" + "\n"));
        }
        else if (output == "British Pound") {
            result = amount / 1.2;
            console.log(chalk.green("\n" + amount + " Euro = " + result + " British Pound" + "\n"));
        }
        else if (output == "Chinese Yuan") {
            result = Math.round(amount * 7.7);
            console.log(chalk.green("\n" + amount + " Euro = " + result + " Chinese Yuan" + "\n"));
        }
        else if (output == "Pakistani Rupee") {
            result = amount * 298.53;
            console.log(chalk.green("\n" + amount + " Euro = " + result + " Pakistani Rupee" + "\n"));
        }
        else {
            console.log(`\tIt's just ${amount} Euros.`);
        }
    }
    //! British Pound Coversion
    if (input == "British Pound") {
        if (output == "US Dollar") {
            result = amount * 1.27; // Assuming 1 British Pound equals 1.27 US Dollar
            console.log(chalk.green("\n" + amount + " British Pound = " + result + " US Dollar" + "\n"));
        }
        else if (output == "Euro") {
            result = amount / 0.84; // Convert British Pound to Euro
            console.log(chalk.green("\n" + amount + " British Pound = " + result + " Euro" + "\n"));
        }
        else if (output == "Chinese Yuan") {
            result = Math.round(amount * 9.2); // Assuming 1 British Pound equals 9.2 Chinese Yuan
            console.log(chalk.green("\n" + amount + " British Pound = " + result + " Chinese Yuan" + "\n"));
        }
        else if (output == "Pakistani Rupee") {
            result = amount * 420.91; // Assuming 1 British Pound equals 420.91 Pakistani Rupee
            console.log(chalk.green("\n" +
                amount +
                " British Pound = " +
                result +
                " Pakistani Rupee" +
                "\n"));
        }
        else {
            console.log(`\tIt's just ${amount} Pounds.`);
        }
    }
    //! Chinese Yuan
    if (input == "Chinese Yuan") {
        if (output == "US Dollar") {
            result = amount * 0.15; // Assuming 1 Chinese Yuan equals 0.15 US Dollar
            console.log(chalk.green("\n" + amount + " Chinese Yuan = " + result + " US Dollar" + "\n"));
        }
        else if (output == "Euro") {
            result = amount / 7.7; // Convert Chinese Yuan to Euro
            console.log(chalk.green("\n" + amount + " Chinese Yuan = " + result + " Euro" + "\n"));
        }
        else if (output == "British Pound") {
            result = amount / 9.2; // Assuming 1 Chinese Yuan equals 9.2 British Pound
            console.log(chalk.green("\n" + amount + " Chinese Yuan = " + result + " British Pound" + "\n"));
        }
        else if (output == "Pakistani Rupee") {
            result = amount * 42.1; // Assuming 1 Chinese Yuan equals 42.1 Pakistani Rupee
            console.log(chalk.green("\n" +
                amount +
                " Chinese Yuan = " +
                result +
                " Pakistani Rupee" +
                "\n"));
        }
        else {
            console.log(`\tIt's just ${amount} Yuan.`);
        }
    }
    //! US Dollar
    if (input == "US Dollar") {
        if (output == "Chinese Yuan") {
            result = amount / 0.15; // Assuming 1 US Dollar equals 6.67 Chinese Yuan
            console.log(chalk.green("\n" + amount + " US Dollar = " + result + " Chinese Yuan" + "\n"));
        }
        else if (output == "Euro") {
            result = amount / 1.07; // Convert US Dollar to Euro
            console.log(chalk.green("\n" + amount + " US Dollar = " + result + " Euro" + "\n"));
        }
        else if (output == "British Pound") {
            result = amount / 1.27; // Assuming 1 US Dollar equals 0.79 British Pound
            console.log(chalk.green("\n" + amount + " US Dollar = " + result + " British Pound" + "\n"));
        }
        else if (output == "Pakistani Rupee") {
            result = amount * 154.39; // Assuming 1 US Dollar equals 154.39 Pakistani Rupee
            console.log(chalk.green("\n" + amount + " US Dollar = " + result + " Pakistani Rupee" + "\n"));
        }
        else {
            console.log(`\tIt's just ${amount} Dollars.`);
        }
    }
    //Quit Function
    let quit = await inquirer.prompt([
        {
            type: "confirm",
            name: "quit",
            message: "Would you like to continue ?",
            default: false,
        },
    ]);
    if (quit.quit == false) {
        // console.log(chalk.red("Thank you for using Shayan's Currency Converter!"));
        loop = false;
        let quitMsg = "\n------------Thanks for Using our Currency Converter-------------";
        const rainbowAnimateQ = chalkAnimation.radar(quitMsg);
        setTimeout(() => {
            rainbowAnimateQ.stop();
            console.clear();
        }, 4700);
        // Stop animation after 4.7 seconds
        loop = false;
    }
    else {
        loop = true;
    }
}
