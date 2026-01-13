---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migracija sa Disqus-a na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako da potpuno migrirate sa Disqus-a na FastComments.

Ako koristite Generic Site Integration sa Disqus-om, onda je jednostavno potrebno da uklonite mali deo koda koji vam oni daju i zamenite ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno da pokrenete Disqus i FastComments na istom sajtu kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

Ako ne koristite Generic Site Integration, onda će uputstva varirati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.
{{/unless}}

{{#isPost}}
Postoji mnogo stvari koje Disqus dobro radi, ali gde padaju kratko je ono gde FastComments stupa u akciju.

## Ako ste na WordPress-u

FastComments ima posvećen WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Plugin olakšava instalaciju, podešavanje i sinhronizaciju. Ako krenete ovim putem, možete ignorisati ostatak uputstava ovde.

## Ručna, generička instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Premestićemo slike na naše servere bez problema.

Jedna stvar koju Disqus dobro radi je kako upravljaju izvozom podataka. Primetićete, nakon što pratite korake u njihovom vodiču <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde</a>, da rezultantna
datoteka koju dobijete putem e-pošte ima tajanstvenu "gz" ekstenziju datoteke. Ako ste malo tehnički potkovani možda znate da to označava "gzip" i da je to popularan i efikasan način kompresije datoteka.

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 neće moći da otvori datoteku iz Disqus-a. To je u redu, jer to ne morate sa FastComments. Naš backend razume
ovu kompresovanu datoteku tako da sve što treba da uradite je da pratite njihova uputstva <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde da dobijete navedenu datoteku</a>.

Nakon toga, ako ste se prijavili, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Izaberite Disqus iz dropdown menija i otpremite svoju datoteku.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu se nalazi tabela - svaki red predstavlja pokušaj uvoza.
Možete bezbedno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko je redova do sada uvezeno.

### Kada bude gotovo

Dobićete e-poštu kada uvoz bude završen - bez obzira na to da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i vidite svoj uvoz na stranici Izvoza. Imaće status poput "Zahtevano", a kada počne, status će biti "U toku".

Bezbedno je ponovo uvesti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> da bismo mogli pomoći.

### Zamenite Disqus kod sa FastComments

Ako koristite Generic Site Integration sa Disqus-om, onda je jednostavno potrebno da uklonite mali deo koda koji vam oni daju i zamenite ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno da pokrenete Disqus i FastComments na istom sajtu kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

Ako ne koristite Generic Site Integration, onda će uputstva varirati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.

### Migriranje URL-ova u isto vreme

Komentari su sami vezani za "link" polja u Disqus izvozu, tako da sve dok se vaši URL-ovi ne menjaju, prelazak je lak. Ako želite da migrirate URL-ove i zadržite svoje
komentare, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> šaljući nam stare i nove URL-ove. Stranica pomoći omogućava otpremanje malih tekstualnih datoteka, tako da ako
migrate više od nekoliko URL-ova, kreirajte Excel tabelu.

### Recap

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Disqus JavaScript deo sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto Disqus neće da mi pošalje datoteku?
Za veće sajtove Disqus možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja s njihove strane. Imamo mogućnost da pretražimo vaš postojeći sajt i skinemo komentare sa njega, međutim to može biti
prilično prilagođeno i zbog uključenog vremena zahtevaće da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s tim ovde</a>.
{{/isPost}}