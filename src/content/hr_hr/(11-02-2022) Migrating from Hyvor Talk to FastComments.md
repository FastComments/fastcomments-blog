---
[category:Migration]
###### [postdate]
# [postlink]Migracija s Hyvor Talk na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste saznali kako potpuno migrirati s Hyvor Talk na FastComments.

Ako koristite ručnu instalaciju koda s Hyvor Talk, tada se radi samo o uklanjanju malog isječka koji su vam dali i zamjeni istog s <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Možete čak privremeno pokretati Hyvor i FastComments na istoj stranici kako biste isprobali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

Ako ne koristite instalaciju na temelju isječka koda, onda će se upute razlikovati ovisno o vašoj platformi - ponovno <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.
{{/unless}}

{{#isPost}}

## Ako ste na WordPressu

FastComments ima namjenski WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Plugin čini instalaciju, postavljanje i sinkronizaciju vrlo jednostavnim. Ako krenete tim putem, možete ignorirati ostatak uputa ovdje. Samo osigurajte
da ste sinkronizirali svoje komentare s Hyvor Talk natrag u vašu instalaciju WordPressa.

Ako to ne funkcionira za vas, kako su izvijestili neki od naših kupaca, možda biste trebali koristiti naš WordPress plugin, ali izvršiti uvoz podataka
izvozom iz Hyvor Talk ručno. Podatke za uvoz možete pronaći u [Upravljanju podacima -> Uvoz komentara](https://fastcomments.com/auth/my-account/manage-data/import).

## Ručna, generička instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentarske niti, korisnička imena, korisničke avatare, emotikone i inline slike. Premjestit ćemo slike na naše poslužitelje bez problema.

Od 2022. godine Hyvor Talk ne izvozi e-poštu ili glasove naviše/nadole. Ako ste u mogućnosti dobiti izvoz od njih s tim informacijama, možemo ga uvesti.

### Uvezite .JSON datoteku

Nakon što preuzmete Hyvor izvoz, prijavite se u svoj FastComments kontrolni panel i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje da uvezete datoteku</a>. Odaberite Hyvor Talk iz padajućeg izbornika i učitajte svoju datoteku.

### Pričekajte nekoliko minuta

FastComments uvoz je "asinhron". To znači da su učitavanje datoteke i njeno procesuiranje odvojeni koraci.

Dakle, ovisno o veličini vaše datoteke, možda ćete odmah dobiti poruku o uspjehu. Na stranici za uvoz na dnu se nalazi tablica - svaki redak predstavlja pokušaj uvoza.
Možete sigurno osvježiti ovu stranicu da biste vidjeli status svog uvoza i koliko redaka je do sada uvezeno.

### Kada je gotovo

Primijetit ćete e-poštu kada je uvoz završen - bez obzira na to je li uspio ili ne. Možete zatvoriti stranicu nakon što učitavanje datoteke uspije, i vidite svoj uvoz na stranici Uvozi. Imat će status poput "Zatraženo", a kada započne, status će biti "U tijeku".

Sigurno je ponovno uvesti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspije, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli pomoći.

### Zamijenite Hyvor Talk kod s FastComments

Ako koristite instalaciju na temelju isječka koda s Hyvor, tada se radi samo o uklanjanju malog isječka koji su vam dali i zamjeni istog s <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Također podržavamo mnoge front-end okvire koje [možete pronaći ovdje](https://fastcomments.com/install-wizard). Možete čak privremeno pokretati Hyvor i FastComments na istoj stranici kako biste isprobali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

Ako ne koristite instalaciju na temelju isječka koda, tada će se upute razlikovati ovisno o vašoj platformi - ponovno <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.

Nudimo čarobnjaka za instalaciju samoposluge [ovdje](https://fastcomments.com/install-wizard).

### Migracija URL-ova u isto vrijeme

Sami komentari su povezani s poljem id stranice u izvozu, pa dokle god se vaši URL-ovi ne promijene, prelazak je lak. Ako želite migrirati URL-ove i zadržati svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućuje učitavanje malih tekstualnih datoteka, pa ako
migrate više od nekoliko URL-ova, izradite Excelovu tablicu.

### EU

Ako ste u EU, vjerojatno ćete željeti stvoriti svoj račun na [eu.fastcomments.com](https://eu.fastcomments.com) kako bi vaši podaci o kupcima ostali u EU.

### Sažetak

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Hyvor JavaScript isječak s <a href="https://fastcomments.com/install-wizard" target="_blank">FastCommentsovim</a>

## Zašto mi Hyvor ne šalje svoju datoteku?
Za veće stranice Hyvor možda neće biti u mogućnosti stvoriti izvezenu datoteku zbog tehničkih ograničenja s njihove strane. Imamo mogućnost da izvučemo vašu postojeću stranicu i povučemo komentare s nje, međutim, to može biti
prilično prilagođeno i zbog vremena koje je potrebno zahtijevat će od vas da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s tim ovdje</a>.
{{/isPost}}

---