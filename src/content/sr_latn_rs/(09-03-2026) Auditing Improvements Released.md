[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Objavljena Poboljšanja Audita[/postlink]

{{#unless isPost}}
Audit log sada prikazuje ko ili šta je svaki događaj pogođeno po imenu, i možete pretraživati po tome. Takođe su sada dostupni opseg datuma, pretraga pod‑zakupaca, difovi na nivou polja pri ažuriranjima i odgovarajući API filteri.
{{/unless}}

{{#isPost}}

### Šta je novo

Audit log je oduvek beležio ko je izvršio akciju i na čemu je izvršena. Ovo izdanje se odnosi na to da taj zapis učinimo čitljivim i pretraživim bez napuštanja stranice.

Ako ste želeli da saznate šta se desilo sa određenim moderatorom, prvo ste morali da pronađete njegov ID, a ako je taj moderator od tada uklonjen, nije bilo čega da se ID proveri. Događaj je govorio da je nešto obrisano, od strane koga i kada, ali iz nekih razloga su imena nedostajala.

Sada se ime zabeleži zajedno sa ID-jem u trenutku događaja, pa preživi brisanje i možete ga pretraživati.

### Kolona Affected

U tabeli je nova kolona **Affected** koja prikazuje osobu ili objekat na koji je događaj delovao, po imenu. Za osobu se prikazuje kao `jsmith (jsmith@example.com)`. Za prilagođavanje widgeta ili grupu za moderaciju to je ime koje ste joj dali. Za medijski fajl to je ime fajla koji ste otpremili.

Iznad tabele nalazi se odgovarajuće polje za pretragu, **Who or what was changed**. Unesite ime, email adresu ili ID, i ono će pronaći događaje koji su uticali na tu osobu ili objekat. Ne morate da znate koji od ta tri imate, niti da prvo tražite interni ID.

Događaji zabeleženi pre ovog izdanja nemaju priloženo ime, ali i dalje imaju ID koji su uvek imali, pa isto polje za pretragu može da ih pronađe po ID-u.

### Opseg datuma

Red za filtere sada ima padajući meni **Date Range** sa opcijama Last 30 Days, Last 90 Days, Last Year, All Time i **Custom range**, koji otkriva polja za odabir datuma From i To.

Opseg datuma je daleko najlakši način da suzite pretragu, a kombinovanje sa ostalim filterima je najbrži način da nešto pronađete.

### Upravljani nalozi

Ako vaš nalog upravlja drugim zakupcima, postoji polje za potvrdu **Include sub-tenants**. Kada ga označite, pretraga obuhvata vaš nalog i sve zakupce koje upravlja u jednom prolazu, uz kolonu **Tenant** koja prikazuje iz kog naloga je svaki događaj potekao.

Do sada je log svakog zakupca mogao da se čita samo zasebno, pa je odgovor na pitanje „da li je neko dotakao neku od naših imovine ove nedelje“ zahtevao prebacivanje na svaki od njih pojedinačno.

### Ažuriranja sada beleže šta se promenilo

Uređivanje člana tima je ranije beležilo konačni skup dozvola. To vam govori koje su dozvole trenutno, ali ne i koje su bile, pa pitanje „ko je uklonio pristup naplati ovoj osobi i kada“ nije imalo odgovor.

Događaji ažuriranja sada uključuju mapu `changes` koja sadrži samo polja koja su se zaista promenila, svako sa prethodnom i novom vrednošću. Polja koja se nisu promenila su izostavljena, pa promena dozvole izgleda kao jedna linija umesto zida boolean vrednosti.

### Opisi i uređaj iza promene

Destruktivni događaji sada nose jednostavnu rečenicu koja opisuje šta se desilo, npr. „Removed user from the account.“ Pregledi stranica su imali opise, a brisanja nisu, što je bilo obrnuto.

Događaji koji nešto menjaju takođe beleže pregledač koji je izvršio promenu. Sesije se beleže kao hash, tako da se radnje jedne osobe mogu povezati bez da log čuva bilo šta što bi moglo biti reprodukovano.

### Ostala poboljšanja

- Neka rešenja problema sa paginacijom i kombinacijama filtera.
- Login događaji su prikazivali praznu kolonu **Who**. Korisničko ime je bilo u zapisu sve vreme, ali stranica ga nije čitala.
- Kolona akcija je prikazivala login događaje kao N/A, jer je Login nedostajao na listi naziva akcija.
- Stranice audit loga nisu mogle da prikažu imena SSO korisnika, prikazujući „Missing User“ umesto. Sada se pravilno rešavaju.
- Stranica je mnogo brža na nalozima sa dugom istorijom.

### Za API

Endpoint `/api/v1/audit-logs` je dobio odgovarajuće filtere: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` za pretragu podstringa, i `includeManagedTenants`. Odgovori sada uključuju `targetId`, `targetLabel` i `ua`.

Dve promene koje vredi napomenuti ako već pozivate ovaj endpoint. `before` sada radi samostalno, dok je ranije bio ignorisan osim ako niste prosledili i `after`. Takođe je `limit` sada ograničen na 10k sa podrazumevanom vrednošću od 5k. Prethodno nije imao ograničenje.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">Vodič za AuditLogs API</a> pokriva nove parametre upita, a <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">referenca strukture AuditLog</a> pokriva nova polja.

Ako još niste koristili audit log, [originalni post o izdanju](/(3-21-2022)-audit-log-released.html) objašnjava gde se nalazi, ko ga može čitati i koliko dugo se unosi čuvaju. Sve je to nepromenjeno.

### Zaključak

Drago nam je što možemo nastaviti da poboljšavamo FastComments. Ako tražite nešto u svom logu i ne možete da ga nađete, recite nam u nastavku.

Živeli!

{{/isPost}}

---