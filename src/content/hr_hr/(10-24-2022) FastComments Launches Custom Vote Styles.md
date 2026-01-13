---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments lansira prilagođene stilove glasanja[/postlink]

{{#unless isPost}}
Ikada ste željeli prebaciti se s zadatog stila glasanja gore/dolje na jednostavnu ikonu srca? Sada možete.
{{/unless}}

{{#isPost}}

### Što je novo

Prethodno, za prilagodbu trake za glasanje, bilo je potrebno pisati vlastiti kod i CSS. To je također značilo da ako ste željeli učiniti nešto poput omogućavanja anonimnog glasanja, ali onemogućavanja glasova protiv,
to nije zahtijevalo samo vlastiti kod, već glasovne zahtjeve nije bilo moguće provjeriti na serveru. To je značilo da su ljudi i dalje mogli anonimno glasati protiv pozivajući se izravno na server, što se događalo
u nekim zajednicama.

Sada smo u platformu uveli koncept `voteStyle`, a prvi novi stil glasanja je ikona srca koju su mnogi tražili.

Kada se definira putem sučelja za prilagodbu widgeta, to također dodaje validaciju platformi, koja potpuno onemogućava glasanje protiv, tako da hakeri više ne mogu zaobići UI i glasati protiv korisnika do besmisla,
kao što se moglo dogoditi ako je anonimno glasanje bilo omogućeno. 

### Kako to koristiti

Idite na [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i odaberite `Heart` pod `Vote Style`.

### Dokumentacija

Službena dokumentacija za ovu funkciju dostupna je [na docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Tko to dobiva

Svi trenutni i novi korisnici FastCommenta, na svim razinama, sada imaju pristup prilagođenim stilovima glasanja. Ova funkcija podržava se samo od v2 widgeta za komentare i više.

### Optimizacije

Kod za različite stilove glasanja nije uključen u preuzimanju klijenta widgeta osim ako nije omogućeno, kako bi se spriječila prekomjerna veličina proizvoda.

### Gledajući unaprijed

Sada imamo kapacitet dodavati različite tipove glasanja i reakcija, što možemo učiniti u budućnosti.

### Zaključak

Kao i ostatak FastCommenta, nadamo se da ćete ovu funkciju smatrati brzom i jednostavnom za korištenje.

Živjeli!

{{/isPost}}

---