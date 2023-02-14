import ToDo from "./createToDo";
import { createSidebarButton } from "./displayController";

const testTodo = new ToDo("test", "desc-test", "high", "20/1/23");
const testTodo2 = new ToDo("test2", "desc-test2", "med", "20/1/23");
const testTodo3 = new ToDo("test3", "desc-test3", "low", "20/1/23");
const test = new ToDo("this is");
const test2 = new ToDo("a new");
const test3 = new ToDo("project");

class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projects = [];
  }
}

const allProjects = [
  { projectName: "Home", projects: [testTodo, testTodo2, testTodo3] },
  { projectName: "Second Project", projects: [test, test2, test3] },
];

const createProject = (name) => {
  const newProject = new Project(name);

  allProjects.push(newProject);
  const index = allProjects.length - 1;
  console.log(allProjects);

  createSidebarButton(name, index);
};

const checkCurrentProject = () => {
  const projectBtns = document.querySelectorAll(".project-btn");
  let index = 0;

  projectBtns.forEach((btn) => {
    if (btn.classList.contains("current"))
      index = Number(btn.attributes[1].value);
  });

  return index;
};

const addToDos = () => {
  const todoContainer = document.getElementById("todo-container");

  for (let i = 0; i < allProjects[checkCurrentProject()].projects.length; i++) {
    const todoCard = document.createElement("div");
    const todoTitle = document.createElement("div");
    const todoDesc = document.createElement("div");
    const todoPriority = document.createElement("div");
    const todoDate = document.createElement("div");
    const todoDelete = document.createElement("button");

    todoCard.classList.add("todo-card");
    todoCard.setAttribute("data-card", i);
    todoDelete.setAttribute("id", "delete-btn");

    todoTitle.classList.add("todo-title");
    todoDesc.classList.add("todo-desc");
    todoPriority.classList.add("todo-priority");
    todoDate.classList.add("todo-date");

    todoTitle.textContent = allProjects[checkCurrentProject()].projects[i].task;
    todoDesc.textContent =
      allProjects[checkCurrentProject()].projects[i].description;
    todoPriority.textContent =
      allProjects[checkCurrentProject()].projects[i].priority;
    todoDate.textContent =
      allProjects[checkCurrentProject()].projects[i].dueDate;
    todoDelete.textContent = "Incomplete";

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDesc);
    todoCard.appendChild(todoPriority);
    todoCard.appendChild(todoDate);
    todoCard.appendChild(todoDelete);

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

const handleTodoFormValues = () => {
  const task = document.getElementById("task").value;
  const description = document.getElementById("description").value;
  const priorities = handleTodoPriority();
  const dueDate = document.getElementById("due-date").value;

  const newTodo = new ToDo(task, description, priorities, dueDate);
  allProjects[checkCurrentProject()].projects.push(newTodo);
};

const resetTodoFormValues = () => {
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
  allProjects[checkCurrentProject()].projects.splice(index, 1);

  return allProjects;
};

const handleNewProjectForm = () => {
  const projectName = document.getElementById("project-name");

  createProject(projectName.value);
  console.log(`project created ${projectName.value}`);
};

const resetNewProjectForm = () => {
  const input = document.getElementById("project-name");

  input.value = "";
  console.log("form cleared");
};

export {
  addToDos,
  handleTodoFormValues,
  resetTodoFormValues,
  handleNewProjectForm,
  resetNewProjectForm,
  deleteToDo,
  allProjects,
};
