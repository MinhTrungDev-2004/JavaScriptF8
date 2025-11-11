const tasks = [
    // {
    //     title: "Rửa bát",
    //     completed: true,
    // }, 
    // {
    //     title: "Quét nhà",
    //     completed: false,
    // },
    // {
    //     title: "Nấu cơm",
    //     completed: true,
    // }

];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.onsubmit = (e) => {
    e.preventDefault();
    const value = todoInput.value.trim();
    if(!value) {
        alert('Nhập giá tri mới vào ô input')
        return; // Thoát hàm không cho chạy xuống
    }

    const newTask = {
        title: value,
        completed: false,
    };

    tasks.push(newTask);
    renderTasks();
    todoInput.value = ""; // xử lý xóa giá trị tại ô input sau khi đã thêm cv
}

function renderTasks() {
    const html = tasks.map(task => `
        <li class="task-item ${task.completed ? "completed" : ""}">
            <span class="task-title">${task.title}</span>
            <div class="task-action">
                <button class="task-btn edit">Edit</button>
                <button class="task-btn done">${task.completed ? "Mark as undone" : "Mark as done"}</button>
                <button class="task-btn delete">Delete</button>
            </div>
        </li>
    `).join("");
    taskList.innerHTML = html;
}

renderTasks();
