import { addToDos } from "./projects";

const clearTodoDisplay = () => {
  const todoContainer = document.getElementById("todo-container");

  todoContainer.textContent = "";

  return todoContainer;
};

const updateDisplay = () => {
  clearTodoDisplay();
  addToDos();
};

export default updateDisplay;
