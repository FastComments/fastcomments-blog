---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stranica za Moderaciju Je Sada Aktivna[/postlink]

{{#unless isPost}}
Stranica za moderaciju na FastComments-u sada prikazuje živu obaveštenje kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima.
{{/unless}}

{{#isPost}}

### Šta je Novo

Stranica za moderaciju je oduvek bila moćan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici
ili korisniku, i izvršavati akcije u masovnom režimu. Međutim, da biste videli nove komentare, morali ste da osvežite stranicu.

Više ne! Stranica za moderaciju sada pokazuje kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima. Baner se pojavljuje na vrhu liste komentara i obaveštava vas koliko novih komentara čeka, a klikom na njega učitavaju se inline bez potpunog osvežavanja stranice.

Poruka "novi komentari za vaše filtre" bi trebala biti gotovo trenutna u većini slučajeva.

### Evaluacija Filtra

Transportni sloj procenjuje sve filtra za moderaciju na serverskoj strani. Ovo uključuje filtre po statusu (treba pregled, treba odobrenje, spam, označeno,
blokirano), string filtre (ID korisnika, URL stranice, domen) i čak pretragu teksta. Citirani tekst kao što je `"tačna fraza"` radi
tačno odgovara bez obzira na velika i mala slova, dok ne-citirani termini rade fuzzy pretraživanje bez obzira na velika i mala slova.

To znači da ako filtrirate spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako tražite komentare
koji sadrže određenu frazu, samo odgovarajući komentari pokreću baner.

### Grupe Za Moderaciju

Ako vaš nalog koristi grupe za moderaciju za ograničavanje koje moderatore mogu videti koje komentare, ova ograničenja se potpuno primenjuju
za žive obaveštenja. Transportni sloj se vraća na aplikacioni server kako bi izgradio filter, koji uključuje ograničenja grupa
na osnovu dodeljenih grupa moderatora. Ovaj filter se kešira tokom trajanja WebSocket veze i ažurira kad god
moderator promeni filtriranje.

### Propušteni Događaji

Ako veza moderatora privremeno padne (problemi sa mrežom, uspavljivanje laptopa, itd), sistem se automatski nadovezuje prilikom ponovnog povezivanja tako
da ne propustite nijedan rad.

### Performanse

Dizajnirali smo ovu funkciju da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Više Regija

Ova funkcija besprekorno funkcioniše sa našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobijaju isti živi prikaz.

### U Zaključku

Nadamo se da ova funkcija štedi vreme moderatorima i čini iskustvo moderacije responzivnijim. Kao i uvek, zahvaljujemo se našim kupcima na
njihovim povratnim informacijama i podršci.

Živeli!

{{/isPost}}