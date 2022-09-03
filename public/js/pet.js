const deletePets = document.querySelectorAll('.delpet')

Array.from(deletePets).forEach((el)=>{
    el.addEventListener('click', deletePet)
})

async function deletePet(){
    const petId = this.parentNode.dataset.id
    try{
        const response = await fetch('pets/deletePet', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'petIdFromJSFile': petId
            })
        })
        const data = await response.json()
        location.reload()
    }catch(err){
        console.error(err)
    }
}