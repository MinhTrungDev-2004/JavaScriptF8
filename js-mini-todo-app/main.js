const tasks = [];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

taskList.onclick = function (e) {
    const taskItem = e.target.closest(".task-item");
    const taskIndex = taskItem.getAttribute("task-index");
    const task = tasks[taskIndex];
    if (e.target.closest(".edit")) {
        const newTitle = prompt("Nhập tiêu đề mới", task.title);
        if(newTitle === null) return;
        task.title = newTitle;
        renderTasks();
    } else if (e.target.closest(".done")) {
        task.completed = !task.completed;
        renderTasks();
    } else if (e.target.closest(".delete")) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
};

todoForm.onsubmit = (e) => {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (!value) {
        alert("Nhập giá tri mới vào ô input");
        return; // Thoát hàm không cho chạy xuống
    }

    const newTask = {
        title: value,
        completed: false,
    };

    tasks.push(newTask);
    renderTasks();
    todoInput.value = ""; // xử lý xóa giá trị tại ô input sau khi đã thêm cv
};

function renderTasks() {
    if(!tasks.length) {
        taskList.innerHTML = '<li class="empty-mesage"> No task avialable </li>';
        return;
    }
    const html = tasks
        .map(
            (task, index) => `
        <li class="task-item ${
            task.completed ? "completed" : ""
        }" task-index=${index}>
            <span class="task-title">${task.title}</span>
            <div class="task-action">
                <button class="task-btn edit">Edit</button>
                <button class="task-btn done">${
                    task.completed ? "Mark as undone" : "Mark as done"
                }</button>
                <button class="task-btn delete">Delete</button>
            </div>
        </li>
    `
        )
        .join("");
    taskList.innerHTML = html;
}

renderTasks();
