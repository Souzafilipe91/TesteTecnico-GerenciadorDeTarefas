import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoas: any[] = [];
  tarefas: any[] = [];

  newPessoa: any = { nome: '', email: '', dataNascimento: '' };
  newTarefa: any = { titulo: '', descricao: '', status: '' };

  selectedPessoaId: number | null = null;
  selectedTarefaId: number | null = null;

  addPessoa() {
    this.pessoas.push({ ...this.newPessoa });
    this.newPessoa = { nome: '', email: '', dataNascimento: '' };
  }

  removePessoa(id: number) {
    this.pessoas = this.pessoas.filter(p => p.id !== id);
  }

  addTarefa() {
    this.tarefas.push({ ...this.newTarefa });
    this.newTarefa = { titulo: '', descricao: '', status: '' };
  }

  removeTarefa(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  atribuirTarefa() {
    if (this.selectedPessoaId && this.selectedTarefaId) {
      console.log(`Tarefa ${this.selectedTarefaId} atribuída a Pessoa ${this.selectedPessoaId}`);
    }
  }
}
