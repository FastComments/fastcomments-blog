---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO, uvezanim komentarima i kolaborativnim čatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa uzbuđenjem najavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate uživo,
uvezano komentarisanje ili kolaborativni čet u svoje kurseve, ovaj dodatak to čini jednostavnim. On zamenjuje stari manuelni PHP pristup
pravilnim Moodle dodatkom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim računima. Dodatak radi
sa Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP sa [GitHub repozitorijuma](https://github.com/FastComments/fastcomments-moodle) i raspakujte ga
u `<moodle-root>/local/fastcomments`. Potom se prijavite kao administrator sajta i posetite **Site Administration > Notifications**.
Moodle će otkriti novi dodatak i automatski pokrenuti instalaciju.

Kada se instalira, idite na **Site Administration > Plugins > Local plugins > FastComments** da konfigurišete. Biće vam potreban
**Tenant ID** (koji možete pronaći u vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite Secure SSO,
što preporučujemo.

Napomena: manuelno preuzimanje sa GitHub-a je privremeno dok čekamo odobrenje dodatka u Moodle dodatak
direktorijumu. Kada bude odobren, moći ćete da ga instalirate direktno iz Moodle dodatka instalatora.

### Stilovi komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete izabrati šta najbolje odgovara vašim studentima i strukturi kursa.

**Comments** režim postavlja puni komentar widget ispod sadržaja stranice. Studenti dobijaju uvezane odgovore, @pominjanja,
podizanje i snižavanje glasova, rich text editor, i zvono za obaveštenja za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na strani kursa</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Collab Chat** režim dodaje traku na vrhu stranice koja podstiče korisnike da izaberu tekst i pokrenu diskusiju. 
Istaknuti tekst je vezan za sadržaj, tako da razgovor ostaje povezan sa onim o čemu se razgovara. Takođe
prikazuje online korisnike i broj aktivnih diskusija. Ovaj režim ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Kolaborativni čat vezan za odabrani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Comments** vam daje oboje u isto vreme. Studenti mogu istaknuti tekst za inline diskusije i takođe
koristiti puni komentar widget ispod sadržaja. Ovo je odlično za kurseve gde želite i brze inline povratne informacije i
duže uvezane razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### Automatski SSO

Dodatak podržava tri SSO režima. **Secure SSO** je preporučena opcija. On potpisuje identitet korisnika sa servera
HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Secure SSO, Moodle administratori su
automatski sinkronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu moderirati komentare bez
dodatnih postavki. Avatari korisnika, imena i adrese e-pošte se svi sigurno prenose.

**Simple SSO** prenosi korisničke podatke (ime, e-poštu, avatar) na strani klijenta bez potpisa. Brzo je za postavljanje, ali manje sigurno
od HMAC pristupa. Na kraju, **None** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Preferencije obaveštenja korisnika

Studenti mogu upravljati svojim podešavanjima obaveštenja FastComments direktno iz svog Moodle profila. U okviru sekcije **FastComments**
mogu prebaciti obaveštenja o odgovorima (dobiće e-poštu kada neko odgovori na njihov komentar) i obaveštenja o pretplatama
(dobiće e-poštu za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima kontrolu nad tim koliko
e-pošte primaju.

### U zaključku

Moodle dodatak je sada dostupan. Za puni vodič za postavljanje, pogledajte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod se nalazi na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentaru ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}