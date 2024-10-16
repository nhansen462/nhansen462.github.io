// Todo List Assignment
// Example Data
localStorage.setItem('todo-list', JSON.stringify([
    { "text": "Buy milk", "completed": false },
    { "text": "Walk the dog", "completed": false },
    { "text": "Do homework", "completed": false }
]))

const addTodoButton = document.querySelector('#add-item')
const input = document.querySelector('#new-todo')
const todoList = document.querySelector('#todo-list')

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// Add a new item to the list
const addTodo = () => {
    todos.push({ text: input.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
}
addTodoButton.addEventListener('click', () => addTodo())


// Clear the li's before we recreate them
//todoList.innerHTML = ''

const test = document.querySelector('p')
test.textContent = JSON.stringify(todos)

const renderTodos = () => {
    todos.forEach(todo =>{
        // Create and add new list items to the DOM
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

