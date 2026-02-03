---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Uklanjanje iframe-a za SEO[/postlink]

{{#unless isPost}}
Poboljšali smo vidljivost vaših komentara za pretraživače i povećali verovatnoću da će sadržaj biti pripisan vašem sajtu.
{{/unless}}

{{#isPost}}

## Šta je novo

Ranije je FastComments prikazivao vaše komentare u iframe-u kada su ih pretraživači indeksirali. To je zato što aplikacija zahteva korišćenje iframe-ova za način na koji koristimo kolačiće za sesije vaših korisnika.

Međutim, to predstavlja problem za pretraživače, jer ne garantuju da će sadržaj u iframe-u biti pripisan vašem sajtu.

Sada, prilikom prikazivanja komentara, skripta za ugradnju će proveriti da li stranicu učitava pretraživač. Ako je tako, neće koristiti iframe!

## Koliko komentara se prikazuje

Do 2.000 komentara biće prikazano pretraživačima za jednu stranicu. Biće sortirani na osnovu vašeg podrazumevanog podešenog redosleda.

## Testiranje koje smo sproveli

Obezbedili smo da pretraživači sada vide celu nit komentara za stranicu, i testirali smo performanse učitavanja celih nitova komentara odjednom.

## Uticaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, promena je već primenjena na vaš nalog, i nije potrebna nikakva dalja akcija. Kada pretraživači ponovo indeksiraju vaše stranice, svi komentari na tim stranicama trebali bi biti indeksirani.

## Na kraju

Nadamo se da ste našli ovo ažuriranje i njegovu dokumentaciju korisnom. Srećno komentarisanje!

{{/isPost}}

---