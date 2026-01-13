---
[category:Performance]
###### [postdate]
# [postlink]Indeksiranje Vaših Komentara u Pretraživačima[/postlink]

{{#unless isPost}}
Poboljšali smo informacije koje pretraživači vide prilikom pretraživanja vašeg sajta sa FastComments.
{{/unless}}

{{#isPost}}

## Šta je novo

Prethodno, kada su pretraživači pretraživali vebsajtove sa instaliranim FastComments, indeksirali su samo prvu stranicu (gornjih 30) komentara.

To je bilo zato što su pretraživači prethodno videli isto što i vi kada ste posetili vaš sajt.

Sada, kada pretraživač poseti vaš sajt, svi komentari će biti učitani.

## Uticaj na Rang Strane

Moderni pretraživači uzimaju u obzir mnoge stvari prilikom rangiranja stranice, uključujući relevantnost sadržaja na stranici u poređenju sa onim što tražite, pa čak i stvari poput
vremena učitavanja stranice.

Ova promena će značiti da je puni sadržaj vaših komentara dostupan za indeksiranje, što potencijalno može povećati relevantnost pretraga. Takođe pokazuje angažman, što
je nešto što pretraživač može koristiti za rangiranje.

Mogući nedostatak je performansa, pošto sada učitavamo više komentara, međutim, u našim testiranjima smo otkrili da bi bilo potrebno mnogo stotina, ako ne i hiljada komentara
u nizu da bi se usporio FastComments na način koji bi uticao na vreme učitavanja vaše stranice i izazvao promenu ranga.

Na primer, naša demo stranica sa preko 100 komentara, i dalje <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">dobija rezultat 99/100 od Google-ovog PageSpeed Insights</a>.

## Testiranje koje smo sproveli

Osigurali smo da pretraživači sada vide celu nit komentara za stranicu, i testirali smo performanse učitavanja celih komentara odjednom.

## Uticaj na Postojeće Klanove

Ako ste postojeći korisnik koji koristi FastComments, promena je već primenjena na vašem nalogu, i nije potrebna dodatna akcija. Kada pretraživači ponovo indeksiraju vaše stranice,
svi komentari na tim stranicama treba da budu indeksirani.

## Na Zaključku

Nadamo se da ste ovu ažuriranje i njegovu dokumentaciju našli korisnom. Srećno komentarisanje!

{{/isPost}}