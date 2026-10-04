[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments je sada još brži[/postlink]

{{#unless isPost}}
Uklonili smo jedan mrežni zahtjev prilikom učitavanja widgeta za komentare, čime smo dodatno smanjili vrijeme učitavanja.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

Kako FastComments funkcionira posljednjih otprilike pet godina je da učitavamo mali skript, učitava se iframe, zatim skript koji uključuje njegov stil, i potom zahtjev prema API-ju za sve što je potrebno za prikaz komentara. Iako zvuči kao puno, to je vrlo kompaktno u usporedbi s većinom sustava!

Međutim, sada je to čak i jedan zahtjev manje. Odgovor iframe-a koji isporučuje widget također nosi komentare i sve podatke koje korisnik treba u početku, pa je posljednji API zahtjev uklonjen.

API ostaje održavan radi povratne kompatibilnosti za sve koji ga koriste.

### Ništa za konfigurirati

Ne postoji postavka za ovo i nema verzije na koju treba nadograditi. Ako ugradite FastComments pomoću našeg skripta, već ga imate.

Vaša stranica ostaje nepromijenjena u oba slučaja. Widget se i dalje učitava u iframe-u i ne blokira vaš sadržaj, točno kao i prije.

### Gdje se ne primjenjuje

Neki putevi ne koriste ovo i ponašaju se točno onako kako su uvijek radili:

- Pretraživački roboti, koji već prikazuju komentare izravno na stranici umjesto u iframe-u
- Korisnički feedovi aktivnosti i filtriranje hashtagova, koji čitaju s različitih krajnjih točaka

### Zaključak

Nadamo se da ćete i dalje uživati u korištenju naše platforme i da će poboljšanja koja uvodimo donijeti vrijednost. :)

Živjeli!

{{/isPost}}