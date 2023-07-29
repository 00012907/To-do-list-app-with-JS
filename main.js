let addBtn = document.querySelector(".add");
let editBtns = document.querySelectorAll(".edit");
let deleteBtns = document.querySelectorAll(".delete");
let completedBtns = document.querySelectorAll(".completed");

let itemList = document.querySelectorAll("li");
let addInput = document.querySelector("input");
let list = document.querySelector(".list");

function addTask() {
  const taskText = addInput.value.trim();
  if (taskText !== "") {
    let newItem = document.createElement("li");
    newItem.innerHTML = `
    <span>${addInput.value.trim()}</span>
    <div class="btns">
      <button class="edit">Edit</button>
      <button class="completed">Completed</button>
      <button class="delete">Delete</button>
    </div>`;
    list.appendChild(newItem);
    addInput.value = "";

    let editBtns = document.querySelectorAll(".edit");
    let deleteBtns = document.querySelectorAll(".delete");
    let completedBtns = document.querySelectorAll(".completed");

    editBtns.forEach((btn) => {
      btn.addEventListener("click", editTask);
    });

    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", deleteTask);
    });
    completedBtns.forEach((btn) => {
      btn.addEventListener("click", completeTask);
    });
  }
}

completedBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const listItem = btn.closest("li");
    const span = listItem.querySelector("span");

    span.style.textDecoration = " 2px red line-through";
  });
});

function deleteTask() {
  const taskItem = this.parentNode.parentNode;
  const yesOrNo = confirm("Are you sure to delete the task?");
  if (yesOrNo !== false) {
    list.removeChild(taskItem);
  }
}

function completeTask() {
  const taskText = this.parentNode.previousElementSibling;
  taskText.style.textDecoration = "2px red line-through";
}

function editTask() {
  const taskText = this.parentNode.previousElementSibling;
  const newText = prompt(
    "Change the task or enter a new one: ",
    taskText.textContent
  );
  if (newText !== null) {
    taskText.textContent = newText.trim();
  }
}

addBtn.addEventListener("click", addTask);
editBtns.forEach((btn) => {
  btn.addEventListener("click", editTask);
});

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", deleteTask);
});

completedBtns.forEach((btn) => {
  btn.addEventListener("click", completeTask);
});
