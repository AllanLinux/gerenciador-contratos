import { Component, EventEmitter, Output } from '@angular/core';
import { Contrato } from '../contrato';
import { Router } from '@angular/router';
import { ContratoService } from '../contrato.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contrato',
  templateUrl: './add-contrato.component.html',
  styleUrls: ['./add-contrato.component.scss']
})
export class AddContratoComponent {

  contrato: Contrato = new Contrato('', '', '', '', '', '', '', '', 0);
  @Output() contratoAdicionado = new EventEmitter<Contrato>();

  constructor(private contratoService: ContratoService, private router: Router) {}

  adicionarContrato() {
    this.contratoService.adicionarContrato(this.contrato);
    this.contrato = new Contrato('', '', '', '', '', '', '', '', 0);
    this.router.navigate(['/home']);
  }

  formatarValorMonetario(campo: any) {
    let valor = campo.value.replace(/[^0-9,]/g, '');  // Agora permitindo a vírgula também
    valor = valor.replace(',', '.');  // Convertendo vírgula em ponto para manipulação numérica
    valor = parseFloat(valor).toFixed(2); // Convertendo em número e depois em string com duas casas decimais
    valor = valor.replace('.', ',');  // Convertendo ponto de volta para vírgula para exibição
    campo.value = 'R$ ' + valor;
    this.contrato.valor = valor;

    // Aqui você pode adicionar lógica adicional para validar se o valor inserido é um número válido
    if (isNaN(parseFloat(valor.replace(',', '.')))) {
      // Marcar como inválido (agora também convertendo a vírgula em ponto para a verificação isNaN)
      campo.control.setErrors({'invalid': true});
    }
  }


}
