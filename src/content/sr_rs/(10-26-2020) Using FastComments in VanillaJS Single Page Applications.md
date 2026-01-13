---
[category:API & Development]
###### [postdate]
# [postlink]Korišćenje FastComments u VanillaJS Jednostranim Aplikacijama[/postlink]

{{#unless isPost}}
Iako imamo posvećene React i VueJS komponente, vanilla widget može se koristiti i u jednostranim aplikacijama.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

#### Ciljna Publika

Ovaj članak je namenjen developerima.

#### Uvod

Većina primerne upotrebe FastComments VanillaJS widget-a je veoma jednostavan kod koji učitava nit komentara za trenutnu URL adresu stranice. To je zbog toga što
je ovo slučaj upotrebe za ogromnu većinu naših korisnika, ali smo nedavno primetili porast broja developera koji prave SPA-ove i koriste FastComments.

Prvo, imajte na umu da FastComments ima posvećene <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> i <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> komponente, pa ih proverite
ako koristite te biblioteke kako ne biste morali da pravite svoj vlastiti omotač oko FastComments.

Međutim, ako pravite svoju aplikaciju koristeći VanillaJS, možete dinamički instancirati i ažurirati widget za komentare.

#### Prvo, URL i URL ID

FastComments ima dva identifikatora za stranicu ili članak s kojim je nit komentara povezana. U konfiguracionom objektu, to su "url" i "urlId" osobine.

URL je adresa do widget-a za komentare. Idealan slučaj je da možete posetiti ovu URL adresu izvan vaše aplikacije. Ona će biti izložena kao link u obaveštenjima putem e-pošte i u
alatima za administratore.

URL ID je string koji može biti URL ili ID - može biti bilo koja vrednost sve dok predstavlja trenutnu stranicu. Ako imate post, članak ili ID stranice, možete koristiti to
umesto URL adrese stranice za ovu vrednost. Razlog što je URL ID odvojen je taj što možda želite da skladištite dodatne informacije u URL-u koje bi učinile URL ne jedinstvenim za stranicu.

Napomena da smo dokumentovali potpunu konfiguraciju koju widget podržava u TypeScript-u <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">na GitHub-u</a>.

#### Specifičnosti i Pravi Demo

Kada se widget instancira, uhvatite rezultat iz FastCommentsUI funkcije koju biste inače pozvali:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Zatim možete pozvati "update" metodu na objektu instance da ažurirate konfiguraciju. Ovo će osvežiti komponentu:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Možete videti pravi primer <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">sa ovom fiddle</a>.

Napomena da u ovom primeru koristimo document.getElementById, ali možete koristiti bilo koji mehanizam koji želite da pronađete ciljnu stavku.

#### Problemi

Iako samo ažuriranje "urlId" funkcioniše, trebali biste ažurirati i "urlId" i "url" čak i ako su isti kako bi linkovi iz obaveštenja putem e-pošte i
alatima za moderaciju funkcionisali. Samo ažuriranje "url" neće raditi - komentari su vezani za "urlId".

#### Zaključak

Nadamo se da ste ovaj vodič smatrali korisnim. Slobodno komentarišite ispod sa svim pitanjima.

Pozdrav!

{{/isPost}}

---