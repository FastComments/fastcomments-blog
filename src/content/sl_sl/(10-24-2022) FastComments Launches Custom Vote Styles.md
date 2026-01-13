---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments uvaja prilagojene sloge glasovanja[/postlink]

{{#unless isPost}}
Ste si kdaj želeli preklopiti z vgrajenega sloga glasovanja navzgor/navzdol na preprost ikono srca? Zdaj lahko.
{{/unless}}

{{#isPost}}

### Novosti

Prej je bilo za prilagoditev glasovalne vrstice potrebno napisati prilagojen kodo in CSS. To je tudi pomenilo, da če ste želeli narediti nekaj, kot je omogočanje anonimnega glasovanja, a onemogočiti negativne glasove,
to ni zahtevalo le prilagojene kode, temveč tudi, da potrditve glasov ni bilo mogoče validirati na strežniški strani. To je pomenilo, da so ljudje še vedno lahko anonimno oddajali negativne glasove, tako da so neposredno poklicali strežnik, kar se je zgodilo
v nekaterih skupnostih.

Sedaj smo uvedli koncept `voteStyle` na platformo, pri čemer je prvi novi slog glasovanja ikona srca, po kateri so mnogi povpraševali.

Ko je definiran preko uporabniškega vmesnika za prilagajanje pripomočka, to prav tako doda potrjevanje na platformo, kar preprečuje negativno glasovanje povsem, tako da hekerji ne morejo več obiti uporabniškega vmesnika in negativno glasovati za uporabnika v pozabo,
kar se lahko zgodi, če bi bilo omogočeno anonimno glasovanje. 

### Kako ga uporabljati

Pojdite na [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) in izberite `Heart` pod `Vote Style`.

### Dokumentacija

Uradna dokumentacija za to funkcijo je [na voljo na docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Kdo to dobi

Vsi trenutni in novi uporabniki FastComments, na vseh nivojih, zdaj imajo dostop do prilagojenih slogov glasovanja. Ta funkcija je podprta le v v2 pripomočka za komentiranje in naprej.

### Optimizacije

Koda za različne sloge glasovanja ni vključena v prenos odjemalca pripomočka, razen če je omogočena, da se prepreči povečanje teže izdelka.

### Gledamo naprej

Zdaj imamo zmožnost dodati različne vrste glasovanja in reakcij, kar lahko storimo v prihodnosti.

### Zaključek

Kot ostalo v FastComments, upamo, da boste to funkcijo našli hitro in enostavno za uporabo.

Na zdravje!

{{/isPost}}

---