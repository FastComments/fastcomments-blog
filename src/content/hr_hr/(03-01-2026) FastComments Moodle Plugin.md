---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima namjenski Moodle plugin s SSO-om, složenim komentarima i kolaborativnim chatom za vaše tečajeve.
{{/unless}}

{{#isPost}}

### Što je novo

Uzbuđeni smo što možemo najaviti službeni FastComments plugin za Moodle. Ako ste koristili Moodle i želite dodati
žive, složene komentare ili kolaborativni chat u svoje tečajeve, ovaj plugin to čini jednostavnim. Zamjenjuje stari ručni PHP pristup
s pravim Moodle pluginom koji se instalira za nekoliko minuta i integrira s vašim postojećim Moodle korisničkim računima. Plugin radi
s Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako započeti

Za instalaciju, preuzmite ZIP s [GitHub repozitorija](https://github.com/FastComments/fastcomments-moodle) i raspakirajte ga
u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator stranice i posjetite **Administracija stranice > Obavijesti**.
Moodle će otkriti novi plugin i automatski pokrenuti instalaciju.

Nakon instalacije, idite na **Administracija stranice > Dodaci > Lokalni dodaci > FastComments** kako biste konfigurirali. Trebat će vam
**Tenant ID** (pronađen na vašoj FastComments nadzornoj ploči) i **API Secret** ako želite koristiti Sigurni SSO, što preporučujemo.

Imajte na umu da je ručno preuzimanje s GitHub-a privremeno dok čekamo odobrenje plugina u direktoriju Moodle dodataka. Kada bude odobren, moći ćete ga instalirati izravno iz unutar instalatera dodataka u Moodlu.

### Stilovi komentiranja

Plugin podržava tri stila komentiranja, tako da možete odabrati što najbolje odgovara vašim studentima i strukturi tečaja.

**Comments** način postavlja puni widget za komentare ispod sadržaja stranice. Studenti dobivaju složene odgovore, @spominjanja,
glasovanje i protiv glasovanje, uređivač bogatog teksta i obavijesni zvono za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici tečaja</div>
    <img src="images/moodle-course-comments.png" alt="Komentari na tečaju" title="Komentari na tečaju" />
</div>

**Collab Chat** način dodaje traku na vrhu stranice koja potiče korisnike da odaberu tekst i započnu raspravu. 
Izdvojeni tekst je povezan s sadržajem, tako da razgovor ostaje vezan uz ono što se točno raspravlja. Također
prikazuje online korisnike i broj aktivnih rasprava. Ovaj način ne prikazuje widget na dnu.

<div class="text-center">
    <div class="sm">Kolaborativni chat povezan s odabranim tekstom</div>
    <img src="images/moodle-collab-chat.png" alt="Kolab Chat" title="Kolab Chat" />
</div>

**Collab Chat + Comments** daje vam oboje u isto vrijeme. Studenti mogu istaknuti tekst za inline rasprave i također
koristiti puni widget za komentare ispod sadržaja. Ovo je odlično za tečajeve u kojima želite i brze inline povratne informacije i 
duže složene razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentiranja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na stranici" title="Komentari na stranici" />
</div>

### Automatski SSO

Plugin podržava tri moda SSO-a. **Sigurni SSO** je preporučena opcija. Potpisuje identitet korisnika na strani poslužitelja s
HMAC-SHA256 koristeći vaš API Secret, tako da vjerodajnice nikada nisu izložene na klijentu. S Sigurnim SSO-om, Moodle administratori su
automatski sinkronizirani kao FastComments moderatori, što znači da vaši administratori stranica mogu moderirati komentare bez
dodatne postavke. Avatari korisnika, imena i adrese e-pošte prolaze sigurno.

**Jednostavni SSO** prosljeđuje podatke o korisnicima (ime, e-poštu, avatar) na klijentskoj strani bez potpisa. Brzo se postavlja, ali je manje siguran
od HMAC pristupa. Na kraju, **Nema** potpuno onemogućava SSO, tako da korisnici komentiraju anonimno.

### Preferencije obavijesti korisnika

 studenti mogu upravljati svojim postavkama obavijesti FastComments izravno iz svog Moodle profila. U okviru sekcije **FastComments**
mogu uključiti obavijesti o odgovorima (dobiti e-poštu kada netko odgovori na njihov komentar) i obavijesti o pretplatama
(dobiti e-pošte za teme na koje su se pretplatili). To sve održava na jednom mjestu i studentima daje kontrolu nad tim koliko
emailova primaju.

### Zaključak

Moodle plugin je sada dostupan. Za cjeloviti vodič za postavke, pogledajte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakvu povratnu informaciju!

Živjeli!

{{/isPost}}

---