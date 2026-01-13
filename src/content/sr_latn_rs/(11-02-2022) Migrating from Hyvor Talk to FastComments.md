[category:Migration]
###### [postdate]
# [postlink]Migracija sa Hyvor Talk na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da vidite kako da potpuno migrirate sa Hyvor Talk na FastComments.

Ako koristite manuelnu instalaciju koda sa Hyvor Talk, jednostavno je pitanje uklanjanja malog isječka koji vam daju i zamene sa <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Možete čak privremeno pokretati Hyvor i FastComments na istoj lokaciji kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.

Ako ne koristite instalaciju baziranu na isječku koda, uputstva će se razlikovati na osnovu vaše platforme - opet <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.
{{/unless}}

{{#isPost}}

## Ako ste na WordPress-u

FastComments ima posvećen WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Ovaj plugin čini instalaciju, podešavanje i sinhronizaciju veoma lakim. Ako odaberete ovaj put, možete ignorisati ostatak uputstava ovde. Samo se pobrinite
da ste sinhronizovali svoje komentare sa Hyvor Talk nazad na vašu WordPress instalaciju.

Ako ovo ne funkcioniše za vas kao što su izvestili neki od naših korisnika, možda biste hteli da koristite naš WordPress plugin, ali da izvršite uvoz podataka
ekspportovanjem ručno iz Hyvor Talk-a. Uvoz podataka možete pronaći u [Upravljanje podacima -> Uvoz komentara](https://fastcomments.com/auth/my-account/manage-data/import).

## Manuelna, generička instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, avatar korisnika, emoji i inline slike. Premestićemo slike na naše servere bez problema.

Od 2022. Hyvor Talk ne izvozi e-mailove ili glasove (gore/dole). Ako možete da dobijete izvoz od njih sa ovom informacijom, možemo da ga uvezemo.

### Uvezite .JSON fajl

Nakon što preuzmete Hyvor izvoz, prijavite se na vašu FastComments kontrolnu tablu i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite Hyvor Talk iz padajućeg menija i otpremite svoj fajl.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da je otpremanje fajla i njegovo procesuiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, mogli biste odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je gotovo

Dobijeteće e-mail kada je uvoz završen - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu nakon uspešnog otpremanja fajla, i kada vidite vaš uvoz na stranici uvoza. Imaće status poput "Zahtevano" a kada počne, status će biti "U radu".

Sigurno je uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli da pomognemo.

### Zamena Hyvor Talk koda sa FastComments

Ako koristite instalaciju baziranu na isječku koda sa Hyvor, jednostavno je pitanje uklanjanja malog isječka koji vam daju i zamene sa <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Takođe podržavamo mnoge framework-ove za front-end koje [možete pronaći ovde](https://fastcomments.com/install-wizard). Možete čak privremeno pokretati Hyvor i FastComments na istoj lokaciji kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.

Ako ne koristite instalaciju baziranu na isječku koda, uputstva će se opet razlikovati na osnovu vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.

Nudi se čarobnjak za instalaciju za samopomoć [ovde](https://fastcomments.com/install-wizard).

### Migracija URL-ova u isto vreme

Komentari sami su vezani za id stranice u izvozu, dakle, dokle god se vaši URL-ovi ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih fajlova, tako da ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### EU

Ako ste u EU, verovatno želite da napravite svoj nalog na [eu.fastcomments.com](https://eu.fastcomments.com) kako bi vaši podaci o korisnicima ostali u EU.

### Sažetak

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Hyvor JavaScript isječak sa <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments-ovim</a>

## Zašto mi Hyvor ne šalje moj fajl?
Za veće sajtove, Hyvor možda neće biti u mogućnosti da kreira izvezene fajlove zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da preuzmemo vaš postojeći sajt i preuzmemo komentare sa njega, međutim, to može biti
prilično prilagođeno i zbog vremena koje je uključeno, zahtevati da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć sa ovim ovde</a>.
{{/isPost}}