---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO, komentarima u nizu i kolaborativnim chatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa uzbuđenjem objavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želite da dodate
komentare u nizu ili kolaborativni chat u svoje kurseve, ovaj dodatak to omogućava jednostavno. Zamenjuje stari manuelni PHP pristup
sa pravim Moodle dodatkom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim nalozima. Dodatak radi
sa Moodle 4.1 i novijim verzijama, a izvorni kod je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP iz [GitHub repozitorija](https://github.com/FastComments/fastcomments-moodle) i raspakujte ga
u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator sajta i posetite **Administracija sajta > Obaveštenja**.
Moodle će detektovati novi dodatak i automatski ga instalirati.

Kada je instaliran, idite na **Administracija sajta > Dodatci > Lokalne dodatke > FastComments** da biste ga konfigurisali. Biće vam potreban vaš
**Tenant ID** (koji se nalazi u vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite Secure SSO, što preporučujemo.

Imajte na umu da je manuelno preuzimanje sa GitHub-a privremeno dok čekamo odobrenje dodatka u Moodle direktorijumu.
Kada bude odobren, moći ćete da ga instalirate direktno iz Moodle instalera dodataka.

### Stilovi komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete odabrati koji najbolje odgovara vašim studentima i strukturi kurseva.

**Komentari** mod omogućava punu komentar widget ispod sadržaja stranice. Studenti dobijaju komentare u nizu, @pominjanja,
glasanje za i protiv, uređivač bogatog teksta i zvono za obaveštenja za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Komentari na kursu" title="Komentari na kursu" />
</div>

**Collab Chat** mod dodaje traku na vrhu stranice koja poziva korisnike da selektuju tekst i započnu diskusiju. 
Istaknuti tekst je vezan za sadržaj, tako da razgovor ostaje povezan sa onim što se tačno diskutuje. Takođe
prikazuje online korisnike i broj aktivnih diskusija. Ovaj mod ne prikazuje widget na dnu.

<div class="text-center">
    <div class="sm">Kolaborativni chat vezan za selektovani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Kolaborativni chat" title="Kolaborativni chat" />
</div>

**Collab Chat + Komentari** vam pruža oboje u isto vreme. Studenti mogu istaknuti tekst za inline diskusije i takođe
koristiti punu komentar widget ispod sadržaja. Ovo je odlična opcija za kurseve gde želite brzu inline povratnu informaciju i
duže komentarisane razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na stranici" title="Komentari na stranici" />
</div>

### SSO koji jednostavno funkcioniše

Dodatak podržava tri moda SSO. **Secure SSO** je preporučena opcija. Potpisuje identitet korisnika na serveru pomoću
HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Secure SSO, Moodle administratori su
automatski sinhronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu moderirati komentare bez dodatne
konfiguracije. Avatari korisnika, imena i adrese e-pošte se prenose sigurno.

**Simple SSO** prenosi podatke o korisniku (ime, e-poštu, avatar) na klijentu bez potpisa. Brzo je za postavljanje, ali manje sigurno
od HMAC pristupa. Na kraju, **None** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Preferencije obaveštenja korisnika

Studente mogu upravljati svojim FastComments postavkama obaveštenja direktno iz svog Moodle profila. U okviru
**FastComments** sekcije mogu aktivirati obaveštenja o odgovorima (dobiće e-poštu kada neko odgovori na njihov komentar) i
obaveštenja o pretplati (dobiće e-pošte za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i omogućava studentima
kontrolu nad koliko e-pošte primaju.

### Na kraju

Moodle dodatak je sada dostupan. Za celokupan vodič za postavljanje, pogledajte 
[Moodle Integracijski Vodič](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}