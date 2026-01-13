---
[category:Migration]

###### [postdate]
# [postlink]Migracija sa IntenseDebate na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste demonstrirali kako se u potpunosti migrira sa IntenseDebate na FastComments.
{{/unless}}

{{#isPost}}
## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, podešavanje i sinhronizaciju veoma lakima. Ako krenete ovim putem, možete ignorisati ostatak uputstava ovde.

## Ručna, generička instalacija

### Izvezite postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima sa svog sajta iz IntenseDebate, idite na Administratorsku kontrolnu tablu na Sites -> Your Site -> Tools -> XML Export.

Primetićete da datoteka koju dobijete putem e-maila ima misterioznu "gz" ekstenziju. Ako ste malo tehnički potkovani, možda znate da to označava "gzip" i da je to popularan i efikasan način za kompresiju datoteka.

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 neće moći da otvori datoteku iz IntenseDebate. To je u redu, jer ne morate to raditi sa FastComments. Naš backend razume ovu kompresovanu datoteku.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Odaberite IntenseDebate iz padajuće liste i otpremite svoju datoteku.

### Sačekajte nekoliko minuta

Import FastComments-a je "asinkron". To znači da su otpremanje datoteke i njeno obrada odvojeni koraci.

Dakle, u zavisnosti od veličine datoteke, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki redak predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da biste videli status svog uvoza i koliko je redova do sada uvezeno.

### Kada je gotovo

Primiteće e-mail kada uvoz završi - bez obzira na to da li je uspešan ili ne. Možete zatvoriti stranicu nakon što uspešno otpremite datoteku i vidite svoj uvoz na stranici za uvoz. Imaće status kao "Zatraženo", a kada počne, status će biti "U toku".

Sigurno je ponovo uvesti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> da bismo mogli pomoći.

### Zamenite IntenseDebate kod sa FastComments

Jednostavno je pitanje uklanjanja malog isječka koji vam IntenseDebate daje i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti IntenseDebate i FastComments na istom sajtu kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći s tim</a>.

Ako koristite IntenseDebate vidžete i želite ih zameniti, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas ovde</a>.

### Migracija URL-ova u isto vreme

Komentari su sami povezani sa "link" poljima u IntenseDebate izvozu, tako da, sve dok se vaši URL-ovi ne menjaju, promena je laka. Ako želite da migrirate URL-ove i zadržite svoje
komentare, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> šaljući nam stare i nove URL-ove. Stranica za pomoć omogućava otpremanje malih tekstualnih datoteka, tako da, ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### Rekapitulacija

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite IntenseDebate JavaScript isječak sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Zašto IntenseDebate neće poslati moju datoteku?
Za veće sajtove IntenseDebate možda neće biti u mogućnosti da kreira izvezenu datoteku zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da možemo prikupiti podatke sa vašeg postojećeg sajta i izvući komentare s njega, međutim, ovo može biti
prilično prilagođeno i zbog vremena koje je uloženo, zahtevaće da imate paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s ovim ovde</a>.
{{/isPost}}

---