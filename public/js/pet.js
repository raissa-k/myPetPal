/********************************************************************
 * Deleting pets 
 ********************************************************************/
const deletePets = document.querySelectorAll('.delpet')

Array.from(deletePets).forEach((el) => {
    el.addEventListener('click', deletePet)
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

/********************************************************************
 * Edit (modal) form
********************************************************************/
const petEditModal = document.getElementById('petEdit-modal')
const petEditForm = document.getElementById('petEdit-form')
const petEditField = document.getElementById('petEdit-form').elements
const petEditButton = document.getElementById('petEdit-button')
const petEditDismiss = document.getElementById('petEdit-dismiss')

petEditModal.addEventListener('show.bs.modal', function(event) {
    let button = event.relatedTarget

    let petId = button.getAttribute('data-id')
    let modalId = document.getElementById('modalId')
    
    let petName = button.getAttribute('data-name')
    let modalName = document.getElementById('modalName')
    
    let petBreed = button.getAttribute('data-breed')
    let modalBreed = document.getElementById('modalBreed')
    
    let petBirthday = button.getAttribute('data-birthday')
    let modalBirthday = document.getElementById('modalBirthday')
    
    let petAge = button.getAttribute('data-age')
    let modalAge = document.getElementById('modalAge')

    modalId.value = petId
    modalName.value = petName
    modalBreed.value = petBreed
    modalBirthday.value = petBirthday
    modalAge.value = petAge
})

petEditForm.addEventListener('submit', async function(e){
    e.preventDefault()       
    const petId = petEditField['petId'].value
    const petName = petEditField['petName'].value
    const petBreed = petEditField['petBreed'].value
    const petBirthday = petEditField['petBirthday'].value
    const petAge = petEditField['petAge'].value

    try {
        const response = await fetch(`/pets/edit/${petId}`, {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                petId: petId,
                petName: petName,
                petBreed: petBreed,
                petBirthday: petBirthday,
                petAge: petAge
            })
        })
        petEditDismiss.click()
        const data = await response.json()
        location.reload()  
    } catch (error) {
        console.error(error)
    }
})