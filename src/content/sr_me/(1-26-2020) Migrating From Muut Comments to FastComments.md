---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Muut komentara na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste saznali kako potpuno migrirati sa Muut na FastComments.

To je jednostavno pitanje uklanjanja malog dela koda koji Muut daje i zamene istog sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Muut i FastComments na istoj lokaciji da testirate i prilagodite izgled i doživljaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.
{{/unless}}

{{#isPost}}
### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Premestićemo slike na naše servere bez poteškoća.

Da biste izvezli podatke o komentarima i korisnicima sa Muut, idite na Administratorsku kontrolu, zatim na Integracije i odaberite JSON Izvoz.

Primetićete da datoteka koju dobijete preko e-mail-a ima misterioznu ekstenziju "gz". Ako ste malo tehnički potkovani, možda znate da to označava "gzip" što je popularan i efikasan način kompresije datoteka.

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 neće moći da otvori datoteku sa Muut. To je u redu, jer vam to nije potrebno uz FastComments. Naš backend razume ovu kompresovanu datoteku.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Izaberite Muut iz padajućeg menija i otpremite vašu datoteku.

Biće potrebno da unesete URL vaše veb stranice. To je zato što Muut ne daje te informacije u izvozu.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da je otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možete odmah dobiti poruku o uspehu. Na stranici za uvoz, na dnu je tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je dosad uvezeno.

### Kada se završi

Dobićete e-mail kada se uvoz završi - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu kada otpremanje datoteke uspe i vidite vaš uvoz na stranici za uvoz. Imaće status poput "Zatraženo" a kada počne, status će biti "U toku".

Sigurno je ponovno uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> da bismo mogli pomoći.

### Zamenite Muut kod sa FastComments

To je jednostavno pitanje uklanjanja malog dela koda koji Muut daje i zamene istog sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Muut i FastComments na istoj lokaciji da testirate i prilagodite izgled i doživljaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.

### Migracija URL-ova u isto vreme

Komentari su vezani za "link" polja u Muut izvozu, tako da sve dok se vaši URL-ovi ne menjaju, prelazak je lak. Ako želite da migrirate URL-ove i zadržite vaše komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica pomoći omogućava otpremanje malih tekstualnih datoteka, tako da ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Muut JavaScript deo sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto Muut neće poslati moju datoteku?
Za veće sajtove Muut možda ne može da kreira izvezenu datoteku zbog tehničkih ograničenja na njihovoj strani. Imamo mogućnost da skeniramo vašu postojeću stranicu i skinemo komentare sa nje, međutim ovo može biti prilično prilagođeno i zbog vremena koje je potrebno, moraćete da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko ovoga ovde</a>.
{{/isPost}}

---