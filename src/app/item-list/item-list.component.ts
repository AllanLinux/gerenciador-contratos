import { Component } from '@angular/core';
import { Contrato } from '../contrato';
import { Router } from '@angular/router';
import { ContratoService } from '../contrato.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  exibirModal: boolean = false;
  contratos: Contrato[] = [];
  contratoSelecionado: Contrato | null = null; // Este será usado para armazenar o contrato selecionado para visualização de detalhes

  constructor(private contratoService: ContratoService, private router: Router) {
    this.contratos = this.contratoService.obterContratos();
  }

  navegarParaAdicionar() {
    this.router.navigate(['/add-contrato']);
  }

  excluirContrato(index: number) {
    this.contratos.splice(index, 1);
    this.contratoService.removerContrato(index); // Agora também removendo do armazenamento local
  }

  visualizarDetalhes(contrato: Contrato) {
    this.contratoSelecionado = contrato;
    this.exibirModal = true; // Agora mudando a visibilidade do modal aqui
  }

  fecharModal() {
    this.contratoSelecionado = null;
    this.exibirModal = false; // E aqui
  }
}

