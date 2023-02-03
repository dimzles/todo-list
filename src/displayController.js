import { addToDos, allProjects } from "./projects";

const clearTodoDisplay = () => {
  const todoContainer = document.getElementById("todo-container");

  todoContainer.textContent = "";

  return todoContainer;
};

const updateDisplay = () => {
  clearTodoDisplay();
  addToDos();
};

const createSideBar = () => {
  const sidebar = document.getElementById("sidebar");
  const btnContainer = document.createElement("div");
  const createProjectBtn = document.createElement("button");

  createProjectBtn.textContent = "+ Add Project";

  createProjectBtn.setAttribute("id", "new-project-btn");
  btnContainer.setAttribute("id", "sidebar-btns");

  btnContainer.appendChild(createProjectBtn);

  sidebar.appendChild(btnContainer);

  return sidebar;
};

const updateSidebarButtons = () => {
  for (let i = 0; i < allProjects.length; i++) {
    const newButton = document.createElement("button");
    const btnContainer = document.getElementById("sidebar-btns");

    newButton.classList.add("project-btn");
    newButton.textContent = allProjects[i].projectName;

    btnContainer.appendChild(newButton);
  }
};

export { updateDisplay, createSideBar, updateSidebarButtons };
