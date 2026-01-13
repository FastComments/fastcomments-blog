---
[category:Performanse]
[category:Funkcije]
###### [postdate]
# [postlink]Ukidanje iframe-a za SEO[/postlink]

{{#unless isPost}}
Poboljšali smo vidljivost vaših komentara za pretraživače i povećali verovatnoću da će sadržaj biti pripisan vašem sajtu.
{{/unless}}

{{#isPost}}

## Šta je novo

Prethodno, FastComments bi prikazivao vaše komentare u iframe-u kada bi ih pretraživači indeksirali. To je zato što aplikacija zahteva korišćenje iframe-ova
zbog načina na koji koristimo kolačiće za sesije vaših korisnika.

Međutim, to predstavlja problem za pretraživače, jer ne garantuju da će sadržaj u iframe-u biti pripisan vašem sajtu.

Sada, prilikom prikazivanja komentara, embed skripta će proveriti da li se stranica učitava pomoću crawler-a. Ako je to slučaj, neće koristiti iframe!

## Koliko komentara je prikazano

Do 2.000 komentara će biti prikazano pretraživačima za stranicu. Biće sortirani prema vašem podrazumevanom podešenom redosledu.

## Testiranje koje smo sproveli

Osigurali smo da pretraživači sada vide celu nit komentara za stranicu, i testirali smo performanse učitavanja celih nitova komentara odjednom.

## Uticaj na postojeće korisnike

Ako ste postojeći korisnik FastComments-a, promena je već primenjena na vaš nalog i nije potrebno preduzeti nikakve daljnje mere. Kada pretraživači ponovo indeksiraju vaše stranice
svi komentari na tim stranicama trebali bi biti indeksirani.

## Zaključak

Nadamo se da ste ovu ažuriranje i njegovu dokumentaciju našli korisnim. Srećno komentarisanje!

{{/isPost}}