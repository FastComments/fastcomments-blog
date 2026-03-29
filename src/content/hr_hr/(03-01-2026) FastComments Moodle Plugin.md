---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima namjenski Moodle plugin s SSO-om, komentiranjem u nitima i suradničkim chatom za vaše tečajeve.
{{/unless}}

{{#isPost}}

### Što je novo

Oduševljeni smo što možemo najaviti službeni FastComments plugin za Moodle. Ako ste koristili Moodle i željeli dodati
živu, komentare u nitima ili suradnički chat svojim tečajevima, ovaj plugin to čini jednostavnim. Zamjenjuje stari ručni PHP pristup
s pravim Moodle pluginom koji se instalira za nekoliko minuta i integrira s vašim postojećim Moodle korisničkim računima. Plugin radi
s Moodle 4.1 i novijim verzijama, a izvorni kod je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako započeti

Da biste instalirali, preuzmite plugin iz [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) i instalirajte ga
putem instalatera plugina na vašem Moodle site-u. Alternativno, možete ga preuzeti i raspakirati u
`<moodle-root>/local/fastcomments`, a zatim se prijaviti kao administrator stranice i posjetiti **Site Administration > Notifications**.
Moodle će otkriti novi plugin i automatski pokrenuti instalaciju.

Nakon instalacije, idite na **Site Administration > Plugins > Local plugins > FastComments** da biste ga konfigurirali. Trebat ćete
svoj **Tenant ID** (koji se nalazi na vašem FastComments kontrolnom panelu) i svoj **API Secret** ako želite koristiti Sigurno SSO,
što preporučujemo.

### Stilovi komentiranja

Plugin podržava tri stila komentiranja, pa možete odabrati što najbolje odgovara vašim studentima i strukturi tečaja.

**Načinsko komentiranje** postavlja puni widget za komentare ispod sadržaja stranice. Studenti dobivaju komentare u nitima, @spominjanja,
glašenje i negativno glašenje, uređivač bogatog teksta i zvono za obavijesti za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici tečaja</div>
    <img src="images/moodle-course-comments.png" alt="Komentari na tečaju" title="Komentari na tečaju" />
</div>

**Collab Chat** način dodaje traku na vrhu stranice koja potiče korisnike da odaberu tekst i započnu raspravu. 
Istaknuti tekst povezan je sa sadržajem, tako da razgovor ostaje vezan uz točno ono što se raspravlja. Također pokazuje online korisnike i 
broj aktivnih rasprava. Ovaj način ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Suradnički chat vezan uz odabrani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Komentari** daje vam oboje u isto vrijeme. Studenti mogu istaknuti tekst za inline rasprave i također
koristiti puni widget za komentare ispod sadržaja. Ovo je odlično za tečajeve gdje želite brzo upisivanje povratnih informacija i
duže razgovore u nitima.

<div class="text-center">
    <div class="sm">Oba stila komentiranja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na stranici" title="Komentari na stranici" />
</div>

### Automatski SSO

Plugin podržava tri SSO načina. **Sigurno SSO** je preporučena opcija. Potpisuje identitet korisnika poslužiteljski s
HMAC-SHA256 koristeći vaš API Secret, tako da se akreditivi nikada ne izlažu na klijentu. Uz Sigurno SSO, Moodle administratori su
automatski sinkronizirani kao moderatori FastComments-a, što znači da vaši administratori stranica mogu moderirati komentare bez
dodatne postavke. Avatari korisnika, imena i adrese e-pošte se svi prenose sigurno.

**Jednostavno SSO** prenosi korisničke podatke (ime, e-poštu, avatar) na klijentskoj strani bez potpisa. Brzo je za postaviti, ali manje sigurno
od HMAC pristupa. Na kraju, **Nema** potpuno onemogućava SSO, tako da korisnici komentiraju anonimno.

### Postavke obavijesti korisnika

Studenti mogu upravljati postavkama obavijesti FastComments izravno iz svog Moodle profila. U odjeljku **FastComments**
mogu uključiti obavijesti o odgovorima (dobiti e-poštu kada netko odgovori na njihov komentar) i obavijesti o pretplati
(dobiti e-pošte za teme kojima su se pretplatili). Ovo sve drži na jednom mjestu i daje studentima kontrolu nad tim koliko
e-pošte primaju.

### Na kraju

Moodle plugin je sada dostupan. Za potpuni vodič za postavljanje posjetite
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u nastavku ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---