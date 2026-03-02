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

Sa oduševljenjem najavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate
uživo, uvrštene komentare ili kolaborativni čat za vaše kurseve, ovaj dodatak to čini jednostavnim. Zamenjuje stari ručni PHP pristup
sa pravim Moodle dodatkom koji se instalira za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim nalozima. Dodatak radi
sa Moodle 4.1 i novijim verzijama, a kod je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP sa [GitHub repozitorijuma](https://github.com/FastComments/fastcomments-moodle) i izdvojite ga
u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator sajta i posetite **Administracija sajta > Obaveštenja**.
Moodle će automatski otkriti novi dodatak i pokrenuti instalaciju.

Kada je instaliran, idite na **Administracija sajta > Dodatci > Lokalni dodaci > FastComments** da biste ga konfigurisali. Biće vam potrebni
**Tenant ID** (koji možete pronaći na vašem FastComments kontrolnoj tabli) i **API Secret** ako želite da koristite Secure SSO, što
preporučujemo.

Imajte na umu da je ručno preuzimanje sa GitHub-a privremeno dok čekamo da dodatak bude odobren na direktorijumu Moodle dodataka. Kada
bude odobren, moći ćete da ga instalirate direktno iz Moodle-ovog instalatera dodataka.

### Stilovi komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete izabrati ono što najbolje odgovara vašim studentima i strukturi kurseva.

**Komentari** mod postavlja puni komentar widget ispod sadržaja stranice. Studenti dobijaju uvrštene odgovore, @pominjanje,
podizanje i spuštanje ocena, editor za bogat tekst, i zvono za obaveštenja za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Komentari kursa" title="Komentari kursa" />
</div>

**Collab Chat** mod dodaje traku na vrhu stranice koja podstiče korisnike da selektuju tekst i započnu raspravu. 
Izdvojeni tekst je povezan sa sadržajem, tako da razgovor ostaje vezan za ono što se tačno raspravlja. Takođe
prikazuje korisnike koji su online i broj aktivnih rasprava. Ovaj mod ne prikazuje donji widget.

<div class="text-center">
    <div class="sm">Kolaborativni čat povezan sa selektovanim tekstom</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Komentari** daje vam oboje u isto vreme. Studenti mogu da istaknu tekst za inline rasprave i takođe
koriste puni komentar widget ispod sadržaja. Ovo je sjajno za kurseve gde želite i brze inline povratne informacije i
duže uvrštene razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari stranice" title="Komentari stranice" />
</div>

### Automatski SSO

Dodatak podržava tri moda SSO. **Secure SSO** je preporučena opcija. Potpisuje identitet korisnika na serverskoj strani
sa HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Secure SSO, Moodle administratori su
automatski sinhronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu moderirati komentare bez
bilo kakvog dodatnog podešavanja. Avatari korisnika, imena i adrese e-pošte se svi bezbedno prosleđuju.

**Jednostavan SSO** prosleđuje korisničke podatke (ime, e-poštu, avatar) na klijentskoj strani bez potpisa. Brzo se postavlja, ali je manje
bezbedan od HMAC pristupa. Na kraju, **Nema** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Preferencije za obaveštenja korisnika

Studenti mogu upravljati svojim FastComments podešavanjima obaveštenja direktno iz svog Moodle profila. U okviru sekcije **FastComments**
mogu da uključe ili isključe obaveštenja o odgovorima (dobijaju e-poštu kada neko odgovori na njihov komentar) i obaveštenja o pretplati
(dobijaju e-pošte za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima kontrolu nad time koliko e-pošte
primaju.

### Na kraju

Moodle dodatak je sada dostupan. Za detaljno uputstvo o postavljanju, pogledajte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakvu povratnu informaciju!

Pozdrav!

{{/isPost}}

---