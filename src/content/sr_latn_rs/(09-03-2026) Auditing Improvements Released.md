[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Objavljena Poboljšanja Revizije[/postlink]

{{#unless isPost}}
Audit log sada prikazuje ko ili šta je svaki događaj pogođeno po imenu, i možete pretraživati po tome. Takođe su sada dostupni opseg datuma, pretraga pod‑zakupaca, difovi na nivou polja pri ažuriranjima i odgovarajući API filteri.
{{/unless}}

{{#isPost}}

### Šta je novo

Audit log je oduvek beležio ko je izvršio akciju i na čemu je izvršena. Ovo izdanje je o tome da taj zapis učinimo čitljivim i pretraživim bez napuštanja stranice.

Ako ste želeli da saznate šta se desilo sa određenim moderatorom, prvo ste morali da pronađete njegov ID, a ako je taj moderator od tada uklonjen, nije bilo čega da se ID‑u uporedi. Događaj je govorio da je nešto izbrisano, od koga i kada, ali iz nekog razloga su imena nedostajala.

Sada se ime beleži zajedno sa ID‑om u trenutku događaja, pa preživi brisanje i možete pretraživati po njemu.

### Kolona „Affected”

U tabeli je nova **Affected** kolona koja prikazuje osobu ili objekat na koji je događaj delovao, po imenu. Za osobu se prikazuje npr. `jsmith (jsmith@example.com)`. Za prilagođavanje widgeta ili grupu za moderaciju to je ime koje ste vi dali. Za medijski fajl to je ime fajla koji ste otpremili.

Iznad tabele se nalazi odgovarajuće polje za pretragu, **Who or what was changed**. Ukucajte ime, email adresu ili ID, i naći će događaje koji se odnose na tu osobu ili objekat. Ne morate da znate koji od ova tri imate, niti da prvo tražite interni ID.

Događaji zapisani pre ovog izdanja nemaju priloženo ime, ali i dalje imaju ID koji su uvek imali, pa isto polje za pretragu pronalazi i njih po ID‑u.

### Opseg datuma

Red za filtere sada ima padajući meni **Date Range** sa opcijama Last 30 Days, Last 90 Days, Last Year, All Time i **Custom range**, koji otkriva polja za odabir datuma „From“ i „To“.

Opseg datuma je daleko najlakši način da suzite pretragu, a kombinovanje sa ostalim filterima je najbrži način da nešto pronađete.

### Upravljani nalozi

Ako vaš nalog upravlja drugim zakupcima, postoji čekboks **Include sub‑tenants**. Kada ga označite, pretraga obuhvata vaš nalog i sve zakupce koje on upravlja u jednom prolazu, uz kolonu **Tenant** koja prikazuje iz kog naloga je svaki događaj potekao.

Do sada je log svakog zakupca mogao da se čita samo zasebno, pa je odgovor na pitanje „da li je neko dotakao naše resurse ove nedelje“ zahtevao da se prebacujete kroz svaki od njih.

### Ažuriranja sada beleže šta se promenilo

Uređivanje člana tima ranije je beležilo skup dozvola koje su rezultat. To je govorilo koje su dozvole sada, ali ne i koje su bile pre, pa je pitanje „ko je uklonio pristup naplati ovom korisniku i kada“ bilo neodgovorivo.

Sada događaji ažuriranja uključuju mapu `changes` koja sadrži samo polja koja su se zaista promenila, svako sa prethodnom i novom vrednošću. Polja koja se nisu promenila su izostavljena, pa promena dozvole izgleda kao jedna linija umesto zida logičkih vrednosti.

### Opisi i uređaj iza promene

Destruktivni događaji sada nose jednostavnu rečenicu koja opisuje šta se desilo, npr. „Removed user from the account.“ Stranice su imale opise, a brisanja nisu, što je bilo obrnuto.

Događaji koji nešto menjaju takođe beleže pretraživač koji je izvršio promenu. Sesije se beleže kao hash, tako da se akcije jedne osobe mogu korelirati bez da log čuva bilo šta što bi moglo biti reprodukovano.

### Ostala poboljšanja

- Neka ispravka vezana za paginaciju i kombinacije filtera.
- Događaji prijave su prikazivali praznu kolonu **Who**. Korisničko ime je bilo u zapisu sve vreme, a stranica ga nije čitala.
- Kolona akcije je prikazivala događaje prijave kao N/A, jer je „Login“ nedostajao u listi naziva akcija.
- Stranice audit log‑a nisu mogle da prikažu SSO korisnike, prikazujući „Missing User“. Sada se pravilno razrešavaju.
- Stranica je mnogo brža na nalozima sa dugom istorijom.

### Za API

Endpoint `/api/v1/audit-logs` je dobio odgovarajuće filtere: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` za pretragu podstringa, i `includeManagedTenants`. Odgovori sada uključuju `targetId`, `targetLabel` i `ua`.

Dve promene vredne napomene ako već koristite ovaj endpoint. `before` sada radi samostalno, dok je ranije bio ignorisan osim ako niste prosledili i `after`. I `limit` je sada ograničen na 10k, dok je ranije nemao gornju granicu. Podrazumevana vrednost ostaje nepromenjena na 1k.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">The AuditLogs API guide</a> pokriva nove parametre upita, a <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">the AuditLog structure reference</a> pokriva nova polja.

Ako još niste koristili audit log, [the original release post](/(3-21-2022)-audit-log-released.html) objašnjava gde se nalazi, ko ga može čitati i koliko dugo se unosi čuvaju. Sve je ostalo nepromenjeno.

### Zaključak

Drago nam je što možemo nastaviti da unapređujemo FastComments.
Ako tražite nešto u svom logu i ne možete da ga nađete, recite nam u komentarima.

Cheers!

{{/isPost}}