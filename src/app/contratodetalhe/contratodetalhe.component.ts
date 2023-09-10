import { Component, Input, OnInit } from '@angular/core';
import { Contrato } from '../contrato';


@Component({
  selector: 'app-contratodetalhe',
  templateUrl: './contratodetalhe.component.html',
  styleUrls: ['./contratodetalhe.component.scss']
})
export class ContratodetalheComponent implements OnInit {
  @Input() contrato: Contrato | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
