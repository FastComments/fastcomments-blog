---
[category:API & Development]
###### [postdate]
# [postlink]Korištenje FastComments u VanillaJS Jednostranim Aplikacijama[/postlink]

{{#unless isPost}}
Iako imamo namjenske React i VueJS komponente, vanilla widget se može koristiti i u jednostranim aplikacijama.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Ciljana Publika

Ovaj članak je namijenjen programerima.

#### Uvod

Većina primjera korištenja FastComments VanillaJS widgeta je vrlo jednostavan isječak koda koji učitava komentarni niz za trenutnu URL stranicu. To je zbog toga što je
to slučaj za veliku većinu naših korisnika, no nedavno smo primijetili porast programera koji razvijaju SPAs i koriste FastComments.

Prvo, imajte na umu da FastComments ima namjenske <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> i <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> komponente, pa ih provjerite
ako koristite te biblioteke kako ne biste morali izraditi vlastiti omotač oko FastComments.

Ako razvijate svoju aplikaciju koristeći VanillaJS, međutim, možete dinamički instancirati i ažurirati widget za komentare.

#### Prvo, URL i URL ID

FastComments ima dva identifikatora za stranicu ili članak s kojim je vezan komentarni niz. U konfiguracijskom objektu, to su svojstva "url" i "urlId".

URL je URL do widgeta za komentare. Idealno, trebali biste moći posjetiti ovaj URL izvana iz svoje aplikacije. Bit će izložen kao link u obavijesnim e-mailovima i u
alatima za administratore.

URL ID je niz koji je ili URL ili ID - može biti bilo koja vrijednost sve dok predstavlja trenutnu stranicu. Ako imate ID objave, članka ili stranice, možete koristiti to
umjesto URL-a stranice za ovu vrijednost. Razlog zašto je URL ID odvojen je taj da možda želite pohraniti dodatne informacije u URL koje bi učinile URL nejedinstvenim za stranicu.

Napominjemo da smo dokumentirali kompletnu konfiguraciju koju widget podržava u TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">na GitHubu</a>.

#### Specifikacije i Stvarna Demo

Kada je widget instanciran, zabilježite rezultat iz funkcije FastCommentsUI koju biste normalno pozvali:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Nakon toga, možete pozvati "update" metodu na objektu instance kako biste ažurirali konfiguraciju. To će osvježiti komponentu:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Možete vidjeti radni primjer <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">s ovom fiddle</a>.

Napominjemo da u ovom primjeru koristimo document.getElementById, ali možete koristiti bilo koji mehanizam koji želite za dohvaćanje ciljanog elementa.

#### Zamke

Iako samo ažuriranje "urlId" će funkcionirati, trebali biste ažurirati i "urlId" i "url" čak i ako su isti kako bi linkovi iz obavijesnih e-mailova i
alati za moderiranje radili. Samo ažuriranje "url" neće raditi - komentari su vezani za "urlId".

#### Na Zaključak

Nadamo se da ste pronašli ovaj vodič korisnim. Slobodno komentirajte u nastavku s bilo kakvim pitanjima.

Živjeli!

{{/isPost}}

---