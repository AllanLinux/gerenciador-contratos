import { Injectable } from '@angular/core';
import { Contrato } from './contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private contratos: Contrato[] = [];

  constructor() {
    this.carregarContratos();
  }

  adicionarContrato(contrato: Contrato) {
    this.contratos.push(contrato);
    this.salvarContratos();
  }

  removerContrato(index: number) {
    this.contratos.splice(index, 1);
    this.salvarContratos();
  }

  obterContratos() {
    return this.contratos;
  }

  private salvarContratos() {
    localStorage.setItem('contratos', JSON.stringify(this.contratos));
  }

  private carregarContratos() {
    const contratosSalvos = localStorage.getItem('contratos');
    if (contratosSalvos) {
      this.contratos = JSON.parse(contratosSalvos);
    }
  }
}
