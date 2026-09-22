[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Objavljena Poboljšanja Revizije[/postlink]

{{#unless isPost}}
Revizijski zapis sada prikazuje tko ili što je svaki događaj zahvatio po imenu, i možete pretraživati po tome. Također su dodani raspon datuma, pretraga podstanara, razlike na razini polja pri ažuriranjima i odgovarajući API filteri.
{{/unless}}

{{#isPost}}

### Što je novo

Revizijski zapis je oduvijek bilježio tko je izvršio radnju i na čemu je izvršena. Ovo izdanje se odnosi na učiniti taj zapis čitljivim i pretraživim bez napuštanja stranice.

Ako ste željeli znati što se dogodilo s određenim moderatorom, prvo ste morali pronaći njegov ID, a ako je taj moderator već uklonjen, nije bilo ništa čemu biste mogli usporediti ID. Događaj je govorio da je nešto izbrisano, od koga i kada, ali u nekim slučajevima imena su nedostajala.

Sada se ime bilježi uz ID u trenutku događaja, pa preživljava brisanje i možete ga pretraživati.

### Stupac **Affected**

U tablici postoji novi stupac **Affected** koji prikazuje osobu ili objekt na koji je događaj djelovao, po imenu. Za osobu se prikazuje npr. `jsmith (jsmith@example.com)`. Za prilagodbu widgeta ili grupu moderacije to je ime koje ste joj dali. Za medijski file to je naziv datoteke koju ste učitali.

Iznad tablice nalazi se odgovarajući okvir za pretragu, **Who or what was changed**. Upisajte ime, adresu e‑pošte ili ID, i sustav će pronaći događaje koji su zahvatili tu osobu ili objekt. Ne morate znati koji od ta tri imate, niti prvo tražiti interni ID.

Događaji zapisani prije ovog izdanja nemaju priloženo ime, ali i dalje imaju ID koji su uvijek imali, pa isti okvir za pretragu pronalazi i njih po ID-u.

### Raspon datuma

Redak filtera sada ima padajući izbornik **Date Range** s opcijama Posljednjih 30 dana, Posljednjih 90 dana, Prošle godine, Sve vrijeme i **Custom range**, koji otkriva odabire datuma Od i Do.

Raspon datuma je daleko najlakši način za sužavanje pretrage, a kombiniranje s ostalim filterima najbrži je način da nešto pronađete.

### Upravljani računi

Ako vaš račun upravlja drugim najmodavcima, postoji potvrdni okvir **Include sub-tenants**. Označavanjem pretražujete svoj račun i sve najmodavce koje upravlja u jednom prolazu, s stupcem **Tenant** koji prikazuje iz kojeg računa je svaki događaj došao.

Do sada se zapis svakog najmodavca mogao čitati samo zasebno, pa je odgovor na pitanje „je li netko dotaknuo neku od naših imovine ovaj tjedan“ značio prebacivanje u svaki od njih redom.

### Ažuriranja sada bilježe što se promijenilo

Uređivanje člana tima ranije je bilježilo rezultat skupova dozvola. To vam govori koje su dozvole sada, ali ne i koje su bile, pa je pitanje „tko je uklonio pristup naplati ovoj osobi i kada“ bilo neodgovorivo.

Ažuriranja događaja sada uključuju mapu `changes` koja sadrži samo polja koja su se stvarno promijenila, svako s prethodnom i novom vrijednošću. Nepromenjena polja su izostavljena, pa promjena dozvole izgleda kao jedan redak umjesto zida boolean vrijednosti.

### Opisi i uređaj iza promjene

Destruktivni događaji sada nose jednostavnu rečenicu koja opisuje što se dogodilo, npr. „Uklonjen je korisnik iz računa.“ Pregledi stranica imali su opise, a brisanja nisu, što je bilo obrnuto.

Događaji koji nešto mijenjaju također bilježe preglednik koji je izvršio promjenu. Sesije se bilježe kao hash kako bi se radnje jedne osobe mogle povezati, a da zapis ne pohranjuje ništa što bi se moglo reproducirati.

### Ostala poboljšanja

- Neka ispravka paginacije i kombinacija filtera.
- Događaji prijave prikazivali su prazan stupac **Who**. Korisničko ime bilo je u zapisu cijelo vrijeme, ali stranica ga nije čitala.
- Stupac akcije prikazivao je događaje prijave kao N/A, jer je Login nedostajao na popisu naziva akcija.
- Stranice revizijskog zapisa nisu mogle prikazati SSO korisnike, prikazujući „Missing User”. Sada su ispravno prikazani.
- Stranica je mnogo brža na računima s dugom poviješću.

### Za API

Krajnja točka `/api/v1/audit-logs` dobila je odgovarajuće filtere: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` za pretragu podstringa, i `includeManagedTenants`. Odgovori sada uključuju `targetId`, `targetLabel` i `ua`.

Dva važna promjena ako već pozivate ovu krajnju točku. `before` sada radi samostalno, dok je ranije bio zanemaren osim ako ste također proslijedili `after`. Također je `limit` sada ograničen na 10 000, dok prije nije imao gornju granicu. Zadana vrijednost ostaje nepromijenjena na 1 000.

### Dokumentacija

Vodič <a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">The AuditLogs API guide</a> pokriva nove parametre upita, a <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">the AuditLog structure reference</a> pokriva nova polja.

Ako prije niste koristili revizijski zapis, [the original release post](/(3-21-2022)-audit-log-released.html) objašnjava gdje se nalazi, tko ga može čitati i koliko dugo se unosi čuvaju. Sve je to nepromijenjeno.

### Zaključak

Drago nam je što možemo nastaviti poboljšavati FastComments.
Ako tražite nešto u svom zapisu i ne možete ga pronaći, recite nam u nastavku.

Živjeli!

{{/isPost}}

---