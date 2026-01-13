---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migracija Sa Disqus Na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste saznali kako da potpuno migrirate sa Disqus-a na FastComments.

Ako koristite Generičku integraciju sajta sa Disqus-om, onda je jednostavno pitanje uklanjanja malog dela koda koji su vam dali i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak i privremeno koristiti Disqus i FastComments na istom sajtu kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.

Ako ne koristite Generičku integraciju sajta, onda će uputstva varirati u zavisnosti od vaše platforme - opet <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.
{{/unless}}

{{#isPost}}
Postoji mnogo stvari koje Disqus radi ispravno, ali gde su slabiji je tamo gde FastComments preuzima stvar.

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, postavku i sinhronizaciju veoma lakim. Ako krenete ovim putem, možete zanemariti ostatak uputstava ovde.

## Ručna, generička instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, avatar korisnika i inline slike. Premestićemo slike na naše servere bez problema.

Jedna stvar koju Disqus radi ispravno je kako rukuje izvozom podataka. Primetićete nakon praćenja koraka u njihovom vodiču <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde</a> da rezultantni
fajl koji dobijete putem e-pošte ima misterioznu ekstenziju "gz". Ako znate malo više o tehničkim stvarima, možda znate da to označava "gzip" i predstavlja popularan i efikasan način za kompresiju fajlova.

### Ne otvarajte "gz" fajl

Podrazumevana instalacija Windows 10 neće moći da otvori fajl iz Disqus-a. To je u redu, jer to ne morate da radite sa FastComments. Naš backend razume
ovaj kompresovani fajl, tako da sve što treba da uradite je da pratite njihova uputstva <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde da dobijete navedeni fajl</a>.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite Disqus iz padajućeg menija i otpremite svoj fajl.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje fajla i njegovo procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je gotovo

Primićete e-poštu kada je uvoz gotov - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje fajla uspe i kada vidite svoj uvoz na stranici za uvoze. Imaće status poput "Zahtevano", a kada počne, status će biti "U radu".

Sigurno je ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> da bismo mogli pomoći.

### Zamenite Disqus kod sa FastComments

Ako koristite Generičku integraciju sajta sa Disqus-om, onda je jednostavno pitanje uklanjanja malog dela koda koji su vam dali i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak i privremeno koristiti Disqus i FastComments na istom sajtu kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.

Ako ne koristite Generičku integraciju sajta, onda će uputstva varirati u zavisnosti od vaše platforme - opet <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.

### Migracija URL-ova u isto vreme

Komentari su sami povezani sa "link" poljima u Disqus izvozu, tako da, sve dok se vaši URL-ovi ne menjaju, promena je laka. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica sa podrškom omogućava otpremanje malih tekstualnih fajlova, pa ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### Rekapitulacija

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Disqus JavaScript deo koda sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Zašto mi Disqus ne šalje moj fajl?
Za veće sajtove Disqus možda neće moći da kreira izvezeni fajl zbog tehničkih ograničenja s njihove strane. Imamo mogućnost da pretražujemo vaš postojeći sajt i izvučemo komentare sa njega, međutim ovo može biti
prilično prilagođeno i zbog vremena koje zahteva, biće potrebno da imate paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć sa tim ovde</a>.
{{/isPost}}