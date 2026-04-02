---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stranica za moderaciju je sada aktivna[/postlink]

{{#unless isPost}}
Stranica za moderaciju u FastComments sada prikazuje obaveštenje u realnom vremenu kada nove komentare stignu koji se poklapaju sa vašim trenutnim filtrima.
{{/unless}}

{{#isPost}}

### Šta je novo

Stranica za moderaciju je oduvek bila moćan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici
ili korisniku, i izvoditi masovne radnje. Ali da biste videli nove komentare, morali ste da osvežite stranicu.

Više nije tako! Stranica za moderaciju sada prikazuje kada nove komentare stignu koji se poklapaju sa vašim trenutnim filtrima. Na vrhu liste komentara pojavljuje se baner koji vam govori koliko novih komentara čeka, a klikom na njega učitavaju se inline bez potpunog osvežavanja stranice.

Poruka "novi komentari za vaše filtre" trebala bi biti gotovo trenutna u većini slučajeva.

### Evaluacija filtra

Transportni sloj procenjuje sve moderacione filtre na serveru. Ovo uključuje filtre statusa (potrebna revizija, potrebna odobrenja, spam, označeno,
zabranjeno), string filtre (ID korisnika, URL stranice, domen), pa čak i pretragu teksta. Quotirani tekst poput <div class="code">"tačna fraza"</div> vrši
tačno pretraživanje bez obzira na velika i mala slova, dok nequotirani termini vrše fuzzy pretraživanje bez obzira na velika i mala slova.

To znači da ako filtrirate spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako tražite komentare koji sadrže specifičnu frazu, samo komentari koji se poklapaju aktiviraju baner.

### Grupi za moderaciju

Ako vaš nalog koristi grupe za moderaciju da ograniči koje moderatore mogu videti koje komentare, ova ograničenja su u potpunosti primenjena
za obaveštenja u realnom vremenu. Transportni sloj poziva aplikacioni server da izgradi filtar, koji uključuje ograničenja grupi
na osnovu dodeljenih grupa moderatora. Ovaj filtar se kešira tokom trajanja WebSocket veze i ažurira se svaki put kada
moderator promeni filtre.

### Propušteni događaji

Ako veza moderatora privremeno padne (problemi sa mrežom, uspavljivanje laptopa itd.), sistem automatski nadoknađuje na ponovnom povezivanju tako
da ništa ne propustite.

### Performanse

Ovu funkciju smo dizajnirali da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Multi-region

Ova funkcija se besprekorno integriše sa našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobijaju isti prikaz u realnom vremenu.

### Zaključak

Nadamo se da će ova funkcija uštedeti vreme moderatorima i učiniti iskustvo moderacije responzivnijim. Kao i uvek, zahvaljujemo se našim kupcima na
njihovim povratnim informacijama i podršci.

Živeli!

{{/isPost}}