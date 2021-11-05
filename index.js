// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,


  logState: function() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  },

  markCompleted: function() {
    this.complete = true;
  }
};
return task;
}

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

function completeTask(task) {
  task.complete = true;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
