const formAdd = document.querySelector('.form-add-todo')
const ul = document.querySelector(".todos-container")

formAdd.addEventListener("submit", event => {
    event.preventDefault()

    const username = event.target.add.value.trim()

    if(username.length) {
        ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${username}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `
    }

    event.target.reset()
})

ul.addEventListener("click", event => {
    const clickedElement = event.target
    if(Array.from(clickedElement.classList).includes("delete")) {
        clickedElement.parentElement.remove()
    }
})

