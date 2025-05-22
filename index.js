const title = document.getElementById('title');
const form = document.getElementById('form');
const list = document.getElementById('list');
const input = document.getElementById('input');
//create a task element
console.log(list.firstChild);
console.log(input.parentNode);

//function to create a task
function createTask(text){
const task = doxument.createElement('li');
task.textContext = text;
list.appendChild(task);


//clone to reuse the task
const clone = task.clonenode(true);
clone.textContent = text + " (Copy)";
list.appendChild(clone);

//first event-listener to modify the text content
task.addEventListener('click', () => {
    task.textContent = "Done: " + task.textContent;
    task.classList.toggle('Done');
});
task.style.cursor = 'pointer';
task.setAttribute('title','click to mark as done');
return task;
}

//second fot form
form.addEventListener('submit',(e) => {
    e.preventDefault();
    if(input.value.trim() !== ''){
        createTask(input.value);
        input.value = " ";

    }else{
        alert('Please enter a valid task!');
    }
});

alert('Welcome to the To-Do App!');

//form validatiopn with DOM

input.addEventListener('inputs', () => {
    if (input.value.length < 3) {
        input.setCustomValidity('Task must be atleast 3 characters long.');
    }
    else{
        input.setCustomValidity('');
    }
    
});

//update title on click
const updateBtn = document.querySelector('#updateTitle');
updateBtn.addEventListener('click', () => {
    title.textContent = "Updated To-Do List";
});
