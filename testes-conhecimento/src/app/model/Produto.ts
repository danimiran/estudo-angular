export class Produto
{
    
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    categoria_id: number;

    constructor(id: number, nome: string, descricao: string, preco: number, categoria_id: number){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria_id = categoria_id;

    }
}