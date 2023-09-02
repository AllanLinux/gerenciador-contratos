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

  constructor(private contratoService: ContratoService, private router: Router) {
    this.contratos = this.contratoService.obterContratos();
  }

  navegarParaAdicionar() {
    this.router.navigate(['/add-contrato']);
  }

    contratos: Contrato[] = [];

  adicionarContratoNaLista(contrato: Contrato) {
    this.contratos.push(contrato);
  }
}
