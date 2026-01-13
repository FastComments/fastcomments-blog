---
[category:Migration]
###### [postdate]
# [postlink]Migracija s Muut komentara na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste vidjeli kako potpuno migrirati s Muut na FastComments.

Jednostavno je ukloniti mali isječak koji vam Muut daje i zamijeniti ga s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Čak možete privremeno pokrenuti Muut i FastComments na istoj stranici kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.
{{/unless}}

{{#isPost}}
### Izvezite postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Mi ćemo slike premjestiti na naše poslužitelje bez problema.

Kako biste izvezli podatke o komentarima i korisnicima sa svog Muut naloga, idite na Administratorsku nadzornu ploču, odaberite Integracije i zatim JSON Izvoz.

Primijetit ćete da rezultantna datoteka koju dobijete putem e-maila ima tajanstvenu "gz" ekstenziju. Ako ste malo tehnički potkovani, možda znate da to označava "gzip", što je popularan i učinkovit način za komprimiranje datoteka.

### Ne otvarajte "gz" datoteku

Zadnja instalacija Windows 10 neće moći otvoriti datoteku iz Muut. To je u redu, jer to ne trebate raditi s FastComments. Naša pozadina razumije ovu komprimiranu datoteku.

Nakon toga, ako ste prijavljeni, možete ići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje za uvoz datoteke</a>. Odaberite Muut iz padajućeg izbornika i učitajte svoju datoteku.

Morat ćete unijeti URL svoje web stranice. To je zato što Muut ne daje te informacije u izvozu.

### Pričekajte nekoliko minuta

FastComments uvoz je "asinkroni". To znači da su učitavanje datoteke i njezino procesuiranje odvojeni koraci.

Dakle, ovisno o veličini datoteke, možda ćete odmah dobiti poruku o uspjehu. Na stranici za uvoz, dolje se nalazi tablica - svaki redak predstavlja pokušaj uvoza.
Sigurno možete osvježiti ovu stranicu da vidite status svog uvoza i koliko je redova do sada uvezeno.

### Kad je završeno

Primijetit ćete e-mail kada je uvoz gotov - bez obzira na to je li uspio ili ne. Možete zatvoriti stranicu nakon što uspješno prenesete datoteku i vidite svoj uvoz na stranici Uvozi. Imat će status poput "Zatraženo", a kada počne, status će biti "U tijeku".

Sigurno je ponovno uvesti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspije, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo mogli pomoći.

### Zamijenite Muut kod s FastComments

Jednostavno je ukloniti mali isječak koji vam Muut daje i zamijeniti ga s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Čak možete privremeno pokrenuti Muut i FastComments na istoj stranici kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

### Migriranje URL-ova u isto vrijeme

Samostalni komentari međusobno su povezani s "link" poljima u Muut izvozu pa dokle god se vaši URL-ovi ne mijenjaju, promjena je jednostavna. Ako želite migrirati URL-ove i zadržati svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć dopušta učitavanje malih tekstualnih datoteka, pa ako
migrate više od nekoliko URL-ova, napravite Excel tablicu.

### Kratak pregled

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Muut JavaScript isječak s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsovim</a>

## Zašto Muut ne želi poslati moju datoteku?
Za veće stranice, Muut možda neće moći izraditi izvezenu datoteku zbog tehničkih ograničenja s njihove strane. Imamo mogućnost "scrapiranja" vaše postojeće stranice i preuzimanja komentara s nje, međutim to može biti
prilično prilagođeno i zbog vremena koje je uključeno zahtijevat će da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć s tim ovdje</a>.
{{/isPost}}

---