import { Component } from '@angular/core';
import { Contrato } from '../contrato'; // Certifique-se de ajustar o caminho correto

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  contratos: Contrato[] = [];

  adicionarContrato() {
    const novoContrato = new Contrato(
      'Nome do Cliente',
      'Tipo de Contrato',
      'Status',
      'Data de Cadastro',
      'Data de Início',
      'Data de Fim',
      'Descrição',
      'Nome do Arquivo'
    );
    this.contratos.push(novoContrato);
  }

  // Mais lógica de manipulação de contratos
}
