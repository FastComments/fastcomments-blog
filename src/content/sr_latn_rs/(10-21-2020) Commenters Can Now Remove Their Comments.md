[category:Features]  
###### [postdate]  
# [postlink]Komentatori sada mogu da obrišu svoje komentare[/postlink]  

{{#unless isPost}}  
Ažuriranje na koje se dugo čekalo, sada možete obrisati svoje komentare ostavljene uz FastComments.  
{{/unless}}  

{{#isPost}}  

### <i class="circle">!</i> Ovaj članak sadrži tehnički rečnik  

#### Šta je novo  

Kao što je nedavno objavljeno - komentari ostavljeni uz FastComments sada mogu biti uređeni - bez obzira na to da li ste prijavljeni ili ne.  

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demonstracija brisanja"></video>  

Kao nastavak, omogućena je opcija da obrišete svoje komentare. Razumljivo, kao i uređivanje komentara, to je bila jedna od naših najtraženijih funkcija i drago nam je što smo postigli ovaj cilj sa našom korisničkom bazom.  

#### Kako to funkcioniše  

Brisanje komentara funkcioniše na isti način kao i uređivanje - prijavljeni korisnici uvek mogu da uređuju i brišu svoje komentare. Za anonimne komentatore, naši serveri obezbeđuju privremeni 24-satni period tokom kojeg mogu da uređuju ili obrišu svoj komentar nakon komentarisanja, sve dok ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može da komentariše, a zatim da izmeni svoj komentar da ispravi greške u kucanju, ili da ga obriše, a da se nikada ne prijavi!  

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje ili briše svoj komentar osim ako ne klikne na čarobnu vezu poslatu na njihov email.  

Za dodatnu sigurnost, privremeni ključ za uređivanje biće nevažeći na bilo koji pokušaj pogrešnog pogađanja ključa.  

#### Zašto sada, nakon tako dugog vremena?  

Racionalnost za ovo je ista kao i zašto je uređivanje trajalo tako dugo da bude objavljeno. Želeli smo da osiguramo da ovo ne smanji performanse FastComments i da funkcioniše ispravno sa našim funkcijama komentarisanja u realnom vremenu. Takođe, želeli smo da funkcija odgovara najčešćim slučajevima korišćenja naših kupaca - anonimnom komentisanju.  

#### Brisanje živih komentara  

Baš kao što je komentarisanje i glasanje - brisanje se dešava uživo. Ako su dva korisnika na istoj stranici, i jedan korisnik obriše svoj komentar, drugi korisnik će videti da je uklonjen.  

#### Omogućavanje brisanja komentara  

Završili smo sa uvođenjem uređivanja i brisanja komentara po defaultu za sve naše kupce. Trenutno, ne može se isključiti.  

#### Integracije trećih strana  

Brisanje komentara će izazvati propagaciju događaja na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, dodavanje komentara ažurira vašu WordPress instalaciju u pozadini kako biste zadržali kopiju svojih podataka. Ako uklonite komentare, sledimo istu logiku i uklanjamo ih iz vaše WordPress instalacije. Ovo se odnosi na druge integracije, ne samo na WordPress.  

#### Na kraju  

Znamo da su neki dugo čekali ovu funkciju. Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije.  

Živeli!  

{{/isPost}}