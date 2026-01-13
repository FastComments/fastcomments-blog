---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Prikovanje komentara sa FastComments[/postlink]

{{#unless isPost}}
Korisnici sada mogu prikovati komentare na vrh razgovora!
{{/unless}}

{{#isPost}}

#### Uvod

Komentari se sada mogu "prikovati" na vrh razgovora, bez obzira na redosled sortiranja.

To se može učiniti putem menija sa tri tačke u gornjem desnom kutu komentara, ako ste prijavljeni kao administrator ili moderator.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Prikovan komentar" title="Prikovan komentar" />
</div>

Novi komentari će se pojaviti ispod prikovanih komentara.

Nema ograničenja u broju prikovanih komentara u jednom razgovoru.

#### Glasovi i starost komentara

Bez obzira na broj glasova ili starost drugih komentara, prikovani komentari uvek će se prikazivati na vrhu.

#### Ko može prikovati i odprikovati komentare

Administratori i moderatori su jedini korisnici koji mogu prikovati i odprikovati komentare.

#### Uživanje u komentarisaniu

Kad god se komentar prikove ili odprikove, ta izmena se šalje svim gledaocima razgovora.

Kada se stanje prikovanja komentara promeni, komentar se odmah pomera za osobu koja ga prikovava i za sve koji gledaju razgovor. Ako se korisnik isključi, nakon čega se komentar prikove, komentar će biti prikovan i pomeren za tog korisnika nakon ponovnog povezivanja.

#### Performanse

Redosled sortiranja razgovora se prethodno izračunava pri svakoj izmeni. To znači da dodatno sortiranje potrebno za prikovanje komentara na vrh neće uticati na vreme učitavanja stranice.

#### Na kraju

Nadamo se da ste pronašli ovaj vodič korisnim i lako čitljivim. Slobodno komentarišite ispod sa bilo kojim pitanjima.

Pozdrav!

{{/isPost}}

---