const form = document.getElementById('form-login')
const valorA = ( document.getElementById('valor-a'))
const valorB = (document.getElementById('valor-b'))


form.addEventListener('submit', function(e){
    e.preventDefault()
    const mensagemSucesso = `Formulario Enviado!`
    parseInt(valorA.value)
    parseInt(valorB.value)
    if  ( valorB.valueAsNumber > valorA.valueAsNumber){
        const containerMensagemSucesso =document.querySelector('.success')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
    
    valorA.value = ''
    valorB.value = ''
    

} else {
    document.querySelector('.error-message').style.display = 'block'
}
})
 console.log(valorB)