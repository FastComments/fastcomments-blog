---
[category:Migration]
###### [postdate]
# [postlink]Migrating From Commento To FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako potpuno da migrirate sa Commento na FastComments.

## Gotchas

Commento nam ne daje pune URL adrese. Ono što pružaju je samo naziv domena kojem pripada nit komentara - poput "fastcomments.com/some-page".
To znači da FastComments uvoznik mora pretpostaviti koji je protokol, a podrazumeva se https. Ako pokrenete uvoz i ne vidite svoje podatke,
možda ćete želeti da proverite da li je vaš sajt pravilno zaštićen.
{{/unless}}

{{#isPost}}
### Izvezite svoje postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima sa svog sajta iz Commento, idite na Admin kontrolnu tablu, zatim na General, a zatim na Export Data.

Primetićete da je rezultat datoteka koju dobijate putem emaila misteriozno "gz" ekstenzija. Ako ste malo tehnički potkovani, možda znate da to označava "gzip" i popularan je i efikasan način kompresije datoteka. 

### Ne otvarajte "gz" datoteku

Podrazumevana instalacija Windows 10 neće moći da otvori datoteku iz Commento. To je u redu, jer to ne morate da radite sa FastComments. Naša pozadina razume ovu kompresovanu datoteku.

Nakon toga, ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Izaberite Commento iz padajućeg menija i otpremite svoju datoteku.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinhroni". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da proverite status svog uvoza i koliko redova je do sada uvezeno.

### Kada je završeno

Primili ste email kada je uvoz završen - bez obzira na to da li je uspešan ili nije. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i vidite svoj uvoz na stranici Importi. Imaće status poput "Requested", a kada počne status će biti "Running".

Sigurno je ponovo uvesti onoliko puta koliko je potrebno - međutim, ako vaš uvoz propadne, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite se nama</a> kako bismo mogli pomoći.

### Zamenite Commento kod sa FastComments kodom

To je jednostavno pitanje uklanjanja malog isječka koji vam Commento daje i zamene ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Commento i FastComments na istom sajtu kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.

### Migracija URL-ova u isto vreme

Sami komentari su vezani za "link" polja u Commento izvozu, tako da, ako se vaše URL-ove ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica za pomoć omogućava otpremanje malih tekstualnih datoteka, tako da ako
migrirate više od nekoliko URL-ova, napravite Excel tabelu.

### Pregled

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Commento JavaScript isječak sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Gotchas

Commento nam ne daje pune URL adrese. Ono što pružaju je samo naziv domena kojem pripada nit komentara - poput "fastcomments.com/some-page".
To znači da FastComments uvoznik mora pretpostaviti koji je protokol, a podrazumeva se https. Ako pokrenete uvoz i ne vidite svoje podatke,
možda ćete želeti da proverite da li je vaš sajt pravilno zaštićen.

## Zašto mi Commento ne šalje moju datoteku?
Za veće sajtove Commento možda neće biti u stanju da napravi izvezenu datoteku zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da prikupimo vaš postojeći sajt i uklonimo komentare sa njega, međutim ovo može biti
prilično prilagođeno i zbog potrebnog vremena će zahtevati da imate Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko ovoga ovde</a>.
{{/isPost}}

---