[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Objavljena Poboljšanja Revizije[/postlink]

{{#unless isPost}}
Revizijski zapis sada prikazuje tko ili što je svaki događaj utjecao po imenu, i možete pretraživati po tome. Također su sada dostupni raspon datuma, pretraga podstanara, razlike na razini polja pri ažuriranjima i odgovarajući API filtri.
{{/unless}}

{{#isPost}}

### Što je novo

Revizijski zapis je oduvijek bilježio tko je izvršio radnju i na čemu je izvršena. Ovo izdanje se odnosi na učiniti taj zapis čitljivim i pretraživim bez napuštanja stranice.

Ako ste željeli znati što se dogodilo s određenim moderatorom, prvo ste morali pronaći njihov ID, a ako je taj moderator od tada uklonjen, nije bilo ništa protiv čega bi se ID mogao provjeriti. Događaj je govorio da je nešto izbrisano, od koga i kada, ali za neke resurse imena su nedostajala.

Sada se ime bilježi uz ID u trenutku događaja, pa preživljava brisanje i možete ga pretraživati.

### Stupac Affected

Postoji novi **Affected** stupac u tablici koji prikazuje osobu ili objekt na koji je događaj djelovao, po imenu. Za osobu se prikazuje kao `jsmith (jsmith@example.com)`. Za prilagodbu widgeta ili grupu moderacije to je ime koje ste joj dali. Za medijski file to je naziv datoteke koju ste učitali.

Iznad tablice nalazi se odgovarajući okvir za pretragu, **Who or what was changed**. Upisajte ime, adresu e-pošte ili ID, i on će pronaći događaje koji su utjecali na tu osobu ili objekt. Ne morate znati koji od trojice imate, niti morate najprije tražiti interni ID.

Događaji zapisani prije ovog izdanja nemaju priloženo ime, ali i dalje imaju ID koji su uvijek imali, pa isti okvir za pretragu pronalazi ih po ID-u.

### Raspon datuma

Redak filtera sada ima padajući izbornik **Date Range** s opcijama Posljednjih 30 dana, Posljednjih 90 dana, Prošle godine, Sve vrijeme i **Custom range**, koji otkriva odabire datuma Od i Do.

Raspon datuma je daleko najlakši način za sužavanje pretrage, a kombiniranje s ostalim filtrima najbrži je način da se nešto pronađe.

### Upravljani računi

Ako vaš račun upravlja drugim najmodavcima, postoji potvrdni okvir **Include sub-tenants**. Označavanjem pretražujete svoj račun i sve najmodavce koje upravlja u jednom prolazu, s **Tenant** stupcem koji prikazuje iz kojeg računa je svaki događaj došao.

Do sada se zapis svakog najmodavca mogao čitati samo zasebno, pa je odgovor na pitanje "je li netko dotaknuo bilo koju od naših nekretnina ovaj tjedan" značio prebacivanje u svaki po redu.

### Ažuriranja sada bilježe što se promijenilo

Uređivanje člana tima ranije je bilježilo rezultatni skup dozvola. To vam govori koje su dozvole sada, ali ne i koje su bile, pa je pitanje "tko je uklonio pristup naplati ovoj osobi i kada" bilo neodgovorivo.

Ažuriranja događaja sada uključuju `changes` mapu samo polja koja su se stvarno promijenila, svako s prethodnom i novom vrijednošću. Nepromenjena polja su izostavljena, pa promjena dozvole izgleda kao jedan redak umjesto zida boolean vrijednosti.

### Opisi i uređaj iza promjene

Destruktivni događaji sada nose jednostavnu rečenicu koja opisuje što se dogodilo, poput "Removed user from the account." Pregledi stranica imali su opise, a brisanja nisu, što je bilo obrnuto.

Događaji koji nešto mijenjaju također bilježe preglednik koji je izvršio promjenu. Sesije se bilježe kao hash kako bi se radnje jedne osobe mogli povezati bez da zapis pohranjuje bilo što što bi se moglo reproducirati.

### Ostala poboljšanja

- Neka ispravka paginacije i kombinacija filtera.
- Događaji prijave prikazivali su prazan **Who** stupac. Korisničko ime bilo je u zapisu cijelo vrijeme, a stranica ga nije čitala.
- Stupac akcije prikazivao je događaje prijave kao N/A, jer je Login nedostajao na popisu naziva akcija.
- Stranice revizijskog zapisa nisu mogle imenovati SSO korisnike, prikazujući "Missing User" umjesto. Sada su pravilno razriješeni.
- Stranica je mnogo brža na računima s dugom poviješću.

### Za API

Endpoint `/api/v1/audit-logs` dobio je odgovarajuće filtere: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` za pretragu podstringa, i `includeManagedTenants`. Odgovori sada uključuju `targetId`, `targetLabel` i `ua`.

Dva promjene koja vrijedi napomenuti ako već pozivate ovaj endpoint. `before` sada radi samostalno, dok je prethodno bio ignoriran osim ako ste također proslijedili `after`. I `limit` je sada ograničen na 10k s zadanim od 5k. Prije je bio neograničen.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">Vodič za AuditLogs API</a> pokriva nove parametre upita, a <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">referencu strukture AuditLog</a> pokriva nova polja.

Ako još niste koristili revizijski zapis, [originalni post objave](/(3-21-2022)-audit-log-released.html) prolazi kroz gdje se nalazi, tko ga može čitati i koliko dugo se unosi čuvaju. Sve je to nepromijenjeno.

### Zaključak

Drago nam je da možemo nastaviti poboljšavati FastComments. Ako tražite nešto u svom zapisu i ne možete ga pronaći, recite nam u nastavku.

Živjeli!

{{/isPost}}

---