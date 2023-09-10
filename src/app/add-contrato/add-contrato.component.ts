import { Component } from '@angular/core';
import { Contrato } from '../contrato';
import { Router } from '@angular/router';
import { ContratoService } from '../contrato.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contrato',
  templateUrl: './add-contrato.component.html',
  styleUrls: ['./add-contrato.component.scss']
})
export class AddContratoComponent {

  contrato: Contrato = new Contrato(0, '', '', '', '', '', '', '', '', 0);

  constructor(private contratoService: ContratoService, private router: Router) {}

  async adicionarContrato(): Promise<void> {
    try {
      await this.contratoService.adicionarContrato(this.contrato);
      this.contrato = new Contrato(0, '', '', '', '', '', '', '', '', 0);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao adicionar contrato:', error);
    }
  }


}
