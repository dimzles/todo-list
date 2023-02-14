import { addToDos, allProjects, deleteToDo } from "./projects";

const removeCurrentClass = () => {
  const projectBtns = document.querySelectorAll(".project-btn");

  projectBtns.forEach((btn) => {
    btn.classList.remove("current");
  });
};

const clearTodoDisplay = () => {
  const todoContainer = document.getElementById("todo-container");

  todoContainer.textContent = "";

  return todoContainer;
};

const updateDisplay = () => {
  clearTodoDisplay();
  addToDos();
};

const addDeleteEvent = () => {
  const todoCards = document.querySelectorAll("[data-card]");
  todoCards.forEach((todo) => {
    todo.addEventListener("click", (e) => {
      deleteToDo(e.target.attributes[1].value);
      updateDisplay();
      addDeleteEvent();
    });
  });
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

const createSidebarButton = (projectName, i) => {
  const btnContainer = document.getElementById("sidebar-btns");
  const btn = document.createElement("button");

  btn.classList.add("project-btn");
  btn.setAttribute("data-index", i);
  btn.textContent = projectName;
  btn.addEventListener("click", (e) => {
    removeCurrentClass();
    e.target.classList.add("current");
    updateDisplay();
    addDeleteEvent();
  });

  btnContainer.appendChild(btn);
};

const updateSidebarButtons = () => {
  for (let i = 0; i < allProjects.length; i++) {
    const newButton = document.createElement("button");
    const btnContainer = document.getElementById("sidebar-btns");

    newButton.classList.add("project-btn");
    newButton.setAttribute("data-index", i);
    newButton.textContent = allProjects[i].projectName;
    newButton.addEventListener("click", (e) => {
      removeCurrentClass();
      e.target.classList.add("current");
      updateDisplay();
      addDeleteEvent();
    });

    btnContainer.appendChild(newButton);
  }
};

const updateSidebar = () => {
  const sidebar = document.getElementById("sidebar");

  sidebar.textContent = "";
  createSideBar();
  updateSidebarButtons();
};

const addProjectPopup = () => {
  const popupContainer = document.getElementById("popup-container");
  const newProjectForm = document.getElementById("project-form-container");

  popupContainer.classList.add("active");
  newProjectForm.classList.add("active");
};

const addTodoPopup = () => {
  const popupContainer = document.getElementById("popup-container");
  const newTodoForm = document.getElementById("todo-form-container");

  popupContainer.classList.add("active");
  newTodoForm.classList.add("active");
};

const removeActiveClass = () => {
  const popupContainer = document.getElementById("popup-container");
  const newProjectForm = document.getElementById("project-form-container");
  const newTodoForm = document.getElementById("todo-form-container");

  popupContainer.classList.remove("active");
  newProjectForm.classList.remove("active");
  newTodoForm.classList.remove("active");
};

export {
  updateDisplay,
  createSideBar,
  updateSidebarButtons,
  addProjectPopup,
  removeActiveClass,
  updateSidebar,
  createSidebarButton,
  addDeleteEvent,
  removeCurrentClass as addSwitchProjectEvent,
  addTodoPopup,
};
