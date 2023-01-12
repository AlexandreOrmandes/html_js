const form = document.getElementById('form-login')
let valorA = (document.getElementById('valor-a'))
let valorB = (document.getElementById('valor-b'))





form.addEventListener('submit', function(e){
    e.preventDefault()
    const mensagemSucesso = `Formulario Enviado!`

    
    if(valorB.value>valorA.value){
        const containerMensagemSucesso =document.querySelector('.success')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
    
    valorA.value = ''
    valorB.value = ''

} else {
    document.querySelector('.error-message').style.display = 'block'
}


})