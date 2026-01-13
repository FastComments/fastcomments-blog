---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Hyvor Talk-a na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako potpuno migrirati sa Hyvor Talk-a na FastComments.

Ako koristite manuelnu instalaciju koda sa Hyvor Talk-om, dovoljno je samo da uklonite mali deo koda koji su vam dali i zamenite ga sa <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Hyvor i FastComments na istoj lokaciji kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

Ako ne koristite instalaciju zasnovanu na kodu, instrukcije će se razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.
{{/unless}}

{{#isPost}}

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, podešavanje i sinhronizaciju veoma jednostavnom. Ako se odlučite za ovu opciju, možete ignorisati ostatak uputstva ovde. Samo se uverite
da ste sinhronizovali svoje komentare sa Hyvor Talk-a natrag na vašu WordPress instalaciju.

Ako ovo ne funkcioniše za vas kao što su izvestili neki od naših korisnika, možete koristiti naš WordPress dodatak, ali izvršite uvoz podataka
izvozom ro bez Hyvor Talk-a ručno. Uveze možete pronaći u [Manage Data -> Import Comments](https://fastcomments.com/auth/my-account/manage-data/import).

## Manuelna, generička instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentarske niti, korisnička imena, korisničke avatare, emocije i inline slike. Premeštaćemo slike na naše servere besprekorno.

Od 2022. Hyvor Talk ne izvozi e-mail adrese ili glasove za/nazad. Ako uspete da dobijete izvoz od njih sa ovim informacijama, možemo ga uvesti.

### Uvezite .JSON fajl

Nakon što preuzmete Hyvor izvoz, prijavite se na vašu FastComments kontrolnu tablu i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite Hyvor Talk iz padajućeg menija i otpremite vaš fajl.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da otpremanje fajla i njegovo procesiranje predstavljaju odvojene korake.

Dakle, u zavisnosti od veličine vašeg fajla, možete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu se nalazi tabela - svaki red predstavlja pokušaj uvoza.
Možete bezbedno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je završeno

Dobićete e-mail kada uvoz bude završen - bez obzira na to da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje fajla uspe, i kada vidite svoj uvoz na stranici uvoza. Imaće status poput "Zahtevano", a kada započne, status će biti "U radu".

Bezbedno je ponovo uvesti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli pomoći.

### Zamenite Hyvor Talk kod sa FastComments

Ako koristite instalaciju zasnovanu na kodu sa Hyvor, dovoljno je da uklonite mali deo koda koji su vam dali i zamenite ga sa <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Takođe podržavamo mnoge front-end okvire koje [možete pronaći ovde](https://fastcomments.com/install-wizard). Možete čak privremeno pokrenuti Hyvor i FastComments na istoj lokaciji kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

Ako ne koristite instalaciju zasnovanu na kodu, instrukcije će se razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.

Nudimo alat za samostalnu instalaciju [ovde](https://fastcomments.com/install-wizard).

### Migriranje URL-ova u isto vreme

Komentari su vezani za ID stranice u izvozu, tako da ako se vaši URL-ovi ne promene, promena je jednostavna. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica za pomoć omogućava učitavanje malih tekstualnih fajlova, pa ako
migrirate više od par URL-ova, napravite Excel tabelu.

### EU

Ako ste u EU, verovatno ćete želeti da napravite svoj nalog na [eu.fastcomments.com](https://eu.fastcomments.com) kako bi vaši podaci o kupcima ostali u EU.

### Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Hyvor JavaScript deo koda sa <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments-ovim</a>

## Zašto Hyvor ne želi da mi pošalje moj fajl?
Za veće sajtove Hyvor možda neće moći da kreira izvezen fajl zbog tehničkih ograničenja na njihovoj strani. Imamo mogućnost da skinemo vaš postojeći sajt i uklonimo komentare sa njega, međutim, to može biti
prilično prilagođeno i zbog uloženog vremena biće potrebno da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko toga ovde</a>.
{{/isPost}}

---