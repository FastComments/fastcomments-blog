---
[category:Performanse]
[category:Značajke]
###### [postdate]
# [postlink]Zanavljanje iframe-a za SEO[/postlink]

{{#unless isPost}}
Poboljšali smo vidljivost vaših komentara za tražilice i povećali vjerojatnost da će sadržaj biti pripisan vašoj stranici.
{{/unless}}

{{#isPost}}

## Što je novo

Ranije je FastComments prikazivao vaše komentare unutar iframe-a kada su ih pretraživači pregledavali. To je zato što aplikacija zahtijeva korištenje iframe-a za način na koji koristimo kolačiće za sesije vaših korisnika.

Međutim, to predstavlja problem za tražilice, jer ne jamče da će sadržaj unutar iframe-a biti pripisan vašoj stranici.

Sada, prilikom prikazivanja komentara, ugradbeni skript će provjeriti učitava li stranicu crawler. Ako je to slučaj, neće koristiti iframe!

## Koliko komentara se prikazuje

Najviše 2.000 komentara će biti prikazano tražilicama za jednu stranicu. Bit će sortirani prema vašem zadano konfiguriranom redoslijedu sortiranja.

## Testiranje koje smo proveli

Osigurali smo da tražilice sada vide cijeli komentar na stranici, te smo testirali izvedbu učitavanja cijelih komentara odjednom.

## Utjecaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, promjena je već primijenjena na vaš račun, i nije potrebna daljnja radnja. Kada tražilice ponovno indeksiraju vaše stranice, svi komentari na tim stranicama trebali bi biti indeksirani.

## Na kraju

Nadamo se da ste smatrali ovaj ažuriranje i njegovu dokumentaciju korisnima. Sretno s komentiranjem!

{{/isPost}}