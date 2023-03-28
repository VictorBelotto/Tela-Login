class Cadastro {
   static usuarios = []


  static  logar(usuario){
        this.usuarios.incluedes(usuario)
    }

    static cadastra(usuario){
        this.usuarios.push(usuario)
    }
}


class Usuario{
    nome
    login 
    senha 

    constructor(nome, login, senha){
        this.nome = nome
        this.login = login
        this.senha = senha
    }

}

const victor = new Usuario("Victor","admin", 123)
const felipe = new Usuario("Felipe","admin", 1234)
Cadastro.cadastra(victor)
Cadastro.cadastra(felipe)

console.log(Cadastro.usuarios)

const botaoLogar = document.querySelector("#botaoLogar")
const login = document.querySelector("#login")
const senha = document.querySelector("#senha")

botaoLogar.addEventListener('click', ()=>{
    Usuario.logar(login.value, senha.value)
})
