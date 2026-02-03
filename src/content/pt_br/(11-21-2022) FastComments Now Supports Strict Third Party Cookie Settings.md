---
[category:Security]

###### [postdate]
# [postlink]FastComments Agora Suporta Configurações Rigorosas de Cookies de Terceiros[/postlink]

{{#unless isPost}}
Até agora, o FastComments exigia que os cookies de terceiros estivessem habilitados para funcionar plenamente. Isso não é mais o caso!
{{/unless}}

{{#isPost}}

### Novidades

Desabilitar cookies de terceiros por padrão está se tornando a norma em navegadores focados em privacidade. Um exemplo disso é o Safari da Apple no iOS, onde
se você deixar seu e-mail para comentar com o FastComments, verificar aquele comentário e, em seguida, voltar a essa página para deixar outro comentário, ou responder
a alguém, descobrirá que quaisquer comentários adicionais que você deixar serão marcados como não verificados.

Isso só acontecerá com a configuração padrão que mostra um rótulo de `Não Verificado` nos comentários. No entanto, isso pode impactar outras coisas, como aprovações automáticas
se as aprovações automáticas estiverem habilitadas apenas para comentários verificados.

Como você pode imaginar, isso pode resultar em um comportamento frustrante onde um usuário verifica seu comentário, clica em "Mantenha-me Conectado" e ele ainda não está
conectado quando visita seu site ou aplicativo. Note que isso não se aplica a integrações SSO, pois o SSO não depende
de cookies.

Agora, com uma nova configuração que pode ser habilitada chamada `Habilitar Popup de Cookies de Terceiros` nas configurações do widget, esse problema é resolvido ao
abrir um popup que busca o cookie do usuário. Por enquanto, isso só ocorre se eles interagirem com o widget de comentários, mas o resultado é que
o comentário será postado a partir da sessão deles no FastComments.com, marcando seu comentário como verificado, e assim por diante.

### Como Obter & Documentação

Todos os clientes do FastComments em todos os planos agora têm acesso a esse recurso. Confira [a documentação](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) para aprender como habilitar o
bypass de cookies de terceiros.

### Em Conclusão

Como em todos os grandes lançamentos, estamos felizes por termos tido tempo para otimizar, testar e lançar adequadamente esse recurso. Deixe-nos saber
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---