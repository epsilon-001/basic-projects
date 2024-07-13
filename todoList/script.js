const addButton = document.querySelector("#addBtn");
const inputBox = document.querySelector("#inputBox");
const todoList = document.querySelector(".todoList");

let editTodo = null;
let todos = null;
let index = null;

function addTodo() {
  const inputText = inputBox.value.trim();

  if (inputText.length == "") {
    alert("Invalid Input");
    return false;
  }
  if (addButton.innerHTML == "Edit") {
    editTodo.innerHTML = inputText;
    inputBox.value = "";
    addButton.innerHTML = "Add";
    todos[index] = inputText;
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let editButton = document.createElement("button");
    let removeButton = document.createElement("button");

    p.className = "todoText";
    editButton.className = "editBtn";
    removeButton.className = "removeBtn";

    let textNode = document.createTextNode(inputText);
    p.appendChild(textNode);

    editButton.innerText = "Edit";
    removeButton.innerText = "Remove";

    li.appendChild(p);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    todoList.appendChild(li);

    inputBox.value = "";
    saveTodo(inputText);
  }
}

function updateTodo(e) {
  if (e.target.innerHTML == "Remove") {
    let li = e.target.parentElement;
    li.remove();
    todos.splice(todos.indexOf(li.firstChild.innerHTML), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  if (e.target.innerHTML == "Edit") {
    addButton.innerHTML = "Edit";
    editTodo = e.target.previousElementSibling;
    inputBox.value = editTodo.innerHTML;
    index = todos.indexOf(editTodo.innerHTML);
  }
}

function saveTodo(todo) {
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodo() {
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let editButton = document.createElement("button");
    let removeButton = document.createElement("button");

    p.className = "todoText";
    editButton.className = "editBtn";
    removeButton.className = "removeBtn";

    let textNode = document.createTextNode(todo);
    p.appendChild(textNode);

    editButton.innerText = "Edit";
    removeButton.innerText = "Remove";

    li.appendChild(p);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    todoList.appendChild(li);

    inputBox.value = "";
  });
}

todoList.addEventListener("click", updateTodo);
addButton.addEventListener("click", addTodo);
document.addEventListener("DOMContentLoaded", getTodo);
