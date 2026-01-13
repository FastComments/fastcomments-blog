---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Prikvakanje komentara sa FastComments[/postlink]

{{#unless isPost}}
Komentari na najvišem nivou sada mogu da se prikvače u nitima komentara!
{{/unless}}

{{#isPost}}

#### Uvod

Komentari sada mogu biti "prikvačeni" na vrh niti komentara, bez obzira na redosled sortiranja.

To se može uraditi putem menija sa tri tačke u gornjem desnom uglu komentara, ako ste prijavljeni kao administrator ili moderator.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Prikvačen komentar" title="Prikvačen komentar" />
</div>

Novi komentari će se pojaviti ispod prikvačenih komentara.

Nema ograničenja u broju prikvačenih komentara u niti komentara.

#### Glasovi i starost komentara

Bez obzira na broj glasova ili starost drugih komentara, prikvačeni komentari se uvek prikazuju na vrhu.

#### Ko može prikvačiti i odprikvačiti komentare

Administratori i moderatori su jedini korisnici koji mogu da prikvače i odprikvače komentare.

#### Uživanje u komentarima uživo

Kad god se komentar prikvači ili odprikvači, ta promena se šalje svim gledaocima niti komentara.

Kada se stanje prikvačenja komentara promeni, komentar se odmah pomera za osobu koja ga prikvačuje i za sve
koji gledaju nit komentara. Ako se korisnik odspoji, a zatim se komentar prikvači, komentar će biti prikvačen i pomeren
za tog korisnika nakon ponovnog povezivanja.

#### Performanse

Redosled sortiranja niti komentara se prethodno izračunava pri svakoj promeni. To znači da dodatno sortiranje potrebno za
prikvačivanje komentara na vrh neće uticati na vreme učitavanja stranice.

#### Na kraju

Nadamo se da ste pronašli ovaj vodič korisnim i lakim za čitanje. Slobodno ostavite komentar ispod sa bilo kojim pitanjima.

Živeli!

{{/isPost}}

---