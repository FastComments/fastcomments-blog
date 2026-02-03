---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Uklanjanje iframe-a za SEO[/postlink]

{{#unless isPost}}
Poboljšali smo vidljivost vaših komentara za pretraživače i povećali verovatnoću da će sadržaj biti povezan sa vašim sajtom.
{{/unless}}

{{#isPost}}

## Šta je novo

Prethodno su FastComments renderovali vaše komentare u iframe-u kada su ih pretraživači pretraživali. To je zbog toga što aplikacija zahteva korišćenje iframe-ova za način na koji koristimo kolačiće za sesije vaših korisnika.

Međutim, ovo predstavlja problem za pretraživače, jer ne garantuju da će sadržaj u iframe-u biti povezan sa vašim sajtom.

Sada, kada se renderuju komentari, skripta za ugradnju će proveriti da li se stranica učitava od strane crawl-ova. Ako je tako, neće koristiti iframe!

## Koliko komentara se prikazuje

Do 2.000 komentara će se prikazivati pretraživačima za stranicu. Oni će biti sortirani na osnovu vašeg podrazumevanog podešenog reda sortiranja.

## Testiranje koje smo sproveli

Osigurali smo da pretraživači sada vide celu nit komentara za stranicu, i testirali smo performanse učitavanja celih niti komentara odjednom.

## Uticaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, promena je već primenjena na vaš nalog, i nije potrebna dalja akcija. Kada pretraživači ponovo indeksiraju vaše stranice, svi komentari na tim stranicama biće indeksirani.

## Na kraju

Nadamo se da ste ovu ažuriranje i njegovu dokumentaciju smatrali korisnim. Srećno komentarisanje!

{{/isPost}}