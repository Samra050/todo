///ARRAYS
// let fruitchaat =[`banana`,`apple`,`orange`]
// //push
// fruitchaat.pop()
// console.log(fruitchaat);
// fruitchaat.concat([`melon`,`kiwi`])
//lOOPS
// let ramasanDays = 0;
// while(ramasanDays<= 10){
//     console.log ("ramadanfasting");
//     ramasanDays++;
//}
// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }
import inquirer from "inquirer";
let todo = [];
let condition = [];
while (condition) {
    let adtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add your todo?"
        },
        {
            name: `addmore`,
            type: `confirm`,
            message: "DO you want to add more todos?",
            default: "false"
        }
    ]);
    todo.push(adtask.todo);
    condition = adtask.addmore;
    console.log(todo);
}
