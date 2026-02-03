---
[category:Migration]

###### [postdate]
# [postlink]Migracija s IntenseDebate na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako bismo prikazali kako potpuno migrirati s IntenseDebate na FastComments.
{{/unless}}

{{#isPost}}
## Ako ste na WordPressu

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak olakšava instalaciju, postavljanje i usklađivanje. Ako krenete tim putem, možete zanemariti ostatak uputa ovdje.

## Ručna, generička instalacija

### Izvezite svoje postojeće komentare

Kako biste izvezli podatke o komentarima i korisnicima sa svog web mjesta iz IntenseDebate, u njihovoj administratorskoj nadzornoj ploči idite na Sites -> Your Site -> Tools -> XML Export.

Primijetit ćete da datoteka koju dobijete putem e-pošte ima misterioznu "gz" ekstenziju datoteke. Ako ste malo tehnički potkovani, možda znate da to znači "gzip" i popularan je i učinkovit način komprimiranja datoteka.

### Ne otvarajte "gz" datoteku

Zadnja instalacija sustava Windows 10 neće moći otvoriti datoteku iz IntenseDebate. To je u redu, jer to ne morate raditi s FastComments. Naša pozadinska obrada razumije ovu komprimiranu datoteku.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje za uvoz datoteke</a>. Odaberite IntenseDebate iz padajućeg izbornika i učitajte svoju datoteku.

### Pričekajte nekoliko minuta

FastComments uvoz je "asinhroni". To znači da su upload datoteke i njezina obrada odvojeni koraci.

Dakle, ovisno o veličini vaše datoteke, mogli biste odmah dobiti poruku o uspjehu. Na stranici za uvoz, na dnu se nalazi tablica - svaki redak predstavlja pokušaj uvoza.
Sigurno možete osvježiti ovu stranicu da biste vidjeli status svog uvoza i koliko je redaka uvezeno do sada.

### Kada je završeno

Primijetit ćete e-poštu kada uvoz završi - bez obzira na to uspije li ili ne. Možete zatvoriti stranicu nakon što upload datoteke uspije i vidite svoj uvoz na stranici Imports. Imat će status poput "Zatraženo", a kada započne status će biti "U tijeku".

Sigurno je ponovno uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspije, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo vam mogli pomoći.

### Zamjena IntenseDebate koda s FastComments

Jednostavno je pitanje uklanjanja malog dijela koda koji vam IntenseDebate daje i zamjene s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti IntenseDebate i FastComments na istom web mjestu kako biste testirali i prilagodili izgled i dojam. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

Ako koristite IntenseDebate widgete i želite ih zamijeniti, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas ovdje</a>.

### Migracija URL-ova u isto vrijeme

Komentari su sami vezani za "link" polja u IntenseDebate izvozu, tako da dokle god se vaši URL-ovi ne promijene, prijelaz je lak. Ako želite migrirati URL-ove i zadržati svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica pomoći omogućuje učitavanje malih tekstualnih datoteka, pa ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### Sažetak

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite IntenseDebate JavaScript isječak s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsovim</a>

## Zašto IntenseDebate neće poslati moju datoteku?
Za veće stranice IntenseDebate možda neće moći stvoriti izvezenu datoteku zbog tehničkih ograničenja s njihove strane. Imamo mogućnost skupljanja podataka s vašeg postojećeg web mjesta i preuzimanja komentara s njega, međutim ovo može biti
prilično prilagođeno i, s obzirom na vrijeme potrebno, zahtijevat će da imate Paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć ovdje</a>.
{{/isPost}}

---