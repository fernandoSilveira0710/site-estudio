export class Usuario 
{
    public nome:string = "";
    public email:string ="";
    public telefone:string = "";
    public senha:string = "";

    constructor(nome:string , email:string ,telefone:string, senha:string)
    {
        this.email = email
        this.nome = nome
        this.senha = senha
        this.telefone = telefone    
    }
}