
import inquirer from "inquirer"
let todo=[];
let condition=[];
while(condition)
{
let adtask = await inquirer.prompt(
    [
    {
        name:"todo",
        type:"input",
        message:"What you want to add your todo?"
    },
    {
        name:`addmore`,
        type: `confirm`,
        message:"DO you want to add more todos?",
        default:"false"
    }
    ]
);
todo.push(adtask.todo);
condition = adtask.addmore
console.log(todo);
}