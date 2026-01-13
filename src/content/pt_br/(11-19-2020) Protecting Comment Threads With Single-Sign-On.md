---
[category:Security]

###### [postdate]
# [postlink]Protegendo Threads de Comentários Com SSO[/postlink]

{{#unless isPost}}
Não considera seus threads de comentários públicos? Tem SSO configurado para autenticação? Isso pode ser para você.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### Introdução

O FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detalhes aqui)</a> oferece aos seus usuários uma maneira
de comentar sem precisar fazer login em outra plataforma.

No entanto, isso por si só não garante a segurança de seus threads de comentários, uma vez que, por padrão, os dados dos comentários são informações disponíveis publicamente - qualquer pessoa que puder visualizar
a página pode ver os comentários. No entanto, esta versão muda isso.

#### Configuração Sem Código

Podemos impedir a visualização e a interação com nossos threads de comentários, quando o SSO está configurado, criando uma <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">regra de personalização</a>.

Ao fazer isso, procure por SSO e você encontrará esta opção:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opção de Configuração para Restringir Comentários via SSO" alt="Opção de Configuração para Restringir Comentários via SSO" class="lozad" />
</div>

Ative-a e salve a regra de personalização.

#### Proteger Apenas um Domínio ou Página Específica

Para proteger apenas um determinado domínio ou página, vamos simplesmente configurar a regra de personalização para fazer isso.

No topo da interface de personalização, encontraremos dois campos, Domínio e ID da URL.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opção de Configuração por Página ou Domínio" alt="Opção de Configuração por Página ou Domínio" class="lozad" />
</div>

Para proteger apenas um domínio específico, insira o domínio em questão no campo "domínio".

Para proteger uma página específica, insira uma URL da página no campo "ID da URL". Se você tiver uma integração personalizada com o FastComments, pode inserir um tipo de ID aqui
em vez de uma URL.

#### Proteção Além da Leitura

Ativar esta opção protegerá a página ou domínio de receber comentários, a menos que o usuário esteja logado via SSO. 

#### Problemas

Qualquer usuário que criou comentários antes da sua integração SSO não poderá vê-los, a menos que faça login via sua integração SSO.

#### Em Conclusão

Esperamos que você tenha achado este guia útil e fácil de ler. Sinta-se à vontade para comentar abaixo com quaisquer perguntas.

Saudações!

{{/isPost}}

---