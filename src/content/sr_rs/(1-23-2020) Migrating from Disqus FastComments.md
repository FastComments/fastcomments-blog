---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migracija sa Disqus-a na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako da potpuno migrirate sa Disqus-a na FastComments.

Ako koristite Generic Site Integration sa Disqus-om, onda je jednostavno pitanje uklanjanja malog snippeta koji vam daju i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokretati Disqus i FastComments na istom sajtu da testirate i prilagodite izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

Ako ne koristite Generic Site Integration, tada će uputstva varirati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.
{{/unless}}

{{#isPost}}
Postoji mnogo stvari koje Disqus radi dobro, ali gde oni zakažu, tu FastComments dolazi u igru.

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak olakšava instalaciju, postavljanje i sinhronizaciju. Ako krenete ovim putem, možete zanemariti ostatak uputstava ovde.

## Ručna, generička instalacija

### Izvezite postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisničke nazive, korisničke avatare i inline slike. Premešaćemo slike na naše servere besprekorno.

Jedna stvar koju Disqus radi dobro je način na koji izvozi podatke. Primetićete nakon što pratite korake u njihovom vodiču <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde</a> da rezultantna
datoteka koju dobijate putem email-a ima misterioznu "gz" ekstenziju. Ako ste malo tehnički potkovani, možda znate da ovo označava "gzip" što je popularan i efikasan način kompresije datoteka.

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 neće biti u stanju da otvori datoteku sa Disqus-a. To je u redu, jer vam to nije potrebno sa FastComments. Naš backend razume
ovu kompresovanu datoteku, tako da sve što treba da uradite je da pratite njihova uputstva <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde da dobijete tu datoteku</a>.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Izaberite Disqus iz padajućeg menija i otpremite vašu datoteku.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da je otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je dosad uvezeno.

### Kada završi

Dobijaćete email kada je uvoz završen - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i kada vidite vaš uvoz na stranici za Uvoz. Imaće status poput "Zatraženo", a kada počne, status će biti "U toku".

Sigurno je ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli pomoći.

### Zamenite Disqus kod sa FastComments

Ako koristite Generic Site Integration sa Disqus-om, onda je jednostavno pitanje uklanjanja malog snippeta koji vam daju i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokretati Disqus i FastComments na istom sajtu da testirate i prilagodite izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

Ako ne koristite Generic Site Integration, tada će uputstva varirati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.

### Migracija URL-ova u isto vreme

Sami komentari su povezani sa "link" poljima u Disqus izvozu, tako da ako vaši URL-ovi ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i sačuvate vaše
komentare, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Pomoćna stranica omogućava otpremanje malih tekstualnih datoteka, tako da ako
migrirate više od nekoliko URL-ova, kreirajte Excel tabelu.

### Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Disqus JavaScript snippet sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto mi Disqus ne šalje moju datoteku?
Za veće sajtove, Disqus možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja na njihovoj strani. Imamo mogućnost da skeniramo vaš postojeći sajt i preuzmemo komentare sa njega, međutim ovo može biti
prilično prilagođeno i zbog uloženog vremena zahtevaćete da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć u vezi s tim ovde</a>.
{{/isPost}}