---
[category:Funkcije]

###### [postdate]

# [postlink]Profil, značke in neposredno sporočanje[/postlink]

{{#unless isPost}}V tem izidu imamo številne funkcije, ki nagrajujejo skupnosti, ki uporabljajo FastComments, in jim pomagajo komunicirati.{{/unless}}

{{#isPost}}

### Novosti
FastComments je uradno izdal uporabniške profile in sorodne funkcije.

### Uporabniški profili

Uporabniški profil vsebuje ime uporabnika, informacije o tem, ali je na spletu, njegovo nedavno dejavnost in prostor za komentiranje na njegovem profilu.

Tukaj so prikazane tudi njegove značke in napredek pri pridobivanju značk.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="Uporabniški profil FastComments" title="Uporabniški profil FastComments"></video>
</div>

Uporabniki lahko zasledijo svoj profil tako, da kliknejo na svoj avatar v temi komentarjev ali [tako, da gredo na svojo stran računa](https://fastcomments.com/auth/my-account).

Poleg tega lahko neposredno sporočite uporabniku iz njegovega profila.

### Modalno okno uporabniškega profila
Ko je izbran avatar uporabnika, se odpre modalno okno profila. To je bilo dodano tudi moderatorjem na stran za moderiranje komentarjev.

### Nagrade uporabnikom z značkami

Značke so še ena nedavna novost FastComments, ki vam omogoča nagrajevanje uporabnikov vaše skupnosti. Ustvarjanje značke je preprosto:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Ustvari značko" title="Ustvari značko" />
</div>

Značke se lahko podelijo na podlagi naslednjih pogojev:

- Število zapuščenih komentarjev
- Število pridobljenih pozitivnih glasov
- Število prejetih odgovorov
- Število pripetih komentarjev
- Veteran (čas od prvega komentarja)
- Komentiranje pozno ponoči
- Hiter čas odgovora
- Odgovor na določeno stran
- Moderatorji - Število izbrisanih komentarjev
- Moderatorji - Število odobrenih komentarjev
- Moderatorji - Število neodobrenih komentarjev
- Moderatorji - Število pregledanih komentarjev
- Moderatorji - Število komentarjev označenih za spam
- Moderatorji - Število komentarjev označenih kot ne-spam

Kot vidite, obstaja veliko situacij, za katere lahko nagradimo uporabnike.

Lahko definiramo več *ravni* značk. Na primer, lahko dodamo značke `Število komentarjev` s pragovi 10, 100 in 1000 zapuščenih komentarjev. Ko uporabniki
interagirajo v vaši skupnosti, se bodo pridobljene značke sčasoma **nalagale**.

Ne pozabimo na *moderatorje*. V mnogih skupnostih je to delo brez zahvale. Dajte svojim moderatorjem nekaj, da se pohvalijo, tako da jim konfigurirate značke moderatorjev.

Podpiramo tudi nekaj edinstvenih primerov, kot sta znački `Nočna ptica` in `Hiter čas odgovora`, da prepoznamo člane, ki so aktivni pozno ponoči ali hitro odgovarjajo. `Hiter čas odgovora` najbolje deluje, kadar se uporabljajo funkcije v živo FastComments.

Ko so nove značke ustvarjene, bodo samodejno dodane obstoječim članom vaše skupnosti, ki izpolnjujejo pogoje.

### Neposredno sporočanje

Stranke so že od začetka delovanja FastComments zahtevale, da lahko neposredno sporočajo uporabnikom. Po dveh letih smo veseli, da končno napovedujemo to funkcijo in se zahvaljujemo tistim, ki so potrpežljivo čakali.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="Neposredno sporočanje FastComments" title="Neposredno sporočanje FastComments"></video>
</div>

Neposredno sporočanje omogoča članom skupnosti, da si med seboj zasebno sporočajo, vendar služi tudi kot koristno orodje za moderatorje in administratorje, da dosežejo komentatorje.

Kot večina funkcij FastComments so vse funkcije neposrednega sporočanja v živo.

#### Asinhrono neposredno sporočanje

Ko uporabniku pošljete sporočilo, je lahko izključen. V tem primeru bomo uporabniku poslali e-poštno sporočilo, da ga obvestimo, da ima novo sporočilo.

#### Neposredno sporočanje preko e-pošte

Ko uporabnik prejme sporočilo preko e-pošte, ima možnost odgovoriti na to sporočilo.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM E-pošta" title="DM E-pošta" />
</div>

Ko to stori, se bo njegov odgovor **v živo** prikazal drugemu uporabniku na zavihku Sporočila njegovega profila.

### Varen SSO

Uporabniški profili FastComments so v celoti združljivi z obstoječimi namestitvami varnega SSO.

Stvari, kot so nastavitev zasebnosti uporabnika, lahko prav tako konfigurirate preko zastavice `isProfileActivityPrivate` v SSO payloadu.

Privzeto je `isProfileActivityPrivate` true.

### Obstoječi kupci

Zaključili smo uvajanje te funkcije vsem obstoječim strankam na vseh ravneh.

### Konfiguriranje zasebnosti

Z ogledom vašega profila so na voljo možnosti, da:

- Onemogočite komentiranje na vašem profilu.
- Preprečite, da bi bila vaša dejavnost vidna drugim.
- Preprečite drugim, da vam pošiljajo neposredna sporočila.

### Zbrani podatki

Uporabniški profili so ustvarjeni na podlagi podatkov, ki jih imamo danes, kot so njihovo ime, kateri komentarji so jih nedavno zapustili, in podobno.

Ne bomo zbirali dodatnih podatkov za razširitev uporabniških profilov. Menimo, da so uporabniški profili bolj podobni tipičnemu profilu uporabnika na forumu.

### Zaključek

Menimo, da te funkcije močno širijo FastComments kot platformo, in upamo, da jih boste našli uporabne in enostavne za uporabo.

Na zdravje!

{{/isPost}}

---