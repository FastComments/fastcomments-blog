---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Muut komentara na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da vidite kako potpuno migrirati sa Muut na FastComments.

To je jednostavno pitanje uklanjanja malog snipeta koji vam Muut daje i zamenjivanja ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Čak možete privremeno pokretati Muut i FastComments na istoj stranici radi testiranja i podešavanja izgleda i osećaja. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.
{{/unless}}

{{#isPost}}
### Izvezite svoje postojeće komentare

FastComments import alat će migrirati vaše komentare, korisničke nazive, korisničke avatare i inline slike. Mi ćemo slike premestiti na naše servere bez problema.

Da biste izvezli podatke o komentarima i korisnicima sa vaše stranice iz Muut, idite na Administratorsku kontrolnu tablu, izaberite Integracije, a zatim JSON Izvoz.

Primetićete da rezultantna datoteka koju dobijete putem emaila ima misterioznu "gz" ekstenziju. Ako ste malo tehnički potkovani, možda znate da to znači "gzip" i da je to popularan i efikasan način kompresije datoteka.

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 neće moći da otvori datoteku sa Muut. To je u redu, jer vam to nije potrebno sa FastComments. Naš backend razume ovu kompresovanu datoteku.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Izaberite Muut iz padajućeg menija i otpremite svoju datoteku.

Bićete primorani da unesete URL vaše veb stranice. To je zato što Muut ne daje te informacije u izvozu.

### Sačekajte nekoliko minuta

FastComments import je "asinhron". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete bezbedno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko redova je dosad uvezeno.

### Kada završi

Dobijaćete email kada uvoz bude završen - bilo da je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i vidite vaš uvoz na stranici Uvozi. Imaće status poput "Zahtevano", a kada započne, status će biti "U toku".

Sigurno je ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo vam pomogli.

### Zamenite Muut kod sa FastComments

To je jednostavno pitanje uklanjanja malog snipeta koji vam Muut daje i zamenjivanja ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Čak možete privremeno pokretati Muut i FastComments na istoj stranici radi testiranja i podešavanja izgleda i osećaja. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

### Migracija URL-ova u isto vreme

Sami komentari su vezani za "link" polja u Muut izvozu, tako da dokle god se vaši URL-ovi ne menjaju, prelazak je lak. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih datoteka, pa ako
migrate više od samo nekoliko URL-a, napravite Excel tabelu.

### Rekapitulacija

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Muut JavaScript snipet sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto mu Muut ne šalje moju datoteku?
Za veće stranice Muut možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da skinemo vašu postojeću stranicu i preuzmemo komentare sa nje, međutim ovo može biti
prilično prilagođeno i zbog potrebnog vremena zahtevaće da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko ovoga ovde</a>.
{{/isPost}}

---