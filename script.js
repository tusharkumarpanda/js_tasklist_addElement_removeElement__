let taskFormEl=document.querySelector('#task-form');
taskFormEl.addEventListener('submit',function(event)
{
	event.preventDefault();
	let inputEl=document.querySelector('#task-input');
	let task=inputEl.value;
	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
	taskList.unshift(task);
	localStorage.setItem('tasks',JSON.stringify(taskList));
	displayTasks();
});


//# Display Tasks

function displayTasks()
{
	let taskListEl=document.querySelector('#task-list');
	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
	let eachTask=``;
	for(let task of taskList)
	{
		eachTask+=`<li class="list-group-item list-group-item-primary mb-2">
						<span class="font-weight-bold">${task}</span>
						<button class="close">
							<i class="fa fa-times-circle"></i>
						</button>
					</li>`
	}
	taskListEl.innerHTML=eachTask;
}
// displayTasks();


//# delete functionality

let taskListEl=document.getElementById('task-list');

taskListEl.addEventListener('click',function(event)
{
	let targetEl=event.target;
	
	if(targetEl.classList.contains('fa-times-circle'))
	{
		let actualEl=targetEl.parentElement.parentElement;
		let selectedText=actualEl.innerText;
	
		let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

		taskList=taskList.filter((task)=>
		{
			return task.trim()!==selectedText.trim();

		})

		localStorage.setItem('tasks',JSON.stringify(taskList));
		displayTasks();
	}

})