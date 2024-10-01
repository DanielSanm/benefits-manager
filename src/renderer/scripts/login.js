const email = document.querySelector('#input-email')
const password = document.querySelector('#input-password')
const button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (email.value === 'admin' && password.value === 'admin') {
        window.location.href = '../pages/main.html'
    } else {
        alert('Usuário e/ou senha incorretos!')
    }
    
})