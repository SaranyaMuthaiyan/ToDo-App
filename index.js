const title = document.getElementById('title');
const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');


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
    taskItem.textContent = "Done: " + taskItem.textContent;
    taskItem.classList.toggle('Done');
});
taskItem.style.cursor = 'pointer';
taskItem.setAttribute('title','click to mark as done');
return taskItem;
}

//second fot form
todoForm.addEventListener('submit',(e) => {
    e.preventDefault();
    if(todoInput.value.trim() !== ''){
        createTask(todoInput.value);
        todoInput.value = " ";

    }else{
        alert('Please enter a valid task!');
    }
});
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

//update title on click
const updateBtn = document.querySelector('#updateTitle');
updateBtn.addEventListener('click', () => {
    title.textContent = "Updated To-Do List";
});
