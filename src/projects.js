import ToDo from "./createToDo";

const testTodo = new ToDo("test", "desc-test", "high", "20/1/23");
const testTodo2 = new ToDo("test2", "desc-test2", "high", "20/1/23");
const testTodo3 = new ToDo("test3", "desc-test3", "high", "20/1/23");

const defaultProject = [testTodo, testTodo2, testTodo3];

const addToDos = () => {
  const todoContainer = document.getElementById("todo-container");
  for (let i = 0; i < defaultProject.length; i++) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    todoCard.setAttribute("data-card", i);
    todoCard.textContent = defaultProject[i].getInfo();

    todoContainer.appendChild(todoCard);
  }
};

const handleTodoPriority = () => {
  const priorityLow = document.getElementById("priority-low");
  const priorityMed = document.getElementById("priority-med");
  const priorityHigh = document.getElementById("priority-high");
  let value;

  if (priorityLow.checked === true) value = priorityLow.value;
  if (priorityMed.checked === true) value = priorityMed.value;
  if (priorityHigh.checked === true) value = priorityHigh.value;

  return value;
};

const handleFormValues = () => {
  const task = document.getElementById("task").value;
  const description = document.getElementById("description").value;
  const priorities = handleTodoPriority();
  const dueDate = document.getElementById("due-date").value;

  const newTodo = new ToDo(task, description, priorities, dueDate);
  return defaultProject.push(newTodo);
};

const resetFormValues = () => {
  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const priority = document.querySelectorAll(".priority");
  const dueDate = document.getElementById("due-date");

  task.value = "";
  description.value = "";
  dueDate.value = "";

  for (let i = 0; i < priority.length; i++) {
    if (priority[i].checked === true) priority[i].checked = false;
  }
};

const deleteToDo = (index) => {
  defaultProject.splice(index, 1);

  return defaultProject;
};

export { addToDos, handleFormValues, resetFormValues, deleteToDo };
