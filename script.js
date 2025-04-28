function addTask() {
    // Get the task from the input field
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    // If task is not empty
    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add the task to the list
        document.getElementById('task-list').appendChild(li);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
