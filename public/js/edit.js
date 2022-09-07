const petEditForm = document.getElementById('petEditButton')
const todoEditForm = document.getElementById('todoEditButton')

petEditForm.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    petId = this.parentNode.dataset.id
    try {
        await fetch(`/pets/edit/${petId}`, {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'petIdFromJSFile': petId
            })
        })
        location.reload()
    } catch (err) {
        console.error(err)
    }
}
)

todoEditForm.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    todoId = this.parentNode.dataset.id
    try {
        await fetch(`/todos/edit/${todoId}`, {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        location.reload()
    } catch (err) {
        console.error(err)
    }
}
)