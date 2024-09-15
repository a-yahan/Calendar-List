//This is my Calendar List Project.


class Tasks
{
    constructor(name,dueDate,priority,notes)
    {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completion = false;
    }
}


const List = new Array();


function addTask()
{
    let taskName = document.getElementById("name");
    let dueDate = document.getElementById("dueDate");
    let prioprity = document.getElementById("priority");
    let notes = document.getElementById("notes");
    List.push(new Task(taskName, dueDate, prioprity, notes));
}


function printAll()
{
    for (let i = 0; len = List.length; i < len)
    {
        document.getElementById("Task-List").innerHTML =
        List[i].name + ", " + List[i].dueDate + ", " + List[i].prioprity + ", " + List[i].notes + ", " + List[i].completion;
    }
}






document.getElementById("createTask").addEventListener("click", addTask);
document.getElementById("printTask").addEventListener("click", printAll);


