---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments lansira prilagođene stilove glasanja[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da pređete sa podrazumevanog stila glasanja sa tipkama gore/dole na jednostavnu ikonu srca? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre nego što su se mogli prilagoditi barovi za glasanje, bilo je neophodno napisati prilagođeni kod i CSS. To je takođe značilo da ako želite da uradite nešto poput omogućavanja anonimnog glasanja, ali onemogućavanje glasova na dole,
to nije zahtevalo samo prilagođeni kod, već se zahtevi za glasanjem nisu mogli validirati na serveru. To je značilo da su ljudi mogli i dalje da glasaju na dole anonimno pozivajući server direktno, što se događalo
u nekim zajednicama.

Sada smo u platformu uveli koncept `voteStyle`, pri čemu je prvi novi stil glasanja ikona srca koju su mnogi tražili.

Kada se definiše putem UI za prilagođavanje vidžeta, ovo takođe dodaje validaciju na platformu, što potpuno sprečava glasanje na dole, tako da hakeri više ne mogu da zaobiđu UI i glasaju na dole korisnika u oblivion,
što bi se moglo desiti ako je anonimno glasanje bilo omogućeno. 

### Kako to koristiti

Idite na [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i izaberite `Heart` pod `Vote Style`.

### Dokumentacija

Službena dokumentacija za ovu funkciju je [dostupna na docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Ko to dobija

Svi trenutni i novi korisnici FastComments, na svim nivoima, sada imaju pristup prilagođenim stilovima glasanja. Ova funkcija je podržana samo od v2 vidžeta za komentare i nadalje.

### Optimizacije

Kod za različite stilove glasanja nije uključen u preuzimanje klijenta vidžeta osim ako nije omogućeno, kako bi se sprečilo preopterećenje proizvoda.

### Gledajući unapred

Sada imamo kapacitet da dodamo različite vrste glasanja i reakcija, što možda uradimo u budućnosti.

### Zaključak

Kao i ostatak FastComments, nadamo se da ćete ovu funkciju pronaći brzu i jednostavnu za korišćenje.

Pozdrav! 

{{/isPost}}

---