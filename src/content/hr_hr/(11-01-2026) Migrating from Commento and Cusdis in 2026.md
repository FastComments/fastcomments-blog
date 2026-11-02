[category:Migration]
###### [postdate]
# [postlink]Migracija s Commento i Cusdis u 2026[/postlink]

{{#unless isPost}}
Hostirane usluge Commento i Cusdis su prestale odgovarati. Evo kako se prebaciti na FastComments i kako vam možemo pomoći da oporavite svoje komentare iz Internet Archivea ako ih nikada niste izvezli.
{{/unless}}

{{#isPost}}

Ako je odjeljak za komentare na vašoj web stranici prazan, ovaj post je za vas. Pokriva što se promijenilo, kako uvesti izvoz ako ga imate i kako vam možemo pomoći da vratite svoje komentare iz Internet Archivea ako ga nemate.

## Što se dogodilo

Evo što vidimo od 1. studenog 2026.:

- **Commento.** commento.io, njegov API i skripta widgeta vraćaju 404. Snimke Internet Archivea pokazuju da je stranica radila 25. svibnja 2026., a vraćala je 404 do 11. lipnja 2026.
- **Cusdis.** cusdis.com i njegov API vraćaju Cloudflare pogrešku 521, što znači da je poslužitelj iza Cloudflarea nedostupan. Snimke pokazuju da je radilo do 27. kolovoza 2026., a vraćalo je 521 do 16. listopada 2026. Skripta widgeta i dalje se učitava, pa vaša stranica prikazuje prazno polje gdje su bili komentari.

Nismo pronašli obavijest o gašenju od bilo kojeg projekta. Ako sami hostate Commento ili Cusdis, vaša instalacija nije pogođena i možete izvesti podatke kad god budete spremni za migraciju.

## Pronađite svoje podatke

Koji put odaberete ovisi o tome što imate:

1. **Imate datoteku izvoza.** Pretražite i svoj inbox, jer je Commento slao izvoze e‑mailom kao ".gz" datoteku. Preskočite izravno na korake uvoza.
2. **Sami hostate.** Izvezite iz vlastite nadzorne ploče, zatim slijedite korake uvoza.
3. **Koristili ste hostiranu uslugu i nemate izvoz.** Nadzorna ploča s koje biste izvezli više ne postoji. Pročitajte odjeljak o oporavku ispod.

## Uvoz datoteke izvoza

Kad ste prijavljeni, idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje za uvoz datoteke</a>. Odaberite **Commento (.gz, .json)** ili **Cusdis (.json)** iz padajućeg izbornika i učitajte svoju datoteku. Nije potrebno najprije raspakirati Commento ".gz" datoteku.

Uvoz se izvršava u pozadini i dobit ćete e‑mail kada završi. Ponovni uvoz je siguran, jer se svaki komentar podudara s njegovim izvornim ID‑om i ažurira na mjestu.

Imamo detaljniji vodič za svaki format: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> i <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Njihovi koraci za traženje izvoza s hostirane nadzorne ploče više ne vrijede, ali detalji uvoza i dalje vrijede.

## Oporavak vaših komentara iz Internet Archivea

Commento i Cusdis učitavaju komentare putem JavaScripta s vlastitih poslužitelja. Kada Internet Archive snimi stranicu preglednikom, može spremiti te odgovore zajedno s stranicom. Ti spremljeni odgovori sadrže niti komentara.

Testirali smo to sami. <a href="https://web.archive.org" target="_blank">Wayback Machine</a> sadrži više od 12 000 snimljenih odgovora na Commento komentare i snimke za 448 Cusdis projekata, a najnoviji su iz 2026. Nemamo alat za samostalni oporavak. Oporavak radimo za vas, pa <a href="https://fastcomments.com/contact-us" target="_blank">pišite nam</a> da započnete.

### Prvo provjerite svoju stranicu

Otvorite jedan od vaših aktivnijih postova u Wayback Machineu, zamjenjujući adresu svojom:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Pomaknite se do odjeljka za komentare. Ako se vaši komentari pojave, arhiva ima tu nit. Ako se ne pojave, pokušajte s drugom godinom koristeći kalendar na vrhu stranice. Prazan rezultat za jedan post ne isključuje ostatak vaše stranice, pa nam u svakom slučaju pišite.

### Kako oporavak funkcionira

1. **Recite nam svoju domenu.** Ako ste koristili Cusdis, također pošaljite svoj App ID, vrijednost `data-app-id` u isječku na vašoj stranici. Zatražit ćemo da dokažete da kontrolirate domenu, jer ti komentari pripadaju vašoj stranici.
2. **Mi pronalazimo vaše niti.** Prikupljamo snimke za vašu stranicu i provjeravamo da svaka pripada vašoj domeni i stranici. Oporavci za Commento traju duže, jer arhiva ne indeksira snimke po stranicama i moramo pročitati sve.
3. **Pokazujemo vam što smo pronašli.** Vidjet ćete koliko je stranica i komentara vraćeno i datum najnovijeg komentara, prije nego što se bilo što uveze.
4. **Uvozimo niti u vaš račun.** Zatim možete uređivati ili ukloniti bilo koji komentar s nadzorne ploče za moderiranje.

### Što se vraća

<div class="pretty-table wide-table">

| Data | Commento | Cusdis |
| --- | --- | --- |
| Comment text | Yes | Yes |
| Author display name | Yes | Yes |
| Comment date | Yes | Yes |
| Reply threading | Yes | Yes |
| Vote score | Yes | Cusdis has no votes |
| Page address | Yes | Yes, though some sites stored only a path, so we need your domain |
| Author email | No | No |
| Comments still awaiting approval | No | No |
| Comments written after the last capture | No | No |
| Pages the archive never captured | No | No |

</div>

### Što očekivati

Ovo je oporavak iz snimaka, pa planirajte praznine. Najbolje funkcionira za stranice koje su bile dovoljno popularne da se često i nedavno snimaju.

Dva rezultata iz našeg testiranja pokazuju raspon. Na jednom blogu, 30 pretraga vratilo je 810 komentara na 19 stranica. Na drugoj stranici, koja još uvijek prikazuje svoje komentare, najnovija arhivirana kopija zaustavila se u listopadu 2023., dok je živa stranica radila do ožujka 2025. Sve što je napisano između posljednjeg snimka i gašenja nije u arhivi.

Nedostajući e‑mailovi također su važni. Oporavljeni komentari zadržavaju ime autora, ali se ne mogu povezati s FastComments računom i njihovi autori neće biti obaviješteni o novim odgovorima.

## Zamijenite widget

Koji god put odabrali, stari isječak treba ukloniti s vaše stranice. Za Commento, uklonite ovo, zajedno s `count.js` ako koristite brojanje komentara:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Za Cusdis, uklonite ovo:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Zatim dodajte <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naš</a>:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Također podržavamo mnoge front‑end okvire, koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovdje</a>. Nema potrebe čekati da oporavak završi prije prebacivanja. Vaši čitatelji mogu odmah početi komentirati, a oporavljene niti pridružuju se istim stranicama kada se uvezu.

### Ako se vaše URL‑ove mijenjaju

Uvezeni komentari su vezani uz URL stranice, pa ako se vaši URL‑ovi ne mijenjaju, niti se automatski podudaraju. Ako se mijenjaju, najprije uvezite, a zatim upotrijebite alat <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> pod Manage Data za premještanje na nove lokacije.

## EU

Ako ste u EU, vjerojatno ćete htjeti otvoriti račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi podaci vaših korisnika ostali u EU.

## Sažetak

1. Potražite datoteku izvoza, uključujući i u e‑mailu.
2. Ako je imate, učitajte je na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stranici za uvoz</a>.
3. Ako je nemate, provjerite svoju stranicu u Wayback Machineu i <a href="https://fastcomments.com/contact-us" target="_blank">pišite nam</a> s vašom domenom.
4. Zamijenite stari isječak s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.

Živjeli!

{{/isPost}}

---