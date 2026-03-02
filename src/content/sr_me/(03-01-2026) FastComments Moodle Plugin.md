---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO, uvezanim komentarima i kolaborativnim chatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa radošću najavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate uživo,
uvezano komentarisanje ili kolaborativni chat na vaše kurseve, ovaj dodatak to čini jednostavnim. Zamenjuje stari manualni PHP pristup
sa pravim Moodle dodatkom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim računima. Dodatak
radi sa Moodle 4.1 i novijim verzijama, a izvorni kod je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP iz [GitHub repozitorijuma](https://github.com/FastComments/fastcomments-moodle) i raspakujte ga
u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator sajta i posetite **Site Administration > Notifications**.
Moodle će otkriti novi dodatak i automatski pokrenuti instalaciju.

Kada je instaliran, idite na **Site Administration > Plugins > Local plugins > FastComments** da biste ga konfigurisali. Potrebni su vam
**Tenant ID** (koji se nalazi na vašem FastComments kontrolnom panelu) i **API Secret** ako želite da koristite Secure SSO, što preporučujemo.

Imajte na umu da je manualno preuzimanje sa GitHub-a privremeno dok čekamo da dodatak bude odobren u Moodle dodatnoj
direktoriji. Kada bude odobren, moći ćete da ga instalirate direktno iz Moodle-ovog instalatera dodataka.

### Stilovi komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete odabrati šta najbolje odgovara vašim studentima i strukturi kursa.

**Komentari** način postavlja potpuno komentarsko okno ispod sadržaja stranice. Studenti dobijaju uvezane odgovore, @pominjanja,
glasanje za i protiv, uređivač bogatog teksta i notifikacioni simbol za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Kolab chat** način dodaje traku na vrhu stranice koja podstiče korisnike da selektuju tekst i započnu diskusiju. 
Izdvojeni tekst je vezan za sadržaj, tako da razgovor ostaje vezan za ono o čemu se razgovara. Takođe prikazuje online korisnike i broj aktivnih diskusija. Ovaj način ne prikazuje donji dodatak.

<div class="text-center">
    <div class="sm">Kolaborativni chat vezan za selektovani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Kolab chat + komentari** daje vam oboje u isto vreme. Studenti mogu izdvojiti tekst za inline diskusije i takođe
koristiti potpuno komentarsko okno ispod sadržaja. Ovo je odlično za kurseve gde želite i brzo inline povratne informacije i
duže uvezane razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### SSO koji jednostavno funkcioniše

Dodatak podržava tri načina SSO. **Secure SSO** je preporučena opcija. Potpisuje identitet korisnika na serveru sa
HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Secure SSO, Moodle administratori su
automatski sinhronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu moderirati komentare bez potrebe za dodatnom
konfiguracijom. Avatari korisnika, imena i email adrese se svi sigurno prenose.

**Jednostavni SSO** prenosi korisničke podatke (ime, email, avatar) na strani klijenta bez potpisa. Brzo je za postavljanje, ali manje sigurno
od HMAC pristupa. Konačno, **Nema** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Podešavanja korisničkih notifikacija

Studenti mogu upravljati svojim podešavanjima notifikacija za FastComments direktno sa svog Moodle profila. U okviru sekcije **FastComments**
mogu uključiti notifikacije za odgovore (dobijaju email kada neko odgovori na njihov komentar) i notifikacije za pretplatu
(dobijaju emailove za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima kontrolu nad tim koliko emailova primaju.

### Na kraju

Moodle dodatak je sada dostupan. Za kompletan vodič za postavljanje, pogledajte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakav povratak!

Pozdrav!

{{/isPost}}

---