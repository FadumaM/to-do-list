window.onload = function () {
  initialize();
};

var tasks = [];

function initialize() {
  bindEventListeners();
}

function bindEventListeners() {
  var newTask       = document.getElementById('submit');
  var toDoPage      = document.getElementById('toDo');
  var addTaskPage   = document.getElementById('addTask');
  var completedPage = document.getElementById('completed');
  newTask.addEventListener('click', addTask);
}

function addTask() {
  console.log('hi');
  var userInput = document.getElementById('userInput').value;
  tasks.push(userInput);
  document.getElementById('message').innerHTML = 'New task created!: ' + userInput;
  console.log(tasks);
}
