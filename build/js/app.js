window.onload = function () {
  initialize();
};

var tasks = [
  'Wake up at 5:30 a.m',
  'Consult my Tomorrow List',
  'Head to the computer and start writing a blog post',
  'Shower/breakfast at 7:00 a.m.',
  'Back to writing',
];
var completed = [];

function initialize() {
  bindEventListeners();
}

function bindEventListeners() {
  var newTask       = document.getElementById('submit');
  var toDoPage      = document.getElementById('toDo');
  var addTaskPage   = document.getElementById('addTask');
  var completedPage = document.getElementById('completed');
  newTask.addEventListener('click', addTask);
  toDoPage.addEventListener('click', goToDoPage);
  addTaskPage.addEventListener('click', goAddTaskPage);
  completedPage.addEventListener('click', goCompletedPage);

}

function goAddTaskPage() {
  console.log('addTaskPage');
}

function addTask() {
  console.log('hi');
  var userInput = document.getElementById('userInput').value;
  tasks.push(userInput);
  document.getElementById('message').innerHTML = 'New task created!: ' + userInput;
}

function goToDoPage() {
  console.log('toDoPage');
  showToDoList();
}

function showToDoList() {
  var form = document.getElementById('form');
  if (form.style.display == 'block') {
    form.style.display = 'none';
  }else {
    form.style.display = 'block';
  }

  var list = document.createElement('ul');
  var element = document.getElementById('div1');
  element.appendChild(list);
  list.className += 'lionheart-to-do-list';

  for (var i = 0; i < tasks.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(tasks[i]));
    list.appendChild(item);
    item.className += 'lionheart-to-do';
  }

  var listOfTasks   = document.getElementsByClassName('lionheart-to-do');
  for (i = 0; i < listOfTasks.length; i++) {
    listOfTasks[i].addEventListener('click', completeTasks);
  }
}

function goCompletedPage() {
  var list = document.createElement('ul');
  var element = document.getElementById('div1');
  element.appendChild(list);
  list.className += 'lionheart-completed-list';
  for (var i = 0; i < completed.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(completed[i]));
    list.appendChild(item);
    item.className += 'lionheart-completed-to-do';
  }
}

function completeTasks() {
  completed.push(event.target.innerHTML);
}
