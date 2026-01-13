---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Commento na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste videli kako potpuno migrirati sa Commento na FastComments.

## Problemi

Commento nam ne daje pune URL adrese. Ono što pružaju je samo naziv domena kojem pripada nit komentara - kao što je "fastcomments.com/some-page".
To znači da FastComments importer mora pretpostaviti koji je protokol, a podrazumeva se da je to https. Ako pokrenete uvoz i ne vidite svoje podatke
možda bi trebalo da proverite da li je vaš sajt pravilno zaštićen.
{{/unless}}

{{#isPost}}
### Izvezite svoje postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima sa vašeg sajta iz Commento, idite na Administratorsku kontrolnu tablu, zatim na General, a potom na Export Data.

Primetićete da fajl koji dobijate putem email-a ima misterioznu "gz" ekstenziju. Ako ste malo tehnički potkovani, možda znate da to označava "gzip" i to je popularan i efikasan način za kompresiju fajlova.

### Ne otvarajte "gz" fajl

Podrazumevana instalacija Windows 10 neće moći da otvori fajl iz Commento. To je u redu, jer to ne morate da radite sa FastComments. Naš backend razume ovaj kompresovani fajl.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite Commento iz padajućeg menija i otpremite svoj fajl.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinhron". To znači da je otpremanje fajla i njegovo procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, možete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete bezbedno osvežiti ovu stranicu da vidite status svog uvoza i koliko redova je do sada uvezeno.

### Kada bude gotovo

Dobićete email kada je uvoz završen - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje fajla bude uspešno i vidite svoj uvoz na stranici Imports. Imaće status kao "Zatraženo" i kada počne, status će biti "U toku".

Sigurno je ponovo uvesti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli pomoći.

### Zamenite Commento kod sa FastComments

To je jednostavno pitanje uklanjanja malog dela koda koji vam daje Commento i njegovog zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Commento i FastComments na istom sajtu kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.

### Migracija URL-ova istovremeno

Sami komentari su vezani za "link" polja u Commento izvozu, tako da sve dok se vaši URL-ovi ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih fajlova, pa ako
migrate više od samo nekoliko URL-ova, napravite Excel tabelu.

### ReCAP

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Commento JavaScript deo sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Problemi

Commento nam ne daje pune URL adrese. Ono što pružaju je samo naziv domena kojem pripada nit komentara - kao što je "fastcomments.com/some-page".
To znači da FastComments importer mora pretpostaviti koji je protokol, a podrazumeva se da je to https. Ako pokrenete uvoz i ne vidite svoje podatke
možda bi trebalo da proverite da li je vaš sajt pravilno zaštićen.

## Zašto Commento neće poslati moj fajl?
Za veće sajtove, Commento možda neće moći da kreira izvezene fajlove zbog tehničkih ograničenja s njihove strane. Imamo mogućnost da prikupimo vaše postojeće sajtove i preuzmemo komentare sa njih, međutim to može biti
prilično prilagođeno i zbog vremena potrebnog biće potrebno da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć za ovo ovde</a>.
{{/isPost}}