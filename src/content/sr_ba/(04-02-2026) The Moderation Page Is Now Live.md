---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Moderatorska stranica je sada aktivna[/postlink]

{{#unless isPost}}
Stranica za moderaciju na FastComments sada prikazuje obaveštenje u realnom vremenu kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima.
{{/unless}}

{{#isPost}}

### Šta je novo

Stranica za moderaciju je uvek bila moćan alat za upravljanje komentarima. Moguće je filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici
ili korisniku, i izvršavati grupne akcije. Ali da biste videli nove komentare, morali ste da osvežite stranicu.

Više ne! Stranica za moderaciju sada prikazuje kada novi komentari stignu koji odgovaraju vašim trenutnim filtrima. Na vrhu liste komentara se pojavljuje banner koji vam govori koliko novih komentara čeka, a klikom na njega se učitavaju inline bez potpunog osveženja stranice.

Poruka "novi komentari za vaše filtre" bi trebala biti skoro trenutna u većini okolnosti.

### Evaluacija filtara

Transportni sloj procenjuje sve filtre moderacije na serverskoj strani. Ovo uključuje filtre statusa (treba pregled, treba odobrenje, spam, označeno,
zabranjeno), filtre stringa (korisnički ID, URL stranice, domen), pa čak i pretragu teksta. Citirani tekst kao <div class="code">"tačna fraza"</div> radi
tačno podudaranje bez obzira na velika i mala slova, dok ne-citirani termini rade fuzzy podudaranje bez obzira na velika i mala slova.

To znači da ako filtrirate spam komentare, nećete biti obavešteni o odobrenim komentarima. Ako pretražujete komentare
koji sadrže određenu frazu, samo podudarajući komentari aktiviraju banner.

### Grupe za moderaciju

Ako vaš nalog koristi grupe za moderaciju da ograniči koje moderatore mogu videti koje komentare, ova ograničenja su potpuno primenjena
za obaveštenja u realnom vremenu. Transportni sloj se poziva nazad na server aplikacije da bi izgradio filter, koji uključuje ograničenja grupe
na osnovu dodeljenih grupa moderatora. Ovaj filter se čuva u kešu tokom trajanja WebSocket veze i ažurira se svaki put
kada moderator promeni filtre.

### Propušteni događaji

Ako se veza moderatora privremeno prekine (problemi sa mrežom, spavanje laptopa, itd.), sistem automatski nadoknađuje na ponovnom povezivanju kako
ne biste propustili nikakav rad.

### Performanse

Dizajnirali smo ovu funkciju da ima minimalan uticaj na vreme učitavanja stranice za moderaciju.

### Više regija

Ova funkcija radi besprekorno sa našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobijaju isti pregled u realnom vremenu.

### Na kraju

Nadamo se da ova funkcija štedi vreme moderatorima i čini iskustvo moderacije responsivnijim. Kao i uvek, zahvaljujemo našim kupcima na
njihovim povratnim informacijama i podršci.

Živeli!

{{/isPost}}

---