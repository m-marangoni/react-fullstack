//fazendo o link com js vanilla apenas

const linkCriarUmaConta = document.createElement('a')
linkCriarUmaConta.className = "link"
linkCriarUmaConta.href = "/conta"
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

//fazendo link login com js vanilla apenas
const linkFazerLogin = document.createElement('a')
linkFazerLogin.className = "link"
linkFazerLogin.href = "/login"
linkFazerLogin.appendChild(document.createTextNode('Fazer login'))

const formulario = document.createElement('form')
formulario.appendChild(linkCriarUmaConta)
formulario.appendChild(linkFazerLogin)

const divisaoProjeto = document.getElementById("projeto")
divisaoProjeto.appendChild(formulario)
