const deleteBtn = document.querySelectorAll('.del')
const todoIncomplete = document.querySelectorAll('.todo-incomplete')
const todoComplete = document.querySelectorAll('.todo-complete')
const editTodo = document.querySelectorAll('.editTodo')
const other = document.getElementById('otherTodo')
const inputOther = document.getElementById('inputOtherTodo')

inputOther.addEventListener('change', () => {
    other.value = inputOther.value
})

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoIncomplete).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
    el.addEventListener('click', markIncomplete)
})

Array.from(editTodo).forEach((el) => {
    el.addEventListener('click', todoEditPage)
})


async function deleteTodo() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('/todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        location.reload()
    } catch (err) {
        console.error(err)
    }
}

async function markComplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('/todos/markComplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log('Marked complete')
        location.reload()
    } catch (err) {
        console.error(err)
    }
}

async function markIncomplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('/todos/markIncomplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log('Marked incomplete')
        location.reload()
    } catch (err) {
        console.error(err)
    }
}

async function todoEditPage() {
    const todoId = this.parentNode.dataset.id
    location.assign(`/todos/edit/${todoId}`)
}