---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]SDKs de Cliente Gerados e Seguros em Tipo Lançados[/postlink]

{{#unless isPost}}
Como mencionado em nosso post sobre a migração para TypeScript, lançamos SDKs de cliente gerados e seguros em tipo para dez linguagens de programação.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O que há de Novo

Em nosso [post sobre a migração para TypeScript](/blog/fastcomments-typescript-migration-completed), mencionamos que SDKs de cliente gerados estavam a caminho. Eles já estão aqui.

A FastComments agora fornece oficialmente SDKs seguros em tipo para **dez linguagens**:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Cada SDK é gerado a partir da mesma especificação OpenAPI que nosso servidor produz. Tipos, assinaturas de métodos, e modelos de solicitação/resposta permanecem sincronizados com a API real automaticamente. Seu compilador captura erros de digitação nos nomes dos campos e parâmetros ausentes antes que seu código faça uma solicitação de rede.

### Como Funciona

A migração para TypeScript foi um pré-requisito para isso. Agora que nosso código de servidor está totalmente tipado, usamos [nosso fork do TSOA](https://github.com/FastComments/tsoa) para gerar uma especificação OpenAPI 3.0 diretamente de nossos controladores de rota. Essa especificação é alimentada no [OpenAPI Generator](https://openapi-generator.tech/) para produzir bibliotecas de clientes para cada linguagem.

Quando a API muda, nossas ferramentas detectam a diferença na especificação, regeneram os SDKs afetados, executam testes para cada linguagem e abrem pull requests automaticamente. Construímos uma pequena ferramenta gerenciadora em Nim que orquestra o ciclo de atualização-teste-lançamento em todos os dez repositórios.

### O que há em Cada SDK

Cada SDK fornece duas classes de API:

- **`DefaultApi`**: endpoints autenticados que requerem sua chave de API. Use estes no lado do servidor para moderação, gerenciamento de usuários, análise e operações em massa.
- **`PublicApi`**: endpoints não autenticados seguros para chamar a partir de navegadores e aplicativos móveis. Estes cobrem a obtenção de comentários, postagem, votação e outras operações voltadas para o cliente.

Todos os SDKs também incluem utilitários de SSO para integrar com seu sistema de autenticação existente. O SDK de TypeScript, além disso, fornece assinaturas de eventos em tempo real para comentários ao vivo.

### Documentação

A documentação completa da API está disponível em [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Cada repositório de SDK também inclui documentação gerada cobrindo cada método e modelo disponível.

Para integração com SSO, veja nosso [guia de SSO](https://docs.fastcomments.com/guide-sso.html). Todos os dez SDKs incluem ajudantes de SSO usando suas bibliotecas de criptografia nativas.

### Em Conclusão

Ter um servidor totalmente tipado tornou simples gerar uma especificação OpenAPI confiável, e a partir daí, gerar clientes para dez (e um dia mais!) linguagens foi principalmente uma questão de construir a automação e melhorar nossas definições de tipo para que pudessem ser consumíveis, sem adicionar muita abstração que atrasaria o FastComments!

Como todos os lançamentos importantes, estamos felizes por termos conseguido dedicar tempo para otimizar, testar e lançar adequadamente esses SDKs. Deixe-nos saber abaixo se você tem algum feedback ou se há uma linguagem que gostaria que adicionássemos.

Saudações!

{{/isPost}}

--- 

---