---
[category:API & Development]
###### [postdate]
# [postlink]Utilizzare FastComments in Applicazioni a Pagina Singola VanillaJS[/postlink]

{{#unless isPost}}
Sebbene abbiamo componenti dedicati per React e VueJS, il widget vanilla può essere utilizzato anche in applicazioni a pagina singola.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

#### Pubblico Target

Questo articolo è rivolto agli sviluppatori.

#### Introduzione

La maggior parte degli esempi di utilizzo del widget FastComments VanillaJS è uno snippet di codice molto semplice che carica il thread dei commenti per l'URL della pagina corrente. Questo perché
questo è il caso d'uso per la stragrande maggioranza dei nostri clienti, ma recentemente abbiamo visto un afflusso di sviluppatori che costruiscono SPA e utilizzano FastComments.

Innanzitutto, tieni presente che FastComments ha componenti dedicati per <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> e <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a>, quindi controllali
se stai utilizzando quelle librerie in modo da non dover creare il tuo wrapper attorno a FastComments.

Se stai costruendo la tua applicazione usando VanillaJS, tuttavia, puoi istanziare e aggiornare il widget dei commenti dinamicamente.

#### Prima, l'URL e l'ID URL

FastComments ha due identificatori per la pagina o l'articolo a cui è associato il thread dei commenti. Nell'oggetto di configurazione, sono le proprietà "url" e "urlId".

L'URL è l'URL del widget dei commenti. Idealmente, dovresti essere in grado di visitare questo URL dall'esterno della tua applicazione. Sarà esposto come un link nelle email di notifica e negli
strumenti di amministrazione.

L'ID URL è una stringa che è sia un URL che un ID - può essere qualsiasi valore purché rappresenti la pagina corrente. Se hai un post, un articolo o un ID pagina, puoi utilizzare quello
invece dell'URL della pagina per questo valore. Il motivo per cui l'ID URL è separato è che potresti voler memorizzare informazioni extra nell'URL che renderebbero l'URL non unico per la pagina.

Nota che abbiamo documentato la configurazione completa che il widget supporta in TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">su GitHub</a>.

#### Specifiche e una Demo Reale

Quando il widget è istanziato, cattura il risultato dalla funzione FastCommentsUI che normalmente chiameresti:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Poi, puoi invocare un metodo "update" sull'oggetto dell'istanza per aggiornare la configurazione. Questo aggiornerà il componente:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Puoi vedere un esempio funzionante <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">con questo fiddle</a>.

Nota che in questo esempio usiamo document.getElementById, ma puoi usare qualsiasi meccanismo ti piaccia per recuperare l'elemento target.

#### Problemi Noti

Sebbene aggiornare solo "urlId" funzionerà, dovresti aggiornare sia "urlId" che "url" anche se sono gli stessi in modo che i link dalle email di notifica e
gli strumenti di moderazione funzionino. Aggiornare solo l'"url" non funzionerà - i commenti sono legati a "urlId".

#### In Conclusione

Speriamo che tu abbia trovato utile questa guida. Sentiti libero di commentare qui sotto con qualsiasi domanda.

Saluti!

{{/isPost}}

---