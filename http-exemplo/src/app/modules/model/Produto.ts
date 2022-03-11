import { ResourceModel } from "src/app/services/util/ResourceModel";

export class Produto extends ResourceModel<Produto>
{
    
    public override id?: number;
    public descricao?: string;
    public preco?: number;
    public categoria_id?: number;

    constructor(model?: Partial<Produto>) {
        super(model);
      }

    // constructor(id: number, nome: string, descricao: string, preco: number, categoria_id: number){
    //     this.id = id;
    //     this.nome = nome;
    //     this.descricao = descricao;
    //     this.preco = preco;
    //     this.categoria_id = categoria_id;

    // }
}