export default class ToDo {
  constructor(task, description, priority, dueDate) {
    this.task = task;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  getInfo() {
    return `${this.task} | ${this.description} | ${this.priority} | ${this.dueDate}`;
  }
}
