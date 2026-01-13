---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Hyvor Talk na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako u potpunosti migrirati sa Hyvor Talk na FastComments.

Ako koristite ručnu instalaciju koda sa Hyvor Talk, u pitanju je samo uklanjanje malog koda koji vam daju i zamena s <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Hyvor i FastComments na istoj stranici kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam u tome pomoći</a>.

Ako ne koristite instalaciju zasnovanu na kodu, uputstva će se razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.
{{/unless}}

{{#isPost}}

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, podešavanje i sinhronizaciju vrlo jednostavnim. Ako odaberete ovaj put, možete ignorisati ostatak uputstava ovde. Samo se uverite da ste sinhronizovali svoje komentare sa Hyvor Talk nazad u svoju WordPress instalaciju.

Ako ovo ne funkcioniše za vas, kao što su prijavili neki od naših klijenata, možda biste želeli da koristite naš WordPress dodatak, ali da ručno izvođenje podataka obavite izvođenjem iz Hyvor Talk-a. Možete pronaći uvoze podataka u [Upravljanje podacima -> Uvoz komentara](https://fastcomments.com/auth/my-account/manage-data/import).

## Ručna, generička instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše nizove komentara, korisnička imena, avatar-e korisnika, emojije i inline slike. Premestićemo slike na naše servere bez problema.

Od 2022. godine, Hyvor Talk ne izvozi e-mailove ili glasove na gore/dole. Ako uspete da dobijete izvoz od njih sa ovom informacijom, možemo ga uvesti.

### Uvezite .JSON datoteku

Nakon što preuzmete Hyvor izvoz, prijavite se na svoj FastComments kontrolni panel i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Odaberite Hyvor Talk iz padajućeg menija i učitajte svoju datoteku.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza. 
Možete sigurno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko je redova do sada uvezeno.

### Kada završi

Primaćete e-mail kada se uvoz završi - bez obzira na to da li je uspeo ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe, i vidite svoj uvoz na stranici Uvoza. Imaće status kao što je "Zatraženo", a kada počne, status će biti "U radu".

Sigurno je ponovno uvesti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo mogli pomoći.

### Zamenite Hyvor Talk kod sa FastComments

Ako koristite instalaciju zasnovanu na kodu sa Hyvor, u pitanju je samo uklanjanje malog koda koji vam daju i zamena s <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Takođe podržavamo mnoge front-end okvire koje [možete pronaći ovde](https://fastcomments.com/install-wizard). Možete čak privremeno pokrenuti Hyvor i FastComments na istoj stranici kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam u tome pomoći</a>.

Ako ne koristite instalaciju zasnovanu na kodu, uputstva će se razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.

Nudimo čarobnjaka za samostalnu instalaciju [ovde](https://fastcomments.com/install-wizard).

### Migracija URL-ova u isto vreme

Sami komentari su vezani za polja ID stranice u izvozu, tako da, sve dok se vaši URL-ovi ne menjaju, prelazak je lak. Ako želite da migrirate URL-ove i zadržite svoje komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih datoteka, pa ako migrirate više od nekoliko URL-ova, napravite Excel tabelu.

### EU

Ako ste u EU, verovatno biste želeli da kreirate svoj nalog na [eu.fastcomments.com](https://eu.fastcomments.com) kako bi vaši podaci o kupcu ostali u EU.

### Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Hyvor JavaScript kod sa <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments-ovim</a>

## Zašto Hyvor ne može da mi pošalje moj fajl?
Za veće stranice, Hyvor možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja s njihove strane. Imamo mogućnost da "izvagamo" vašu postojeću stranicu i izvučemo komentare s nje, međutim, to može biti prilično prilagođeno i zbog vremena uključenog u to, biće potrebno da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s ovim ovde</a>.
{{/isPost}}

---