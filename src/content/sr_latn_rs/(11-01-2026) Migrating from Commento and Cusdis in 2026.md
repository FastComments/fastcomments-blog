[category:Migration]
###### [postdate]
# [postlink]Migracija sa Commento i Cusdis u 2026[/postlink]

{{#unless isPost}}
Hostovani Commento i Cusdis servisi su prestali da odgovaraju. Evo kako da pređete na FastComments i kako možemo da pomognemo da povratite vaše komentare iz Internet Arhive ako ih nikada niste izvezli.
{{/unless}}

{{#isPost}}

Ako je sekcija za komentare na vašem sajtu postala prazna, ovaj post je za vas. Pokriva šta se promenilo, kako da uvezete izvoz ako ga imate, i kako možemo da pomognemo da vratite vaše komentare iz Internet Arhive ako ga nemate.

## What Happened

Evo šta vidimo zaključno sa 1. novembrom 2026.:

- **Commento.** commento.io, njegov API i skripta widgeta sve vraćaju 404. Snimci Internet Arhive pokazuju da je sajt radio 25. maja 2026., a vraćao 404 do 11. juna 2026.
- **Cusdis.** cusdis.com i njegov API vraćaju Cloudflare grešku 521, što znači da je server iza Cloudflare-a nedostupan. Snimci pokazuju da je radio do 27. avgusta 2026., a vraćao 521 do 16. oktobra 2026. Skripta widgeta i dalje učitava, pa vaša stranica prikazuje prazan okvir gde su bili komentari.

Nismo pronašli obaveštenje o gašenju ni od jednog projekta. Ako sami hostujete Commento ili Cusdis, vaša instalacija nije pogođena ovim, i možete izvesti podatke kad god budete spremni da pređete.

## Find Your Data

Koji put odaberete zavisi od toga šta imate:

1. **Imate fajl za izvoz.** Pretražite i vaš inbox, pošto je Commento slao izvoz putem e‑maila kao ".gz" fajl. Preskočite do koraka uvoza.
2. **Sami hostujete.** Izvezite iz vašeg kontrolnog panela, zatim sledite korake uvoza.
3. **Koristili ste hostovani servis i nemate izvoz.** Kontrolna tabla sa koje biste izvezli više ne postoji. Pročitajte odeljak o oporavku ispod.

## Import an Export File

Kada ste prijavljeni, idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Iz padajućeg menija izaberite **Commento (.gz, .json)** ili **Cusdis (.json)** i otpremite vaš fajl. Nije potrebno prethodno raspakovati Commento ".gz" fajl.

Uvoz se izvršava u pozadini, i dobićete e‑mail kada se završi. Ponovni uvoz je siguran, jer se svaki komentar podudara sa svojim originalnim ID‑jem i ažurira na mestu.

Imamo detaljniji vodič za svaki format: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> i <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Njihovi koraci za traženje izvoza sa hostovanog kontrolnog panela više ne važe, ali detalji uvoza i dalje važe.

## Recover Your Comments From the Internet Archive

Commento i Cusdis učitavaju komentare putem JavaScript‑a sa svojih servera. Kada Internet Arhiva snimi stranicu putem pretraživača, može sačuvati te odgovore zajedno sa stranicom. Sačuvani odgovori sadrže niti komentara.

Testirali smo ovo sami. <a href="https://web.archive.org" target="_blank">Wayback Machine</a> sadrži više od 12.000 snimljenih odgovora na Commento komentare i snimke za 448 Cusdis projekata, a najnoviji su iz 2026. Nemamo alat za samostalno korišćenje. Mi obavljamo oporavak za vas, zato <a href="https://fastcomments.com/contact-us" target="_blank">pišite nam</a> da započnete.

### Check Your Own Site First

Otvorite jedan od vaših aktivnijih postova u Wayback Machine, zamenjujući adresu svojom:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Skrolujte do sekcije za komentare. Ako se vaši komentari prikažu, arhiva ima tu nit. Ako se ne prikažu, pokušajte drugu godinu koristeći kalendar na vrhu stranice. Prazan rezultat na jednom postu ne isključuje ostatak vašeg sajta, pa nam pišite u svakom slučaju.

### How the Recovery Works

1. **Reci nam svoj domen.** Ako ste koristili Cusdis, pošaljite i vaš App ID, vrednost `data-app-id` u isječku na vašem sajtu. Zatražićemo od vas dokaz da kontrolišete domen, pošto ovi komentari pripadaju vašem sajtu.
2. **Pronađemo vaše niti.** Prikupljamo snimke vašeg sajta i proveravamo da li svaka pripada vašem domenu i stranici. Oporavci za Commento traju duže, jer arhiva ne indeksira snimke po sajtu i moramo da ih sve pregledamo.
3. **Pokazujemo vam šta smo našli.** Videćete koliko je stranica i komentara vraćeno, i datum najnovijeg komentara, pre nego što se bilo šta uveze.
4. **Uvozimo niti u vaš nalog.** Zatim možete uređivati ili ukloniti bilo koji komentar iz vašeg panela za moderaciju.

### What Comes Back

<div class="pretty-table wide-table">

| Podaci | Commento | Cusdis |
| --- | --- | --- |
| Tekst komentara | Yes | Yes |
| Prikazano ime autora | Yes | Yes |
| Datum komentara | Yes | Yes |
| Niti odgovora | Yes | Yes |
| Ocena glasova | Yes | Cusdis nema glasove |
| Adresa stranice | Yes | Yes, iako neki sajtovi čuvaju samo putanju, pa nam je potreban vaš domen |
| Email autora | No | No |
| Komentari koji čekaju odobrenje | No | No |
| Komentari napisani posle poslednjeg snimka | No | No |
| Stranice koje arhiva nikada nije snimila | No | No |

</div>

### What to Expect

Ovo je oporavak iz snimaka, pa planirajte moguće praznine. Najbolje funkcioniše za stranice koje su bile dovoljno popularne da se često i nedavno snimaju.

Dva rezultata iz našeg testiranja pokazuju opseg. Na jednom blogu, 30 pretraga je vratilo 810 komentara na 19 stranica. Na drugom sajtu, koji i dalje prikazuje svoje komentare, najnovija arhivirana kopija je stala u oktobru 2023., dok je živa stranica radila do marta 2025. Sve što je napisano između poslednjeg snimka i gašenja nije u arhivi.

Nedostajući email‑ovi takođe su važni. Oporavljeni komentari zadržavaju ime autora, ali se ne mogu povezati sa FastComments nalogom, i njihovi autori neće biti obavešteni o novim odgovorima.

## Replace the Widget

Koji god put ste izabrali, stari isječak treba da se ukloni sa vašeg sajta. Za Commento, uklonite ovo, zajedno sa `count.js` ako koristite brojanje komentara:

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

Takođe podržavamo mnoge front‑end okvire, koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovde</a>. Nije potrebno čekati da se oporavak završi pre prelaska. Vaši čitaoci mogu odmah početi da komentarišu, a oporavljene niti se pridružuju istim stranicama kada se uvezu.

### If Your URLs Are Changing

Uvezeni komentari su vezani za URL stranice, pa ako vaši URL‑ovi ostanu isti, niti se same poravnavaju. Ako se menjaju, prvo uvezite, zatim koristite alat <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> pod Manage Data da ih premestite na nove lokacije.

## EU

Ako ste u EU, verovatno ćete želeti da napravite nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi podaci vaših korisnika ostali u EU.

## Recap

1. Potražite fajl za izvoz, uključujući i u vašem e‑mailu.
2. Ako ga imate, otpremite ga na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stranicu za uvoz</a>.
3. Ako ga nemate, proverite vaš sajt u Wayback Machine i <a href="https://fastcomments.com/contact-us" target="_blank">pišite nam</a> sa vašim domenom.
4. Zamenite stari isječak sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.

Živeli!

{{/isPost}}

---