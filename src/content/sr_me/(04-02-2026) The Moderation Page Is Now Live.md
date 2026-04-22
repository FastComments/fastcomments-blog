---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stranica za Upravljenje je Sada Aktivna[/postlink]

{{#unless isPost}}
Stranica za upravljanje komentarima na FastComments-u sada prikazuje živu obaveštenje kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima.
{{/unless}}

{{#isPost}}

### Šta je Novo

Stranica za upravljanje je oduvek bila moćan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati tekst, filtrirati po stranici
ili korisniku, i izvršavati akcije u masi. Ali da biste videli nove komentare, morali ste osvežiti stranicu.

Ne više! Stranica za upravljanje sada pokazuje kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima. Baner se pojavljuje na vrhu liste komentara i obaveštava vas koliko novih komentara čeka, a klikom na njega učitavaju se odmah bez potpunog osvežavanja stranice.

Poruka "nove komentare za vaše filtre" bi trebala biti gotovo trenutna u većini okolnosti.

### Evaluacija Filtra

Transportni sloj procenjuje sve moderacione filtre na serveru. Ovo uključuje filtre statusa (potreban pregled, potrebna odobrenja, spam, označeno,
zabranjeno), filtre stringova (ID korisnika, URL stranice, domen) i čak pretragu teksta. Citirani tekst kao što je `"tačna fraza"` vrši
tačno podudaranje bez obzira na velika i mala slova, dok necitirane reči vrše neprecizno podudaranje bez obzira na velika i mala slova.

To znači da ako filtrirate spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako pretražujete komentare
koji sadrže određenu frazu, samo odgovarajući komentari pokreću baner.

### ModeraCione Grupe

Ako vaš nalog koristi moderacione grupe da ograniči koje moderatore mogu videti koje komentare, ova ograničenja se u potpunosti primenjuju
na žive obaveštenja. Transportni sloj se vraća na serversku aplikaciju da izgradi filter, koji uključuje ograničenja grupe
na osnovu dodeljenih grupa moderatora. Ovaj filter se kešira tokom trajanja WebSocket veze i ažurira se kad god
moderator promeni filtre.

### Propušteni Događaji

Ako veza moderatora privremeno prekine (problemi sa mrežom, uspavljivanje laptopa, itd.), sistem se automatski nadoknađuje prilikom ponovne veze kako
ne biste propustili nijedan rad.

### Performanse

Ovu funkciju smo dizajnirali da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Više Regiona

Ova funkcija besprekorno funkcioniše sa našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobijaju isti živi pregled.

### U Zaključku

Nadamo se da će ova funkcija uštedeti vreme moderatorima i učiniti iskustvo moderacije responzivnijim. Kao i uvek, zahvaljujemo našim korisnicima na
njihovim povratnim informacijama i podršci.

Pozdrav! 

{{/isPost}}