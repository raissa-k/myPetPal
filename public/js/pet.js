const deletePets = document.querySelectorAll('.delpet')
const editPets = document.querySelectorAll('.editpet')


Array.from(deletePets).forEach((el) => {
    el.addEventListener('click', deletePet)
})

Array.from(editPets).forEach((el) => {
    el.addEventListener('click', editPet)
})

async function deletePet() {
    const petId = this.parentNode.dataset.id
    try {
        const response = await fetch('pets/deletePet', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'petIdFromJSFile': petId,
            })
        })
        const data = await response.json()
        location.reload()
    } catch (err) {
        console.error(err)
    }
}

async function editPet() {
    const petId = this.parentNode.dataset.id
    location.assign(`/pets/edit/${petId}`)
}