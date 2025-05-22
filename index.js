const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const title = document.getElementById('title');
const updateBtn = document.querySelector('#updateTitle');
const resetBtn = document.getElementById('resetTasks');

console.log(todoList.firstChild);
console.log(todoInput.parentNode);

//function to create a task
function createTask(taskText){
const taskItem = document.createElement('li');
taskItem.textContext = taskText;
todoList.appendChild(taskItem);


//clone to reuse the task
const clone = taskItem.cloneNode(true);
clone.textContent = taskText + " (Copy)";
todoList.appendChild(clone);

//first event-listener to modify the text content
taskItem.addEventListener('click', () => {
    // taskItem.textContent = "Done: " + taskItem.textContent;
    // taskItem.classList.toggle('Done');
    modifyTask(taskText);
});

clone.addEventListener('click',() =>{
    modifyTask(taskText);
})
taskItem.style.cursor = 'pointer';
taskItem.setAttribute('title','click to mark as done');
return taskItem;
}
function modifyTask(taskText){
    document.querySelectorAll('li').forEach(task => {
        if(task.textContent.includes(taskText)){
            task.textContent = "Done: "+ task.textContent;
            task.classList.toggle('Done');
        }
        
    });
}
//second fot form
function handleSub(event){
event.preventDefault();
const taskText = todoInput.value.trim();
if(taskText){
    createTask(taskText);
    todoInput.value = '';
}else{
    alert('Please enter a valid task');
}
}
todoForm.addEventListener('submit',handleSub);

console.log('Screen Width: ${window.innerWidth}');
alert('Welcome to the To-Do App!');

//form validatiopn with DOM
todoInput.addEventListener('input', () => {
    if (todoInput.value.length < 3) {
        todoInput.setCustomValidity('Task must be atleast 3 characters long.');
    }
    else{
        todoInput.setCustomValidity('');
    }
    
});

//update title on click button

updateBtn.addEventListener('click', () => {
    title.textContent = "Updated To-Do List";
});

//reset button to clear all task
resetBtn.addEventListener('click', () => {
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
    // todoList.innerHtml = '';
});
