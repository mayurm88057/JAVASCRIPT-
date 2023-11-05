//get the htlm elements
const taskform=document.getElementById('taskform');
const taskInput=document.getElementById('taskInput');
const tasklist=document.getElementById('tasklist');

// create a task counter 
let taskId=1;

// function to add a new task

function addTask(event){
    event.preventDefault()
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        const taskItem=document.createElement('li');

        taskItem.innerHTML=`
        <span>${taskText}</span>
        <button class='delete-btn'>Delete</button>
        `;

        tasklist.append(taskItem);

        taskInput.value="";
        taskId++;

        // add a event to the delete button 

        const deletebtn=taskItem.querySelector('.delete-btn');
        deletebtn.addEventListener('click',deleteTask)


    
    }


}
function deleteTask(event)
{
    //alert('clicked')
    const  taskItem = event.target.parentElement
    console.log(taskItem) 
    tasklist.removeChild(taskItem);
}


//add event listeners to the form

taskform.addEventListener('submit',addTask)