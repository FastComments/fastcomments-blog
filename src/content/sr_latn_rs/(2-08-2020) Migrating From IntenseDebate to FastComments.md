---
[category:Migration]

###### [postdate]
# [postlink]Migriranje Sa IntenseDebate Na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da demonstrirate kako da potpuno migrirate sa IntenseDebate na FastComments.
{{/unless}}

{{#isPost}}
## Ako Ste Na WordPress-u

FastComments ima posvećen WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Plugin čini instalaciju, podešavanje i sinhronizaciju veoma lakim. Ako se odlučite za ovaj put, možete ignorisati ostatak uputstava ovde.

## Ručna, Generička Instalacija

### Izvezite Svoje Postojeće Komentare

Da biste izvezli podatke o komentarima i korisnicima sa vašeg sajta iz IntenseDebate, sa njihovog Administrativnog panela idite na Sites -> Your Site -> Tools -> XML Export.

Primetićete da datoteka koju dobijate putem email-a ima tajanstvenu ekstenziju "gz". Ako ste malo tehnološki pismeni, možda znate da ovo označava "gzip" i da je popularan i efikasan način kompresovanja datoteka.

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 ne može otvoriti datoteku iz IntenseDebate. To je u redu, jer vam FastComments ne traži to. Naš backend razume ovu kompresovanu datoteku.

Nakon toga, ako ste prijavljeni, možete ići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da importujete datoteku</a>. Odaberite IntenseDebate iz padajućeg menija i otpremite vašu datoteku.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinhron". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu se nalazi tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da vidite stanje vašeg uvoza i koliko redova je dosad uvezeno.

### Kada je gotovo

Dobijaćete email kada je uvoz gotov - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu kada otpremanje datoteke uspe i kada vidite vaš uvoz na stranici za uvoze. Imaće status kao "Zahtevano", a kada počne, status će biti "U procesu".

Sigurno je ponovo importovati koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo mogli pomoći.

### Zamenite IntenseDebate Kod sa FastComments-om

To je jednostavno pitanje uklanjanja malog snippeta koji vam IntenseDebate daje i zamenjivanja sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak i privremeno pokrenuti IntenseDebate i FastComments na istom sajtu da testirate i prilagodite izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.

Ako koristite IntenseDebate widgete i želite da ih zamenite, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas ovde</a>.

### Migracija URL-ova u isto vreme

Komentari su sami vezani za "link" polja u IntenseDebate izvozu, tako da dokle god se vaši URL-ovi ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih datoteka, pa ako
migrirate više od nekoliko URL-ova, napravite Excel tabelu.

### Kratak osvrt

1. Izvezite svoje podatke
2. Importujte u FastComments
3. Zamijenite IntenseDebate JavaScript snippet sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto IntenseDebate Neće Poslati Moj Fajl?
Za veće sajtove IntenseDebate možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da pregledamo vaš postojeći sajt i preuzmemo komentare sa njega, međutim, to može biti
prilično prilagođeno i zbog uloženog vremena zahtevaće da imate Paket Podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete tražiti pomoć oko ovoga ovde</a>.
{{/isPost}}

---