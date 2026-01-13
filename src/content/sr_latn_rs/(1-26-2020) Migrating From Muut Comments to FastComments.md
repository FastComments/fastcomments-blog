[category:Migration]
###### [postdate]
# [postlink]Migracija sa Muut komentara na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste saznali kako se potpuno migrirati sa Muut na FastComments.

To je samo pitanje uklanjanja malog isječka koji vam Muut daje i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno koristiti Muut i FastComments na istoj stranici da testirate i doradite izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.
{{/unless}}

{{#isPost}}
### Izvezite svoje postojeće komentare

FastComments importer će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Premeštaćemo slike na naše servere neprimetno.

Da biste izvezli podatke o komentarima i korisnicima sa vaše stranice iz Muut-a, idite na Integracije i zatim JSON Izvoz na njihovoj Admin kontrolnoj tabli.

Primetićete da ima misterioznu ekstenziju "gz" na rezultantnom fajlu koji dobijate putem emaila. Ako ste malo tehnički potkovani, možda znate da to označava "gzip" i predstavlja popularan i efikasan način kompresije fajlova.

### Ne otvarajte "gz" fajl

Podrazumevana instalacija Windows 10 neće moći da otvori fajl iz Muut-a. To je u redu, jer vam nije potrebno to sa FastComments. Naš backend razume ovaj kompresovani fajl.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite Muut iz padajućeg menija i otpremite svoj fajl.

Morate uneti URL vaše veb stranice. To je zato što nam Muut ne daje te informacije u izvozu.

### Sačekajte nekoliko minuta

Import FastComments-a je "asinhron". To znači da su otpremanje fajla i njegovo procesiranje odvojeni koraci.

Tako da, u zavisnosti od veličine vašeg fajla, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je gotov

Prim ćete email kada je uvoz završen - bez obzira na to da li je uspešan ili ne. Možete zatvoriti stranicu nakon što uspešno otpremite fajl i vidite svoj uvoz na stranici Uvozi. Imaće status poput "Zatraženo" a kada počne status će biti "U radu".

Sigurno je ponovo uvesti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite se nama</a> tako da možemo pomoći.

### Zamenite Muut kod sa FastComments

To je samo pitanje uklanjanja malog isječka koji vam Muut daje i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno koristiti Muut i FastComments na istoj stranici da testirate i doradite izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

### Migracija URL-ova u isto vreme

Sami komentari su povezani sa "link" poljima u Muut izvozu, tako da koliko god da se vaši URL-ovi ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica pomoći omogućava otpremanje malih tekstualnih fajlova, tako da ako
migrate više od samo nekoliko URL-ova, napravite Excel tabelu.

### Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Muut JavaScript isječak sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto mi Muut ne šalje moj fajl?
Za veće sajtove Muut možda neće biti u mogućnosti da kreira izvezene fajlove zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da skeniramo vašu trenutnu stranicu i izvučemo komentare s nje, međutim, ovo može biti
prilično prilagođeno i zbog vremena potrebnog za to, biće potrebno da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s tim ovde</a>.
{{/isPost}}