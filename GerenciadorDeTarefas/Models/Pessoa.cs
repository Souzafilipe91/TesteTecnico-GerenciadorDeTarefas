using GerenciadorDeTarefas;
using System;
using System.Collections.Generic;

public class Pessoa
{
    public int ID { get; set; }
    public string Nome { get; set; }
    public string Email { get; set; }
    public DateTime DataNascimento { get; set; }

    public List<Tarefa> Tarefas { get; set; }
}
