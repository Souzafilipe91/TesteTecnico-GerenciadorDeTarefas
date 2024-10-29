import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:7076/api';  // URL do back-end .NET

  constructor(private http: HttpClient) { }

  // Obter todas as pessoas
  getPessoas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Pessoa`);
  }

  // Obter todas as tarefas
  getTarefas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Tarefa`);
  }

  // Criar nova pessoa
  createPessoa(pessoa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Pessoa`, pessoa, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Criar nova tarefa
  createTarefa(tarefa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Tarefa`, tarefa, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Atualizar tarefa
  updateTarefa(id: number, tarefa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Tarefa/${id}`, tarefa, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Remover tarefa
  deleteTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Tarefa/${id}`);
  }
}
