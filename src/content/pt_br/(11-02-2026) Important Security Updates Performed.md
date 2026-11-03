[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Atualizações de Segurança Importantes Realizadas[/postlink]

{{#unless isPost}}
Nós atualizamos o sistema operacional em todos os nossos servidores para corrigir uma vulnerabilidade recente do TCP no Linux e atualizamos o Node.js para incluir sua versão de segurança de outubro. Nenhuma ação é necessária da sua parte.
{{/unless}}

{{#isPost}}

### O que há de novo

Recentemente concluímos duas atualizações de segurança na infraestrutura do FastComments: uma atualização do sistema operacional para corrigir uma vulnerabilidade no código TCP do kernel Linux e uma atualização do Node.js para incluir a versão de segurança mais recente.

### Kernel Linux

Todos os nossos servidores foram atualizados e agora executam um kernel que inclui a correção para
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Trata-se de um uso após liberação (use-after-free) no código TCP IPv4 do kernel. O kernel poderia liberar as opções IP anexadas a uma conexão enquanto outra CPU ainda as estivesse lendo, por exemplo ao construir a resposta SYNACK durante o handshake TCP. A correção aguarda até que nenhuma CPU ainda esteja lendo essa memória antes de liberá‑la.

### Node.js

FastComments funciona em Node.js, e atualizamos para a versão 24.22.1, a versão corrigida da linha 24.x proveniente da <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">versão de segurança de outubro de 2026 do Node.js</a>.

Essa versão corrige 10 vulnerabilidades nas versões suportadas do Node.js. 8 delas afetam a linha 24.x, e 4 são classificadas como altas: duas na validação TLS de endereços IP, uma no tratamento de nomes DNS e uma no decodificador Brotli. Ela também atualiza dependências incluídas, como OpenSSL, c-ares, Undici e o pacote de certificados CA.

### O que você precisa fazer

Nada. Essas atualizações são feitas totalmente por nós, portanto seus widgets, integrações de API e configurações de SSO não precisam de alterações.

### Em conclusão

Manter nossa infraestrutura atualizada é uma parte contínua da operação do FastComments, e continuaremos a aplicar atualizações como estas à medida que são lançadas. Se você tiver alguma dúvida, avise‑nos abaixo.

Saudações!

{{/isPost}}

---