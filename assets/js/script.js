class Usuario {
   static login = "admin"
   static senha = 123

    constructor(login, senha){
        this.login =login
        this.senha = senha
    }

  static  logar(login, senha){
        if(login == this.login & senha == this.senha){
            console.log("Logado")
        } else{
            console.log("Login invalido")
        }
    }
}

//const victor = new Usuario("admin", 123)

const botaoLogar = document.querySelector("#botaoLogar")
const login = document.querySelector("#login")
const senha = document.querySelector("#senha")

botaoLogar.addEventListener('click', ()=>{
    Usuario.logar(login.value, senha.value)
})
