---
[category:Integrations]
###### [postdate]
# [postlink]Incorporare Commenti in un Sito GatsbyJS con FastComments[/postlink]

{{#unless isPost}}
Ora puoi usare FastComments per incorporare commenti in un sito realizzato con Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

#### Novità

Abbiamo recentemente lanciato il nostro <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">component React</a> per FastComments.

Questo apre molte opportunità - inclusa l'integrazione di FastComments con Gatsby.

#### Se Hai Scritto il Tuo Wrapper

Se hai scritto il tuo wrapper React per FastComments - considera di sostituirlo con il nostro nuovo. Ci occuperemo di mantenere questa astrazione per te - e contiene molte cose
interessanti come <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">il riavvio automatico in caso di cambiamenti alla configurazione</a>.

#### Come Funziona

Poiché FastComments ha un componente React come wrapper attorno al nostro widget principale - è solo una questione di utilizzare la nostra libreria React per istanziare il widget lato client.

Supportiamo completamente questo componente e lo terremo aggiornato.

#### Esempi?

Abbiamo iniziato a configurare esempi, che puoi trovare <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">qui</a>.

#### Modalità Notturna

Uno degli esempi che abbiamo è "modalità notturna" - rendendo FastComments su un sito con uno sfondo nero (o molto scuro): <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Inoltre, poiché il widget risponde ai cambiamenti di configurazione, ciò significa che puoi avere una modalità per attivare il tema del tuo sito e facilmente dire a fastcomments-react di aggiornarsi.

#### In Conclusione

Speriamo che tu trovi l'integrazione di FastComments nel tuo sito Gatsby rapida e semplice.

Saluti!

{{/isPost}}

---