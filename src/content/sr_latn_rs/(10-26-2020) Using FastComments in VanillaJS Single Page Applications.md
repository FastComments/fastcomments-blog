---
[category:API & Development]
###### [postdate]
# [postlink]Korišćenje FastComments u VanillaJS aplikacijama jedne stranice[/postlink]

{{#unless isPost}}
Iako imamo posebno razvijene React i VueJS komponente, vanilla widget se može koristiti i u aplikacijama jedne stranice.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički rečnik

#### Ciljna publika

Ovaj članak je namenjen programerima.

#### Uvod

Većina primeraka korišćenja FastComments VanillaJS widgeta je vrlo jednostavna kodna sekvenca koja učitava nit komentara za trenutni URL stranice. To je jer
je ovo slučaj korišćenja za ogromnu većinu naših klijenata, ali smo nedavno primetili priliv programera koji prave SPA i koriste FastComments.

Pre svega, imajte na umu da FastComments ima posebno razvijene <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> i <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> komponente, pa obavezno proverite
to ako koristite te biblioteke kako ne biste morali da pravite svoj vlastiti obvijač oko FastComments.

Međutim, ako gradite svoju aplikaciju koristeći VanillaJS, možete dinamički instancirati i ažurirati widget komentara.

#### Prvo, URL i URL ID

FastComments ima dva identifikatora za stranicu ili članak sa kojom je nit komentara povezana. U konfiguracionom objektu, to su "url" i "urlId" svojstva.

URL je URL do widgeta komentara. Idealno, trebali biste moći da posetite ovaj URL izvan vaše aplikacije. Biće izložen kao link u obaveštenjima putem e-pošte i u
alatima za administraciju.

URL ID je string koji je ili URL ili ID - može biti bilo koja vrednost sve dok predstavlja trenutnu stranicu. Ako imate id posta, članka ili stranice, možete koristiti to
umesto URL-a stranice za ovu vrednost. Razlog što je URL ID odvojen je da možda želite da čuvate dodatne informacije u URL-u koje bi napravile da URL nije jedinstven za stranicu.

Imajte na umu da smo dokumentovali kompletnu konfiguraciju koju widget podržava u TypeScript-u <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">na GitHub-u</a>.

#### Specifikacije i stvarna demonstracija

Kada se widget instancira, zabeležite rezultat iz FastCommentsUI funkcije koju biste normalno pozvali:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Zatim možete pozvati metodu "update" na instanci objekta da ažurirate konfiguraciju. Ovo će osvežiti komponentu:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Možete videti radni primer <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">sa ovom fiddlom</a>.

Napomena da u ovom primeru koristimo document.getElementById, ali možete koristiti bilo koji mehanizam koji želite da dohvatite ciljni element.

#### Problemi

Iako će samo ažuriranje "urlId" funkcionisati, trebali biste ažurirati i "urlId" i "url" čak i ako su isti kako bi linkovi iz obaveštenja putem e-pošte i
alata za moderaciju radili. Samo ažuriranje "url" neće raditi - komentari su povezani sa "urlId".

#### Na kraju

Nadamo se da ste pronašli ovaj vodič korisnim. Slobodno komentarišite ispod sa svim pitanjima.

Pozdrav!

{{/isPost}}

---