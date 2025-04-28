// Get the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener to the add button
addButton.addEventListener('click', function() {
    // Get the task input value
    const taskText = taskInput.value;

    // Only add a task if the input is not empty
    if (taskText !== '') {
        // Create a new list item (li) element
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.textContent = taskText;

        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        
        // Append the delete button to the task item
        taskItem.appendChild(deleteButton);

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', function() {
            taskItem.remove();  // Remove the task item when the delete button is clicked
        });

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }
});
