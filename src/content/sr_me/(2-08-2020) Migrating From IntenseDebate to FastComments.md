---
[category:Migration]

###### [postdate]
# [postlink]Migracija sa IntenseDebate na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste demonstrirali kako potpuno migrirati sa IntenseDebate na FastComments.
{{/unless}}

{{#isPost}}
## Ako koristite WordPress

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, postavljanje i sinhronizaciju veoma lakim. Ako krenete ovim putem, možete ignorisati ostatak uputstava ovde.

## Ručna, generička instalacija

### Izvezite svoje postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima sa vašeg sajta iz IntenseDebate, idite na Administratorski panel, zatim na Sites -> Your Site -> Tools -> XML Export.

Primetićete da rezultantni fajl koji dobijate putem emaila ima misterioznu "gz" ekstenziju. Ako ste malčice tehnički potkovani, možda znate da to znači "gzip" i popularan je i efikasan način za kompresovanje fajlova. 

### Ne otvarajte "gz" fajl

Podrazumevana instalacija Windows 10 neće moći da otvori fajl iz IntenseDebate. To je u redu, jer to ne morate sa FastComments. Naš backend razume ovaj kompresovani fajl.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite IntenseDebate iz padajućeg menija i otpremite svoj fajl.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje fajla i njegovo procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, možete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko redova je uvezeno do sada.

### Kada je završeno

Dobijaćete email kada se uvoz završi - bilo da je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje fajla uspe i kada vidite vaš uvoz na stranici uvoza. Imaće status kao "Zahtevano", a kada počne, status će biti "U toku".

Sigurno je ponovo uvesti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite se nama</a> kako bismo mogli pomoći.

### Zamenite IntenseDebate kod sa FastComments

Jednostavno je pitanje uklanjanja malog snippeta koji vam daje IntenseDebate i zamenjivanja sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak i privremeno pokrenuti IntenseDebate i FastComments na istom sajtu da testirate i prilagodite izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći sa tim</a>.

Ako koristite IntenseDebate widžete i želite da ih zamenite, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas ovde</a>.

### Migracija URL-ova u isto vreme

Sami komentari su vezani za "link" polja u IntenseDebate izvozu, tako da, sve dok se vaši URL-ovi ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> šaljući nam stare i nove URL-ove. Stranica sa pomoći omogućava otpremanje malih tekstualnih fajlova, tako da, ako
migrirate više od nekoliko URL-ova, napravite Excel tabelu.

### Podsetnik

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite IntenseDebate JavaScript snipped sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto IntenseDebate neće poslati moj fajl?
Za veće sajtove IntenseDebate možda neće moći da napravi izvezene fajlove zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da "scrumbamo" vaš postojeći sajt i odatle preuzmemo komentare, međutim, to može
biti prilično prilagođeno i zbog vremena koje je uključeno, biće potrebno da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć ovde</a>.
{{/isPost}}

---