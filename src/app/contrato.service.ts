import { Injectable } from '@angular/core';
import { Contrato } from './contrato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private contratos: Contrato[] = [];
  private nextId: number = 1; // Campo para manter o próximo ID disponível
  private apiUrl = 'http://localhost:3000/contratos';

  constructor(private httpClient: HttpClient) {
    this.carregarContratos();
  }

  private async carregarContratos(): Promise<void> {
    try {
      this.contratos = await firstValueFrom(this.httpClient.get<Contrato[]>(this.apiUrl)) || [];
      if (this.contratos.length > 0) {
        // Atualizando o nextId com base no maior id presente na lista de contratos
        this.nextId = this.contratos[this.contratos.length - 1].id + 1;
      }
    } catch (error) {
      console.error('Erro ao carregar contratos:', error);
    }
  }


  public obterContratos(): Observable<Contrato[]> {
    return this.httpClient.get<Contrato[]>(this.apiUrl);
  }

  public async adicionarContrato(contrato: Contrato): Promise<void> {
    try {
      contrato.id = this.nextId++;
      await firstValueFrom(this.httpClient.post(this.apiUrl, contrato));
      this.contratos.push(contrato);
    } catch (error) {
      console.error('Erro ao adicionar contrato:', error);
      throw error;
    }
  }

  public async removerContrato(id: number): Promise<void> {
    try {
      await firstValueFrom(this.httpClient.delete(`${this.apiUrl}/${id}`));
      this.contratos = this.contratos.filter(c => c.id !== id);
    } catch (error) {
      console.error('Erro ao remover contrato:', error);
      throw error;
    }
  }

  public async atualizarContrato(contrato: Contrato): Promise<void> {
    try {
      await firstValueFrom(this.httpClient.put(`${this.apiUrl}/${contrato.id}`, contrato));
      const index = this.contratos.findIndex(c => c.id === contrato.id);
      if (index !== -1) {
        this.contratos[index] = contrato;
      }
    } catch (error) {
      console.error('Erro ao atualizar contrato:', error);
      throw error;
    }
  }

  public obterContratoPorId(id: number): Observable<Contrato> {
    return this.httpClient.get<Contrato>(`${this.apiUrl}/${id}`);
  }

}
