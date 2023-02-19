import { addToDos, allProjects, deleteToDo, deleteProject } from "./projects";

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
  const deleteBtns = document.querySelectorAll("#delete-btn");

  console.log(deleteBtns);
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteToDo(e.target.parentElement.attributes[1].value);
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
  const sidebarBtns = document.getElementById("sidebar-btns");
  const btnContainer = document.createElement("div");
  const btn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const deleteBtnIcon = document.createElement("i");

  btn.classList.add("project-btn");
  btn.setAttribute("data-index", i);
  btn.textContent = projectName;
  btn.addEventListener("click", (e) => {
    removeCurrentClass();
    e.target.classList.add("current");
    updateDisplay();
    addDeleteEvent();
  });

  btnContainer.classList.add("sidebar-btn-container");

  deleteBtnIcon.classList.add("fa-regular");
  deleteBtnIcon.classList.add("fa-trash-can");
  deleteBtn.setAttribute("id", "delete-project-btn");
  deleteBtn.setAttribute("data-index", i);

  deleteBtn.appendChild(deleteBtnIcon);
  btnContainer.appendChild(btn);
  btnContainer.appendChild(deleteBtn);
  sidebarBtns.appendChild(btnContainer);
};

const updateSidebarButtons = () => {
  for (let i = 0; i < allProjects.length; i++) {
    const newButton = document.createElement("button");
    const sidebarBtns = document.getElementById("sidebar-btns");
    const btnContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const deleteBtnIcon = document.createElement("i");

    newButton.classList.add("project-btn");
    newButton.setAttribute("data-index", i);
    newButton.textContent = allProjects[i].projectName;
    newButton.addEventListener("click", (e) => {
      removeCurrentClass();
      e.target.classList.add("current");
      updateDisplay();
      addDeleteEvent();
    });

    btnContainer.classList.add("sidebar-btn-container");

    deleteBtnIcon.classList.add("fa-regular");
    deleteBtnIcon.classList.add("fa-trash-can");
    deleteBtn.setAttribute("id", "delete-project-btn");
    deleteBtn.setAttribute("data-index", i);

    deleteBtn.appendChild(deleteBtnIcon);
    btnContainer.appendChild(newButton);
    btnContainer.appendChild(deleteBtn);
    sidebarBtns.appendChild(btnContainer);
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

const addProjectPopupEvent = () => {
  const createProjectBtn = document.getElementById("new-project-btn");

  createProjectBtn.addEventListener("click", () => {
    addProjectPopup();
  });
};

const addDeleteProjectEvent = () => {
  const deleteBtns = document.querySelectorAll("#delete-project-btn");

  console.log(deleteBtns);

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      deleteProject(Number(e.target.attributes[1].value));
      updateSidebar();
      updateDisplay();
      addDeleteProjectEvent();
      addProjectPopupEvent();
    });
  });
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
  removeCurrentClass,
  addTodoPopup,
  addDeleteProjectEvent,
  addProjectPopupEvent,
};
