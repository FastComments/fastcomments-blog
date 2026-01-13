---
[category:API & Development]
###### [postdate]
# [postlink]Korišćenje FastComments u VanillaJS aplikacijama jedne stranice[/postlink]

{{#unless isPost}}
Iako imamo posvećene React i VueJS komponente, vanilla widget se može koristiti i u aplikacijama jedne stranice.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke izraze

#### Ciljna publika

Ovaj članak je namenjen programerima.

#### Uvod

Većina primera korišćenja FastComments VanillaJS widgeta je vrlo jednostavan kod koji učitava nit komentara za trenutnu URL adresu stranice. To je zato što
je to slučaj upotrebe za ogromnu većinu naših korisnika, ali smo nedavno primetili influx programera koji kreiraju SPA i koriste FastComments.

Prvo, imajte na umu da FastComments ima posvećene <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> i <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> komponente, pa ih proverite
ako koristite te biblioteke kako ne biste morali da pravite svoj vlastiti omotač oko FastComments.

Ako pravite svoju aplikaciju koristeći VanillaJS, možete dinamički instancirati i ažurirati comment widget.

#### Prvo, URL i URL ID

FastComments ima dva identifikatora za stranicu ili članak sa kojima je nit komentara povezana. U konfiguracionom objektu to su svojstva "url" i "urlId".

URL je URL do comment widgeta. Idealan scenario je da treba da možete posetiti ovaj URL izvan vaše aplikacije. Biće izložen kao link u obaveštenjima putem email-a i u
alatima za administraciju.

URL ID je string koji je ili URL ili ID - može biti bilo koja vrednost sve dok predstavlja trenutnu stranicu. Ako imate post, članak ili ID stranice, možete koristiti to
umesto URL-a stranice za ovu vrednost. Razlog za to što je URL ID odvojen je taj što možda želite da skladištite dodatne informacije u URL-u koje bi učinile URL ne jedinstvenim za stranicu.

Imajte u vidu da smo dokumentovali kompletnu konfiguraciju koju widget podržava u TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">na GitHub-u</a>.

#### Specijalnosti i stvarna demonstracija

Kada je widget instanciran, uhvatite rezultat iz funkcije FastCommentsUI koju biste normalno pozvali:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Zatim, možete pozvati "update" metodu na instanciranom objektu da ažurirate konfiguraciju. Ovo će osvežiti komponentu:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Možete videti funkcionalan primer <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">sa ovim fiddle-om</a>.

Imajte na umu da u ovom primeru koristimo document.getElementById, ali možete koristiti bilo koji mehanizam koji želite da dobijete ciljni element.

#### Zapažanja

Iako će samo ažuriranje "urlId" raditi, trebate ažurirati i "urlId" i "url" čak i ako su isti kako bi linkovi iz obaveštenja email-a i
alatima za moderaciju radili. Samo ažuriranje "url" neće raditi - komentari su vezani za "urlId".

#### Zaključak

Nadamo se da ste ovaj vodič našli korisnim. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

{{/isPost}}

---