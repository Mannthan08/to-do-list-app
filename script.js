const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${task}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;
  taskList.appendChild(li);
  saveData();
  taskInput.value = "";
}

function toggleComplete(el) {
  el.parentElement.classList.toggle("completed");
  saveData();
}

function deleteTask(el) {
  el.parentElement.remove();
  saveData();
}

function saveData() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadData() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadData();
