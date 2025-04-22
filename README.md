# Good-Practices-for-AIs

[Leia este documento em inglês](./README-en.md)

## Descrição Geral
Esta API foi desenvolvida para gerenciar informações de pessoas de forma eficiente e prática. Todas as informações são armazenadas em memória, sem o uso de banco de dados, o que a torna ideal para aplicações simples ou testes.

## Objetivos
- Facilitar o gerenciamento de dados de pessoas.
- Prover uma interface simples e intuitiva para desenvolvedores.
- Demonstrar boas práticas no desenvolvimento de APIs.

## Funcionalidades
- Adicionar uma nova pessoa.
- Listar todas as pessoas.
- Atualizar informações de uma pessoa.
- Remover uma pessoa.

## Tecnologias Utilizadas
- Node.js
- Express.js

## Endpoints

### 1. Adicionar uma nova pessoa
**POST** `/pessoas`  
**Descrição:** Adiciona uma nova pessoa ao sistema.  
**Corpo da Requisição (JSON):**
```json
{
    "nome": "string",
    "idade": "number",
}
```
**Resposta (201 Created):**
```json
{
    "id": "string",
    "nome": "string",
    "idade": "number",
}
```

### 2. Listar todas as pessoas
**GET** `/pessoas`  
**Descrição:** Retorna uma lista de todas as pessoas cadastradas.  
**Resposta (200 OK):**
```json
[
    {
        "id": "string",
        "nome": "string",
        "idade": "number",
    }
]
```

### 3. Atualizar informações de uma pessoa
**PUT** `/pessoas/:id`  
**Descrição:** Atualiza os dados de uma pessoa existente.  
**Parâmetros de URL:**  
- `id` (string): ID da pessoa a ser atualizada.  
**Corpo da Requisição (JSON):**
```json
{
    "nome": "string",
    "idade": "number",
    
}
```
**Resposta (200 OK):**
```json
{
    "id": "string",
    "nome": "string",
    "idade": "number",

}
```

### 4. Remover uma pessoa
**DELETE** `/pessoas/:id`  
**Descrição:** Remove uma pessoa do sistema.  
**Parâmetros de URL:**  
- `id` (string): ID da pessoa a ser removida.  
## Como Executar

Siga os passos abaixo para executar a aplicação:

1. **Clone o repositório**  
    ```bash
    git clone https://github.com/seu-usuario/Good-Practices-for-AIs.git
    cd Good-Practices-for-AIs
    ```

2. **Instale as dependências**  
    Certifique-se de que você tem o Node.js instalado. Em seguida, execute:  
    ```bash
    npm install
    ```

3. **Inicie o servidor**  
    Execute o comando abaixo para iniciar o servidor:  
    ```bash
    npm start
    ```

4. **Acesse a API**  
    A API estará disponível em `http://localhost:3000`. Use ferramentas como Postman ou cURL para interagir com os endpoints.
