---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Comentários Bloqueados Agora Estão Realmente Bloqueados[/postlink]

{{#unless isPost}}
O ícone de bloqueio finalmente aparece nos comentários bloqueados, e os comentários bloqueados não podem mais ser editados ou excluídos até que um administrador os desbloqueie.
{{/unless}}

{{#isPost}}

### O que há de novo

Moderadores podem bloquear comentários há bastante tempo. Bloquear um comentário impede novas respostas, o que é útil quando um tópico já foi discutido ou uma sub-conversa saiu do controle.

O problema é que "bloqueado" não tinha muito peso. Os leitores não tinham indicação visual de que um comentário estava bloqueado. E mesmo que novas respostas fossem bloqueadas, o autor original ou qualquer pessoa com acesso de edição ainda poderia editar ou excluir o comentário. Isso não é realmente bloquear. Esta atualização corrige ambos os problemas.

### O Ícone de Bloqueio

Quando um moderador bloqueia um comentário, um pequeno cadeado aparece no canto superior direito do comentário, bem ao lado do ícone de alfinete. Ele é exibido para todos os leitores - não apenas moderadores. Desbloquear o comentário remove-o.

O ícone respeita o modo claro e o modo escuro, assim como o ícone de alfinete.

### Editar e Excluir Estão Bloqueados

Um comentário bloqueado não pode ser editado ou excluído por ninguém, incluindo administradores e moderadores. Se você quiser editar ou remover um comentário bloqueado, desbloqueie-o primeiro, faça a alteração e, em seguida, bloqueie novamente se desejar.

Isso se aplica a todos os caminhos que tocam um comentário:

- O widget voltado para o usuário oculta as opções de menu Editar e Excluir em comentários bloqueados.
- Os endpoints PATCH e DELETE da API pública retornam um erro `locked` se o comentário alvo estiver bloqueado.
- A interface de moderação do administrador exibe o erro de bloqueio se você tentar excluir sem desbloquear primeiro.

### Exceções

Um punhado de caminhos intencionalmente ignora o bloqueio para que possam realizar seu trabalho:

- Exclusão de conta. Se um usuário excluir sua conta FastComments, seus comentários serão removidos independentemente do estado de bloqueio.
- Limpeza de usuários de inquilinos / SSO. Mesma ideia para remoção de usuários em nível de inquilino.
- Exclusão automática programada. Se você programou um comentário para ser excluído em um horário específico, o agendador não precisa se preocupar com bloqueios.
- Limpeza de duplicados. A ferramenta de deduplicação remove duplicados bloqueados sem cerimônia.
- Banimentos de moderadores com "excluir todos os comentários deste usuário". Banir um usuário e varrer seu histórico é uma ação intencional única, então também limpa bloqueios.

Tudo o mais - o widget, a interface de moderação, a API pública, chamadores externos - respeita o bloqueio.

### Forma de Erro da API

Se você chamar a API pública para editar ou excluir um comentário bloqueado, você receberá uma resposta como:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Comment is locked.",
    "translatedError": "Este comentário está bloqueado e não pode ser editado ou excluído. Desbloqueie-o primeiro."
}</div>

O status HTTP é 401. O campo `translatedError` usa o idioma configurado do seu inquilino e qualquer tradução personalizada que você tenha configurado.

### Para Concluir

Mudança pequena, mas que fecha uma lacuna que estava aberta por um tempo. Bloqueado agora significa bloqueado.

Saudações!

{{/isPost}}