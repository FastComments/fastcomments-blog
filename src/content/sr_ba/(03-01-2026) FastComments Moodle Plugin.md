---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle plugin sa SSO, uređenim komentarima i kolaborativnim čavrljanjem za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa uzbuđenjem najavljujemo zvanični FastComments plugin za Moodle. Ako ste koristili Moodle i želeli da dodate
uživo, uređen komentar ili kolaborativno čavrljanje u vaše kurseve, ovaj plugin to čini jednostavnim. Zamenjuje stari
manualni PHP pristup sa pravim Moodle pluginom koji se instalira za nekoliko minuta i integriše sa vašim postojećim
Moodle korisničkim računima. Plugin radi sa Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP iz [GitHub repozitorija](https://github.com/FastComments/fastcomments-moodle) i
izvucite ga u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator sajta i posetite
**Administracija sajta > Obaveštenja**. Moodle će otkriti novi plugin i automatski pokrenuti instalaciju.

Kada je instaliran, idite na **Administracija sajta > Dodaci > Lokalne dodatke > FastComments** da ga konfigurišete.
Biće vam potreban vaš **Tenant ID** (koji se nalazi na vašoj FastComments kontrolnoj tabli) i vaš **API Secret** ako želite
da koristite Sigurni SSO, što preporučujemo.

Imajte na umu da je manualno preuzimanje sa GitHub-a privremeno dok čekamo da plugin bude odobren u Moodle
direktoriju dodataka. Kada bude odobren, moći ćete da ga instalirate direktno iz Moodle-ovog instalera dodataka.

### Stilovi komentarisanja

Plugin podržava tri stila komentarisanja, tako da možete odabrati šta najbolje odgovara vašim studentima i strukturi
kurseva.

**Komentari** režim postavlja puni komentarni vidget ispod sadržaja stranice. Studenti dobijaju uređen odgovore, @pominjanja,
glasanje prema gore i dolje, uređivač bogatog teksta i zvono za obaveštenja za praćenje novih komentara na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Komentari na kursu" title="Komentari na kursu" />
</div>

**Collab Chat** režim dodaje traku na vrhu stranice koja podstiče korisnike da odaberu tekst i započnu raspravu. Istaknuti
tekst je vezan za sadržaj, tako da konverzacija ostaje povezana sa onim što se tačno diskutuje. Takođe, prikazuje
online korisnike i broj aktivnih rasprava. Ovaj režim ne prikazuje donji vidget.

<div class="text-center">
    <div class="sm">Kolaborativno čavrljanje vezano za odabrani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Kolaborativno čavrljanje" title="Kolaborativno čavrljanje" />
</div>

**Collab Chat + Komentari** vam daje oboje u isto vreme. Studenti mogu da istaknu tekst za inline rasprave i takođe
da koriste puni komentarni vidget ispod sadržaja. Ovo je odlično za kurseve gde želite i brze inline povratne informacije
i duže uvezene razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na stranici" title="Komentari na stranici" />
</div>

### Automatski SSO

Plugin podržava tri SSO režima. **Sigurni SSO** je preporučena opcija. Potpisuje identitet korisnika sa server strane
sa HMAC-SHA256 koristeći vaš API Secret, tako da kredencijali nikada nisu izloženi na klijentu. Sa Sigurnim SSO, Moodle
administratori se automatski sinhronizuju kao FastComments moderatori, što znači da vaši administratorski korisnici
mogu moderirati komentare bez dodatnog podešavanja. Avatari korisnika, imena i adrese e-pošte se svi prenose sigurno.

**Jednostavni SSO** prenosi korisničke podatke (ime, e-poštu, avatar) sa klijentske strane bez potpisa. Lako ga je
podešavati, ali je manje siguran od HMAC pristupa. Na kraju, **Nema** potpuno onemogućava SSO, tako da korisnici komentarišu
anonimno.

### Preferencije obaveštenja korisnika

Studenti mogu upravljati svojim postavkama obaveštenja FastComments direktno iz svog Moodle profila. U okviru
**FastComments** sekcije mogu da prebacuju obaveštenja o odgovorima (dobijaju e-mail kada neko odgovori na njihov komentar)
i obaveštenja o pretplatama (dobijaju e-mailove za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje
studentima kontrolu nad tim koliko e-pošte primaju.

### Na kraju

Moodle plugin je sada dostupan. Za potpuni vodič za podešavanje, pogledajte
[Moodle Integracijski Vodič](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod se nalazi na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakve povratne informacije!

Živeli!

{{/isPost}}

---