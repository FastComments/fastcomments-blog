---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments lansira prilagođene stilove glasanja[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da prebacite sa podrazumevanog stila glasanja na jednostavnu ikonu srca? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre toga, da biste prilagodili traku za glasanje, bilo je potrebno napisati prilagođeni kod i CSS. To je takođe značilo da, ako želite da omogućite anonimno glasanje, ali onemogućite negativna glasanja,
to ne samo da zahteva prilagođeni kod, već se zahtevi za glasanje nisu mogli validirati na serverskoj strani. Ovo je značilo da su ljudi mogli i dalje da glasaju negativno anonimno pozivajući server direktno, što se dešavalo
u nekim zajednicama.

Sada smo uveli koncept `voteStyle` u platformu, s prvim novim stilom glasanja koji je ikona srca koju su mnogi tražili.

Kada se definiše preko UI za prilagođavanje vidžeta, ovo takođe dodaje validaciju na platformu, što sprečava negativno glasanje u potpunosti, tako da hakeri više ne mogu zaobići UI i naterati korisnika da nestane,
što se moglo dogoditi ako je anonimno glasanje bilo omogućeno.

### Kako ga koristiti

Idite na [UI za prilagođavanje vidžeta](https://fastcomments.com/auth/my-account/customize-widget) i odaberite `Heart` pod `Vote Style`.

### Dokumentacija

Službena dokumentacija za ovu funkciju je [dostupna na docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Ko je dobija

Svi trenutni i novi korisnici FastComments, na svim nivoima, sada imaju pristup prilagođenim stilovima glasanja. Ova funkcija je podržana samo od v2 vidžeta za komentare i dalje.

### Optimizacije

Kod za različite stilove glasanja nije uključen u preuzimanje klijenta vidžeta osim ako nije omogućen, kako bi se sprečilo preopterećenje proizvoda.

### Gledajući unapred

Sada imamo kapacitet da dodamo različite vrste glasanja i reakcija, što možemo učiniti u budućnosti.

### U zaključku

Poput ostatka FastComments, nadamo se da ćete ovu funkciju naći brzu i jednostavnu za korišćenje.

Živeli!

{{/isPost}}

---