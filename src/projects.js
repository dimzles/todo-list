import ToDo from "./createToDo";

const testTodo = new ToDo("test", "desc-test", "high", "20/1/23");
const testTodo2 = new ToDo("test2", "desc-test2", "high", "20/1/23");
const testTodo3 = new ToDo("test3", "desc-test3", "high", "20/1/23");

const defaultProjects = [testTodo, testTodo2, testTodo3];

const addToDos = () => {
  const todoContainer = document.getElementById("todo-container");
  for (let i = 0; i < defaultProjects.length; i++) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    todoCard.setAttribute("data-card", i);
    todoCard.textContent = defaultProjects[i].getInfo();

    todoContainer.appendChild(todoCard);
  }
};

const handleFormValues = () => {
  const task = document.getElementById("task").value;
  const description = document.getElementById("description").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;
  const newTodo = new ToDo(task, description, priority, dueDate);
  return defaultProjects.push(newTodo);
};

const resetFormValues = () => {
  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const priority = document.getElementById("priority");
  const dueDate = document.getElementById("due-date");

  task.value = "";
  description.value = "";
  priority.value = "";
  dueDate.value = "";
};

const deleteToDo = (index) => {
  defaultProjects.splice(index, 1);

  return defaultProjects;
};

export { addToDos, handleFormValues, resetFormValues, deleteToDo };
