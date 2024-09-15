//This is my Calendar List Project.

const List = new Array();
let output = "";

function createTask()
{
    let name = document.getElementById("name").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let notes = document.getElementById("notes").value;

    addTask(name, dueDate, priority, notes);

    document.getElementById("name").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("notes").value = "";
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
            this.taskStatus = "Completed";
        }

    };
    List.push(task);
}

function printTask()
        {
            for (let i=0, len = List.length; i < len;)
            {
                output = output + "<br><br>" + List[i].taskName + "<br>" + List[i].taskDueDate + "<br>" + List[i].taskPriority + "<br>" + List[i].taskNotes + "<br>" + List[i].taskStatus;
                i++; 
            }
            document.getElementById("Task-List").innerHTML = output;
            
        }






//document.getElementById("createTask").addEventListener("click", addTask);
//document.getElementById("printTask").addEventListener("click", printAll);


