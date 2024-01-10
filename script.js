const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')


addTask.addEventListener('click', function(){
  let task = document.createElement('div')
  task.classList.add('task')
  console.log(task)

  let li = document.createElement('li')
  li.innerText = `${inputTask.value}`
  task.appendChild(li)
  console.log(li)

  let checkButton = document.createElement('button')
  checkButton.innerHTML = `<i class='bx bx-check'></i>`
  checkButton.classList.add('checkTask')
  task.appendChild(checkButton)
  console.log(task)
 
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = `<i class='bx bxs-trash'></i>`
  deleteButton.classList.add('deleteTask')
  task.appendChild(deleteButton)
  console.log(task)

  if (inputTask.value === ""){
    alert('Please input task')
  } else if(true){
    taskContainer.appendChild(task)
  }
  inputTask.value = ""

  checkButton.addEventListener('click', function(){
    checkButton.parentElement.style.textDecoration = 'line-through'
  })
  deleteButton.addEventListener('click', function(e){
 task.remove()
  })

})