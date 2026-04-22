---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stranica za moderaciju je sada uživo[/postlink]

{{#unless isPost}}
Stranica za moderaciju FastComments sada prikazuje uživo obaveštenje kada nove komentare koji odgovaraju vašim trenutnim filtrima.
{{/unless}}

{{#isPost}}

### Šta je novo

Stranica za moderaciju je oduvek bila moćan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici
ili korisniku, i izvoditi grupne akcije. Ali da biste videli nove komentare, morali ste osvežiti stranicu.

Više ne! Stranica za moderaciju sada pokazuje kada dolaze novi komentari koji odgovaraju vašim trenutnim filtrima. Baner se pojavljuje na vrhu liste komentara i govori vam koliko novih komentara čeka, a klikom na njega učitavaju se inline bez potpunog osvežavanja stranice.

Poruka "novi komentari za vaše filtre" trebala bi biti gotovo trenutna u većini slučajeva.

### Evaluacija Filtra

Transportni sloj evaluira sve filtre za moderaciju na serveru. To uključuje filtre statusa (potrebna provera, potrebna odobrenja, spam, označeno,
zabranjeno), filtre stringa (ID korisnika, URL stranice, domen), pa čak i pretragu teksta. Citirani tekst kao `"tačna fraza"` obavlja
tačno pretraživanje podstringa bez obzira na velika i mala slova, dok neocitani termini rade neprecizno pretraživanje bez obzira na velika i mala slova.

To znači da ako filtrirate spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako pretražujete komentare
koji sadrže određenu frazu, samo odgovarajući komentari aktiviraju baner.

### Grupe Moderacije

Ako vaš nalog koristi grupe za moderaciju kako bi ograničio koje moderatore mogu videti koje komentare, ova ograničenja se potpuno
sprovode za uživo obaveštenja. Transportni sloj poziva aplikacijski server da izgradi filtr, koji uključuje ograničenja grupe
na osnovu dodeljenih grupa moderatora. Ovaj filtr se kešira tokom trajanja WebSocket veze i ažurira svaki put kada
moderator promeni filtre.

### Propušteni Događaji

Ako veza moderatora privremeno padne (problemi sa mrežom, uspavljivanje laptopa, itd.), sistem se automatski usklađuje prilikom ponovnog povezivanja tako
da ne propuštate nijedan rad.

### Performanse

Ovu funkciju smo dizajnirali da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Multi-Region

Ova funkcija radi besprekorno sa našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobijaju isti uživo prikaz.

### Zaključno

Nadamo se da će ova funkcija uštedeti vreme moderatorima i učiniti iskustvo moderacije responzivnijim. Kao i uvek, zahvaljujemo našim korisnicima na
njihovim povratnim informacijama i podršci.

Živeli!

{{/isPost}}