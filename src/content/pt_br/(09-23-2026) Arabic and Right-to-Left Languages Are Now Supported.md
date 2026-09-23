[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Árabe e Idiomas da Direita para a Esquerda Agora São Suportados[/postlink]

{{#unless isPost}}
FastComments agora fala árabe, e cada parte do FastComments é exibida da direita para a esquerda para árabe e hebraico. Contagens como "3 comentários" também usam agora a forma plural correta em todos os idiomas.
{{/unless}}

{{#isPost}}

### Novidades

O árabe agora é um idioma suportado, com o código de localidade `ar`. O widget de comentários, os outros widgets incorporáveis, os e‑mails, o painel e o site de marketing estão todos traduzidos.

O árabe também é escrito da direita para a esquerda, portanto adicioná‑lo exigiu que o FastComments fosse configurado para se exibir em ambas as direções. Essa correção também se aplica ao hebraico.

### Layout da Direita para a Esquerda

Quando a localidade é árabe ou hebraico, toda a interface é espelhada. O avatar, o nome e os controles de resposta em um comentário trocam de lado, os menus e dropdowns abrem na borda correta, e as setas apontam na direção da leitura. Isso cobre o widget de comentários e suas extensões, como chat ao vivo e enquetes, os widgets de tickets, chat colaborativo e resumo de avaliações, os e‑mails e o painel.

Não há nada a configurar, exceto definir sua localidade manualmente para seu usuário, se desejar.

### Comentários Mantêm Sua Própria Direção

Às vezes uma seção de comentários está em vários idiomas. Um comentário em inglês em uma página em árabe, ou um comentário em árabe em uma página em inglês, ainda deve ser lido naturalmente.

Cada comentário e nome de usuário segue a direção do seu próprio texto. Em uma página em inglês, uma resposta em árabe é lida da direita para a esquerda enquanto os comentários ao redor são lidos da esquerda para a direita, e o inverso ocorre em uma página em árabe. Blocos de código dentro dos comentários sempre são lidos da esquerda para a direita, pois o código assim é.

### Definindo a Localidade

Por padrão, o widget obtém a localidade do navegador do visitante, portanto falantes de árabe recebem árabe automaticamente. Para forçar, defina a localidade na página de personalização do widget em "Locale / Language", ou no código:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Se você usar SSO, passe `locale: 'ar'` no objeto do usuário para que os e‑mails deles também sejam enviados em árabe.

### Plurais, Feitos Corretamente

O inglês tem duas formas para uma contagem: "1 comentário" e "2 comentários". O árabe tem formas separadas para um, dois, de três a dez, e de onze a noventa‑e‑nove, e usa o singular novamente para cem. Russo, ucraniano, polonês, croata, sérvio, esloveno e hebraico também têm suas próprias regras.

Até agora o FastComments só reconhecia "um" e "todo o resto", então um leitor russo poderia ver a forma nominal errada para 2 ou 5 comentários. Cada string com contagem agora escolhe a forma correta para seu idioma, no widget, nos e‑mails e no painel.

Enquanto estávamos nisso, revisamos todas as strings de contagem em todos os idiomas. Isso revelou várias traduções antigas que agora foram corrigidas. Por exemplo, em alguns idiomas a palavra para resposta era o verbo "responder", então um comentário mostrava "1 Reply" como equivalente a "1 To reply".

Se você personalizou o texto de uma contagem, como o rótulo "comments", seu texto ainda será usado para todas as contagens.

### Encontrando Seu Idioma

Os seletores de idioma no painel agora mostram o nome próprio de cada idioma ao lado do nome em inglês, como "Arabic (العربية)" e "German (Germany) (Deutsch)". Se alguém entrar no idioma errado, ainda poderá encontrar o seu.

### Documentação

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Guia de Idiomas Suportados</a> lista cada código de localidade e cobre o comportamento da direita para a esquerda. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">A opção de localidade</a> cobre forçar uma localidade no widget.

Isso se baseia na [nossa primeira versão de localização](/(2-05-2020)-fastcomments-gets-localized.html) de 2020, que começou com três idiomas. Agora temos vinte e oito localidades.

### Em Conclusão

Estamos felizes por poder levar o FastComments aos falantes de árabe e tornar a experiência melhor para os falantes de hebraico. Se você encontrar uma tradução que esteja errada em seu idioma, avise‑nos abaixo e nós a corrigiremos.

Saudações!

{{/isPost}}