import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoService } from '../contrato.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contrato',
  templateUrl: './add-contrato.component.html',
  styleUrls: ['./add-contrato.component.scss']
})
export class AddContratoComponent implements OnInit {

  contrato: Contrato = new Contrato(0, '', '', '', '', '', '', '', '', 0);

  statusOptions: string[] = ['Novo', 'Pendente', 'Vigente', 'Não está vigente', 'Arquivado'];

  constructor(
    private contratoService: ContratoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.contratoService.obterContratoPorId(id).subscribe(contrato => {
          this.contrato = contrato;
        });
      }
    });
  }

  async adicionarContrato(): Promise<void> {
    try {
      if(this.contrato.id === 0) {
        this.contratoService.adicionarContrato(this.contrato).then(() => {
          this.router.navigate(['/home']);
        }).catch(error => {
          console.error('Erro ao adicionar contrato:', error);
        });
      } else {
        this.contratoService.atualizarContrato(this.contrato).then(() => {
          this.router.navigate(['/home']);
        }).catch(error => {
          console.error('Erro ao salvar contrato:', error);
        });
      }
    } catch (error) {
      console.error('Erro ao realizar operação:', error);
    }
  }

}
