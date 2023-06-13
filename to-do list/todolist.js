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
    listItemParent.classList.add("ms-1", "mb-1");
    counter++;
    listItemParent.setAttribute("id", counter);
    taskList.append(listItemParent);

    // the list item (the task)
    listItem.classList.add("list-group-item", "container-fluid", "rounded", "shadow-sm", "d-inline-flex", "align-items-center");
    listItemParent.append(listItem);

    // the done checkbox
    doneCheck.setAttribute('type', 'checkbox');
    doneCheck.classList.add("form-check-input", "me-3", "mt-0", "doneBtn")
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
    document.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            document.querySelector("#submit").click()
        }
    })
})


// code not to submit when the input feild is emptied
document.addEventListener("keyup", () => {
    if (task.value === "") {
        document.querySelector("#submit").disabled = true;
    }
})


// code to disable submit button when new task is addded
document.addEventListener("DOMContentLoaded", () => {
    task.addEventListener("keydown", () => {
        document.querySelector("#submit").disabled = false;
    })
})




// making the delete button work 
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        e.target.parentNode.parentNode.remove();
    }
});


taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('doneBtn')) {
        let taskText = e.target.parentNode.querySelector(".taskText");
        let listItemParent = e.target.parentNode.parentNode;

        if (e.target.checked === true) {
            let taskText = e.target.parentNode.querySelector(".taskText")
            taskText.classList.add("text-decoration-line-through");
            listItemParent.remove();
            document.getElementById('taskList').append(listItemParent);
            console.log("the button is checked")
        }

        if (e.target.checked === false) {
            console.log("the button is unchecked")
            taskText.classList.remove('text-decoration-line-through')
        }
    }
});
