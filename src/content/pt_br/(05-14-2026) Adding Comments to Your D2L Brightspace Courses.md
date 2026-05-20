---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Adicionando Comentários aos Seus Cursos D2L Brightspace[/postlink]

{{#unless isPost}}
FastComments agora é instalado no D2L Brightspace em um único passo através do Registro Dinâmico LTI 1.3, com SSO automático, comentários em thread e chat colaborativo para cada unidade de curso.
{{/unless}}

{{#isPost}}

### Novidades

FastComments agora suporta D2L Brightspace através do padrão IMS LTI 1.3 Advantage, incluindo Registro Dinâmico.
Isso significa que não há plugin para instalar, nenhuma troca de chaves para coordenar e nenhuma fiação por curso. Seu
administrador do Brightspace cola uma única URL na tela de registro do LTI Advantage, e FastComments e Brightspace concluem
o handshake automaticamente. Os instrutores então adicionam FastComments a qualquer unidade da mesma forma que adicionam
qualquer outra ferramenta externa, e os alunos veem comentários em thread incorporados diretamente no conteúdo do curso.

<div class="text-center">
    <div class="sm">Comentários em thread incorporados como um tópico dentro de uma unidade Brightspace</div>
    <img src="images/d2l-course-comments.png" alt="FastComments rodando dentro de uma unidade D2L Brightspace" title="FastComments em uma Unidade Brightspace" />
</div>

### Começando

A partir do seu painel do FastComments, abra a [página de Configuração LTI 1.3](https://fastcomments.com/auth/my-account/lti-config),
selecione **D2L Brightspace** no dropdown da plataforma e clique em **Gerar URL**. Você receberá uma URL de registro de
uso único que é válida por 30 minutos.

No Brightspace, seu administrador abre **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, cola a
URL no campo **Tool initiation registration endpoint** e envia. O Brightspace realiza o handshake de registro
com FastComments, troca chaves de assinatura e cria a entrada da ferramenta. O pop-up se fecha automaticamente quando
completo.

Após o registro, o administrador ativa a ferramenta e cria uma implantação com escopo para as unidades da organização
que devem ter acesso. A partir desse ponto, FastComments aparece no seletor de conteúdo de cada curso em **Adicionar Existente**.

### Adicionando a um Curso

Dentro de qualquer unidade de curso, o instrutor clica em **Adicionar Existente**, escolhe **FastComments** na lista de atividades,
e a ferramenta é colocada como um tópico na unidade. Renomear o tópico, reordená-lo dentro da unidade, restringi-lo a grupos
específicos ou condições de liberação, e alternar a visibilidade tudo utiliza os controles padrão do Brightspace. Não há uma
tela de configuração separada do FastComments para os instrutores aprenderem.

Para incorporação inline, a mesma ferramenta FastComments também está disponível através do editor HTML do Brightspace no
diálogo **Inserir Itens** sob **LTI Advantage**. Isso utiliza o fluxo de LTI Deep Linking para inserir um thread de comentários
diretamente dentro de uma leitura, instruções de quiz ou qualquer outro tópico HTML, assim a discussão fica próxima do
conteúdo ao qual se refere.

### SSO Automático

Os alunos nunca veem uma tela de login. O lançamento LTI 1.3 transporta a identidade do aluno no Brightspace (`sub`, `name`, `email`,
e `picture`) assinada pela chave privada do Brightspace. FastComments verifica a assinatura em relação ao JWKS publicado
pelo Brightspace, cria uma sessão SSO segura para o usuário e renderiza o widget de comentários. Os comentários são atribuídos
à conta do aluno no Brightspace, e os instrutores moderam usando sua identidade no Brightspace também.

O mapeamento de funções é automático. Usuários **Administrador** do Brightspace aparecem como administradores do FastComments,
usuários **Instrutor** como moderadores, e todos os outros como comentaristas padrão. Não há uma lista separada de usuários para
manter do lado do FastComments - ela segue o que o Brightspace diz.

### Escopo de Thread

Cada thread de comentário é vinculada a um triplo: o host do Brightspace, o curso e o link do recurso. Isso significa que dois
cursos que usam o tópico "Reflexões de Leitura" cada um recebe sua própria discussão. O mesmo é verdade se um instrutor
adicionar FastComments duas vezes no mesmo curso (por exemplo, uma vez como tópico de unidade e outra vez como uma incorporação
inline dentro de uma página HTML) - cada colocação é sua própria thread.

A parte do host faz parte do identificador da thread de propósito. Se sua instituição opera várias instâncias do Brightspace
sob uma única conta do FastComments, as conversas permanecem isoladas a cada instância mesmo quando os IDs de curso colidem.

### Em Conclusão

Se você está usando D2L Brightspace, pode estar ativo com FastComments em uma tarde: generate a URL, cole-a no
Brightspace e deixe os instrutores adicionarem a ferramenta em suas unidades. Para o guia completo passo a passo incluindo
solução de problemas e capturas de tela por página, consulte o
[Guia de Instalação LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). A mesma integração também
cobre Moodle, Blackboard, Sakai, Schoology e qualquer outra plataforma LTI 1.3 Advantage, mas o Brightspace foi nosso alvo
piloto e o fluxo é muito sólido lá.

Saudações!

{{/isPost}}

---