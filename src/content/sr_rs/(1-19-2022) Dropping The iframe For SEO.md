---
[category:Performanse]
[category:Karakteristike]
###### [postdate]
# [postlink]Uklanjanje iframe-a za SEO[/postlink]

{{#unless isPost}}
Poboljšali smo vidljivost vaših komentara za pretraživače i povećali verovatnoću da će sadržaj biti dodeljen vašem sajtu.
{{/unless}}

{{#isPost}}

## Šta je novo

Prethodno, FastComments je prikazivao vaše komentare u iframe-u kada ih pretraživači indeksiraju. To je zato što aplikacija zahteva korišćenje iframe-ova za način na koji koristimo kolačiće za sesije vaših korisnika.

Međutim, to predstavlja problem za pretraživače, jer ne garantuju da će sadržaj u iframe-u biti dodeljen vašem sajtu.

Sada, prilikom prikazivanja komentara, skripta za ugradnju će proveriti da li stranicu učitava crawler. Ako jeste, nećemo koristiti iframe!

## Koliko komentara se prikazuje

Do 2,000 komentara biće prikazano pretraživačima za stranicu. Biće sortirani na osnovu vašeg podrazumevanog podešenog redosleda.

## Testiranje koje smo uradili

Obezbedili smo da pretraživači sada vide ceo niz komentara za stranicu i testirali smo performanse učitavanja celih nizova komentara odjednom.

## Uticaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, promena je već primenjena na vašem nalogu i nije potrebna nikakva dalja akcija. Kada pretraživači ponovo indeksiraju vaše stranice, svi komentari na tim stranicama treba da budu indeksirani.

## Zaključak

Nadamo se da ste ovu ažuriranje i njegovu dokumentaciju našli korisnim. Srećno komentarisanje!

{{/isPost}}