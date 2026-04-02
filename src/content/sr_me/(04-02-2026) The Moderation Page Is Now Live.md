---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stranica za moderaciju je sada aktivna[/postlink]

{{#unless isPost}}
Stranica za moderaciju FastComments sada prikazuje obaveštenje u realnom vremenu kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima.
{{/unless}}

{{#isPost}}

### Šta je novo

Stranica za moderaciju je oduvek bila moćan alat za upravljanje komentarima. Možete filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici ili korisniku, i obavljati masovne akcije. Ali da biste videli nove komentare, morali ste da osvežite stranicu.

Više ne! Stranica za moderaciju sada prikazuje kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima. Baner se pojavljuje na vrhu liste komentara i govori vam koliko novih komentara čeka, a klikom na njega učitavaju se inline bez potpunog osvežavanja stranice.

Poruka "novi komentari za vaše filtre" treba da bude gotovo trenutačna u većini okolnosti.

### Evaluacija filtara

Transportni sloj procenjuje sve moderacione filtre na serverskoj strani. Ovo uključuje filtre statusa (potrebna revizija, potrebna odobrenja, spam, označeno, zabranjeno), filtre stringova (ID korisnika, URL stranice, domen) i čak pretragu teksta. Citirani tekst poput <div class="code">"tačna fraza"</div> vrši tačno neosetljivo pretraživanje podstringa, dok neizgovoreni termini vrše približno neosetljivo pretraživanje.

To znači da ako filtrirate spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako pretražujete komentare koji sadrže određenu frazu, samo odgovarajući komentari aktiviraju baner.

### Grupe za moderaciju

Ako vaš nalog koristi grupe za moderaciju kako bi ograničio koje moderatore mogu da vide koje komentare, ova ograničenja se potpuno sprovode za obaveštenja u realnom vremenu. Transportni sloj se vraća na aplikacijski server da izgradi filter, koji uključuje ograničenja grupa na osnovu dodeljenih grupa moderatora. Ovaj filter se kešira tokom trajanja WebSocket veze i ažurira se kada god moderator promeni filtre.

### Propušteni događaji

Ako se veze moderatora privremeno prekine (problemi sa mrežom, uspavljivanje laptopa, itd.), sistem se automatski nadoknađuje prilikom ponovnog povezivanja tako da ne propustite nijedan rad.

### Performanse

Dizajnirali smo ovu funkciju da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Više regióna

Ova funkcija besprekorno funkcioniše sa našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobijaju isti prikaz u realnom vremenu.

### U zaključku

Nadamo se da će ova funkcija uštedeti vreme moderatorima i učiniti iskustvo moderacije responzivnijim. Kao i uvek, zahvaljujemo našim kupcima na njihovim povratnim informacijama i podršci.

Živeli!

{{/isPost}}