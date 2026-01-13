---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migracija sa Disqus na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako da potpuno migrirate sa Disqus na FastComments.

Ako koristite Generičku Integraciju Sajta sa Disqus, onda je dovoljno da uklonite mali deo koda koji vam oni daju i zamenite ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Čak možete privremeno koristiti Disqus i FastComments na istom sajtu da testirate i doterate izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

Ako ne koristite Generičku Integraciju Sajta, onda će se uputstva razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.
{{/unless}}

{{#isPost}}
Postoji mnogo stvari koje Disqus radi dobro, ali gde su slabi tu FastComments ulazi u igru.

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, postavljanje i sinhronizaciju veoma lakim. Ako odaberete ovaj put, možete zanemariti ostala uputstva ovde.

## Ručna, Generička Instalacija

### Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Premestićemo slike na naše servere bez problema.

Jedna stvar koju Disqus radi dobro je to kako obrađuje izvoz podataka. Primetićete, nakon što prođete korake u njihovom vodiču <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde</a>, da datoteka koju dobijete putem email-a ima misterioznu ekstenziju "gz". Ako ste malo tehnički potkovani, možda znate da ovo označava "gzip" i da je popularan i efikasan način za kompresiju datoteka.

### Ne otvarajte "gz" datoteku

Podrazumevana Windows 10 instalacija neće moći da otvori datoteku iz Disqus-a. To je u redu, jer to ne morate raditi sa FastComments. Naš backend razume
ovu kompresovanu datoteku, tako da je sve što trebate da uradite da pratite njihova uputstva <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ovde da dobijete pomenutu datoteku</a>.

Nakon toga, ako ste prijavljeni, možete ići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>. Izaberite Disqus iz padajućeg menija i otpremite svoju datoteku.

### Sačekajte nekoliko minuta

FastComments import je "asinkron". To znači da su otpremanje datoteke i njen proces odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu se nalazi tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da proverite status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je završeno

Primićete email kada je uvoz završen - bilo da je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i vidite svoj uvoz na stranici Uvozi. Imaće status kao "Zahtevano", a kada počne, status će biti "U toku".

Sigurno je ponovo importovati koliko god puta je potrebno - međutim, ako vaš uvoz ne uspe, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo mogli pomoći.

### Zamenite Disqus kod sa FastComments

Ako koristite Generičku Integraciju Sajta sa Disqus, onda je dovoljno da uklonite mali deo koda koji vam oni daju i zamenite ga sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Čak možete privremeno koristiti Disqus i FastComments na istom sajtu da testirate i doterate izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

Ako ne koristite Generičku Integraciju Sajta, onda će se uputstva razlikovati u zavisnosti od vaše platforme - ponovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a>.

### Migracija URL-ova u isto vreme

Komentari su vezani za "link" polja u Disqus izvodu, tako da, dok vaši URL-ovi ne promene, prebacivanje je lako. Ako želite da migrirate URL-ove i sačuvate svoje
komentare, onda <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica za pomoć omogućava otpremanje malih tekstualnih datoteka, tako da ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

### Kratak pregled

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamijenite Disqus JavaScript deo sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsovim</a>

## Zašto Disqus neće poslati moju datoteku?
Za veće sajtove Disqus možda neće moći da kreira izvezenu datoteku zbog tehničkih ograničenja sa njihove strane. Imamo mogućnost da scrappujemo vaš postojeći sajt i preuzmemo komentare sa njega, međutim, ovo može biti
prilično prilagođeno i zbog vremena koje je uključeno, zahtevaće da imate Paket Podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko ovoga ovde</a>.
{{/isPost}}