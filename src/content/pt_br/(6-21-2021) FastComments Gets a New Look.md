---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Ganho um Novo Visual[/postlink]

{{#unless isPost}} FastComments foi atualizado. Saiba mais sobre a atualização e como você pode obtê-la. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### Um Novo Visual

Até hoje, a aparência e a experiência do widget de comentários do FastComments evoluíram apenas de forma incremental. Hoje, estamos lançando uma versão completamente nova!

Confira a comparação abaixo (arraste o controle deslizante para comparar):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Clientes Existentes

Como grande parte da nossa base de usuários personaliza o widget de comentários, mantivemos a nova interface totalmente separada. Você não deve ver mudanças até ser migrado.

### Quem Recebe

Novos clientes que se inscreverem a partir de hoje receberão automaticamente o novo design. Todas as nossas estruturas, bibliotecas e plugins receberam atualizações para incorporar a nova versão do widget de comentários do FastComments.

### Fim de Vida da Versão Anterior

Atualmente, não estamos definindo um fim de vida para a versão anterior do widget de comentários. Isso não significa que não anunciaremos um no futuro. No entanto, quando fizermos isso, daremos um prazo razoável (6 a 12 meses entre o anúncio e a desativação).

Nosso sistema de testes automatizados foi atualizado para suportar diferentes versões do widget de comentários, de modo que a versão anterior ainda receberá testes automatizados contínuos.

### Modo Escuro e Outros Recursos

O novo design suporta modo escuro, assim como o widget de comentários original. Todas as flags de recursos e configurações foram migradas.

Em termos de Modo Escuro, com a antiga interface de comentários, os recursos para o Modo Escuro sempre eram incluídos no carregamento da página, mesmo que não fossem utilizados. Isso significava cerca de 2kb extras que sempre eram baixados para o cliente - mesmo que não fossem necessários.

A nova versão do widget de comentários busca esses recursos, incluindo a estilização, apenas se necessário.

### Avatar Padrão

O avatar padrão utilizado na nova interface é diferente. Ao migrar, o avatar padrão usado em todo o produto no painel de administração e em todos os e-mails de notificação também será atualizado.

### Implicações da Regra de Personalização

Estamos cientes de que, ao fazermos alterações de estilo no widget de comentários visível ao público, podemos quebrar as personalizações dos nossos clientes. Não se preocupe, estamos de olho nisso e analisamos o estilo do widget personalizado de todos para garantir que não houve regressões. No entanto, se você estiver vendo problemas, nos avise.

### Implicações de Desempenho

O tamanho total do widget de comentários aumentou de 15.4kb para 17.4kb. Embora achemos que um leve aumento no tamanho do pacote para a melhoria na aparência da interface vale a pena, planejamos medidas para reduzi-lo novamente.

De modo geral, a nova interface carrega mais rápido, já que mais recursos estão agrupados, resultando em menos solicitações.

### Como Migrar

#### Via Suporte

Basta entrar em contato com seu representante de suporte, ou inicie a conversa [aqui](https://fastcomments.com/auth/my-account/help).

#### WordPress

Se você está usando **WordPress**, basta atualizar para a versão mais recente e atualizar qualquer estilo personalizado que você tenha.

#### Integrações Personalizadas

Se você está usando o widget de comentários **VanillaJS**, basta mudar:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Para:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Se você estiver usando as bibliotecas **React, Angular ou Vue**, basta atualizar para a versão 2.

### Algumas Estatísticas Nerds

Desde a concepção, design e implementação, este foi um projeto de dois meses que abrangeu mais de **100 arquivos** e mudou mais de **nove mil linhas de código**.

Nós também reformulamos completamente nosso sistema de build para poder ter uma base de código compartilhada entre versões do widget de comentários. Esse sistema nos permite usar expressões de tempo de compilação para incluir apenas o código para a versão apropriada da interface, reduzindo o tamanho do pacote do widget.

### Pensando à Frente

O design anterior nos durou de 2019 até meados de 2021. Esperamos que este novo visual nos leve mais longe no futuro, e nossa nova infraestrutura para gerenciar várias versões da interface de comentários permitirá que o FastComments cresça sem interrupções para nossa base de clientes ao longo do tempo.

Feliz comentando!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---