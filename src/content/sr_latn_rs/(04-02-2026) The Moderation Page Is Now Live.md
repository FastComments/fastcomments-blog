---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stranica za Moderaciju Sada Je Aktivna[/postlink]

{{#unless isPost}}
Stranica za moderaciju FastComments sada prikazuje obaveštenje u realnom vremenu kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima.
{{/unless}}

{{#isPost}}

### Šta je Novo

Stranica za moderaciju je oduvek bila moćan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici
ili korisniku, i izvoditi grupne akcije. Ali da biste videli nove komentare, morali ste da osvežite stranicu.

Više ne! Stranica za moderaciju sada prikazuje kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima. Baner se pojavljuje na vrhu liste komentara i obaveštava vas koliko novih komentara čeka, a klikom na njega učitava ih inline bez potpunog osvežavanja stranice.

Poruka "novi komentari za vaše filtre" bi trebala biti gotovo trenutna u većini slučajeva.

### Evaluacija Filtra

Transportni sloj evaluira sve filtre za moderaciju na serverskoj strani. Ovo uključuje filtre statusa (treba pregled, treba odobrenje, spam, označeno,
zabranjeno), string filtre (ID korisnika, URL stranice, domen), pa čak i pretragu teksta. Citirani tekst kao što je <div class="code">"tačna fraza"</div> radi
tačno poklapanje bez obzira na velika i mala slova, dok ne-citirani termini rade zasmetanje bez obzira na velika i mala slova.

To znači da ako filtrirate za spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako tražite komentare
koji sadrže određenu frazu, samo poklapanje komentara aktivira baner.

### Grupe Moderacije

Ako vaš nalog koristi grupe moderacije da ograniči koje moderatore mogu videti koje komentare, ova ograničenja se u potpunosti primenjuju
za obaveštenja u realnom vremenu. Transportni sloj poziva aplikacijski server da izgradi filter, koji uključuje ograničenja za grupe
na osnovu dodeljenih grupa moderatora. Ovaj filter se kešira tokom trajanja WebSocket veze i ažurira svaki put kada
moderator promeni filtre.

### Propušteni Dogadjaji

Ako veza moderatora privremeno ispadne (problemi sa mrežom, san laptopa, itd), sistem automatski nadoknađuje pri ponovnom povezivanju tako da
ne propustite nijedan rad.

### Performanse

Dizajnirali smo ovu funkcionalnost da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Više Regiona

Ova funkcionalnost besprekorno radi sa našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobijaju isti prikaz uživo.

### Zaključak

Nadamo se da će ova funkcionalnost uštedeti vreme moderatorima i učiniti iskustvo moderacije responzivnijim. Kao i uvek, zahvaljujemo našim
kupcima na njihovim povratnim informacijama i podršci.

Živeli!

{{/isPost}}