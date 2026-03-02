---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sada ima posvećen Moodle dodatak sa SSO, thread-ovanim komentarima i zajedničkim čavom za vaše kurseve.
{{/unless}}

{{#isPost}}

### Šta je novo

Uzbuđeni smo da objavimo zvanični FastComments dodatak za Moodle. Ako ste koristili Moodle i želeli da dodate uživo,
thread-ovano komentarisanje ili zajednički chat za vaše kurseve, ovaj dodatak to olakšava. Zamenjuje stari ručni PHP pristup
pravim Moodle dodatkom koji se instala za nekoliko minuta i integriše sa vašim postojećim Moodle korisničkim računima. Dodatak
radi sa Moodle 4.1 i novijim verzijama, a izvor je dostupan na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako početi

Da biste instalirali, preuzmite ZIP iz [GitHub repozitorijuma](https://github.com/FastComments/fastcomments-moodle) i 
izvucite ga u `<moodle-root>/local/fastcomments`. Zatim se prijavite kao administrator sajta i posetite **Administracija sajta > Obaveštenja**.
Moodle će prepoznati novi dodatak i automatski pokrenuti instalaciju.

Kada je instaliran, idite na **Administracija sajta > Dodatci > Lokalni dodaci > FastComments** da biste ga konfigurisali. 
Biće vam potrebni vaši **Tenant ID** (koji se nalazi na vašem FastComments kontrolnom panelu) i vaš **API Secret** 
ako želite da koristite Sigurno SSO, što preporučujemo.

Napomena: manualno preuzimanje sa GitHub-a je privremeno dok čekamo da dodatak bude odobren u Moodle plugin direktorijumu. 
Kada bude odobren, moći ćete da ga instalirate direktno iz Moodle-ovog instalera dodataka.

### Stilovi komentarisanja

Dodatak podržava tri stila komentarisanja, tako da možete izabrati šta najbolje odgovara vašim studentima i strukturi kursa.

**Komentari** režim postavlja puni komentar widget ispod sadržaja stranice. Studenti dobijaju thread-ovane odgovore, @pominjanja,
podizanje i spuštanje glasova, bogati uređivač teksta i zvono za obaveštenja za pretplatu na nove komentare na stranici.

<div class="text-center">
    <div class="sm">Komentari na stranici kursa</div>
    <img src="images/moodle-course-comments.png" alt="Komentari kursa" title="Komentari kursa" />
</div>

**Collab Chat** režim dodaje traku na vrhu stranice koja poziva korisnike da izaberu tekst i započnu diskusiju. Istaknuti
tekst je vezan za sadržaj, tako da razgovor ostaje povezan sa onim o čemu se raspravlja. Takođe pokazuje online korisnike i
broj aktivnih diskusija. Ovaj režim ne prikazuje widget na dnu.

<div class="text-center">
    <div class="sm">Zajednički chat vezan za izabrani tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Komentari** vam daje oboje u isto vreme. Studenti mogu istaknuti tekst za inline diskusije i takođe
koristiti puni komentar widget ispod sadržaja. Ovo je odlično za kurseve gde želite brze inline povratne informacije i
duže thread-ovane razgovore.

<div class="text-center">
    <div class="sm">Oba stila komentarisanja aktivna na stranici</div>
    <img src="images/moodle-page-comments.png" alt="Komentari na stranici" title="Komentari na stranici" />
</div>

### SSO koji jednostavno funkcioniše

Dodatak podržava tri SSO režima. **Sigurno SSO** je preporučena opcija. Potpisuje identitet korisnika na serverskoj strani
upotrebom HMAC-SHA256 sa vašim API Secret, tako da akreditivi nikada nisu izloženi na klijentu. Sa Sigurnim SSO, Moodle administratori 
su automatski sinhronizovani kao FastComments moderatori, što znači da vaši administratori sajta mogu moderirati komentare bez 
dodatnog podešavanja. Avatari korisnika, imena i email adrese se svi bezbedno prenose.

**Jednostavno SSO** prenosi korisničke podatke (ime, email, avatar) sa klijentske strane bez potpisa. Brzo je za podešavanje, ali manje bezbedno
od HMAC pristupa. Na kraju, **Nema** potpuno onemogućava SSO, tako da korisnici komentarišu anonimno.

### Preferencije obaveštenja korisnika

Studeni mogu upravljati svojim postavkama obaveštenja FastComments direktno sa svog Moodle profila. U okviru sekcije 
**FastComments** mogu da uključe ili isključe obaveštenja o odgovorima (primanje email-a kada neko odgovori na njihov komentar) 
i obaveštenja o pretplatama (primanje email-a za teme na koje su se pretplatili). Ovo sve drži na jednom mestu i daje studentima 
kontrolu nad tim koliko email-ova primaju.

### Na kraju

Moodle dodatak je sada dostupan. Za potpuni vodič za podešavanje, pogledajte 
[Moodle Integracioni Vodič](https://docs.fastcomments.com/guide-installation-moodle.html), a izvorni kod je na 
[GitHub](https://github.com/FastComments/fastcomments-moodle). Javite nam u komentarima ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---