---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Como mencionado em nosso post de migração TypeScript, lançamos SDKs de cliente gerados e tipados para dez linguagens de programação.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### Novidades

Em nosso [post de migração TypeScript](/(1-31-2025)-fastcomments-typescript-migration-completed-pt_br.html), mencionamos que os SDKs de cliente gerados estavam a caminho. Eles estão aqui.

FastComments agora oferece SDKs oficiais e tipados para **dez linguagens**:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Cada SDK é gerado a partir da mesma especificação OpenAPI que nosso servidor produz. Tipos, assinaturas de métodos e modelos de requisição/resposta permanecem sincronizados com a API real automaticamente. Seu compilador detecta erros de digitação em nomes de campos e parâmetros ausentes antes que seu código faça qualquer requisição de rede.

### Como Funciona

A migração TypeScript foi um pré-requisito para isso. Agora que o código do nosso servidor está totalmente tipado, usamos [nosso fork do TSOA](https://github.com/FastComments/tsoa) para gerar uma especificação OpenAPI 3.0 diretamente a partir dos nossos controladores de rotas. Essa especificação é alimentada no [OpenAPI Generator](https://openapi-generator.tech/) para produzir bibliotecas cliente para cada linguagem.

Quando a API muda, nossa ferramenta detecta a diferença na especificação, regenera os SDKs afetados, executa testes para cada linguagem e abre pull requests automaticamente. Construímos uma pequena ferramenta de gerenciamento em Nim que orquestra o ciclo de atualização‑teste‑lançamento em todos os dez repositórios.

### O que há em Cada SDK

Cada SDK fornece duas classes de API:

- **`DefaultApi`**: endpoints autenticados que requerem sua chave de API. Use-os no lado do servidor para moderação, gerenciamento de usuários, análises e operações em lote.
- **`PublicApi`**: endpoints não autenticados seguros para serem chamados a partir de navegadores e aplicativos móveis. Eles cobrem a obtenção de comentários, publicação, votação e outras operações voltadas ao cliente.

Todos os SDKs também incluem utilitários SSO para integrar com seu sistema de autenticação existente. O SDK TypeScript ainda fornece assinaturas de eventos em tempo real para comentários ao vivo.

### Documentação

A documentação completa da API está disponível em [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Cada repositório SDK também inclui docs gerados que cobrem todos os métodos e modelos disponíveis.

Para integração SSO, veja nosso [guia SSO](https://docs.fastcomments.com/guide-sso.html). Todos os dez SDKs incluem auxiliares SSO usando suas bibliotecas nativas de criptografia.

### Em Conclusão

Ter um servidor totalmente tipado tornou simples gerar uma especificação OpenAPI confiável e, a partir daí, gerar clientes para dez (e, quem sabe, mais!) linguagens foi basicamente uma questão de construir a automação e melhorar nossas definições de tipos para que sejam consumíveis, sem adicionar abstrações excessivas que desacelerariam o FastComments!

Como em todos os lançamentos importantes, estamos satisfeitos por ter podido dedicar tempo para otimizar, testar e lançar corretamente esses SDKs. Deixe-nos saber abaixo se você tem algum feedback ou se há alguma linguagem que você gostaria que adicionássemos.

Saúde!

{{/isPost}}

---

---