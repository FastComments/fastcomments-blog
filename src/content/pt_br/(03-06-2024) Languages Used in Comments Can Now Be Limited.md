---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Agora é Possível Limitar os Idiomas Usados em Comentários[/postlink]

{{#unless isPost}}
Algumas comunidades querem restringir os idiomas utilizados. Isso agora pode ser feito com o FastComments.
{{/unless}}

{{#isPost}}

### Novidades

O FastComments sempre tentou suportar o maior número de idiomas e regiões possível.

No entanto, algumas comunidades desejam limitar os idiomas usados para se comunicar e escrever comentários.

Em vez de impor isso como uma regra, e potencialmente banir usuários, agora pode ser configurado explicitamente na plataforma.

### Como Configurar

Na mesma interface de Personalização de Widgets com a qual você provavelmente está familiarizado, agora você pode selecionar um ou mais idiomas em que os comentários podem ser escritos.

A plataforma, ao submeter um comentário, tentará determinar o idioma do comentário em tempo real. Se a confiança do idioma determinado for
superior a 70%, e corresponder a um idioma permitido, o comentário será permitido.

Se o comentário escrito não estiver em um idioma definido pela sua configuração, o usuário verá uma mensagem de erro em seu próprio idioma.

### Impacto para Desenvolvedores

Essa configuração também impactará comentários salvos via API.

Você receberá um erro como o seguinte:

            status: 'failed',
            reason: `O comentário parece ser um desses idiomas: [es], mas apenas [en,fr] são permitidos.`,
            code: 'language-not-allowed',
            translatedError: "Uma mensagem de erro no idioma do usuário."

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por termos conseguido dedicar tempo para otimizar, testar e lançar adequadamente esse recurso. Nos avise
abaixo se você descobrir algum problema.

Cheers!

{{/isPost}}

---