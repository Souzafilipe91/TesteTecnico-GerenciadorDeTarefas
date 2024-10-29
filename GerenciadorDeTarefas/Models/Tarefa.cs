using System;

public class Tarefa
{
    public int ID { get; set; }
    public string Titulo { get; set; }
    public string Descricao { get; set; }
    public DateTime DataCriacao { get; set; }
    public string Status { get; set; } // "Pendente", "Em Progresso" ou "Concluída"

    public int PessoaID { get; set; } // Chave estrangeira
    public Pessoa Pessoa { get; set; }
}
