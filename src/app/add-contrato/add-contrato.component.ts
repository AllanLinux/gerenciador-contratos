import { Component, EventEmitter, Output } from '@angular/core';
import { Contrato } from '../contrato';
import { Router } from '@angular/router';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'app-add-contrato',
  templateUrl: './add-contrato.component.html',
  styleUrls: ['./add-contrato.component.scss']
})
export class AddContratoComponent {
  contrato: Contrato = new Contrato('', '', '', '', '', '', '', '');
  @Output() contratoAdicionado = new EventEmitter<Contrato>();

  constructor(private contratoService: ContratoService, private router: Router) {}

  adicionarContrato() {
    this.contratoService.adicionarContrato(this.contrato);
    this.contrato = new Contrato('', '', '', '', '', '', '', '');
    this.router.navigate(['/home']);
  }
  
}
