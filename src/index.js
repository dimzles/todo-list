import "./style.css";
import updateDisplay from "./displayController";
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
  submitBtn.addEventListener("click", () => {
    handleFormValues();
    updateDisplay();
    resetFormValues();
    addDeleteEvent();
  });
};

updateDisplay();
addCreateEvent();
addDeleteEvent();
