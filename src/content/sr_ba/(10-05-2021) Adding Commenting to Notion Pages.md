---
[category:Integrations]
[category:Tutorials]
###### [postdate]
# [postlink]Dodavanje komentara na Notion stranice[/postlink]

{{#unless isPost}}
Želite dodati komentare na vaše Notion stranice? Mi imamo rešenje.
{{/unless}}

{{#isPost}}

## Šta je novo

FastComments je sada embed.ly provajder, i kao takav pruža API-je i usluge koje omogućavaju ugradnju komentatorskih niti
u aplikacije koje podržavaju [oEmbed](https://oembed.com).

To znači da sada možete jednostavno dodati komentarisanje uživo na sajt izgrađen sa Notion, Google Sites, ili Nimbus Note.

## Kako to koristiti - Brza Demo

Kada se prijavite na svoj tenant, jednostavno posetite [fastcomments.com/create](https://fastcomments.com/create) da kreirate link za razgovor koji zatim
može biti dodat na vašu Notion stranicu, ili bilo koju aplikaciju koja integrira sa embed.ly.

Možete to iskušati koristeći svoj demo embed link, [fastcomments.com/c/demo](https://fastcomments.com/c/demo):

<video src="images/fastcomments-notion.mp4" controls alt="Brza demonstracija FastComments i Notion" title="Brza demonstracija FastComments i Notion"></video>

Ugradni komentar widget može biti prilagođen kao bilo koja druga instanca FastComments.

Na primer, kao što je prikazano u gorenavedenom videu, možemo prilagoditi komentar widget tako da korisnik mora uneti samo svoje ime, a ne i svoju email adresu, da bi komentarisao ili glasao.

## Ažuriranje 2023 - Podrška za Super.so

Sada možete dodati komentare na Super.so sajtove, koji su izgrađeni na Notion dokumentima, koristeći FastComments! [Dokumentaciju možete pronaći ovde.](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites je takođe podržan, i tok je sličan.

1. [Kreirajte razgovor za ugradnju.](https://fastcomments.com/create)
2. Kada uređujete svoj Google Site, idite na `Umetni` -> `Ugradi`. Izaberite `Po URL-u`.
3. Nalepite URL iz Koraka 1.
4. Kliknite `Umetni`. Gotovo!

#### Dodavanje Embed Linka

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="Kako dodati FastComments na Google Site" alt="Kako dodati FastComments na Google Site" />
</div>

#### Komentarisanje dodato na vaš Google Site!

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="Gotovo!" alt="Gotovo!" />
</div>

## Nimbus Note

Nimbus Note je takođe podržan, i tok je sličan.

1. [Kreirajte razgovor za ugradnju.](https://fastcomments.com/create)
2. Kada uređujete svoju belešku, dodajte embed blok.
3. Koristite URL iz Koraka 1 kao URL za ugradnju.
4. Kliknite `Umetni`. Gotovo!

### Ko dobija

Svi trenutni i novi FastComments korisnici, na svim nivoima, sada imaju pristup oEmbed podršci.

### Ugradnja postojećeg razgovora

Da biste ugradili postojeći razgovor, jednostavno unesite vrednost <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a> prosleđenu komentatorskom widgetu
u stranicu Kreirajte razgovor kao naziv razgovora.

### Na kraju

Kao i ostatak FastComments, nadamo se da ćete ovu funkciju smatrati brzom i lakom za korišćenje.

Živeli!

{{/isPost}}

---