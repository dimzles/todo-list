import ToDo from "./createToDo";

const testTodo = new ToDo("test", "desc-test", "high", "20/1/23");
const testTodo2 = new ToDo("test2", "desc-test2", "high", "20/1/23");
const testTodo3 = new ToDo("test3", "desc-test3", "high", "20/1/23");
const test = new ToDo("this is");
const test2 = new ToDo("a new");
const test3 = new ToDo("project");

const allProjects = [
  { projectName: "Home", projects: [testTodo, testTodo2, testTodo3] },
  { projectName: "Second Project", projects: [test, test2, test3] },
];

const addToDos = () => {
  const todoContainer = document.getElementById("todo-container");

  for (let i = 0; i < allProjects.length; i++) {
    for (let j = 0; j < allProjects[i].projects.length; j++) {
      const todoCard = document.createElement("div");
      todoCard.classList.add("todo-card");
      todoCard.setAttribute("data-card", j);

      todoCard.textContent = allProjects[i].projects[j].getInfo();

      todoContainer.appendChild(todoCard);
    }
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
  return allProjects.defaultProject.push(newTodo);
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
  allProjects.defaultProject.splice(index, 1);

  return allProjects;
};

export { addToDos, handleFormValues, resetFormValues, deleteToDo, allProjects };
