---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO, komentarima u nizu i zajedničkim čatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je Novo

Sa uzbuđenjem najavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate
žive, komentare u nizu ili zajednički chat na vaše kurseve, ovaj dodatak to čini jednostavnim. Zamenjuje stari ručni PHP pristup
pravim Moodle dodatkom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim nalozima. Dodatak radi
sa Moodle 4.1 i novijim verzijama, a izvorni kod je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako Započeti

Da biste instalirali, preuzmite dodatak iz [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) i instalirajte ga
putem instalatora dodataka na vašem Moodle sajtu. Alternativno, možete ga preuzeti i raspakovati u
`<moodle-root>/local/fastcomments`, zatim se prijavite kao administrator sajta i posetite **Site Administration > Notifications**.
Moodle će otkriti novi dodatak i automatski izvršiti instalaciju.

Kada se instalira, idite na **Site Administration > Plugins > Local plugins > FastComments** da konfigurišete. Biće vam potreban
**Tenant ID** (koji se nalazi u vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite Secure SSO, što preporučujemo.

### Stilovi Komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete izabrati ono što najbolje odgovara vašim studentima i strukturi kursa.

**Comments** režim postavlja puni komentar widget ispod sadržaja stranice. Studenti dobijaju odgovore u nizu, @pominjanja,
glasanje za i protiv, uređivač bogatog teksta, i zvono za obaveštenja za praćenje novih komentara na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Collab Chat** režim dodaje traku na vrhu stranice koja poziva korisnike da izaberu tekst i započnu diskusiju. 
Izdvojen tekst je vezan za sadržaj, tako da razgovor ostaje povezan sa onim što se tačno diskutuju. Takođe
prikazuje online korisnike i broj aktivnih diskusija. Ovaj režim ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Zajednički chat vezan za izabrani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Comments** pruža vam oboje u isto vreme. Studenti mogu izabrati tekst za inline diskusije i takođe
koristiti puni komentar widget ispod sadržaja. Ovo je odličan izbor za kurseve gde želite brzo povratne informacije i
duže komentare u nizu.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### Automatski SSO

Dodatak podržava tri SSO režima. **Secure SSO** je preporučena opcija. Ona potpisuje identitet korisnika
na serverskoj strani koristeći HMAC-SHA256 sa vašim API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Secure SSO,
Moodle administratori su automatski sinhronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu
moderirati komentare bez dodatnog podešavanja. Avatari korisnika, imena i email adrese se bezbedno prenose.

**Simple SSO** prenosi korisničke podatke (ime, email, avatar) sa klijentske strane bez potpisa. Brzo je za postavljanje,
ali manje bezbedno od HMAC pristupa. Na kraju, **None** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Podešavanja Obaveštenja Korisnika

Studenti mogu upravljati svojim podešavanjima obaveštenja za FastComments direktno iz svog Moodle profila. U okviru
sekcije **FastComments** mogu uključiti obaveštenja o odgovorima (dobijaju email kada neko odgovori na njihov komentar)
i obaveštenja o pretplatama (dobijaju emailove za niti na koje su se pretplatili). Ovo drži sve na jednom mestu i daje studentima
kontrolu nad tim koliko emailova primaju.

### Na Zaključku

Moodle dodatak je sada dostupan. Za detaljan vodič za postavljanje, pogledajte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakve povratne informacije!

Živeli!

{{/isPost}}