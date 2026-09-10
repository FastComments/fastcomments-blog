[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Izboljšave revizije objavljene[/postlink]

{{#unless isPost}}
Dnevnik revizije zdaj prikazuje, kdo ali kaj je vsak dogodek prizadel po imenu, in lahko po tem iščete. Na voljo je tudi časovno obdobje, iskanje po podnajemnikih, razlike na ravni polj pri posodobitvah in ustrezni filtri API-ja.
{{/unless}}

{{#isPost}}

### Kaj je novega

Dnevnik revizije je vedno beležil, kdo je izvedel dejanje in na čem je bilo izvedeno. Ta izdaja je namenjena temu, da je ta zapis berljiv in preiskljiv, ne da bi zapustili stran.

Če ste želeli izvedeti, kaj se je zgodilo z določenim moderatorjem, ste najprej morali poiskati njihov ID, in če je bil ta moderator od takrat odstranjen, ni bilo več česa, na kar bi ID preverili. Dogodek je povedal, da je bilo nekaj izbrisano, kdo je to storil in kdaj, vendar so bila za nekatere vire imena manjkala.

Zdaj je ime zajeto poleg ID-ja v trenutku dogodka, zato preživi brisanje in po njem lahko iščete.

### Stolpec Vplivano

V tabeli je nov stolpec **Affected**, ki prikazuje osebo ali predmet, na katerega je dogodek deloval, po imenu. Za osebo se prikaže kot `jsmith (jsmith@example.com)`. Za prilagoditev gradnika ali skupino moderacije je to ime, ki ste ga dali. Za medijsko datoteko je to ime datoteke, ki ste jo naložili.

Nad tabelo je ustrezno iskalno polje, **Kdo ali kaj je bilo spremenjeno**. Vnesite ime, e‑naslov ali ID, in najde dogodke, ki vplivajo na to osebo ali predmet. Ni treba vedeti, katero od teh treh imate, in ni treba najprej poiskati notranjega ID-ja.

Dogodki, ustvarjeni pred to izdajo, nimajo priloženega imena, vendar še vedno imajo ID, ki so ga vedno imeli, zato jih isto iskalno polje najde po ID-ju.

### Časovno obdobje

Vrstica filtrov ima zdaj spustni meni **Date Range** z možnostmi Zadnjih 30 dni, Zadnjih 90 dni, Prejšnje leto, Vse čase in **Custom range**, ki razkrije izbirnike datumov Od in Do.

Časovno obdobje je po vseh merilih najlažji način za zožitev iskanja, kombiniranje tega z drugimi filtri pa je najhitrejši način za najdbo.

### Upravljani računi

Če vaš račun upravlja druge najemnike, je na voljo potrditveno polje **Include sub-tenants**. Označitev omogoča iskanje po vašem računu in vseh najemnikih, ki jih upravlja, v enem koraku, s stolpcem **Tenant**, ki prikazuje, iz katerega računa je vsak dogodek prišel.

Do sedaj je bilo dnevniško zapisovanje vsakega najemnika mogoče brati le posebej, zato je bilo odgovarjanje na vprašanje „ali je kdo ta teden posegel po katerikoli naši lastnini“ pomenilo preklapljanje med njimi.

### Posodobitve zdaj beležijo, kaj se je spremenilo

Urejanje člana ekipe je prej beležilo končni nabor dovoljenj. To vam pove, kakšna so dovoljenja zdaj, ne pa, kakšna so bila prej, zato je bilo vprašanje „kdo je odstranil temu uporabniku dostop do obračunavanja in kdaj“ neodgovorljivo.

Dogodki posodobitev zdaj vključujejo zemljevid `changes` le s polji, ki so se dejansko spremenila, vsako z njegovo prejšnjo in novo vrednostjo. Nespremenjena polja so izpuščena, zato se sprememba dovoljenja prikaže v eni vrstici namesto v zidu logičnih vrednosti.

### Opisi in naprava za spremembo

Uničujoči dogodki zdaj vsebujejo preprost stavek, ki opisuje, kaj se je zgodilo, npr. „Odstranjen uporabnik iz računa.“ Ogledi strani so imeli opise, brisanja pa ne, kar je bilo obratno.

Dogodki, ki nekaj spremenijo, tudi beležijo brskalnik, ki je izvedel spremembo. Seje so zabeležene kot hash, tako da je mogoče povezati dejanja ene osebe, ne da bi dnevnik shranil karkoli, kar bi se lahko ponovno predvajalo.

### Ostala izboljšanja

- Nekaj popravkov pri paginaciji in kombinacijah filtrov.
- Dogodki prijave so prikazovali prazen stolpec **Who**. Uporabniško ime je bilo v zapisu ves čas, stran pa ga ni brala.
- Stolpec akcije je prikazoval dogodke prijave kot N/A, ker je bila prijava manjkajoča na seznamu imen akcij.
- Strani dnevnika revizije niso lahko poimenovale SSO uporabnikov, prikazovale so »Missing User«. Zdaj so pravilno razrešeni.
- Stran je veliko hitrejša pri računih z dolgotrajno zgodovino.

### Za API

`/api/v1/audit-logs` končna točka je dobila ustrezne filtre: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` za iskanje podniza in `includeManagedTenants`. Odzivi zdaj vključujejo `targetId`, `targetLabel` in `ua`.

Dve spremembi, ki sta vredni opazovanja, če že kličete to končno točko. `before` zdaj deluje samostojno, prej pa je bil prezrt, razen če ste hkrati poslali `after`. In `limit` je zdaj omejen na 10 000 z privzeto vrednostjo 5 000. Prej ni bil omejen.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">The AuditLogs API guide</a> covers the new query parameters, and <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">the AuditLog structure reference</a> covers the new fields.

Če še niste uporabljali dnevnika revizije, [originalni objave izdaje](/(3-21-2022)-audit-log-released.html) vas popelje skozi, kje se nahaja, kdo ga lahko bere in kako dolgo se hramijo vnosi. Vse to ostaja nespremenjeno.

### Zaključek

Veseli nas, da lahko nadaljujemo z izboljšavami FastComments. Če iščete nekaj v vašem dnevniku in tega ne najdete, nam to sporočite spodaj.

Na zdravje!

{{/isPost}}

---