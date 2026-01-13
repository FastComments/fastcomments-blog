---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Pričvršćivanje komentara sa FastComments[/postlink]

{{#unless isPost}}
Komentari na najvišem nivou sada mogu biti pričvršćeni u nitima komentara!
{{/unless}}

{{#isPost}}

#### Uvod

Komentari se sada mogu "pričvrstiti" na vrh niti komentara, bez obzira na redosled sortiranja.

To se može uraditi u meniju sa tri tačke u gornjem desnom uglu komentara, ako ste prijavljeni kao administrator ili moderator.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Pričvršćen komentar" title="Pričvršćen komentar" />
</div>

Novi komentari će se pojaviti ispod pričvršćenih komentara.

Nema ograničenja u broju pričvršćenih komentara u niti komentara.

#### Glasovi i starost komentara

Bez obzira na broj glasova ili starost drugih komentara, pričvršćeni komentari uvek se prikazuju na vrhu.

#### Ko može pričvrstiti i od pričvrstiti komentare

Administratori i moderatori su jedini korisnici koji mogu pričvrstiti i od pričvrstiti komentare.

#### Živopisno komentarisanje

Kada god se komentar pričvrsti ili od pričvrsti, ta ažuriranja se šalju svim gledaocima niti komentara.

Kada se stanje pričvršćenosti komentara promeni, komentar se odmah premesti za osobu koja pričvršćuje komentar i za sve koji
gledaju nit komentara. Ako korisnik izgubi vezu, a zatim se komentar pričvrsti, komentar će biti pričvršćen i pomeren
za tog korisnika po ponovnom povezivanju.

#### Performanse

Redosled sortiranja niti komentara se prethodno izračunava pri svakoj promeni. To znači da dodatno sortiranje koje je potrebno da
se komentari pričvrste na vrh neće uticati na vreme učitavanja stranice.

#### Na zaključku

Nadamo se da ste ovaj vodič pronašli korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kojim pitanjima.

Pozdrav!

{{/isPost}}

---