---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migracija s Disqus-a na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste vidjeli kako potpuno migrirati s Disqus-a na FastComments.

Ako koristite Generičku integraciju stranice s Disqus-om, tada je jednostavno potrebno ukloniti mali isječak koji oni daju i zamijeniti ga s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Disqus i FastComments na istoj stranici kako biste testirali i prilagodili izgled i dojam. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći s tim</a>.

Ako ne koristite Generičku integraciju stranice, tada će se upute razlikovati ovisno o vašoj platformi - ponovno <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.
{{/unless}}

{{#isPost}}
Postoji mnogo stvari koje Disqus radi ispravno, ali gdje oni zapinju, tu FastComments stupa na scenu.

## Ako ste na WordPressu

FastComments ima namjenski WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, postavljanje i sinkronizaciju vrlo jednostavnim. Ako krenete ovim putem, možete zanemariti ostatak uputa ovdje.

## Ručna, generička instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisničke nazive, korisničke avatare i inline slike. Premjestit ćemo slike na naše servere besprijekorno.

Jedna stvar koju Disqus radi dobro je način na koji obrađuju izvođenje podataka. Primijetit ćete nakon praćenja koraka u njihovom vodiču <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovdje</a> da rezultantna
datoteka koju dobijate putem e-pošte ima tajanstvenu "gz" ekstenziju. Ako ste malo tehnički potkovani, možda znate da to znači "gzip" i popularan je i učinkovit način kompresije datoteka.

### Ne otvarajte "gz" datoteku

Zadana instalacija Windows 10 neće moći otvoriti datoteku iz Disqus-a. To je u redu, jer to ne morate s FastComments. Naša pozadina razumije
ovu komprimiranu datoteku, tako da sve što trebate učiniti je slijediti njihove upute <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovdje da biste dobili tu datoteku</a>.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje za uvoz datoteke</a>. Odaberite Disqus s padajućeg izbornika i učitajte svoju datoteku.

### Pričekajte nekoliko minuta

Uvoz za FastComments je "asinkron". To znači da su učitavanje datoteke i obrada odvojeni koraci.

Dakle, ovisno o veličini vaše datoteke, možda ćete odmah dobiti poruku o uspjehu. Na stranici za uvoz na dnu nalazi se tablica - svaki redak predstavlja pokušaj uvoza.
Možete sigurno osvježiti ovu stranicu da biste vidjeli status svog uvoza i koliko je redaka dosad uvezeno.

### Kada završi

Primijetit ćete e-poštu kada je uvoz završen - bilo da je uspješan ili ne. Možete zatvoriti stranicu nakon što se učitavanje datoteke uspješno završi i kada vidite svoj uvoz na stranici Uvozi. Imaće status poput "Zatraženo", a kada započne, status će biti "U tijeku".

Sigurno je ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspije, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> tako da možemo pomoći.

### Zamijenite Disqus kod s FastComments

Ako koristite Generičku integraciju stranice s Disqus-om, tada je jednostavno potrebno ukloniti mali isječak koji oni daju i zamijeniti ga s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Disqus i FastComments na istoj stranici kako biste testirali i prilagodili izgled i dojam. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći s tim</a>.

Ako ne koristite Generičku integraciju stranice, tada će se upute razlikovati ovisno o vašoj platformi - ponovno <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a>.

### Migracija URL-ova u isto vrijeme

Komentari sami su vezani za "link" polja u Disqus izvozu, tako da sve dok se vaši URL-ovi ne mijenjaju, prijelaz je lagan. Ako želite migrirati URL-ove i zadržati svoje 
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućuje učitavanje malih tekstualnih datoteka, pa ako 
migrate više od nekoliko URL-ova, stvorite Excel tablicu.

### Sažetak

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Disqus JavaScript isječak s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsovim</a>

## Zašto Disqus neće poslati moju datoteku?
Za veće stranice Disqus možda neće moći stvoriti izvezenu datoteku zbog tehničkih ograničenja s njihove strane. Imamo mogućnost struganja vaše postojeće stranice i izvlačenja komentara s nje, međutim, to može biti 
prilično prilagođeno i zbog vremena koje je uključeno zahtijevat će da imate paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s tim ovdje</a>.
{{/isPost}}