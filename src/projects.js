import ToDo from "./createToDo";

const testTodo = new ToDo("test", "desc-test", "high", "20/1/23 @ 3pm");

const defaultProjects = [testTodo];

const addToDos = () => {
  const todoContainer = document.getElementById("todo-container");
  for (let i = 0; i < defaultProjects.length; i++) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
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

export { addToDos, handleFormValues, resetFormValues };
