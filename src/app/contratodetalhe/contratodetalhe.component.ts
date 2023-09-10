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

  transformToNumber(value: string | number): number {
    if (typeof value === 'string') {
      return Number(value.replace('.', '').replace(',', '.'));
    }
    return value;
  }

  ngOnInit(): void {
  }
}
