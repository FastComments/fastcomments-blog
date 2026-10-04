[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments je sada još brži[/postlink]

{{#unless isPost}}
We've removed one network request when loading the comment widget, lowering load times even more.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Kako FastComments funkcioniše poslednjih otprilike pet godina je da učitavamo mali skript, iframe se učitava, zatim skript koji uključuje njegov stil, i potom zahtev ka API‑ju za sve što je potrebno da se prikažu komentari. Iako zvuči kao mnogo, ovo je veoma kompaktno u poređenju sa većinom sistema!

Međutim, sada je čak i jedan zahtev manje. Odgovor iframe‑a koji isporučuje widget takođe nosi komentare i sve podatke koje korisnik inicijalno treba, tako da poslednji zahtev ka API‑ju više ne postoji.

API ostaje održavan radi unazadne kompatibilnosti za sve koji ga koriste.

### Ništa za konfigurisati

Nema podešavanja za ovo i nema verzije na koju treba nadograditi. Ako ugradite FastComments pomoću našeg skripta, već ga imate.

Vaša stranica ostaje nepromenjena u oba slučaja. Widget se i dalje učitava u iframe‑u i i dalje ne blokira vaš sadržaj, baš kao i pre.

### Gde se ne primenjuje

Nekoliko putanja ne koristi ovo, i ponašaju se tačno onako kako su uvek radile:

- Pretraživački botovi, koji već renderuju komentare direktno u stranicu umesto u iframe
- Tokovi aktivnosti korisnika i filtriranje hashtagova, koji čitaju sa različitih krajnjih tačaka

### U zaključku

Nadamo se da ćete i dalje uživati u korišćenju naše platforme i da će poboljšanja koja uvodimo doneti vrednost. :)

Živeli!

{{/isPost}}