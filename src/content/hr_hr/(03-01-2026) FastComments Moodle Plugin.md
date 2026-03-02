---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak s SSO-om, uvođenjem komentara i zajedničkim chatom za vaše tečajeve.
{{/unless}}

{{#isPost}}

### Što je novo

Sretni smo što možemo najaviti službeni FastComments dodatak za Moodle. Ako ste koristili Moodle i želite dodati live,
komentiranje s uvođenjem ili zajednički chat u svoje tečajeve, ovaj dodatak čini to jednostavnim. Zamjenjuje stari ručni PHP pristup
s pravim Moodle dodatkom koji se instalira za nekoliko minuta i integrira s vašim postojećim Moodle korisničkim računima. Dodatak radi
s Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako započeti

Da biste instalirali, preuzmite ZIP iz [GitHub repozitorija](https://github.com/FastComments/fastcomments-moodle) i raspakirajte ga
u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator stranice i posjetite **Administracija stranice > Obavijesti**.
Moodle će otkriti novi dodatak i automatski pokrenuti instalaciju.

Nakon instalacije, idite na **Administracija stranice > Dodaci > Lokalni dodaci > FastComments** za konfiguraciju. Trebat će vam
**Tenant ID** (koji možete pronaći na vašoj FastComments nadzornoj ploči) i vaš **API Secret** ako želite koristiti Sigurni SSO, što preporučujemo.

Imajte na umu da je ručno preuzimanje s GitHub-a privremeno dok čekamo odobrenje dodatka u Moodle katalogu dodataka. Kada bude odobren, moći ćete ga instalirati izravno iz Moodle instalatera dodataka.

### Stilovi komentiranja

Dodatak podržava tri stilova komentiranja, tako da možete odabrati što najbolje odgovara vašim studentima i strukturi tečaja.

**Komentari** način prikazuje puni komentar widget ispod sadržaja stranice. Studenti dobivaju uvođene odgovore, @spominjanja,
podizanje i snižavanje ocjena, uređivač bogatog teksta i zvono obavijesti za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici tečaja</div>
    <img src="images/moodle-course-comments.png" alt="Komentari na tečaju" title="Komentari na tečaju" />
</div>

**Collab Chat** način dodaje traku na vrhu stranice koja potiče korisnike da odaberu tekst i započnu raspravu. 
Istaknuti tekst vezan je uz sadržaj, tako da razgovor ostaje vezan uz ono o čemu se raspravlja. Također prikazuje online
korisnike i broj aktivnih rasprava. Ovaj način ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Zajednički chat vezan uz odabrani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Komentari** daje vam oboje u isto vrijeme. Studenti mogu označiti tekst za inline rasprave i također
koristiti puni komentar widget ispod sadržaja. Ovo je sjajno za tečajeve gdje želite i brze inline povratne informacije i
duže uvođene razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentiranja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na stranici" title="Komentari na stranici" />
</div>

### SSO koji jednostavno radi

Dodatak podržava tri načina SSO. **Sigurni SSO** je preporučena opcija. On potpisuje identitet korisnika na strani poslužitelja
s HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi klijentu. Uz Sigurni SSO, Moodle administratori su
automatski sinkronizirani kao FastComments moderatori, što znači da vaši administratori stranica mogu moderirati komentare bez
ikakve dodatne konfiguracije. Avatari korisnika, imena i adrese e-pošte svi se sigurno prenose.

**Jednostavni SSO** prenosi korisničke podatke (ime, e-poštu, avatar) na klijentskoj strani bez potpisa. Brzo je za postavljanje
ali manje sigurno od HMAC pristupa. Na kraju, **Nitko** potpuno onemogućuje SSO, pa korisnici komentiraju anonimno.

### Preferencije obavijesti korisnika

Učenici mogu upravljati svojim postavkama obavijesti FastComments izravno s svog Moodle profila. Pod **FastComments**
dijelom mogu aktivirati obavijesti o odgovorima (primati e-poštu kada netko odgovori na njihov komentar) i obavijesti o pretplati
(primati e-pošte za teme na koje su se pretplatili). Ovo sve drži na jednom mjestu i studentima daje kontrolu nad tim koliko puno e-pošte primaju.

### Zaključno

Moodle dodatak je sada dostupan. Za cjelovito uputstvo o postavljanju, pogledajte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u nastavku ako imate bilo kakve povratne informacije!

Živjeli!

{{/isPost}}