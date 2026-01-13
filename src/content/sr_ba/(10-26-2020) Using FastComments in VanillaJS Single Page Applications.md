---
[category:API & Development]
###### [postdate]
# [postlink]Korišćenje FastComments u VanillaJS jednonamenskim aplikacijama[/postlink]

{{#unless isPost}}
Iako imamo posvećene React i VueJS komponente, vanilla widget se može koristiti i u jednonamenskim aplikacijama.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Ciljna publika

Ovaj članak je namenjen programerima.

#### Uvod

Većina primera korišćenja FastComments VanillaJS widgeta je vrlo jednostavna kodna sekvenca koja učitava nit komentara za trenutnu URL adresu stranice. To je zato što
je to slučaj upotrebe za ogromnu većinu naših klijenata, ali nedavno smo primetili porast programera koji grade SPAs i koriste FastComments.

Prvo, imajte na umu da FastComments ima posvećene <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> i <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> komponente, pa ih proverite
ako koristite te biblioteke kako ne biste morali da gradite svoj vlastiti omotač oko FastComments.

Ako gradite svoju aplikaciju koristeći VanillaJS, možete dinamički instancirati i ažurirati widget za komentare.

#### Prvo, URL i URL ID

FastComments ima dva identifikatora za stranicu ili članak na koji se nit komentara odnosi. U konfiguracionom objektu, to su svojstva "url" i "urlId".

URL je adresa do widgeta za komentare. Idealno bi bilo da možete posetiti ovu URL adresu izvan vaše aplikacije. Biće izložena kao link u obaveštenjima putem e-pošte i u
alatima za administratore.

URL ID je string koji je ili URL ili ID - može biti bilo koja vrednost sve dok predstavlja trenutnu stranicu. Ako imate post, članak ili ID stranice, možete koristiti
to umesto URL adrese stranice za ovu vrednost. Razlog što je URL ID odvojen je to što možda želite da sačuvate dodatne informacije u URL-u koje bi učinile URL ne jedinstvenim za stranicu.

Napomena: dokumentovali smo kompletnu konfiguraciju koju widget podržava u TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">na GitHub-u</a>.

#### Specifičnosti i pravi demo

Kada se widget instancira, zabeležite rezultat iz FastCommentsUI funkcije koju biste obično pozvali:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Zatim, možete pozvati "update" metodu na objektu instance da ažurirate konfiguraciju. Ovo će osvežiti komponentu:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Možete videti funkcionalan primer <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">sa ovim fiddle-om</a>.

Napomena: u ovom primeru koristimo document.getElementById, ali možete koristiti bilo koji mehanizam koji želite da dohvatite ciljni element.

#### Zablude

Iako će samo ažuriranje "urlId" raditi, trebali biste ažurirati i "urlId" i "url" čak i ako su isti kako bi linkovi iz obaveštenja putem e-pošte i
alatima za moderaciju radili. Samo ažuriranje "url" neće raditi - komentari su vezani za "urlId".

#### U zaključku

Nadamo se da ste pronašli ovaj vodič korisnim. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Pozdrav!

{{/isPost}}

---