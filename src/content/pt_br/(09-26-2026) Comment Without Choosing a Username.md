[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Comentário Sem Escolher um Nome de Usuário[/postlink]

{{#unless isPost}}
FastComments agora pode fornecer a cada novo visitante um nome de usuário único e neutro, para que nunca precisem inventar um. O Nome de Usuário Padrão compartilhado também não é mais “ocupado” pela primeira pessoa que o usa.
{{/unless}}

{{#isPost}}

### Novidades

Se o seu site não tem login, um visitante que deseja deixar um comentário é solicitado a fornecer duas coisas: um e‑mail e um nome de usuário.  
O e‑mail é fácil, mas o nome de usuário precisa ser único, será público e eles precisam pensar nele imediatamente.

Esta versão remove essa etapa. Ative **Generate Usernames Automatically** na personalização do seu widget, e cada novo visitante chega com um nome como `BraveOtter4172` já preenchido. Eles podem mantê‑lo ou sobrescrevê‑lo. De qualquer forma, chegam à caixa de comentários mais rápido.

### Como Ativar

Abra a <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, encontre a seção **Anonymization** e marque **Generate Usernames Automatically**. Não há mais nada para configurar.

Funciona com ou sem **Allow Anonymous Comments**. Se ainda quiser um e‑mail de cada comentarista, deixe os comentários anônimos desativados. Os visitantes inserem seu e‑mail, o nome de usuário é gerado para eles, e pronto. Se não precisar de e‑mail, ative os comentários anônimos e o visitante pode comentar sem digitar nada além do próprio comentário.

### O Que os Visitantes Veem

O campo de nome de usuário vem pré‑preenchido com o nome gerado. É um campo de entrada comum, então quem quiser ser conhecido por outro nome basta substituí‑lo. Nada está oculto e nada é forçado.

Os nomes são duas palavras e um número, portanto são legíveis e neutros. Ninguém acaba como `user_83729`.

### Cada Nome É Único

Um nome gerado é verificado contra contas existentes antes de ser oferecido, e é reservado para a sessão do navegador desse visitante, de modo que o próximo visitante não receba o mesmo. Usuários logados, usuários SSO e visitantes que já comentaram nunca recebem um novo nome. Eles mantêm o que já têm.

Um visitante que retorna e insere um e‑mail que já usou anteriormente é associado à sua conta existente, de modo que uma segunda visita não cria uma segunda identidade, mesmo que o navegador tenha sido limpo entre as visitas.

### Correção de Bug - O Nome de Usuário Padrão Agora é Realmente Compartilhado

Alguns de vocês têm usado **Default Username** com um valor como "Anonymous" para chegar perto disso. Isso tinha uma armadilha. Nomes de usuário são únicos, então o primeiro visitante que comentou como "Anonymous" com seu e‑mail possuía o nome, e o próximo visitante com um e‑mail diferente recebeu a mensagem de que o nome de usuário estava ocupado.

Isso foi corrigido. O nome de usuário padrão agora é tratado como um nome de exibição compartilhado, e não como uma identidade. Cada visitante que o mantém recebe sua própria conta nos bastidores, e todos são exibidos como "Anonymous". Nomes de usuário que os visitantes digitam ainda precisam ser únicos, como antes.

Se você definir ambos, o nome gerado tem prioridade.

### Documentação

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">O guia Generate Usernames Automatically</a> cobre a opção e como ela interage com as outras configurações de comentários anônimos.  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">O guia Default Username</a> cobre o comportamento de nome compartilhado.

### Em Conclusão

Este caso veio de um cliente que administra um site onde os visitantes são pacientes que podem deixar apenas um único comentário. Pedir-lhes um e‑mail e um nome de usuário único era uma pergunta a mais. Se alguma configuração está entre seus leitores e a caixa de comentários, avise‑nos abaixo.

Saúde!

{{/isPost}}

---