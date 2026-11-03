[category:Migration]
###### [postdate]
# [postlink]Migracija iz Commento in Cusdis v letu 2026[/postlink]

{{#unless isPost}}
Gostovane storitve Commento in Cusdis so prenehale odgovarjati. Tukaj je, kako se premakniti na FastComments in kako vam lahko pomagamo obnoviti vaše komentarje iz Internet Archive, če jih nikoli niste izvozili.
{{/unless}}

{{#isPost}}

Če je oddelek za komentarje na vašem spletnem mestu prazen, je ta objava za vas. Pokriva, kaj se je spremenilo, kako uvoziti izvoz, če ga imate, in kako vam lahko pomagamo pridobiti vaše komentarje nazaj iz Internet Archive, če ga nimate.

## Kaj se je zgodilo

Tukaj je, kar vidimo od 1. novembra 2026:

- **Commento.** commento.io, njegov API in skripta za pripomoček vračajo 404. Zajemi Internet Archive kažejo, da je stran delovala 25. maja 2026 in je do 11. junija 2026 vračala 404.
- **Cusdis.** cusdis.com in njegov API vračata napako Cloudflare 521, kar pomeni, da je strežnik za Cloudflare izklopljen. Zajemi kažejo, da je deloval do 27. avgusta 2026 in je do 16. oktobra 2026 vračal 521. Skripta za pripomoček se še vedno naloži, zato vaša stran prikaže prazen okvir, kjer so bili komentarji.

Nismo našli obvestila o zaprtju od katerega koli projekta. Če sami gostujete Commento ali Cusdis, vaša namestitev ni prizadeta in lahko izvozite kadar koli ste pripravljeni na selitev.

## Najdite svoje podatke

Katera pot izberete, je odvisno od tega, kaj imate:

1. **Imate izvozno datoteko.** Preiščite tudi svoj nabiralnik, saj je Commento poslal izvoze po e-pošti kot datoteko ".gz". Preskočite naprej na korake uvoza.
2. **Sami gostujete.** Izvozite iz svoje nadzorne plošče, nato sledite korakom uvoza.
3. **Ste uporabljali gostovano storitev in nimate izvoza.** Nadzorna plošča, iz katere bi izvozili, je izginila. Preberite razdelek o obnovi spodaj.

## Uvoz izvozno datoteko

Ko ste prijavljeni, pojdite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tukaj za uvoz datoteke</a>. Iz spustnega menija izberite **Commento (.gz, .json)** ali **Cusdis (.json)** in naložite svojo datoteko. Ni potrebe, da najprej odpakirate Commento ".gz" datoteko.

Uvoz teče v ozadju in prejeli boste e‑pošto, ko se konča. Ponovni uvoz je varen, ker se vsak komentar ujema z njegovim izvirnim ID‑jem in se posodobi na mestu.

Imamo daljši vodnik za vsako obliko: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> in <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Njihovi koraki za zahtevo izvoza iz gostovane nadzorne plošče ne veljajo več, vendar njihovi podrobnosti uvoza še vedno veljajo.

## Obnovite svoje komentarje iz Internet Archive

Commento in Cusdis oba nalagata komentarje z JavaScriptom s svojih strežnikov. Ko Internet Archive zajame stran z brskalnikom, lahko shrani te odzive skupaj s stranjo. Ti shranjeni odzivi vsebujejo niti komentarjev.

Testirali smo to sami. <a href="https://web.archive.org" target="_blank">Wayback Machine</a> vsebuje več kot 12.000 zajetih odzivov komentarjev Commento in zajemov za 448 projektov Cusdis, najnovejši pa so iz leta 2026. Nimamo orodja za samopostrežbo za to. Izvedemo obnovo za vas, zato <a href="https://fastcomments.com/contact-us" target="_blank">nam pišite</a>, da začnete.

### Najprej preverite svoje lastno spletno mesto

Odprite enega od vaših bolj obremenjenih objav v Wayback Machine, zamenjajte naslov s svojim:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Pomaknite se do odseka za komentarje. Če se vaši komentarji prikažejo, arhiv vsebuje to nit. Če se ne, poskusite drugo leto z uporabo koledarja na vrhu strani. Prazen rezultat pri eni objavi ne izključuje preostalega vašega spletnega mesta, zato nam pišite v vsakem primeru.

### Kako deluje obnova

1. **Povejte nam svojo domeno.** Če ste uporabljali Cusdis, pošljite tudi svoj App ID, vrednost `data-app-id` v izrezku na vašem spletnem mestu. Vprašali vas bomo, da dokažete, da nadzorujete domeno, saj ti komentarji pripadajo vašemu spletnemu mestu.
2. **Najdemo vaše niti.** Zberemo zajeme za vaše spletno mesto in preverimo, da vsaka pripada vaši domeni in strani. Obnovitve Commento trajajo dlje, ker arhiv ne indeksira svojih zajemov po spletnem mestu in jih moramo prebrati vse.
3. **Pokažemo vam, kar smo našli.** Videli boste, koliko strani in komentarjev se je vrnilo ter datum najnovejšega komentarja, preden se kaj uvozi.
4. **Uvozimo niti v vaš račun.** Nato lahko urejate ali odstranite kateri koli komentar iz nadzorne plošče za moderiranje.

### Kaj se vrne

<div class="pretty-table wide-table">

| Podatki | Commento | Cusdis |
| --- | --- | --- |
| Besedilo komentarja | Yes | Yes |
| Prikazno ime avtorja | Yes | Yes |
| Datum komentarja | Yes | Yes |
| Nitenje odgovorov | Yes | Yes |
| Ocena glasov | Yes | Cusdis nima glasov |
| Naslov strani | Yes | Yes, čeprav so nekatera spletna mesta shranila le pot, zato potrebujemo vašo domeno |
| E‑pošta avtorja | No | No |
| Komentarji, ki še čakajo na odobritev | No | No |
| Komentarji, napisani po zadnjem zajemu | No | No |
| Strani, ki jih arhiv nikoli ni zajel | No | No |

</div>

### Kaj pričakovati

To je obnova iz posnetkov, zato načrtujte vrzeli. Najbolje deluje za strani, ki so bile dovolj priljubljene, da so bile pogosto in nedavno zajete.

Dva rezultata iz našega testiranja pokažeta obseg. Na enem blogu je 30 poizvedb vrnilo 810 komentarjev na 19 straneh. Na drugem spletnem mestu, ki še vedno prikazuje svoje komentarje, je najnovejša arhivska kopija ustavila v oktobru 2023, medtem ko je živa stran tekla do marca 2025. Vse, kar je bilo napisano med zadnjim zajemom in izklopom, ni v arhivu.

Manjkajoči e‑naslovi so tudi pomembni. Obnovljeni komentarji ohranijo ime avtorja, vendar jih ni mogoče povezati s FastComments računom, avtorji pa ne bodo obveščeni o novih odgovorih zanje.

## Zamenjajte pripomoček

Katero koli pot ste izbrali, stari izrezek mora biti odstranjen z vašega spletnega mesta. Za Commento odstranite to, skupaj z `count.js`, če uporabljate število komentarjev:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Za Cusdis odstranite to:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Nato dodajte <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naš</a>:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Podpiramo tudi številne front‑end ogrodja, ki jih <a href="https://fastcomments.com/install-wizard" target="_blank">lahko najdete tukaj</a>. Ni potrebe, da počakate, da se obnova konča, preden preklopite. Vaši bralci lahko takoj začnejo komentirati, obnovljene niti se pridružijo istim stranem, ko so uvožene.

### Če se vaše URL‑ji spreminjajo

Uvoženi komentarji so vezani na URL strani, zato če se vaši URL‑ji ne spremenijo, se niti samodejno ujemajo. Če se spreminjajo, najprej uvozite, nato uporabite orodje <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> pod Manage Data, da jih premaknete na nove lokacije.

## EU

Če ste v EU, boste verjetno želeli ustvariti svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, da vaši podatki o strankah ostanejo v EU.

## Povzetek

1. Poiščite izvozno datoteko, tudi v svoji e‑pošti.
2. Če jo imate, jo naložite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stran za uvoz</a>.
3. Če je nimate, preverite svoje spletno mesto v Wayback Machine in <a href="https://fastcomments.com/contact-us" target="_blank">nam pišite</a> z vašo domeno.
4. Zamenjajte stari izrezek za <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naš</a>.

Živjo!

{{/isPost}}