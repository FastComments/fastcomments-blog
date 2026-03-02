---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO-om, hijerarhijskim komentarima i kolaborativnim čatom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Novine

Sa uzbuđenjem najavljujemo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate
uživo, hijerarhijske komentare ili kolaborativni čat na svoje kurseve, ovaj dodatak to čini jednostavnim. Zamenjuje stari 
ručni PHP pristup pravim Moodle dodatkom koji se instalira u minutima i integriše sa vašim postojećim Moodle korisničkim 
računima. Dodatak funkcioniše sa Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP iz [GitHub repozitorijuma](https://github.com/FastComments/fastcomments-moodle) i raspakujte ga
u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator i posetite **Administracija sajta > Obaveštenja**.
Moodle će otkriti novi dodatak i automatski ga instalirati.

Nakon instalacije, idite na **Administracija sajta > Dodaci > Local dodaci > FastComments** da biste konfigurisali. Biće vam
potreban vaš **Tenant ID** (koji se nalazi na vašem FastComments kontrolnom panelu) i vaš **API Secret** ako želite da koristite 
sigurni SSO, što preporučujemo.

Imajte na umu da je ručno preuzimanje sa GitHub-a privremeno dok čekamo da dodatak bude odobren u Moodle direktorijumu 
dodataka. Kada bude odobren, moći ćete da ga instalirate direktno iz Moodle instalera dodataka.

### Stilovi komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete izabrati šta najbolje odgovara vašim studentima i strukturi 
kurseva.

**Mod za komentare** postavlja puni vidžet za komentare ispod sadržaja stranice. Studenti dobijaju hijerarhijske odgovore, 
@pominjanja, glasanje za i protiv, bogati uređivač teksta i obaveštenja o novim komentarima na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Komentari Kursa" title="Komentari Kursa" />
</div>

**Mod za kolaborativni čat** dodaje traku na vrhu stranice koja podstiče korisnike da selektuju tekst i započnu diskusiju. 
Istaknuti tekst je vezan za sadržaj, tako da razgovor ostaje povezan sa onim što se tačno diskutuje. Takođe prikazuje online
korisnike i broj aktivnih diskusija. Ovaj mod ne prikazuje donji vidžet.

<div class="text-center">
    <div class="sm">Kolaborativni čat vezan za selektovani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Kolaborativni Čat" title="Kolaborativni Čat" />
</div>

**Collab Chat + Komentari** nudi vam oboje u isto vreme. Studenti mogu istaknuti tekst za inline diskusije, a takođe mogu
koristiti puni vidžet za komentare ispod sadržaja. Ovo je odlično za kurseve gde želite brze inline povratne informacije i duže
hijerarhijske razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na Stranici" title="Komentari na Stranici" />
</div>

### SSO koji jednostavno funkcioniše

Dodatak podržava tri SSO moda. **Sigurni SSO** je preporučena opcija. On potpisuje identitet korisnika na serveru sa 
HMAC-SHA256 koristeći vaš API Secret, tako da akreditivi nikada nisu izloženi klijentu. Sa sigurnim SSO-om, Moodle 
administratori su automatski sinhronizovani kao moderatori FastComments-a, što znači da vaši administratori sajta mogu moderirati
komentare bez dodatne konfiguracije. Avatari korisnika, imena i adrese e-pošte se svi sigurno prenose.

**Jednostavni SSO** prenosi korisničke podatke (ime, e-poštu, avatar) na klijentskoj strani bez potpisa. Brzo se postavlja
ali je manje siguran od HMAC pristupa. Na kraju, **Bez** onemogućava SSO potpuno, tako da korisnici komentarišu anonimno.

### Postavke obaveštenja korisnika

Studenti mogu upravljati svojim postavkama obaveštenja za FastComments direktno iz svog Moodle profila. U okviru
**FastComments** sekcije mogu uključiti ili isključiti obaveštenja o odgovorima (da dobiju e-poštu kada neko odgovori na njihov komentar)
i obaveštenja o pretplati (da dobiju e-poruke za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima
kontrolu nad tim koliko e-pošte primaju.

### Na kraju

Moodle dodatak je sada dostupan. Za kompletan vodič za postavljanje, pogledajte
[Moodle Integracioni Vodič](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakve povratne
informacije!

Pozdrav!

{{/isPost}}