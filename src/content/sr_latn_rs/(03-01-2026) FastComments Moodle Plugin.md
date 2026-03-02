---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle plugin sa SSO, složenim komentarima i kolaborativnim čatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa uzbuđenjem najavljujemo zvanični FastComments plugin za Moodle. Ako ste koristili Moodle i želeli da dodate uživo,
složené komentare ili kolaborativni chat na vaše kurseve, ovaj plugin to čini jednostavnim. Zamenjuje stari manuelni PHP pristup
sa pravim Moodle pluginom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim nalozima. Plugin funkcioniše
sa Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP sa [GitHub repozitorijuma](https://github.com/FastComments/fastcomments-moodle) i raspakujte ga
u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator sajta i posetite **Administracija sajta > Obaveštenja**.
Moodle će otkriti novi plugin i automatski pokrenuti instalaciju.

Kada je instalacija završena, idite na **Administracija sajta > Dodaci > Lokalni dodaci > FastComments** da biste ga konfigurisali. Trebaće vam
vaš **Tenant ID** (nađen u vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite Secure SSO, što preporučujemo.

Napomena: manuelno preuzimanje sa GitHub-a je privremeno dok čekamo odobrenje plugina u direktorijumu Moodle dodataka. Kada bude odobren, moći ćete ga instalirati direktno iz unutar Moodle-inog instalatera dodataka.

### Stilovi komentarisanja

Plugin podržava tri stila komentarisanja, tako da možete odabrati što najbolje odgovara vašim studentima i strukturi kursa.

**Komentari** mod prikazuje puni komentar widget ispod sadržaja stranice. Studenti dobijaju složene odgovore, @pominjanja,
glasanje i protivljenje, uređivač bogatog teksta i zvono za obaveštenja za praćenje novih komentara na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Komentari na kursu" title="Komentari na kursu" />
</div>

**Collab Chat** mod dodaje traku na vrhu stranice koja poziva korisnike da selektuju tekst i započnu diskusiju. Izdvojeni tekst je vezan za sadržaj, tako da razgovor ostaje povezan tačno uz ono što se raspravlja. Takođe
prikazuje korisnike koji su online i broj aktivnih diskusija. Ovaj mod ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Kolaborativni chat vezan za selektovani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Komentari** daje vam oboje u isto vreme. Studenti mogu istaknuti tekst za inline diskusije i takođe
koristiti puni komentar widget ispod sadržaja. Ovo je odlično za kurseve gde želite i brzu inline povratnu informaciju i
duže složene razgovore.

<div class="text-center">
    <div class="sm">Oba stilova komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na stranici" title="Komentari na stranici" />
</div>

### Automatski SSO

Plugin podržava tri SSO moda. **Secure SSO** je preporučena opcija. Potpisuje identitet korisnika na serveru koristeći
HMAC-SHA256 sa vašim API Secret, tako da akreditivi nikada nisu izloženi klijentu. Sa Secure SSO, Moodle administratori su
automatski sinhronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu moderirati komentare bez dodatne
konfiguracije. Avatari korisnika, imena i adrese e-pošte se prenose sigurno.

**Simple SSO** prenosi korisničke podatke (ime, e-poštu, avatar) na strani klijenta bez potpisa. Brzo je za postaviti, ali manje sigurno
od HMAC pristupa. Na kraju, **None** potpuno deaktivira SSO, tako da korisnici komentarišu anonimno.

### Korisničke postavke obaveštenja

Studenti mogu upravljati svojim podešavanjima obaveštenja FastComments direktno iz svog Moodle profila. U okviru **FastComments**
sekcije mogu uključiti/isključiti obaveštenja o odgovorima (dobiti e-poštu kada neko odgovori na njihov komentar) i obaveštenja o pretplatama
(dobiti e-pošte za teme na koje su se pretplatili). Ovo drži sve na jednom mestu i daje studentima kontrolu nad tim koliko e-pošte primaju.

### U zaključku

Moodle plugin je sada dostupan. Za potpuni vodič kroz postavku, pogledajte
[Moodle Integracioni Vodič](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakvih povratnih informacija!

Živeli!

{{/isPost}}