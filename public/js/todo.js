/********************************************************************
 * Deleting, marking complete/incomplete 
********************************************************************/
const deleteBtn = document.querySelectorAll('.del')
const todoIncomplete = document.querySelectorAll('.todo-incomplete')
const todoComplete = document.querySelectorAll('.todo-complete')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoIncomplete).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
    el.addEventListener('click', markIncomplete)
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

/********************************************************************
 * Creation form 
********************************************************************/

const other = document.getElementById('otherTodo')
const inputOther = document.getElementById('inputOtherTodo')

const todoForm = document.getElementById('todo-form')
const radioButtons = todoForm.querySelectorAll('input[name="todoItem"]')

Array.from(radioButtons).forEach((el) => {
    el.addEventListener('click', () => {
        console.log(el)
        if (other.checked) {
            inputOther.disabled = false;
        } else {
            inputOther.disabled = true;
        }
    })
})

/********************************************************************
 * Edit (modal) form 
********************************************************************/
const modalOther = document.getElementById('modal-otherTodo')
const modalInputOther = document.getElementById('modal-inputOtherTodo')

const todoEditModal = document.getElementById('todoEdit-modal')
const todoEditForm = document.getElementById('todoEdit-form')
const modalRadioButtons = todoEditForm.querySelectorAll('input[name="todoItem"]')
const todoEditField = document.getElementById('todoEdit-form').elements
const todoEditButton = document.getElementById('todoEdit-button')
const todoEditDismiss = document.getElementById('todoEdit-dismiss')

Array.from(modalRadioButtons).forEach((el) => {
    el.addEventListener('click', () => {
        if (modalOther.checked) {
            modalInputOther.disabled = false;
        } else {
            modalInputOther.disabled = true;
        }
    })
})

inputOther.addEventListener('change', () => {
    other.value = inputOther.value
})

modalInputOther.addEventListener('change', () => {
    modalOther.value = modalInputOther.value
})

/* Modal implemented with bootstrap, so this will pass the dynamic values from the edit button onto the modal */
todoEditModal.addEventListener('show.bs.modal', function(event) {
    let button = event.relatedTarget

    let todoId = button.getAttribute('data-id')
    let modalId = document.getElementById('modalId')
    
    let todo = button.getAttribute('data-todo')
    
    let petName = button.getAttribute('data-pet')
    let modalPet = document.getElementById('modalPet')
    
    let date = new Date(button.getAttribute('data-date')).toISOString().slice(0,10)
    let modalDate = document.getElementById('modalDate')
    
    modalId.value = todoId
    modalPet.value = petName
    modalDate.value = date
    modalInputOther.value = todo
    modalOther.value = todo
})

todoEditForm.addEventListener('submit', async function(e){
    e.preventDefault()      
    const todoId = todoEditField['todoId'].value
    const todoPet = document.getElementById('modalPet').value
    const todoItem = todoEditField['todoItem'].value
    const todoDate = document.getElementById('modalDate').value

    try {
        const response = await fetch(`/todos/edit/${todoId}`, {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                todoId: todoId,
                petName: todoPet,
                todoItem: todoItem,
                date: todoDate
            })
        })
        todoEditDismiss.click()
        const data = await response.json()
        location.reload()  
    } catch (error) {
        console.error(error)
    }
})