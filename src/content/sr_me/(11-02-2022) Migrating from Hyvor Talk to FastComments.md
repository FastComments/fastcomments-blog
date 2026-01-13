---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Hyvor Talk na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da vidite kako da u potpunosti migrirate sa Hyvor Talk na FastComments.

Ako koristite ručnu instalaciju koda sa Hyvor Talk, tada je jednostavno potrebno ukloniti mali deo koda koji vam daju i zameniti ga sa <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Hyvor i FastComments na istoj lokaciji kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

Ako ne koristite instalaciju zasnovanu na kodu, tada će se uputstva razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.
{{/unless}}

{{#isPost}}

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak olakšava instalaciju, podešavanje i sinhronizaciju. Ako krenete tim putem, možete ignorisati ostatak uputstava ovde. Samo osigurajte
da ste sinhronizovali svoje Hyvor Talk komentare sa vašom WordPress instalacijom.

Ako ovo ne funkcioniše, kao što su prijavili neki od naših korisnika, možda biste želeli da koristite naš WordPress dodatak, ali da izvršite uvoz podataka
izvozom iz Hyvor Talk ručno. Uvoz podataka možete pronaći u [Manage Data -> Import Comments](https://fastcomments.com/auth/my-account/manage-data/import).

## Ručna, generička instalacija

### Izvezite postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, avatare korisnika, emojije i inline slike. Mi ćemo prebaciti slike na naše servere lako.

Od 2022. godine, Hyvor Talk ne izvozi emailove niti glasove. Ako možete da dobijete izvoz od njih sa ovim informacijama, možemo ga uvesti.

### Uvezite .JSON datoteku

Nakon što preuzmete Hyvor izvoz, prijavite se na vaš FastComments kontrolni panel i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Izaberite Hyvor Talk iz padajućeg menija i otpremite vašu datoteku.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje datoteke i obrada odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možda ćete dobiti poruku o uspehu odmah. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je dosad uvezeno.

### Kada je gotovo

Dobićete email kada se uvoz završi - bilo uspešno ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe, i vidite vaš uvoz na stranici Uvoza. Imaće status poput "Zatraženo", a kada počne status će biti "U toku".

Sigurno je ponovo uvoziti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo mogli pomoći.

### Zamenite Hyvor Talk kod sa FastComments

Ako koristite instalaciju zasnovanu na kodu sa Hyvor, tada je jednostavno potrebno ukloniti mali deo koda koji vam daju i zameniti ga sa <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Takođe podržavamo mnoge front-end okvire koji [možete pronaći ovde](https://fastcomments.com/install-wizard). Možete čak privremeno pokrenuti Hyvor i FastComments na istoj lokaciji kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

Ako ne koristite instalaciju zasnovanu na kodu, tada će se uputstva razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.

Nudimo čarobnjaka za samostalnu instalaciju [ovde](https://fastcomments.com/install-wizard).

### Migracija URL-ova u isto vreme

Komentari su vezani za id stranice u izvozu, tako da dokle god se vaši URL-ovi ne menjaju, promena je jednostavna. Ako želite da migrirate URL-ove i zadržite svoje
komentare, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica za pomoć omogućava otpremu malih tekstualnih datoteka, tako da ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### EU

Ako ste u EU, verovatno biste želeli da napravite svoj nalog na [eu.fastcomments.com](https://eu.fastcomments.com) tako da vaši podaci o kupcima ostanu u EU.

### Recap

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Hyvor JavaScript deo koda sa <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments-ovim</a>

## Zašto Hyvor ne može da mi pošalje datoteku?
Za veće sajtove, Hyvor možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da "skrabujemo" vaš postojeći sajt i preuzmemo komentare sa njega, međutim ovo može biti
prilično prilagođeno i zbog vremena uključenog u to zahtevaće da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko ovoga ovde</a>.
{{/isPost}}

---