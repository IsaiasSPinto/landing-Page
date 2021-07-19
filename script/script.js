const git = document.querySelector('#git-icon')

git.addEventListener('click', redirect)

function redirect() {
    window.open('https://github.com/IsaiasSPinto', '_blank');
}

const Form = document.querySelector('.Form')
const inputName = document.querySelector('#Name')
const inputEmail = document.querySelector('#Email')
const inputTel = document.querySelector('#Tel')
const subimit = document.querySelector('.submit-button')


subimit.addEventListener('click', e => {
    e.preventDefault()

    values = []
    let Name = inputName.value
    let Email = inputEmail.value
    let Tel = inputTel.value

    values.push(Name)
    values.push(Email)
    values.push(Tel)

    localStorage.setItem('values', values)


    clearInputs()
})

function clearInputs() {
    inputName.value = ""
    inputEmail.value = ""
    inputTel.value = ""
}
