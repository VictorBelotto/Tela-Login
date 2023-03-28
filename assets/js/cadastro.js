export class Login{
    usuario
    senha 

    constructor(usuario, senha){
        this.usuario = usuario
        this.senha = senha
    }

    verificaSenha(senha){
        senha == this.senha
    }
}

export class Cadastro {
    static usuarios = []
 
 
   static  logar(usuario, senha){
        let users = this.usuarios.map(function(elememt){
             if(elememt.usuario == usuario && elememt.senha == senha){
                console.log(elememt.usuario)
                console.log("logado")
             }else{
                console.log('nao')
                
             }
           
        })
       
     }
 
     static cadastra(usuario, senha){
        const user = new Login(usuario, senha) 
         this.usuarios.push(user)
     }
 }
 
 
