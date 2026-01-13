---
[category:Features]
###### [postdate]
# [postlink]FastComments dobiva @spominjanja[/postlink]

{{#unless isPost}}
Jeste li ikada željeli spomenuti jednog ili više korisnika u komentaru? Sada možete.
{{/unless}}

{{#isPost}}

### Što je novo

Dok je prethodno FastComments obavještavao korisnike ako ste odgovorili na njihove komentare, nije bilo načina da označite više osoba u jednom komentaru. Također, ove su
obavijesti slane u skupinama svake sate. S `@spominjanjima`, sada je moguće označiti jednog ili više korisnika, a FastComments će ih odmah obavijestiti putem e-pošte.

### Kako to koristiti

Kada upišete `@` i zatim početak imena korisnika, pojavit će se popis rezultata pretraživanja.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Korištenje spominjanja" title="@spominjanja Demo" />
</div>

Jednostavno kliknite na ime korisnika kojeg želite označiti.

Osim toga, možete koristiti tipke sa strelicama prema gore i dolje za navigaciju kroz ovaj popis i pritisnuti enter za odabir, ili escape za izlazak.

Znamo da možda želite koristiti simbol `@` bez označavanja korisnika. FastComments će to prepoznati i neće ometati vaše tipkanje.

### Tko to dobiva

Svi trenutni i novi korisnici FastComments-a, na svim razinama, sada imaju pristup `@spominjanjima`. `@spominjanja` su također implementirana u ranije verzije
komentarskog widgeta.

### Kako radi automatsko dovršavanje

Korisnici prikazani u popisu automatskog dovršavanja određeni su prema:

- Korisnicima koji su komentirali na istoj stranici ili temi.
- Korisnicima koji su stvorili svoje FastComments račune kroz istu stranicu.
- Moderatorima trenutne stranice.
- SSO korisnicima koji pripadaju trenutnom najmodavcu.

### Uređivanje komentara

Spominjanja se mogu dodati postojećim komentarima njihovim uređivanjem. Međutim, aplikacija `Moderiranje komentara` trenutno ne podržava automatsko dovršavanje `@spominjanja`.

### Buduća razmatranja

U budućnosti, korisnici koji imaju FastComments otvoren u prozoru preglednika dobit će obavijest kada budu spomenuti, ako su se pretplatili na obavijesti.

### Na kraju

Kao i ostatak FastComments-a, nadamo se da ćete ovu značajku smatrati brzom i jednostavnom za korištenje.

Pozdrav!

{{/isPost}}

---