import "./style.css";
import updateDisplay from "./displayController";
import { handleFormValues } from "./projects";

updateDisplay();

const addCreateEvent = () => {
  const submitBtn = document.getElementById("create-btn");

  submitBtn.addEventListener("click", () => {
    handleFormValues();
    updateDisplay();
  });
};

addCreateEvent();
