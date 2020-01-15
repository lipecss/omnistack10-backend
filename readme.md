# **Near Dev**

Este é um projeto desenvolvido durante a semana OmniStack 10 da RocketSeat.

Com ele, é possivel cadastrar e verificar usuarios próximos de sua localização exeibindo as stacks de cada um, informações do Github e sua localização.

## **O QUE TEM NO BACKEND**
- Framework de Servidor [express](https://www.npmjs.com/package/express)
- Carregamento de variaveis de ambiente [dotenv](https://www.npmjs.com/package/dotenv)
- Requisições HTTPS (APIS) [Axios](https://www.npmjs.com/package/axios)
- ODM [mongoose](https://www.npmjs.com/package/mongoose)
- Cors (cors)[https://www.npmjs.com/package/cors]

## **SCRIPTS**
- **start**: Rodar projeto localmente com o __node__.
- **dev**. Rodar o projeto localmente com o __Nodemon__.

## **VARIAVEIS DE AMBIENTE**
Na pasta backend crie um arquivo `.env` com a seguinte informação:
```
MONGO_URL 
```
- MONGO_URL: Sua URL de conexão do mognodb

# **Códigos de Status HTTP**
- 200: OK; Resposta padrão para solicitações HTTP bem-sucedidas (Listamos alguma coisa e recebemos)
- 201: Criado; A solicitação foi atendida. Novo recurso criado ou editado (POST, PUT e PATCH)
- 204: sem conteúdo; Solicitação processada. Nenhum conteúdo retornado (Não esperamos nenhum conteudo, DELETE)
- 301: mudou-se permanentemente; Este e todos os pedidos futuros direcionados para o URI fornecido
- 304: Não Modificado; O recurso não foi modificado desde a última solicitação
- 400: Solicitação Inválida; Pedido não pode ser preenchido devido a sintaxe incorreta
- 401: não autorizado; A autenticação é possível, mas falhou
- 403: Proibido; Servidor se recusa a responder ao pedido
- 404: não encontrado; Recurso solicitado não foi encontrado (Pesquisando por um ID X e não foi encontrado)
- 500: Erro interno do servidor; Mensagem de erro genérica quando o servidor falha
- 501: Não implementado; O servidor não reconhece o método ou não tem capacidade para cumprir
- 503: serviço indisponível; O servidor está indisponível no momento

## **EXEMPLOS DE ENDPOINTS**

| **Metodos** | **EndPoint** | **Descrição** |
|:-:|:-:|:-:|
| **GET** | /devs | Retorna a lista de devs |
| **POST** | /devs | Cria um novo dev |
| **PUT** | /devs/:id | Atualiza o Dev mediante o ID informado |
| **DELETE** | /devs/:id | Apaga o Dev mediante o ID informado |


## **TESTADORES DE API**
Existe internamente um arquivo com as rotas iniciais para ser importado no **Postman**, **Insominia** e **Afins**. É recomendado apagar este arquivo ou mover para outro lugar para não ficar disponivel em produção possibilitando uma possivel falha de segurança na descoberta de informações sensiveis.

Para importar no **Insominia**:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Near%20Dev%20-%20Omnistack10&uri=https%3A%2F%2Fgithub.com%2Flipecss%2Fsemana-omnistack-10%2Fblob%2Fmaster%2Fpublic%2Fapi%2Finsomnia.json)

O arquivo esta localizado em **src > public > api > v1 > insominia.json** para importar no **D+** manualmente.