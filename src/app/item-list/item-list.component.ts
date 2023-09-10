import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { Router } from '@angular/router';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  contratos: Contrato[] = [];
  contratoSelecionado: Contrato | null = null;
  exibirModal: boolean = false;

  constructor(private contratoService: ContratoService, private router: Router) { }

  ngOnInit(): void {
    this.obterContratos();
  }

  async obterContratos(): Promise<void> {
    try {
      const contratosRecebidos = await this.contratoService.obterContratos().toPromise();
      if (contratosRecebidos) {
        this.contratos = contratosRecebidos;
      } else {
        console.error('Erro: contratosRecebidos é undefined');
      }
    } catch (error) {
      console.error('Erro ao buscar contratos:', error);
    }
  }

  navegarParaAdicionar(): void {
    this.router.navigate(['/add-contrato']);
  }

  async excluirContrato(id: number): Promise<void> {
    const index = this.contratos.findIndex(contrato => contrato.id === id);
    if (index !== -1) {
      this.contratos.splice(index, 1);
      try {
        await this.contratoService.removerContrato(id);
      } catch (error) {
        console.error('Erro ao excluir contrato:', error);
      }
    } else {
      console.error('Erro ao encontrar contrato para excluir');
    }
  }

  visualizarDetalhes(contrato: Contrato): void {
    console.log('Visualizando detalhes do contrato:', contrato);
    this.contratoSelecionado = contrato;
    this.exibirModal = true;
  }

  fecharModal(): void {
    this.exibirModal = false;
  }

}
