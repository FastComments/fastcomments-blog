---
[category:Performance]
###### [postdate]
# [postlink]Indeksiranje vaših komentarskih niti u tražilicama[/postlink]

{{#unless isPost}}
Poboljšali smo informacije koje tražilice vide kada pretražuju vašu stranicu sa FastComments.
{{/unless}}

{{#isPost}}

## Što je novo

Ranije, kada su tražilice pretraživale web stranice sa instaliranim FastComments, indeksirale su samo prve komentare na stranici (top 30).

To je bilo zato što su ranije tražilice videle isto što i vi kada ste posjetili svoju stranicu.

Sada, kada tražilica posjeti vašu stranicu, svi komentari će biti učitani.

## Utjecaj na Page Rank

Moderne tražilice uzimaju u obzir mnoge stvari prilikom rangiranja stranice, uključujući relevantnost sadržaja na stranici u usporedbi s onim što tražite, pa čak i stvari poput 
vrijeme učitavanja te stranice.

Ova promjena će značiti da je cjelokupni sadržaj vaših komentarskih niti dostupan za indeksiranje, što potencijalno povećava relevantnost pretraživanja. Također pokazuje angažman, što 
je nešto što tražilica može koristiti za rangiranje.

Mogući nedostatak je performansa, budući da sada učitavamo više komentara, međutim u našim testiranjima otkrili smo da bi bilo potrebno mnogo stotina, ako ne i tisuća komentara 
u niti da uspori FastComments do te mjere da to utječe na vrijeme učitavanja vaše stranice i uzrokuje promjenu u rangu.

Na primjer, naša demo stranica sa više od 100 komentara, i dalje <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">dobiva rezultat 99/100 od Googleovih PageSpeed Insights</a>.

## Testiranje koje smo proveli

Osigurali smo da tražilice sada vide cijelu komentarsku nit za stranicu, i testirali smo performanse učitavanja cijelih komentarskih niti odjednom.

## Utjecaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, promjena je već primijenjena na vaš račun, i nije potrebno poduzimati daljnje akcije. Kada tražilice ponovo indeksiraju vaše stranice,
svi komentari na tim stranicama trebali bi biti indeksirani.

## Zaključak

Nadamo se da ste ovu nadogradnju i njenu dokumentaciju pronašli korisnima. Sretno komentiranje!

{{/isPost}}