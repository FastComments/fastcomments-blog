[category:Features]  
[category:Announcements]  
###### [postdate]  
# [postlink]Ažuriranje učestalosti email obaveštenja[/postlink]  
  
{{#unless isPost}}  
Korisnici sada mogu da kontrolišu koliko često primaju email obaveštenja za nove komentare i odgovore, svake minute, slični satni izveštaji ili dnevni izveštaji, sa jednim zajedničkim podešavanjem, plus nadjačavanja po pretplati.  
{{/unless}}  
  
{{#isPost}}  
  
### Šta je novo  
  
Dodali smo **Podešavanje učestalosti obaveštenja o novim komentarima** koje kontroliše koliko često primate email obaveštenja za obaveštenja o odgovorima i obaveštenja o stanarima (novi komentari). Tri opcije su:  
  
- **Svake minute** - primajte email čim novi komentari stignu (proverava se svake minute).  
- **Satni izveštaj** - primajte grupni pregled novih komentara jednom na sat.  
- **Dnevni izveštaj** - primajte grupni pregled novih komentara jednom dnevno.  
  
Ovo podešavanje je dostupno i administratorima stanara i komentatorima, i primenjuje se na sva email obaveštenja o komentarima. Imajte na umu da se @mention obaveštenja uvek šalju odmah, bez obzira na ovo podešavanje.  
  
Takođe možete nadjačati učestalost po pretplati u tabeli Pretplata, za preciznu kontrolu nad pojedinačnim stranicama.  
  
### Kako ga konfigurisati  
  
1. Idite na vaša [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).  
2. Koristite **Dropdown za učestalost obaveštenja o novim komentarima** da postavite vašu željenu učestalost.  
3. Opcionalno, nadjačajte učestalost za pojedinačne pretplate u tabeli Pretplata.  
4. Kliknite na **Sačuvaj promene**.  
  
Podrazumevano je **Svake minute**, što odgovara prethodnom ponašanju.  
  
### API podrška  
  
Učestalost obaveštenja je takođe dostupna putem API-ja. Postavka na korisničkom nivou je polje `notificationFrequency`, a nadjačavanja po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.  
  
### Na kraju  
  
Ovo daje korisnicima kontrolu nad njihovim inbox-om bez potrebe da se potpuno odjave sa stranica. Jedno podešavanje sada pokriva i obaveštenja o odgovorima i obaveštenja o stanarima, čineći upravljanje jednostavnijim.  
  
Obavestite nas ispod ako imate bilo kakve povratne informacije!  
  
Pozdrav!  
  
{{/isPost}}