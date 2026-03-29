---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO, urezanim komentarima i kolaborativnim čatovima za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa uzbuđenjem najavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate live,
urezane komentare ili kolaborativni čat u vaše kurseve, ovaj dodatak čini to jednostavnim. Zamenjuje stari manuelni PHP pristup
sa pravim Moodle dodatkom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim računima. Dodatak radi
sa Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite dodatak iz [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) i instalirajte ga
putem instalatera dodataka na vašem Moodle sajtu. Alternativno, možete ga preuzeti i raspakovati u
`<moodle-root>/local/fastcomments`, a zatim se prijaviti kao administrator sajta i posetiti **Site Administration > Notifications**.
Moodle će detektovati novi dodatak i automatski pokrenuti instalaciju.

Kada se instalira, idite na **Site Administration > Plugins > Local plugins > FastComments** da biste ga konfigurisali. Biće vam potreban vaš
**Tenant ID** (koji se nalazi na vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite Secure SSO, što preporučujemo.

### Stilovi komentarisanja

Dodatak podržava tri stilova komentarisanja, tako da možete odabrati šta najbolje odgovara vašim studentima i strukturi kursa.

**Comments** režim postavlja kompletan komentar widget ispod sadržaja stranice. Studenti dobijaju urezane odgovore, @pominjanja,
glasanje i protivljenje, bogati editor teksta i zvono za obaveštenja za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Collab Chat** režim dodaje traku na vrhu stranice koja poziva korisnike da selektuju tekst i započne diskusiju. 
Istaknuti tekst je vezan za sadržaj, tako da razgovor ostaje vezan za ono što se tačno diskutuje. Takođe
prikazuje online korisnike i broj aktivnih diskusija. Ovaj režim ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Kolaborativni čat vezan za izabrani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Comments** pruža vam oboje u isto vreme. Studenti mogu istaknuti tekst za inline diskusije i takođe
koristiti kompletan komentar widget ispod sadržaja. Ovo je odlično za kurseve gde želite brzo inline povratne informacije i
duže urezane razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### Automatski SSO

Dodatak podržava tri SSO režima. **Secure SSO** je preporučena opcija. Potpisuje identitet korisnika na serverskoj strani sa
HMAC-SHA256 koristeći vaš API Secret, tako da akreditive nikada ne izlaže klijent. Sa Secure SSO, Moodle administratori
se automatski sinhronizuju kao moderatori FastComments-a, što znači da vaši administratori sajta mogu moderirati komentare bez ikakvog
dodatnog podešavanja. Avatari korisnika, imena i email adrese se svi bezbedno prenose.

**Simple SSO** prenosi korisničke podatke (ime, email, avatar) na klijentskoj strani bez potpisa. Brzo se postavlja, ali je manje sigurno
od HMAC pristupa. Na kraju, **None** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Preferencije obaveštenja korisnika

Studenti mogu upravljati svojim FastComments postavkama obaveštenja direktno iz svog Moodle profila. U okviru **FastComments**
odeljka mogu uključiti obaveštenja o odgovorima (dobijaju email kada neko odgovori na njihov komentar) i obaveštenja o pretplatama
(dobijaju email za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima kontrolu nad tim koliko
emailova primaju.

### Na kraju

Moodle dodatak je sada dostupan. Za kompletan vodič za postavljanje, pogledajte 
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na 
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---