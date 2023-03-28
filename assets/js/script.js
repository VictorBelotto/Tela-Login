import { Login, Cadastro } from "./cadastro.js"

const botaoLogar = document.querySelector("#botaoLogar")
const login = document.querySelector("#login")
const senha = document.querySelector("#senha")


Cadastro.cadastra('Victor', 1234)
Cadastro.cadastra('Felipe', 9090)

//Cadastro.logar('Victor', 1234)

//console.log(Cadastro.logar('Victor', 1234))

//console.log(Cadastro.logar('Victor', 1234))

botaoLogar.addEventListener('click', ()=>{
   Cadastro.logar(login.value, senha.value)
})
