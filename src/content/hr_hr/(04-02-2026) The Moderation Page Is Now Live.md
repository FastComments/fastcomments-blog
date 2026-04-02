---
[category:Features]  
[category:Moderation]  
###### [postdate]  
# [postlink]Stranica za moderaciju je sada dostupna[/postlink]  

{{#unless isPost}}  
Stranica za moderaciju FastComments sada prikazuje obavijest uživo kada stignu novi komentari koji odgovaraju vašim trenutnim filtrima.  
{{/unless}}  

{{#isPost}}  

### Što je novo  

Stranica za moderaciju uvijek je bila moćan alat za upravljanje komentarima. Mogli ste filtrirati po statusu, pretraživati po tekstu, filtrirati po stranici ili korisniku, i obavljati masovne radnje. No, da biste vidjeli nove komentare, morali ste osvježiti stranicu.  

Više ne! Stranica za moderaciju sada prikazuje kada stignu novi komentari koji odgovaraju vašim trenutnim filtrima. Na vrhu liste komentara pojavljuje se banner koji vas obavještava koliko novih komentara čeka, a klikom na njega učitavaju se unutar stranice bez potpune obnove.  

Poruka "novi komentari za vaše filtre" trebala bi biti gotovo trenutna u većini okolnosti.  

### Evaluacija Filtra  

Transportni sloj procjenjuje sve filtre za moderaciju na serverskoj strani. To uključuje filtre statusa (treba pregled, treba odobrenje, spam, označeno, zabranjeno), filtre niza (ID korisnika, URL stranice, domena), pa čak i pretraživanje teksta. Citirani tekst poput <div class="code">"točna fraza"</div> vrši točno uspoređivanje podstringova bez obzira na velika i mala slova, dok necitirani izrazi koriste fuzzy uspoređivanje bez obzira na velika i mala slova.  

To znači da ako filtrirate spam komentare, nećete biti obaviješteni o odobrenim komentarima. Ako tražite komentare koji sadrže određenu frazu, samo komentari koji se podudaraju pokreću banner.  

### Grupe za moderaciju  

Ako vaš račun koristi grupe za moderaciju za ograničavanje koje moderatore mogu vidjeti koje komentare, ta ograničenja se u potpunosti primjenjuju za obavijesti uživo. Transportni sloj vraća se aplikacijskom serveru kako bi izgradio filtar, koji uključuje ograničenja grupa na temelju dodijeljenih grupa moderatora. Ovaj filtar se predmemorira tijekom trajanja WebSocket veze i ažurira svaki put kada moderator promijeni filtre.  

### Propušteni događaji  

Ako veza moderatora privremeno padne (problemi s mrežom, uspavljivanje prijenosnog računala itd.), sustav se automatski usklađuje pri ponovnoj vezi kako ne biste propustili nijedan rad.  

### Performanse  

Ovu značajku smo dizajnirali da ima minimalan utjecaj na vrijeme učitavanja stranice za moderaciju.  

### Više regija  

Ova značajka besprijekorno radi s našom globalno distribuiranom arhitekturom, tako da globalno distribuirani moderacijski timovi dobivaju isti pogled uživo.  

### Zaključno  

Nadamo se da će ova značajka uštedjeti vrijeme moderatorima i učiniti iskustvo moderiranja responzivnijim. Kao i uvijek, zahvaljujemo našim kupcima na povratnim informacijama i podršci.  

Živjeli!  

{{/isPost}}