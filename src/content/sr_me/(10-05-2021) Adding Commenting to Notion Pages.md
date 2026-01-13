---
[category:Integracije]
[category:Tutorijali]
###### [postdate]
# [postlink]Dodavanje komentara na Notion stranice[/postlink]

{{#unless isPost}}
Želite da dodate komentare na vaše Notion stranice? Mi imamo rešenje za vas.
{{/unless}}

{{#isPost}}

## Šta je novo

FastComments je sada provajder embed.ly, i kao takav pruža API-je i usluge koje omogućavaju da se niti komentara
uključe u aplikacije koje podržavaju [oEmbed](https://oembed.com).

To znači da možete lako dodati komentare uživo na sajt napravljen sa Notion, Google Sites ili Nimbus Note.

## Kako to koristiti - Brza prezentacija

Kada se prijavite na svoj nalog, jednostavno posetite [fastcomments.com/create](https://fastcomments.com/create) da kreirate link za razgovor koji se zatim
može dodati na vašu Notion stranicu, ili bilo koju aplikaciju koja se integriše sa embed.ly.

Možete probati sami koristeći svoj demo embed link, [fastcomments.com/c/demo](https://fastcomments.com/c/demo):

<video src="images/fastcomments-notion.mp4" controls alt="FastComments i Notion prezentacija" title="FastComments i Notion prezentacija"></video>

Zatim, ugrađeni komentar widget može biti prilagođen baš kao i bilo koja druga instanca FastComments.

Na primer, kao što je prikazano u gornjem videu, možemo prilagoditi komentar widget tako da korisnik mora uneti samo svoje ime, a ne i svoj email, da bi komentarisao ili glasao.

## Ažuriranje 2023 - Podrška za Super.so

Sada možete dodati komentare na Super.so sajtove, koji su izgrađeni na osnovu Notion dokumenata, koristeći FastComments! [Dokumentaciju možete pronaći ovde.](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites je takođe podržan, a protok je sličan.

1. [Kreirajte razgovor za ugradnju.](https://fastcomments.com/create)
2. Kada uređujete svoj Google Site, idite na `Umetni` -> `Ugradi`. Izaberite `Po URL-u`.
3. Nalepite URL sa koraka 1.
4. Pritisnite `Umetni`. Završen!

#### Dodavanje embed linka

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="Kako dodati FastComments na Google Site" alt="Kako dodati FastComments na Google Site" />
</div>

#### Komentarisanje dodato na vaš Google Site!

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="Završeno!" alt="Završeno!" />
</div>

## Nimbus Note

Nimbus Note je takođe podržan, a protok je sličan.

1. [Kreirajte razgovor za ugradnju.](https://fastcomments.com/create)
2. Kada uređujete svoju belešku, dodajte embed blok.
3. Koristite URL sa koraka 1 kao URL za ugradnju.
4. Pritisnite `Umetni`. Završen!

### Ko to dobija

Svi trenutni i novi FastComments korisnici, na svim nivoima, sada imaju pristup oEmbed podršci.

### Ugradnja postojećeg razgovora

Da biste ugradili postojeći razgovor, jednostavno unesite vrednost <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a> koji je prosleđen komentar widgetu
u stranicu Kreiraj razgovor kao ime razgovora.

### Na kraju

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju pronaći brzu i jednostavnu za korišćenje.

Živeli!

{{/isPost}}

---