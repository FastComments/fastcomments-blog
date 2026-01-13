---
[category:Migration]
###### [postdate]
# [postlink]Migrating From Commento To FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da vidite kako da potpuno migrirate sa Commento na FastComments.

## Problemi

Commento nam ne pruža pune URL-ove. Ono što oni daju je samo naziv domena kojem pripada nit komentara - poput "fastcomments.com/some-page".
To znači da importer FastComments mora pretpostaviti koji je protokol, a podrazumevano postavlja na https. Ako pokrenete uvoz i ne vidite svoje podatke,
možda biste želeli da proverite da li je vaš sajt pravilno zaštićen.
{{/unless}}

{{#isPost}}
### Izvezite svoje postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima sa vaše stranice iz Commento, idite na Administratorsku kontrolnu tablu, zatim na General i potom na Export Data.

Primetićete da fajl koji dobijete putem emaila ima misterioznu ekstenziju "gz". Ako ste malo tehnički potkovani, možda znate da ovo označava "gzip" i da je to popularan i efikasan način kompresije fajlova.

### Ne otvarajte "gz" fajl

Podrazumevana instalacija Windows 10 neće moći da otvori fajl iz Commento. To je u redu, jer to ne morate da radite sa FastComments. Naša pozadina razume ovaj kompresovani fajl.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite Commento iz padajuće liste i otpremite svoj fajl.

### Sačekajte nekoliko minuta

Uvoz u FastComments je "asinkron". To znači da su otpremanje fajla i njegovo procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz, na dnu se nalazi tabela - svaka vrstica predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je dosad uvezeno.

### Kada je gotovo

Dobićete email kada uvoz završi - bez obzira na to da li je uspešan ili ne. Možete zatvoriti stranicu nakon što se otpremanje fajla uspešno završi i vidite svoj uvoz na stranici za uvoze. Imaće status poput "Zahtevano", a kada počne, status će biti "U toku".

Sigurno je ponovo uvoziti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli da pomognemo.

### Zamenite Commento kod sa FastComments

To je jednostavno pitanje uklanjanja malog snipeta koji vam Commento daje i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak da pokrenete Commento i FastComments na istoj stranici privremeno kako biste testirali i podesili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći sa tim</a>.

### Migracija URL-ova u isto vreme

Komentari su povezani sa "link" poljima u izdanju Commento, tako da, dok vaši URL-ovi ostanu isti, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica pomoći omogućava otpremanje malih tekstualnih fajlova, tako da, ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### Sažetak

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Commento JavaScript snipet sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Problemi

Commento nam ne pruža pune URL-ove. Ono što oni daju je samo naziv domena kojem pripada nit komentara - poput "fastcomments.com/some-page".
To znači da importer FastComments mora pretpostaviti koji je protokol, a podrazumevano postavlja na https. Ako pokrenete uvoz i ne vidite svoje podatke,
možda biste želeli da proverite da li je vaš sajt pravilno zaštićen.

## Zašto Commento neće poslati moj fajl?
Za veće sajtove Commento možda neće moći da kreira izvezeni fajl zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da prikupimo vaše postojeće sajtove i izvučemo komentare sa njih, međutim to može biti
prilično prilagođeno i zbog vremena koje je uključeno zahtevaće da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć sa tim ovde</a>.
{{/isPost}}

---