import "./style.css";
import {
  updateDisplay,
  createSideBar,
  updateSidebarButtons,
  addProjectPopup,
  removeActiveClass,
  addDeleteEvent,
  addSwitchProjectEvent,
  addTodoPopup,
} from "./displayController";
import {
  handleTodoFormValues,
  resetTodoFormValues,
  handleNewProjectForm,
  resetNewProjectForm,
} from "./projects";

const addCreateToDoEvent = () => {
  const todoForm = document.getElementById("todo-form");
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleTodoFormValues();
    updateDisplay();
    removeActiveClass();
    resetTodoFormValues();
    addDeleteEvent();
  });
};

const addProjectPopupEvent = () => {
  const createProjectBtn = document.getElementById("new-project-btn");

  createProjectBtn.addEventListener("click", () => {
    addProjectPopup();
  });
};

const addRemovePopupEvent = () => {
  const popupContainer = document.getElementById("popup-container");

  popupContainer.addEventListener("click", () => {
    removeActiveClass();
  });
};

const addTodoPopupEvent = () => {
  const createTodoBtn = document.getElementById("addToDo");

  createTodoBtn.addEventListener("click", () => {
    addTodoPopup();
  });
};

const addCreateProjectEvent = () => {
  const submitBtn = document.getElementById("submit-new-project-btn");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleNewProjectForm();
    removeActiveClass();
    resetNewProjectForm();
    addSwitchProjectEvent();
  });
};

createSideBar();
updateDisplay();
addCreateToDoEvent();
addDeleteEvent();
addProjectPopupEvent();
updateSidebarButtons();
addSwitchProjectEvent();
addRemovePopupEvent();
addCreateProjectEvent();
addTodoPopupEvent();
