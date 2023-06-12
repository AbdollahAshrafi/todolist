let counter = 0
const task = document.querySelector("#task");
const taskList = document.querySelector("#taskList");

function addTask() {

    const listItemParent = document.createElement("div");
    const listItem = document.createElement("li");
    const taskTextElement = document.createElement('div');
    const btnParent = document.createElement("div")
    const deleteBtn = document.createElement("button");
    const doneCheck = document.createElement("input");

    // every list item's parent
    listItemParent.classList.add("ms-1", "mb-2");
    counter++;
    listItemParent.setAttribute("id", counter);
    taskList.append(listItemParent);




    // the list item (the task)
    listItem.classList.add("list-group-item", "container-fluid", "rounded", "shadow-sm", "d-inline-flex");
    listItemParent.append(listItem);

    // the done checkbox
    doneCheck.setAttribute('type', 'checkbox');
    doneCheck.classList.add("form-check-input", "me-3", "doneBtn")
    listItem.append(doneCheck)

    // the task text
    taskTextElement.innerHTML = task.value;
    taskTextElement.classList.add('taskText')
    listItem.append(taskTextElement)

    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("btn", "btn-outline-danger", "btn-sm", "col-auto", "deleteBtn");
    btnParent.append(deleteBtn);

    task.value = "";
    document.querySelector("#submit").disabled = true;
}

// submitting using the Enter key
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    })
})

// code to disable submit button when new task is addded
document.addEventListener("DOMContentLoaded", () => {
    task.addEventListener("keydown", () => {
        document.querySelector("#submit").disabled = false;
    })
})


// code not to submit when the input feild is made empty
document.addEventListener("keydown", () => {
    if (task.value === "") {
        document.querySelector("#submit").disabled = true;
    }
})

// making the delete button work 
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        e.target.parentNode.parentNode.remove();
    }
});

//making the done button work


taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('doneBtn')) {
        let taskText = e.target.parentNode.querySelector(".taskText")
        taskText.classList.add("text-decoration-line-through");
        let listItemParent = e.target.parentNode.parentNode
        listItemParent.remove();
        document.getElementById('taskList').append(listItemParent);
        e.target.disabled = true // this line should be change when adding to undo task feature
    }
});
