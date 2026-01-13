---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Muut komentara na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako potpuno migrirati sa Muut-a na FastComments.

Jednostavno je potrebno ukloniti mali deo koda koji vam Muut daje i zameniti ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno da pokrenete Muut i FastComments na istom sajtu kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.
{{/unless}}

{{#isPost}}
### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, korisničke avatare i slike. Premeštamo slike na naše servere besprekorno.

Da biste izvezli podatke o komentarima i korisnicima sa vašeg sajta iz Muut-a, idite na Administratorsku konzolu, zatim na Integracije i onda na JSON Izvoz.

Primetićete da fajl koji dobijate putem emaila ima misterioznu "gz" ekstenziju. Ako ste malo tehnički potkovani, možda znate da to znači "gzip" i da je to popularan i efikasan način kompresije fajlova.

### Ne otvarajte "gz" fajl

Podrazumevana instalacija Windows 10 ne može otvoriti fajl iz Muut-a. To je u redu, jer ne morate to da radite sa FastComments. Naš backend razume ovaj kompresovani fajl.

Nakon toga, ako ste uloženi, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite Muut iz padajućeg menija i otpremite svoj fajl.

Biće potrebno da unesete URL vašeg sajta. To je zato što Muut ne daje te informacije u izvozu.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje fajla i njegovo procesuiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaka stavka predstavlja pokušaj uvoza.
Možete bezbedno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je gotovo

Dobijaćete email kada uvoz završi - bilo da je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje fajla uspe i kada vidite svoj uvoz na stranici uvoza. Imaće status poput "Zahtevano" a kada počne, status će biti "U radu".

Bezbedno je reimportovati koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo mogli pomoći.

### Zamenite Muut kod sa FastComments

Jednostavno je potrebno ukloniti mali deo koda koji vam Muut daje i zameniti ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno da pokrenete Muut i FastComments na istom sajtu kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

### Migracija URL-ova u isto vreme

Komentari sami su povezani sa "link" poljima u Muut izvozu, tako da dokle god vaši URL-ovi ostanu nepromenjeni, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica za pomoć omogućava otpremanje malih tekstualnih fajlova, tako da ako
migrate više od samo nekoliko URL-ova, kreirajte Excel tabelu.

### Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Muut JavaScript deo sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto Muut ne šalje moj fajl?
Za veće sajtove Muut možda neće moći da kreira izvezeni fajl zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da skrenemo vaš postojeći sajt i povučemo komentare sa njega, međutim, to može biti
prilično prilagođeno, i zbog vremena koje je uključeno, biće potrebno da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko ovoga ovde</a>.
{{/isPost}}

---