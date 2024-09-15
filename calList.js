//This is my Calendar List Project.

const List = new Array();

function createTask()
{
    let name = document.getElementById("name").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let notes = document.getElementById("notes").value;
    addTask(name, dueDate, priority, notes)
}

function addTask(name,dueDate,priority,notes)
{
    const task =
    {
        taskName: name,
        taskDueDate: dueDate,
        taskPriority: priority,
        taskNotes: notes,
        taskStatus: "In-Progress",
    
        Complete()
        {
            this.taskStatus = "Completed"
        }

    };
    List.push(task);
}

function printAll()
{
    for (let i = 0; len = List.length; i < len)
    {
        document.getElementById("Task-List").innerHTML =
        List[i].taskName + ", " + List[i].taskDueDate + ", " + List[i].taskPriority + ", " + List[i].taskNotes + ", " + List[i].taskStatus;
    }
}






//document.getElementById("createTask").addEventListener("click", addTask);
//document.getElementById("printTask").addEventListener("click", printAll);


