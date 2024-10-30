GerenciadorDeTarefas

Este é um projeto de Gerenciamento de Tarefas usando um back-end em .NET e um front-end em Angular. Ele permite gerenciar tarefas através de uma API e exibe a interface de usuário construída com Angular.

Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

.NET SDK (versão 6.0 ou superior)
Node.js (versão 16 ou superior) e npm
MySQL (para o banco de dados)
Um editor de código como o Visual Studio Code ou Visual Studio
Passos para Configuração
1. Clonar o Repositório
bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd GerenciadorDeTarefas
2. Configurar o Banco de Dados
Certifique-se de que o MySQL está instalado e em execução.

Crie um banco de dados MySQL para o projeto. Por exemplo:


CREATE DATABASE GerenciadorDeTarefasDB;

No arquivo appsettings.json na raiz do projeto, configure a ConnectionString para o seu banco de dados MySQL. Substitua usuario, senha e GerenciadorDeTarefasDB pelos valores adequados.


{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=GerenciadorDeTarefasDB;User Id=usuario;Password=senha;"
  }
}

3. Configurar o Back-end (.NET)
Abra o projeto no Visual Studio ou Visual Studio Code.

Execute o comando abaixo para restaurar as dependências e configurar o banco de dados (migrar tabelas para o banco).

dotnet restore

dotnet ef database update

Execute o back-end usando o seguinte comando:

dotnet run

O servidor deverá estar disponível em https://localhost:7076 ou http://localhost:5213.

4. Configurar o Front-end (Angular)
   
Navegue até a pasta ClientApp.

cd ClientApp

Instale as dependências do Angular.

npm install

Compile o projeto Angular para produção (opcional, mas recomendado para um ambiente de produção):

ng build --configuration production

Alternativamente, para desenvolvimento, você pode iniciar o servidor de desenvolvimento Angular com o comando:

ng serve

O front-end estará disponível em http://localhost:4200.

5. Executar o Projeto Completo
6. 
Certifique-se de que o back-end (.NET) está rodando.

Abra o navegador e vá até https://localhost:7076 para acessar o aplicativo completo.

Se estiver usando o ng serve, o front-end Angular estará em http://localhost:4200, mas lembre-se de configurar o CORS no back-end se necessário.

Estrutura do Projeto

GerenciadorDeTarefas: Pasta do projeto .NET (back-end).

Controllers: Contém os controllers da API.

Models: Define os modelos de dados.

appsettings.json: Arquivo de configuração do aplicativo.

ClientApp: Pasta do projeto Angular (front-end).

src/app: Contém os componentes Angular.

angular.json: Arquivo de configuração do Angular CLI.

Comandos Úteis

Para iniciar o back-end: dotnet run

Para iniciar o front-end: ng serve (na pasta ClientApp)

Para compilar o front-end para produção: ng build --configuration production


Problemas Comuns

Erro de Conexão com o Banco de Dados: Verifique a ConnectionString no appsettings.json.

Erro de CORS: Se você acessar o front-end e o back-end em portas diferentes, configure CORS no Program.cs no back-end.

Erro ao Executar o Angular: Certifique-se de estar na pasta ClientApp ao executar comandos do Angular CLI.
