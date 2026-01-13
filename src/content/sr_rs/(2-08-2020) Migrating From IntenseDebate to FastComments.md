---
[category:Migration]

###### [postdate]
# [postlink]Migrating From IntenseDebate To FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako potpuno migrirati sa IntenseDebate na FastComments.
{{/unless}}

{{#isPost}}
## Ako koristite WordPress

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak olakšava instalaciju, postavku i sinhronizaciju. Ako se odlučite za ovu opciju, možete ignorisati ostatak uputstava ovde.

## Ručna, generička instalacija

### Izvezite postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima sa IntenseDebate, sa njihove administrativne kontrolne table idite na Sites -> Your Site -> Tools -> XML Export.

Primetićete da datoteka koja dolazi putem e-pošte ima misterioznu ekstenziju "gz". Ako ste malo tehnički potkovani, znate da ovo označava "gzip" i predstavlja popularan i efikasan način kompresovanja datoteka. 

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 neće moći da otvori datoteku sa IntenseDebate. To je u redu, jer to ne morate raditi sa FastComments. Naš backend razume ovu kompresovanu datoteku.

Nakon toga, ako ste prijavljeni, možete ići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da importujete datoteku</a>. Izaberite IntenseDebate iz padajućeg menija i otpremite vašu datoteku.

### Sačekajte nekoliko minuta

Importovanje u FastComments je "asinhrono". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možete odmah dobiti poruku o uspehu. Na stranici za importovanje, pri dnu je tabela - svaki red predstavlja pokušaj importovanja.
Sigurno možete osvežiti ovu stranicu da biste videli status vašeg importovanja i koliko redova je do sada importovano.

### Kada završi

Prim ćete e-poštu kada se importovanje završi - bez obzira na to da li je uspešno ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i kada vidite vaš import na stranici za Imports. Imaće status poput "Requested", a kada počne, status će biti "Running".

Sigurno je reimportovati onoliko puta koliko je potrebno - međutim, ako vaše importovanje ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli pomoći.

### Zamenite IntenseDebate kod sa FastComments kodom

Jednostavno je ukloniti mali deo koda koji vam IntenseDebate daje i zameniti ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Čak možete privremeno pokrenuti IntenseDebate i FastComments na istoj stranici kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći sa tim</a>.

Ako koristite IntenseDebate widgete i želite da ih zamenite, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas ovde</a>.

### Migracija URL-ova u isto vreme

Komentari su povezani sa "link" poljima u IntenseDebate exportu, tako da dokle god se vaši URL-ovi ne menjaju, prebacivanje je jednostavno. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> šaljuci stare i nove URL-ove. Stranica za pomoć omogućava otpremanje malih tekstualnih datoteka, tako da ako 
migrate više od samo nekoliko URL-ova, kreirajte Excel tabelu.

### Rezime

1. Izvezite vaše podatke
2. Importujte u FastComments
3. Zamijenite IntenseDebate JavaScript kod sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsovim</a>

## Zašto IntenseDebate neće poslati moju datoteku?
Za veće stranice, IntenseDebate možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da izdvojimo vašu postojeću stranicu i preuzmemo komentare sa nje, međutim, ovo može biti 
prilično prilagođeno i zbog vremena koje je uključeno, biće potrebno da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete tražiti pomoć u vezi sa ovim ovde</a>.
{{/isPost}}

---