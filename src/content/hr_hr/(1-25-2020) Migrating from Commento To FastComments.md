---
[category:Migration]
###### [postdate]
# [postlink]Migracija iz Commenta u FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste vidjeli kako potpuno migrirati iz Commenta u FastComments.

## Problemi

Commento nam ne pruža pune URL-ove. Ono što pružaju je samo naziv domene kojoj komentar pripada - kao "fastcomments.com/neka-stranica".
To znači da FastComments uvoznik mora pretpostaviti koji je protokol, a prema zadanim postavkama postavlja https. Ako pokrenete uvoz i ne vidite svoje podatke
možda biste trebali provjeriti je li vaša stranica ispravno sigurnosno zaštićena.
{{/unless}}

{{#isPost}}
### Izvezite postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima sa svoje stranice iz Commenta, idite na Administratorsku ploču, zatim na Općenito, a potom na Izvezi podatke.

Primijetit ćete da datoteka koju dobijate putem e-pošte ima tajanstveni "gz" nastavak. Ako ste malo tehnički potkovani, možda znate da to označava "gzip" i popularan je i učinkovit način komprimiranja datoteka.

### Ne otvarajte "gz" datoteku

Zadnja instalacija Windows 10 neće moći otvoriti datoteku iz Commenta. To je u redu, jer to ne morate raditi s FastComments. Naša pozadina razumije ovu komprimiranu datoteku.

Nakon toga, ako ste prijavljeni, možete ići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje da uvezete datoteku</a>. Odaberite Commento iz padajućeg izbornika i učitajte svoju datoteku.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkroni". To znači da su učitavanje datoteke i njezina obrada odvojeni koraci.

Dakle, ovisno o veličini vaše datoteke, možda ćete odmah dobiti poruku o uspjehu. Na stranici za uvoz, na dnu, nalazi se tablica - svaki redak predstavlja pokušaj uvoza.
Možete sigurno osvježiti ovu stranicu da biste vidjeli status svog uvoza i koliko je redaka dosad uvezeno.

### Kada završi

Primijetit ćete e-poštu kada uvoz završi - bez obzira na to je li uspješan ili ne. Možete zatvoriti stranicu nakon što uspješno uvezete datoteku i vidite svoj uvoz na stranici Uvozi. Imaće status poput "Zatraženo", a kada započne, status će biti "U tijeku".

Sigurno je ponovno uvesti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspije, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo mogli pomoći.

### Zamijenite Commento kod s FastComments-om

Jednostavno je pitanje uklanjanja malog koda koji vam daje Commento i zamjene s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Commento i FastComments na istoj stranici radi testiranja i prilagodbe izgleda i doživljaja. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći s tim</a>.

### Migriranje URL-ova u isto vrijeme

Sami komentari su povezani s "link" poljima u Commento izvozu, tako da dokle god vaši URL-ovi ne promijene, prebacivanje je lako. Ako želite migrirati URL-ove i zadržati svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica s pomoći omogućuje učitavanje malih tekstualnih datoteka, pa ako
migrate više od samo nekoliko URL-ova, stvorite Excel tablicu.

### Sažetak

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Commento JavaScript kod s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Problemi

Commento nam ne pruža pune URL-ove. Ono što pružaju je samo naziv domene kojoj komentar pripada - kao "fastcomments.com/neka-stranica".
To znači da FastComments uvoznik mora pretpostaviti koji je protokol, a prema zadanim postavkama postavlja https. Ako pokrenete uvoz i ne vidite svoje podatke
možda biste trebali provjeriti je li vaša stranica ispravno sigurnosno zaštićena.

## Zašto mi Commento ne šalje moju datoteku?
Za veće stranice, Commento možda neće moći kreirati izvezenu datoteku zbog tehničkih ograničenja s njihove strane. Imamo mogućnost sakupljanja podataka sa vaše postojeće stranice i izvlačenja komentara, međutim, to može biti
prilično prilagođeno, a zbog potrebnog vremena zahtijevat će da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s tim ovdje</a>.
{{/isPost}}

---