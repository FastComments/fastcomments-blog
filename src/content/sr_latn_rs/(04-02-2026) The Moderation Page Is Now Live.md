---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stranica za moderaciju je sada aktivna[/postlink]

{{#unless isPost}}
Stranica za moderaciju FastComments sada prikazuje live obaveštenje kada nove komentare koji odgovaraju vašim trenutnim filtrima stignu.
{{/unless}}

{{#isPost}}

### Šta je novo

Stranica za moderaciju je oduvek bila moćan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici
ili korisniku i izvršavati masovne radnje. No, da biste videli nove komentare, morali ste osvežiti stranicu.

Ne više! Stranica za moderaciju sada prikazuje kada nove komentare koji odgovaraju vašim trenutnim filtrima stignu. Traka se pojavljuje na vrhu liste komentara i informiše vas koliko novih komentara čeka, a klikom na nju učitavaju se unutar stranice bez potpunog osvežavanja.

Poruka "nove komentare za vaše filtriranje" treba biti skoro trenutna u većini slučajeva.

### Evaluacija filtra

Transportni sloj ocenjuje sve filtere za moderaciju na serverskoj strani. Ovo uključuje filtere po statusu (potrebno pregledati, potrebno odobrenje, spam, označeno,
zabranjeno), string filtere (ID korisnika, URL stranice, domen) i čak pretragu teksta. Citirani tekst poput `"tačan izraz"` vrši
tačno neosetljivo podudaranje podstringa, dok necitirani pojmovi vrše fuzzy neosetljivo podudaranje.

To znači da, ako filtrirate spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako tražite komentare
koji sadrže određenu frazu, samo podudarajući komentari aktiviraju traku.

### Grupe za moderaciju

Ako vaš nalog koristi grupe za moderaciju da ograniči koje moderatore mogu da vide koje komentare, ova ograničenja se potpuno sprovode
za live obaveštenja. Transportni sloj poziva aplikacioni server da izgradi filter, koji uključuje grupna ograničenja
na osnovu dodeljenih grupa moderatora. Ovaj filter se čuva u kešu tokom trajanja WebSocket veze i ažurira se svaki put
kada moderator menja filtere.

### Propušteni događaji

Ako veza nekog moderatora privremeno padne (problemi sa mrežom, uspavljivanje laptopa, itd.), sistem automatski nadoknađuje propušteno prilikom ponovne veze
tako da ne propuštate ni jedan rad.

### Performanse

Ovu funkciju smo dizajnirali da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Multi-Region

Ova funkcija neometano radi sa našom globalno distribuiranom arhitekturom, tako da tima za moderaciju koji su globalno distribuirani dobijaju
isti live prikaz.

### Zaključak

Nadamo se da ova funkcija štedi vreme moderatorima i čini iskustvo moderacije responzivnijim. Kao i uvek, zahvaljujemo našim kupcima na
njihovim povratnim informacijama i podršci.

Živeli!

{{/isPost}}