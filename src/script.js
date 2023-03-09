// return the first element matching
var inputText = document.querySelector(".inputField");
var inputButton = document.querySelector(".inputButton");
var clearText = document.querySelector(".clearTextButton");
var toDoList = document.querySelector(".todo-list");

inputButton.addEventListener('click', addTask);
toDoList.addEventListener('click', checkOrDelete);

clearText.addEventListener('click', function clickButton(event) {
    // prevent default changes
    event.preventDefault();
    inputText.value = '';
});

function addTask(event) {
    event.preventDefault();
    if (inputText.value != '') {
        //create li element to contain task and two icons
        const todoli = document.createElement("li");
        todoli.classList.add("todo");

        //create div 
        const tododiv = document.createElement("div");
        tododiv.classList.add("todo-item");

        //add input value to div
        tododiv.innerText = inputText.value;

        // create button complete
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.title = "task is done";
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';

        //create trash buttton
        const trashBtn = document.createElement("button");
        trashBtn.classList.add("trash-btn");
        trashBtn.title = "Remove task";
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

        //add div + button 1 + button 2 -> li
        todoli.appendChild(tododiv);
        todoli.appendChild(completeBtn);
        todoli.appendChild(trashBtn);

        //add li to ul
        toDoList.appendChild(todoli);
        window.alert("Task Added !")
        // remove input value
        inputText.value = '';
    }
    else {
        window.alert("Please add the task first");
    }

}

function checkOrDelete(event) {
    // event.target-->  is a reference to the object which the event was done
    const item = event.target;

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }
}