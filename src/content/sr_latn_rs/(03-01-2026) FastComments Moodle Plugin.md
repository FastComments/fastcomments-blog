---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO, uvrštenim komentarima i kolaborativnim čatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa zadovoljstvom najavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate uživo,
uvrštavanje komentara ili kolaborativni čat za vaše kurseve, ovaj dodatak to čini jednostavnim. Zamenjuje staru ručnu PHP metodu
sa pravim Moodle dodatkom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim nalozima. Dodatak radi
sa Moodle 4.1 i novijim verzijama, a izvorni kod je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite dodatak iz [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) i instalirajte ga
putem instalatera dodataka na vašem Moodle sajtu. Alternativno, možete ga preuzeti i izdvojiti u
`<moodle-root>/local/fastcomments`, zatim se prijaviti kao administrator sajta i posetiti **Site Administration > Notifications**.
Moodle će automatski otkriti novi dodatak i izvršiti instalaciju.

Kada se instalira, idite na **Site Administration > Plugins > Local plugins > FastComments** da biste ga konfigurisali. Moraćete
da imate svoj **Tenant ID** (koji se nalazi u vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite Secure SSO, što preporučujemo.

### Stilovi komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete odabrati šta najbolje odgovara vašim studentima i strukturi kursa.

**Comments** režim postavlja puni komentar widget ispod sadržaja stranice. Studenti dobijaju uvrštene odgovore, @pominjanja,
podizanje i spuštanje glasova, bogat tekstualni editor i obaveštenja za praćenje novih komentara na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Collab Chat** režim dodaje traku na vrhu stranice koja poziva korisnike da odaberu tekst i započnu diskusiju. 
Istaknuti tekst je povezan sa sadržajem, tako da razgovor ostaje vezan za ono što se tačno diskutuje. Takođe
prikazuje online korisnike i broj aktivnih diskusija. Ovaj režim ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Kolaborativni čat povezan sa odabranim tekstom</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Comments** pruža vam oboje u isto vreme. Studenti mogu istaknuti tekst za inline diskusije i takođe
koristiti puni komentar widget ispod sadržaja. Ovo je odlično za kurseve gde želite i brzo inline povratne informacije i
duže uvrštene razgovore.

<div class="text-center">
    <div class="sm">Oba stilova komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### Automatski SSO

Dodatak podržava tri SSO režima. **Secure SSO** je preporučena opcija. Potpisuje identitet korisnika sa servera
HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Secure SSO, Moodle administratori su
automatski sinkronizovani kao moderatori FastComments, što znači da vaši administratori sajta mogu moderirati komentare bez dodatne
konfiguracije. Avatari korisnika, imena i adrese e-pošte se svi prenose sigurno.

**Simple SSO** prenosi korisničke podatke (ime, e-poštu, avatar) na klijentu bez potpisa. Lako se postavlja ali je manje siguran
od HMAC pristupa. Na kraju, **None** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Preferencije obaveštenja za korisnike

Studenti mogu upravljati svojim obaveštenjima u FastComments direktno iz svog Moodle profila. U delu **FastComments**
mogu uključiti obaveštenja o odgovorima (da dobiju email kada im neko odgovori na komentar) i obaveštenja o pretplatama
(da dobiju emailove za niti na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima kontrolu nad tim koliko
emailova primaju.

### Na kraju

Moodle dodatak je sada dostupan. Za potpuni vodič za postavljanje, pogledajte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam ispod ako imate bilo kakve komentare!

Pozdrav!

{{/isPost}}