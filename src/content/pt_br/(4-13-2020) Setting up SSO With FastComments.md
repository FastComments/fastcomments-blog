---
[category:API & Development]

###### [postdate]
# [postlink]Configurando SSO Com FastComments[/postlink]

{{#unless isPost}}
FastComments fornece soluções de SSO para várias plataformas e integrações personalizadas.
{{/unless}}

{{#isPost}}

# Visão Geral

## O que é SSO?

SSO, ou single-sign-on, é um conjunto de convenções usadas para permitir que você ou seus usuários utilizem o FastComments sem ter que criar outra conta.

Assumindo que você não permite comentários anônimos, uma conta é necessária para comentar com o FastComments. Tornamos esse processo de inscrição muito fácil - o usuário apenas deixa seu email ao comentar. No entanto, entendemos que até isso é uma fricção extra que alguns sites querem evitar.

## Como posso obter isso?

Todos os tipos de contas atualmente têm acesso ao SSO, bem como suporte. No entanto, o número máximo de usuários de SSO varia dependendo do seu pacote.

### Usuários do WordPress

Se você estiver usando nosso <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin do WordPress</a>, então não há código para escrever! Basta ir à página de administração do plugin, clicar em Configurações de SSO e, em seguida, Ativar.

Isso o levará a um assistente de clique único que criará sua chave de API, enviará para sua instalação do WordPress e ativará o SSO. Consolidamos isso em um único clique para você.

Observe que se você estiver instalando o plugin pela primeira vez, terá que seguir o processo de configuração antes de ver a página de administração com o botão de Configurações de SSO.

### Integrações Personalizadas

O SSO do FastComments usa criptografia HMAC-SHA256 como o mecanismo para implementar SSO. Primeiro, abordaremos a arquitetura geral, forneceremos exemplos e passos detalhados. No entanto, ao final deste artigo, há instruções para **migrar do Disqus e Commento**.

O fluxo se parece com isto:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="Diagrama de SSO do FastComments" title="Diagrama de SSO do FastComments" class="lozad" />
</div>

Você não precisa escrever novos endpoints de API com o SSO do FastComments. Basta criptografar as informações do usuário usando sua chave secreta e passar o payload para o widget de comentários.

Nós fornecemos exemplos de código totalmente funcionais em várias linguagens/tempo de execução, incluindo NodeJS, Java/Spring e PHP puro. Embora usemos ExpressJS no exemplo de NodeJS e Spring no exemplo de Java, não há frameworks/bibliotecas necessários nessas execuções para implementar o SSO do FastComments - os pacotes de criptografia nativa funcionam.

Você pode encontrar o repositório de exemplos de código aqui:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">Exemplos de Código SSO do FastComments</a>

#### Obtenha Sua Chave Secreta da API

Sua chave secreta da API pode ser recuperada <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">nesta página</a>. Você também pode encontrar esta página acessando Minha Conta, clicando no bloco API/SSO e, em seguida, clicando em "Obter Chave Secreta da API".

#### Parâmetros do Widget de Comentários

A documentação da API em alto nível para o widget de comentários pode ser encontrada <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">aqui</a> e clicando em "Mostrar Opções Avançadas". Procure por SSO na página.

Vamos entrar em mais detalhes sobre o que esses parâmetros significam.

O widget de comentários aceita um objeto de configuração - você já passa isso se estiver usando o FastComments para passar seu id de cliente (chamado tenantId).

Para habilitar o SSO, passe um novo objeto "sso", que deve ter os seguintes parâmetros. Os valores devem ser gerados **do lado do servidor**.

- userDataJSONBase64: Os dados do usuário em formato JSON, que são então codificados em Base64.
- verificationHash: O hash HMAC-SHA256 criado de UNIX_TIME + userDataJSONBase64.
- timestamp: O tempo unix atual. **Não deve estar no futuro ou mais de três horas no passado.**
- loginURL: Uma URL que o widget de comentários pode mostrar para fazer o login do usuário.
- logoutURL: Uma URL que o widget de comentários pode mostrar para fazer o logout do usuário.
- loginCallback: Quando fornecido em vez da URL de login, uma função que o widget de comentários invocará ao clicar no botão de login.
- logoutCallback: Quando fornecido em vez da URL de logout, uma função que o widget de comentários invocará ao clicar no botão de logout.

#### O Objeto Usuário 

O objeto Usuário contém o seguinte esquema:

- id (string, obrigatório) (1k caracteres máximos)
- email (string, obrigatório) (1k caracteres máximos). Nota: Deve ser único.
- username (string, obrigatório) (1k caracteres máximos). Nota: O nome de usuário não pode ser um email. Não precisa ser único.
- avatar (string, opcional) (3k caracteres máximos)
- optedInNotifications (booleano, opcional)
- displayLabel (string, opcional, 100 caracteres máximos). Este rótulo será exibido ao lado do nome dele.
- websiteUrl (string, opcional, 2000 caracteres máximos). O nome do usuário será um link para isto.

#### Notificações

Para habilitar ou desabilitar notificações, defina o valor de optedInNotifications como verdadeiro ou falso, respectivamente. A primeira vez que o usuário carrega a página com esse valor no payload SSO, suas configurações de notificação serão atualizadas.

#### Usuários VIP & Rótulos Especiais

Você pode exibir um rótulo especial ao lado do nome do usuário usando o campo opcional "displayLabel".

#### Usuários não autenticados

Para representar um usuário não autenticado, simplesmente não preencha userDataJSONBase64, verificationHash ou timestamp. Forneça uma loginURL.

#### Exemplos Diretos para Serializar e Hashing Dados de Usuário

Mais detalhes como exemplos <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">aqui (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">aqui (java)</a> e
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">aqui (php)</a>.


### Migrando do Disqus SSO

As maiores diferenças entre Disqus e FastComments SSO são que o Disqus usa SHA1 para criptografia enquanto nós usamos SHA256. Isso significa que migrar do Disqus é fácil - mude o algoritmo de hash utilizado de SHA1 para SHA256 e atualize os nomes das propriedades passadas para a interface do usuário.

### Migrando do Commento SSO

Commento usa uma abordagem de SSO drasticamente diferente - eles requerem que você tenha um endpoint que eles invocam para autenticar o usuário. O FastComments é o oposto - 
basta codificar e hash as informações do usuário usando sua chave secreta e passá-las.

Entendemos que qualquer integração pode ser um processo complicado e doloroso. Não hesite em entrar em contato com seu representante ou usar a <a href="https://fastcomments.com/auth/my-account/help" target="_blank">página de suporte</a>.

{{/isPost}}

---