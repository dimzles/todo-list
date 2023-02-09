import "./style.css";
import {
  updateDisplay,
  createSideBar,
  updateSidebarButtons,
} from "./displayController";
import { handleFormValues, resetFormValues, deleteToDo } from "./projects";

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

const addCreateEvent = () => {
  const submitBtn = document.getElementById("create-btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleFormValues();
    updateDisplay();
    resetFormValues();
    addDeleteEvent();
  });
};

const addSwitchProjectEvent = () => {
  const projectBtns = document.querySelectorAll(".project-btn");

  projectBtns.forEach((btn) => {
    btn.classList.remove("current");
    btn.addEventListener("click", (e) => {
      console.log(e);
      e.target.classList.add("current");
      updateDisplay();
      addSwitchProjectEvent();
    });
  });
};

createSideBar();
updateDisplay();
addCreateEvent();
addDeleteEvent();
updateSidebarButtons();
addSwitchProjectEvent();
