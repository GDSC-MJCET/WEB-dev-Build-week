const taskInput = document.getElementById('task-input')
const taskButton = document.getElementById('task-btn')
const taskList = document.getElementById('task-list')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

document.addEventListener('DOMContentLoaded', renderTask())

function renderTask() {
	taskList.innerHTML = ''
	tasks.forEach((task) => {
		const li = document.createElement('li') // list item
		li.textContent = `${task.task} -- ${task.completed ? 'completed' : 'pending'}`

		const doneBtn = document.createElement('button')
		doneBtn.textContent = 'Done'
		doneBtn.onclick = () => completeTask(task.taskId)
		const deleteBtn = document.createElement('button')
		deleteBtn.textContent = 'Delete'
		deleteBtn.onclick = () => deleteTask(task.taskId)
		doneBtn.classList.add('btn', 'btn-success')
		deleteBtn.classList.add('btn', 'btn-danger')
		const div = document.createElement('div')
		div.classList.add('d-flex', 'gap-2')
		div.append(doneBtn, deleteBtn)
		li.append(div)
		taskList.appendChild(li)
	})
}

function completeTask(id) {
	const task = tasks.find((task) => task.taskId == id)
	if (task) {
		task.completed = true
		localStorage.setItem('tasks', JSON.stringify(tasks))
		renderTask()
	} else {
		alert(`taskId ${id} not found`)
	}
}
function deleteTask(id) {
	tasks = tasks.filter((task) => task.taskId != id)
	localStorage.setItem('tasks', JSON.stringify(tasks))
	renderTask()
}

taskButton.addEventListener('click', (e) => {
	if (taskInput.value.length != 0) {
		const taskObj = {
			taskId: tasks.length + 1,
			task: taskInput.value,
			completed: false,
		}
		tasks.push(taskObj)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		console.log(tasks)
		taskInput.value = ''
		taskInput.focus()
		renderTask()
	}
})
