// Get elements
const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

// Add task to pending list
function addTask() {
  const task = taskInput.value;
  if (task !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const completeBtn = document.createElement("button");
    const date = new Date().toLocaleString();

    span.textContent = task + " added on " + date;
    deleteBtn.textContent = "Delete";
    completeBtn.textContent = "Complete";

    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
      li.removeChild(completeBtn);
      completedList.appendChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    pendingList.appendChild(li);

    taskInput.value = "";
  }
}
