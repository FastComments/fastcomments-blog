---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments pokreće prilagođene stilove glasanja[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da pređete sa podrazumevanog stila glasanja na jednostavnu ikonu srca? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre nego što su se mogli prilagođavati barovi za glasanje, bilo je potrebno napisati prilagođeni kod i CSS. To je takođe značilo da, ako želite da uradite nešto poput omogućavanja anonimnog glasanja, ali onemogućavanja negativnih glasova,
to nije zahtevalo samo prilagođeni kod već ni glasovi se nisu mogli validirati na strani servera. To je značilo da su ljudi mogli da glasaju protiv anonimno pozivajući server direktno, što se dešavalo
u nekim zajednicama.

Sada smo uveli koncept `voteStyle` na platformu, pri čemu je prvi novi stil glasanja ikona srca koju su mnogi tražili.

Kada se definiše putem korisničkog interfejsa za prilagođavanje vidžeta, to takođe dodaje validaciju na platformu, koja potpuno sprečava negativno glasanje, tako da hekeri više ne mogu da zaobiđu korisnički interfejs i glasaju protiv korisnika do zaborava,
kao što bi moglo da se desi ako je anonimno glasanje bilo omogućeno.

### Kako to koristiti

Idite na [Korisnički interfejs za prilagođavanje vidžeta](https://fastcomments.com/auth/my-account/customize-widget) i izaberite `Heart` pod `Vote Style`.

### Dokumentacija

Zvanična dokumentacija za ovu funkciju je [dostupna na docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Ko će to dobiti

Svi trenutni i novi korisnici FastComments, na svim nivoima, sada imaju pristup prilagođenim stilovima glasanja. Ova funkcija je podržana samo od v2 vidžeta za komentare i nadalje.

### Optimizacije

Kod za različite stilove glasanja nije uključen u preuzimanje klijenta vidžeta osim ako nije omogućeno, kako bi se sprečilo preopterećenje proizvoda.

### Gledajući unapred

Sada imamo kapacitet da dodamo različite tipove glasanja i reakcija, što možemo učiniti u budućnosti.

### Na zaključku

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju naći brzu i lakom za korišćenje.

Pozdrav!

{{/isPost}}

---