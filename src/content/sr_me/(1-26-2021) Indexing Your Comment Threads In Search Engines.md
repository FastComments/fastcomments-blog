---
[category:Performance]
###### [postdate]
# [postlink]Indeksiranje vaših komentara u pretraživačima[/postlink]

{{#unless isPost}}
Poboljšali smo informacije koje pretraživači vide prilikom pretraživanja vašeg sajta sa FastComments.
{{/unless}}

{{#isPost}}

## Šta je novo

Prethodno, kada su pretraživači pretraživali sajtove na kojima je instaliran FastComments, indeksirali su samo komentare sa prve stranice (prvih 30).

To je bilo zato što su ranije pretraživači videli isto što i vi kada posetite vaš sajt.

Sada, kada pretraživač poseti vaš sajt, svi komentari će biti učitani.

## Uticaj na rang stranice

Moderni pretraživači uzimaju u obzir mnoge stvari prilikom rangiranja stranice, uključujući relevantnost sadržaja na stranici u poređenju sa onim što tražite, pa čak i stvari poput
vremena učitavanja te stranice.

Ova promena će značiti da je celi sadržaj vaših komentara dostupan za indeksiranje, potencijalno povećavajući relevantnost pretraga. Takođe pokazuje angažovanost, što
je nešto što pretraživač može koristiti za rangiranje.

Mogući nedostatak je performansa, s obzirom na to da sada učitavamo više komentara, međutim u našim testiranjima otkrili smo da bi bilo potrebno mnogo stotina, ako ne i hiljada komentara
u thread-u da bi usporili FastComments do nivoa na kojem bi to uticalo na vremena učitavanja stranice i uzrokovalo promenu ranga.

Na primer, naša demo stranica sa preko 100 komentara, još uvek <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">dobija ocenu 99/100 od Google-ovih PageSpeed Insights</a>.

## Testiranje koje smo uradili

Osigurali smo da pretraživači sada vide celu nit komentara za stranicu, i testirali smo performanse učitavanja celih nit-ova komentara odjednom.

## Uticaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, promena je već primenjena na vašem nalogu i nije potrebna dodatna akcija. Kada pretraživači ponovo indeksiraju vaše stranice, svi komentari na tim stranicama trebali bi biti indeksirani.

## Zaključak

Nadamo se da ste pronašli ovu ažuriranje i njenu dokumentaciju korisnom. Srećno sa komentarima!

{{/isPost}}