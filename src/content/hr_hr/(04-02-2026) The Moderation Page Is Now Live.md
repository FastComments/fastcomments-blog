[category:Features]  
[category:Moderation]  
###### [postdate]  
# [postlink]Stranica za moderaciju je sada aktivna[/postlink]  
  
{{#unless isPost}}  
Stranica za moderaciju FastComments sada prikazuje obavijest u stvarnom vremenu kada novi komentari dolaze koji odgovaraju vašim trenutnim filtrima.  
{{/unless}}  
  
{{#isPost}}  
  
### Što je novo  
  
Stranica za moderaciju oduvijek je bila snažan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici  
ili korisniku i izvršavati akcije u grupama. No, da biste vidjeli nove komentare, morali ste osvježiti stranicu.  
  
Više ne! Stranica za moderaciju sada prikazuje kada novi komentari dolaze koji odgovaraju vašim trenutnim filtrima. Na vrhu popisa komentara pojavljuje se banner koji vam javlja koliko novih komentara čeka, a klikom na njega učitavaju se unutar stranice bez potpunog osvježavanja.  
  
Poruka "novi komentari za vaše filtre" trebala bi biti gotovo trenutna u većini okolnosti.  
  
### Evaluacija filtriranja  
  
Transportni sloj procjenjuje sve filtre za moderaciju na strani poslužitelja. To uključuje filtre statusa (treba pregledati, treba odobriti, spam, označeno,  
zabranjeno), filtre stringa (ID korisnika, URL stranice, domena) i čak pretraživanje teksta. Citirani tekst poput `"točna fraza"` radi  
točno pretraživanje podstringa bez obzira na velika i mala slova, dok necitirani pojmovi rade nejasno pretraživanje bez obzira na velika i mala slova.  
  
To znači da ako filtrirate spam komentare, nećete biti obaviješteni o odobrenim komentarima. Ako pretražujete komentare  
koji sadrže specifičnu frazu, samo odgovarajući komentari pokreću banner.  
  
### Grupe za moderaciju  
  
Ako vaš račun koristi grupe za moderaciju kako bi ograničio koje moderatore mogu vidjeti koji komentari, ta ograničenja su potpuno primijenjena  
za obavijesti u stvarnom vremenu. Transportni sloj poziva aplikacijski poslužitelj kako bi izradio filter, koji uključuje ograničenja grupe  
temeljena na grupama dodijeljenim moderatoru. Ovaj filter se kešira tijekom trajanja WebSocket veze i ažurira se kad god  
moderator promijeni filtre.  
  
### Propušteni događaji  
  
Ako veza moderatora privremeno ispadne (problemi s mrežom, sleep prijenosnog računala itd.), sustav automatski nadoknađuje prilikom ponovne veze kako  
ne biste propustili nijedan rad.  
  
### Izvedba  
  
Dizajnirali smo ovu funkciju tako da ima minimalan utjecaj na vrijeme učitavanja stranice za moderaciju.  
  
### Multi-Region  
  
Ova funkcija radi bez problema s našom globalno distribuiranom arhitekturom, tako da globalno distribuirani timovi za moderaciju dobivaju isti pregled u stvarnom vremenu.  
  
### U zaključku  
  
Nadamo se da će ova funkcija uštedjeti vrijeme moderatorima i učiniti iskustvo moderacije responzivnijim. Kao i uvijek, zahvaljujemo našim korisnicima na  
njihovom mišljenju i podršci.  
  
Živjeli!  
  
{{/isPost}}