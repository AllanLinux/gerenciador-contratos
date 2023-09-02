import { Injectable } from '@angular/core';
import { Contrato } from './contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private contratos: Contrato[] = [];

  adicionarContrato(contrato: Contrato) {
    this.contratos.push(contrato);
  }

  obterContratos() {
    return this.contratos;
  }
}
