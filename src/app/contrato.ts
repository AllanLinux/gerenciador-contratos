export class Contrato {
  constructor(
    public codigo: string,
    public cliente: string,
    public tipoContrato: string,
    public status: string,
    public dataCadastro: string,
    public dataInicio: string,
    public dataFim: string,
    public descricao: string,
    public valor: number
  ) {}
}
