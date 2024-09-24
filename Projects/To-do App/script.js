/*Code made by deadshot339. Copying the code and sharing the code as your own is not allowed!*/
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById("taskInput");
    const handleAddTask = document.getElementById("handleAddTask");
    const taskList = document.getElementById("taskList");
    const clearBtn = document.getElementById("clearTasks");

    clearBtn.addEventListener('click', function() {
        localStorage.removeItem('tasks')
        taskList.innerHTML = '';
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Wpisz nazwe taska!");
            return;
        }
        const taskTextSpan = document.createElement('span')
        const newTask = document.createElement('div')
        newTask.className = 'task'
        taskTextSpan.textContent = taskText;

        taskTextSpan.onclick = function () {
            if (taskTextSpan.style.textDecoration === 'line-through') {
                taskTextSpan.style.textDecoration = 'none';
            } else {
                taskTextSpan.style.textDecoration = 'line-through';
            }
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.id = 'delete';
        deleteBtn.onclick = function () {
            taskList.removeChild(newTask);
            saveTasks();
        }

        newTask.appendChild(taskTextSpan);
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        taskInput.value = '';
    
        saveTasks();
    }
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('span').forEach(task => {
            const taskText = task.firstChild.textContent;
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(taskText => {
            if (taskText.trim() !== "") {
                const taskTextSpan = document.createElement('span')
            const newTask = document.createElement('div')
            newTask.className = 'task'
            taskTextSpan.textContent = taskText;

            taskTextSpan.onclick = function () {
                if (taskTextSpan.style.textDecoration === 'line-through') {
                    taskTextSpan.style.textDecoration = 'none';
                } else {
                    taskTextSpan.style.textDecoration = 'line-through';
                }
            }

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'X';
                deleteBtn.id = 'delete';
                deleteBtn.onclick = function () {
                    taskList.removeChild(newTask);
                    saveTasks();
                };

                newTask.appendChild(taskTextSpan);
                newTask.appendChild(deleteBtn);
                taskList.appendChild(newTask);
            }
        });
    }

    handleAddTask.addEventListener('click', addTask);

    loadTasks();
});