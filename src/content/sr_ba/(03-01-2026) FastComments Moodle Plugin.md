---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle plugin sa SSO, komentarima u nizu i kolaborativnim chatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa uzbuđenjem najavljujemo zvanični FastComments plugin za Moodle. Ako ste koristili Moodle i želeli da dodate komentare u nizu
ili kolaborativni chat na vašim kursevima, ovaj plugin to olakšava. Zamenjuje stari ručni PHP pristup
pravim Moodle pluginom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim nalozima. Plugin radi
sa Moodle-om 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite plugin iz [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) i instalirajte ga
putem instalatera plugina na vašem Moodle sajtu. Alternativno, možete ga preuzeti i izdvojiti u
`<moodle-root>/local/fastcomments`, zatim se prijavite kao administrator sajta i posetite **Site Administration > Notifications**.
Moodle će otkriti novi plugin i automatski pokrenuti instalaciju.

Kada se instalira, idite na **Site Administration > Plugins > Local plugins > FastComments** da ga konfigurišete. Biće vam potreban vaš
**Tenant ID** (koji se nalazi na vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite Secure SSO, što preporučujemo.

### Stilovi komentarisanja

Plugin podržava tri stila komentarisanja, tako da možete izabrati ono što najbolje odgovara vašim studentima i strukturi kursa.

**Comments** režim postavlja puni widget za komentare ispod sadržaja stranice. Studenti dobijaju odgovore u nizu, @pominjanja,
podizanje i spuštanje glasova, bogati tekst editor i zvono za obaveštenja za praćenje novih komentara na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Collab Chat** režim dodaje traku na vrhu stranice koja podstiče korisnike da selektuju tekst i započnu diskusiju. Istaknuti tekst je
vezan za sadržaj, tako da razgovor ostaje vezan za ono o čemu se raspravlja. Takođe prikazuje online korisnike i broj aktivnih diskusija. Ovaj režim ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Kolaborativni chat vezan za selektovani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Comments** omogućava vam oboje u isto vreme. Studenti mogu istaknuti tekst za diskusije unutar teksta i takođe
koristiti puni widget za komentare ispod sadržaja. Ovo je sjajno za kurseve gde želite i brze povratne informacije unutar teksta i
duže razgovore u nizu.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### Automatski SSO

Plugin podržava tri režima SSO. **Secure SSO** je preporučena opcija. Potpisuje identitet korisnika sa servera koristeći
HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Secure SSO, Moodle administratori su
automatski sinhronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu moderirati komentare bez
dodatne postavke. Avatari korisnika, imena i adrese e-pošte se svi prenose sigurno.

**Simple SSO** prenosi korisničke podatke (ime, e-poštu, avatar) na klijentskoj strani bez potpisa. Lako se postavlja, ali je manje sigurno
od HMAC pristupa. Na kraju, **None** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Preference korisničkih obaveštenja

Studenti mogu upravljati svojim postavkama obaveštenja za FastComments direktno iz svog Moodle profila. U okviru sekcije **FastComments**
mogu uključiti ili isključiti obaveštenja o odgovorima (dobiti e-poštu kada neko odgovori na njihov komentar) i obaveštenja o pretplatama
(dobiti e-pošte za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima kontrolu nad količinom e-pošte
koju primaju.

### Na kraju

Moodle plugin je sada dostupan. Za potpuni vodič za postavljanje, proverite
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ako imate bilo kakvih povratnih informacija!

Pozdrav!

{{/isPost}}

---