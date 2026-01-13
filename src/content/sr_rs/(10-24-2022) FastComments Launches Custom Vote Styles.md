---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Lansira Prilagođene Stilove Glasanja[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da pređete sa podrazumevanog stila glasanja sa usponom/padam na jednostavnu ikonu srca? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je Novo

Ranije, da biste prilagodili traku za glasanje, bilo je neophodno napisati prilagođeni kod i CSS. To je takođe značilo da, ako želite da uradite nešto poput omogućavanja anonimnog glasanja, ali onemogućavanja negativnih glasova,
to nije samo zahtevalo prilagođeni kod već se zahtevi za glasanje nisu mogli validirati na serveru. To je značilo da su ljudi i dalje mogli anonimno da glasaju negativno direktnim pozivanjem servera, što se dešavalo
u nekim zajednicama.

Sada smo uveli koncept `voteStyle` u platformu, pri čemu je prvi novi stil glasanja ikona srca koju su mnogi tražili.

Kada se definiše putem UI za prilagođavanje dodataka, ovo takođe dodaje validaciju na platformu, koja potpuno sprečava negativno glasanje, tako da hakeri više ne mogu da zaobiđu UI i dovedu korisnika u veliki problem,
što se moglo desiti ako bi anonimno glasanje bilo omogućeno.

### Kako ga Koristiti

Idite na [UI za Prilagođavanje Dodatka](https://fastcomments.com/auth/my-account/customize-widget) i izaberite `Heart` pod `Vote Style`.

### Dokumentacija

Službena dokumentacija za ovu funkciju je [dostupna na docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Ko Ima Pristup

Svi trenutni i novi korisnici FastComments, na svim nivoima, sada imaju pristup prilagođenim stilovima glasanja. Ova funkcija je podržana samo od v2 dodatka za komentare i nadalje.

### Optimizacije

Kod za različite stilove glasanja nije uključen u preuzimanje klijenta za dodatak osim ako nije omogućeno, kako bi se sprečilo povećanje proizvoda.

### Gledajući Unapred

Sada imamo sposobnost da dodamo različite tipove glasanja i reakcija, što možda uradimo u budućnosti.

### Na Zaključno

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju smatrati brzim i jednostavnim za korišćenje.

Pozdrav!

{{/isPost}}

---