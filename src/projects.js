import { formatDistanceToNow } from "date-fns";
import ToDo from "./createToDo";
import { createSidebarButton } from "./displayController";

class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projects = [];
  }
}

const allProjects = [{ projectName: "Home", projects: [] }];

if (localStorage.length === 0)
  localStorage.setItem("All Projects", JSON.stringify(allProjects));

const createProject = (name) => {
  const newProject = new Project(name);

  const projectsList = JSON.parse(localStorage.getItem(localStorage.key(0)));

  projectsList.push(newProject);
  const index = projectsList.length - 1;

  createSidebarButton(name, index);

  localStorage.setItem(localStorage.key(0), JSON.stringify(projectsList));
};

const deleteProject = (index) => {
  const projectsList = JSON.parse(localStorage.getItem(localStorage.key(0)));

  projectsList.splice(index, 1);

  localStorage.setItem(localStorage.key(0), JSON.stringify(projectsList));
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
  const projectsList = JSON.parse(localStorage.getItem(localStorage.key(0)));

  if (projectsList.length === 0) {
    return;
  }

  for (
    let i = 0;
    i < projectsList[checkCurrentProject()].projects.length;
    i++
  ) {
    const todoCard = document.createElement("div");
    const todoTitle = document.createElement("div");
    const todoDesc = document.createElement("div");
    const todoPriority = document.createElement("div");
    const todoDate = document.createElement("div");
    const todoDelete = document.createElement("button");
    const todoDeleteText = document.createElement("span");

    const dueDate =
      projectsList[checkCurrentProject()].projects[i].dueDate.split("-");

    const formattedDueDate = `"${dueDate[0]}", "${dueDate[1]}", "${dueDate[2]}"`;

    todoCard.classList.add("todo-card");
    todoCard.setAttribute("data-card", i);
    todoDelete.setAttribute("id", "delete-btn");

    todoTitle.classList.add("todo-title");
    todoDesc.classList.add("todo-desc");
    todoPriority.classList.add("todo-priority");
    todoDate.classList.add("todo-date");

    todoTitle.textContent =
      projectsList[checkCurrentProject()].projects[i].task;
    todoDesc.textContent =
      projectsList[checkCurrentProject()].projects[i].description;
    todoPriority.textContent =
      projectsList[checkCurrentProject()].projects[i].priority;
    todoDate.textContent = `Due in ${formatDistanceToNow(
      new Date(formattedDueDate)
    )}`;

    todoDeleteText.textContent = "Incomplete";

    todoDelete.appendChild(todoDeleteText);

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

  if (localStorage.length === 0) return;
  const projectsList = JSON.parse(localStorage.getItem(localStorage.key(0)));

  projectsList[checkCurrentProject()].projects.push(newTodo);

  localStorage.setItem(localStorage.key(0), JSON.stringify(projectsList));
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
  const key = localStorage.key(0);
  const projectsList = JSON.parse(localStorage.getItem(key));

  projectsList[checkCurrentProject()].projects.splice(index, 1);

  localStorage.setItem(key, JSON.stringify(projectsList));
};

const handleNewProjectForm = () => {
  const projectName = document.getElementById("project-name");

  createProject(projectName.value);
};

const resetNewProjectForm = () => {
  const input = document.getElementById("project-name");

  input.value = "";
};

export {
  Project,
  addToDos,
  handleTodoFormValues,
  resetTodoFormValues,
  handleNewProjectForm,
  resetNewProjectForm,
  deleteToDo,
  allProjects,
  deleteProject,
  checkCurrentProject,
};
