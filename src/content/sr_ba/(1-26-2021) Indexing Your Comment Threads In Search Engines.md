---
[category:Performance]
###### [postdate]
# [postlink]Indeksiranje vaših komentara u pretraživačima[/postlink]

{{#unless isPost}}
Poboljšali smo informacije koje pretraživači vide kada pretražuju vaš sajt sa FastComments.
{{/unless}}

{{#isPost}}

## Šta je novo

Prethodno, kada su pretraživači pretraživali veb sajtove sa instaliranim FastComments, indeksirali su samo prvu stranu (top 30) komentara.

To je bilo zato što su pretraživači pre viđenja vašeg sajta videli isto što i vi.

Sada, kada pretraživač poseti vaš sajt, svi komentari će biti učitani.

## Utjecaj na rangiranje stranica

Savremeni pretraživači uzimaju u obzir mnoge stvari prilikom rangiranja stranice, uključujući relevantnost sadržaja na stranici u poređenju sa onim što tražite, pa čak i stvari kao što su
vreme učitavanja stranice.

Ova promena će omogućiti da se ceo sadržaj vaših komentarskih niti učitava za indeksiranje, potencijalno povećavajući relevantnost pretraga. Takođe pokazuje angažman, što
je nešto što pretraživač može koristiti za rangiranje.

Mogući negativan faktor je performansa, pošto sada učitavamo više komentara, međutim u našem testiranju otkrili smo da bi bilo potrebno mnogo stotina, ako ne i hiljada komentara
u niti da bi usporili FastComments do nivoa koji bi uticao na vreme učitavanja stranica da izazove promenu ranga.

Na primer, naša demo stranica sa više od 100 komentara, i dalje <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">dobija 99/100 ocenu na Googleovim PageSpeed Insights</a>.

## Testiranje koje smo uradili

Osigurali smo da pretraživači sada vide celu komentarsku nit za stranicu, i testirali smo performansu učitavanja celih komentarskih niti odjednom.

## Utjecaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, promena je već primenjena na vaš nalog, i nije potrebna nikakva dodatna akcija. Kada pretraživači ponovo indeksiraju vaše stranice
svi komentari na tim stranicama biće indeksirani.

## Zaključak

Nadamo se da ste ovu ažuriranje i njegovu dokumentaciju našli korisnim. Srećno komentarisanje!

{{/isPost}}