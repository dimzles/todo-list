import "./style.css";
import {
  updateDisplay,
  createSideBar,
  updateSidebarButtons,
  addProjectPopupEvent,
  removeActiveClass,
  addDeleteEvent,
  removeCurrentClass,
  addTodoPopup,
  addDeleteProjectEvent,
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
    removeCurrentClass();
  });
};

const setMinimumDate = () => {
  const today = new Date();
  let minMonth = today.getMonth();
  let minDay = today.getDate();

  if (minMonth.toString().length === 1) minMonth = `0${today.getMonth() + 1}`;

  if (minDay.toString().length === 1) minDay = `0${today.getDate()}`;

  const minDate = `${today.getFullYear()}-${minMonth}-${minDay}`;

  const dateInput = document.getElementById("due-date");

  dateInput.setAttribute("min", minDate);
  dateInput.toggleAttribute("required");
};

setMinimumDate();
createSideBar();
updateDisplay();
addCreateToDoEvent();
addDeleteEvent();
addProjectPopupEvent();
updateSidebarButtons();
removeCurrentClass();
addRemovePopupEvent();
addCreateProjectEvent();
addTodoPopupEvent();
addDeleteProjectEvent();
