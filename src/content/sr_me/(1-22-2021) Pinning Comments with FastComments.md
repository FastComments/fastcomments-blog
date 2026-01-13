---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Prikovanje komentara uz FastComments[/postlink]

{{#unless isPost}}
Komentari na najvišem nivou sada mogu biti prikovani u nitima komentara!
{{/unless}}

{{#isPost}}

#### Uvod

Komentari se sada mogu "prikovati" na vrh niti komentara, bez obzira na redosled sortiranja.

To se može uraditi pod menijem sa tri tačke u gornjem desnom uglu komentara, ako ste prijavljeni kao administrator ili moderator.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Prikovan komentar" title="Prikovan komentar" />
</div>

Novi komentari će se pojaviti ispod prikovanih komentara.

Nema ograničenja u broju prikovanih komentara u niti komentara.

#### Glasovi i starost komentara

Bez obzira na broj glasova ili starost drugih komentara, prikovani komentari se uvek prikazuju na vrhu.

#### Ko može prikovati i otkvačiti komentare

Administratori i moderatori su jedini korisnici koji mogu prikovati i otkvačiti komentare.

#### Uživanje u komentarisanju uživo

Kad god se komentar prikove ili otkvači, ta ažuriranja se šalju svim gledaocima niti komentara.

Kada se promeni stanje prikovanosti komentara, komentar se odmah pomera za osobu koja prikovava komentar i za svakoga
ko gleda nit komentara. Ako se korisnik isključi, a zatim se komentar prikove, komentar će biti prikovan i pomeren
za tog korisnika pri ponovnom povezivanju.

#### Performanse

Redosled sortiranja niti komentara se unapred izračunava pri svakoj promeni. Ovo znači da dodatno sortiranje potrebno za
prikovanje komentara na vrh neće uticati na vreme učitavanja stranice.

#### U zaključku

Nadamo se da ste ovaj vodič našli korisnim i lakim za čitanje. Slobodno komentarišite ispod sa svim pitanjima.

Živeli!

{{/isPost}}