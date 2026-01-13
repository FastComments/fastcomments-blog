---
[category:API & Development]
###### [postdate]
# [postlink]Uporaba FastComments v VanillaJS Enostranskih Aplikacijah[/postlink]

{{#unless isPost}}
Medtem ko imamo namenske React in VueJS komponente, je vanilla widget mogoče uporabiti tudi v enostranskih aplikacijah.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični izraz

#### Ciljna Publika

Ta članek je namenjen razvijalcem.

#### Uvod

Večina primerov uporabe FastComments VanillaJS widgeta je zelo preprost koda, ki naloži nit komentarjev za trenutno URL stran. To je zato, ker
je to uporaba za večino naših strank, vendar smo v zadnjem času opazili porast razvijalcev, ki gradijo SPA in uporabljajo FastComments.

Prvič, imajte v mislih, da FastComments ima namenski <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> in <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> komponente, zato preverite te
če uporabljate te knjižnice, tako da ne boste morali ustvarjati lastnega ovitka okoli FastComments.

Če pa razvijate svojo aplikacijo z uporabo VanillaJS, lahko dinamično instancirate in posodobite widget za komentarje.

#### Prvič, URL in URL ID

FastComments ima dva identifikatorja za stran ali članek, na katerega je vezana nit komentarjev. V konfiguracijskem objektu sta "url" in "urlId" lastnosti.

URL je URL do widgeta za komentarje. Idealno bi bilo, da bi mogli obiskati ta URL izven vaše aplikacije. Izpostavljen bo kot povezava v obvestilnih e-poštah in v
administratorjevih orodjih.

URL ID je niz, ki je bodisi URL bodisi ID - lahko je katera koli vrednost, dokler predstavlja trenutno stran. Če imate ID objave, članka ali strani, ga lahko uporabite
namesto URL strani za to vrednost. Razlog, da je URL ID ločen, je, da želite lahko shraniti dodatne informacije v URL, ki bi URL naredile nepridobljen za stran.

Upoštevajte, da smo dokumentirali popolno konfiguracijo, ki jo widget podpira v TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">na GitHub</a>.

#### Specifikacije in Pravi Demos

Ko je widget instanciran, zajmite rezultat iz funkcije FastCommentsUI, ki jo običajno pokličete:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Nato lahko pokličete metodo "update" na objektu instance za posodobitev konfiguracije. To bo osvežilo komponento:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Delujoč primer lahko vidite <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">s tem fiddle</a>.

Upoštevajte, da v tem primeru uporabljamo document.getElementById, vendar lahko uporabite katerikoli mehanizem, ki ga želite, da poiščete ciljni element.

#### Napake

Medtem ko bo posodobitev samo "urlId" delovala, bi morali posodobiti tako "urlId" kot "url", tudi če sta enaka, tako da bodo povezave iz obvestilnih e-pošt in
orodij za moderacijo delovale. Posodobitev samo "url" ne bo delovala - komentarji so vezani na "urlId".

#### Na zaključek

Upamo, da ste našli ta vodnik koristen. Prosto komentirajte spodaj, če imate kakšna vprašanja.

Na zdravje!

{{/isPost}}

---