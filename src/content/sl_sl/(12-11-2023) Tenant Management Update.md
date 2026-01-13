---
[category:Features]
###### [postdate]
# [postlink]Posodobitev upravljanja najemnikov[/postlink]

{{#unless isPost}}
FastComments je izboljšal interakcijo pri upravljanju vaših najemnikov!
{{/unless}}

{{#isPost}}

### Kaj je novega

Od 11. decembra 2023 FastComments zdaj omogoča preklapljanje med najemniki brez uporabe impersonacije drugih uporabnikov najemnikov.

### Ciljna publika

Ta posodobitev ni namenjena komentatorjem ali skrbnikom spletnega mesta, ki upravljajo eno samo spletno mesto. To koristi skrbnikom, ki upravljajo več spletnih mest ali najemnikov.

### Vpliv na skrbnike

Prej je bilo ustvarjanje najemnikov in preklapljanje uporabnikov precej neprijetno. Nekatere pogoste težave so bile:

1. Ustvariti ste morali uporabnika, ko ste ustvarili svoj najemnik, saj je ta uporabnik "imel" najemnika.
2. To je pomenilo, da ste morali uporabiti nov e-poštni naslov za vsako spletno mesto, tudi če ste želeli uporabljati en e-poštni naslov/račun za več pod-najemnikov.
3. Preklapljanje med najemniki je zahtevalo impersonacijo, kar je pomenilo, da so morali vaši uporabniki biti podvojeni po vseh najemnikih, z enakimi dovoljenji in tako naprej.

Zdaj:

1. Ustvarjanje uporabnika ni potrebno pri ustvarjanju najemnika.
2. Vsak Super Admin uporabnik z ustreznimi dovoljenji ima enaka dovoljenja v vseh pod-najemnikih.
3. V seznamu najemnikov je gumb `Switch`, ki ohrani vaš trenutni uporabniški račun in dovoljenja, vendar spremeni, v katerem najemniku ste prijavljeni.
4. Če ste skrbnik glavnega najemnika, imate moderatorna dovoljenja v pod-najemnikih pri uporabi pripomočka za komentiranje. 

Dogodki so še vedno zabeleženi v dnevniku revizij za najemnika, na katerega ste preklopili.

### Impersonacija

Še vedno lahko impersonirate uporabnike. Preklopite na najemnika in pojdite na stran `Users`.

### Za razvijalce & posebnosti

Pri uporabi API-ja `POST /tenants` je polje `email` zdaj neobvezno. Dokumentacija je bila posodobljena.

### Prihodnje posodobitve

V prihodnosti bo v seznamu najemnikov še več upravljalskih dejanj, kot so brisanje najemnikov in podobno.

### Na zaključek

Kot pri vseh večjih izdajah smo veseli, da smo imeli čas optimizirati, testirati in pravilno izdati to funkcionalnost. Sporočite nam
spodaj, če naletite na težave.

Na zdravje!

{{/isPost}}

---